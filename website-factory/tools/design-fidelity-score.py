#!/usr/bin/env python3
"""
design-fidelity-score.py — Stage 10.4a per-region SSIM scoring.

Serves the per-client `dist/` and the per-niche template reference `dist/`
(built by build-fidelity-diff.py --build-reference, with this client's
brand-dna overlaid) as static SPAs, screenshots each top-level region of the
home page (Header, the 10 <main> sections, Footer) at desktop (1440x900) and
mobile (375x812) viewports, and scores each region via SSIM against the
matching region of the reference.

Region list + weights + thresholds come from the per-niche checklist
(templates/{niche-slug}/.claude/checklists/design-fidelity.md, "PAGE: Home"
+ "GLOBAL REGIONS" tables), hardcoded below since the checklist is prose/
markdown, not machine-readable.

Usage:
    python3 tools/design-fidelity-score.py --client "Client Name" --loop 0

Writes:
    clients/[Client]/Pipeline Data/logs/design-fidelity-scores.json
    clients/[Client]/[Client] Website/qa-screenshots/loop-N-*.png
"""

from __future__ import annotations

import argparse
import json
import shutil
import socket
import subprocess
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity as ssim

REPO_ROOT = Path(__file__).resolve().parent.parent
STACK_STATE_PATH = REPO_ROOT.parent / "stack-state.json"

DESKTOP_VIEWPORT = {"width": 1440, "height": 900}
MOBILE_VIEWPORT = {"width": 375, "height": 812}

# Home page region list: (label, locator, threshold, weight)
# Locators are CSS paths relative to #root, document order.
HOME_REGIONS = [
    ("Header", "#root > header", 0.92, 0.10),
    ("Hero", "#root > main > section:nth-of-type(1)", 0.95, 0.20),
    ("ProcessSteps", "#root > main > section:nth-of-type(2)", 0.88, 0.08),
    ("StatsBar", "#root > main > section:nth-of-type(3)", 0.92, 0.12),
    ("PressBand", "#root > main > section:nth-of-type(4)", 0.85, 0.06),
    ("WhyChooseUs", "#root > main > section:nth-of-type(5)", 0.85, 0.08),
    ("PracticeAreasGrid", "#root > main > section:nth-of-type(6)", 0.90, 0.12),
    ("FounderStory", "#root > main > section:nth-of-type(7)", 0.85, 0.07),
    ("Testimonials", "#root > main > section:nth-of-type(8)", 0.85, 0.07),
    ("FAQSection", "#root > main > section:nth-of-type(9)", 0.85, 0.05),
    ("CTABand", "#root > main > section:nth-of-type(10)", 0.88, 0.03),
    ("Footer", "#root > footer", 0.88, 0.02),
]


def resolve_niche(cli_niche: str | None) -> str:
    if cli_niche:
        return cli_niche
    if STACK_STATE_PATH.exists():
        state = json.loads(STACK_STATE_PATH.read_text())
        n = state.get("niche")
        if isinstance(n, str) and n.strip():
            return n.strip()
    sys.exit("ERROR: no --niche given and no niche set in stack-state.json")


class SPAHandler(SimpleHTTPRequestHandler):
    """Static file server with SPA fallback: any path with no file extension
    that doesn't exist on disk serves index.html (React Router client routes)."""

    def translate_path(self, path):
        result = super().translate_path(path)
        p = Path(result)
        if not p.exists() and "." not in p.name:
            return str(Path(self.directory) / "index.html")
        return result

    def log_message(self, fmt, *args):
        pass


def serve_dist(dist_dir: Path) -> tuple[ThreadingHTTPServer, int]:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]

    handler = lambda *a, **kw: SPAHandler(*a, directory=str(dist_dir), **kw)
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, port


def screenshot_regions(page, base_url: str, regions: list, out_dir: Path, prefix: str) -> dict[str, Path]:
    page.goto(base_url, wait_until="networkidle")
    out: dict[str, Path] = {}
    for label, selector, _t, _w in regions:
        locator = page.locator(selector).first
        if locator.count() == 0:
            print(f"  WARN: {prefix} missing region {label} ({selector})", file=sys.stderr)
            continue
        out_path = out_dir / f"{prefix}-{label}.png"
        try:
            locator.scroll_into_view_if_needed()
            locator.screenshot(path=str(out_path))
            out[label] = out_path
        except Exception as e:
            print(f"  WARN: {prefix} screenshot failed for {label}: {e}", file=sys.stderr)
    return out


def score_region(client_path: Path, reference_path: Path) -> float:
    a = np.array(Image.open(client_path).convert("L"))
    b = np.array(Image.open(reference_path).convert("L"))
    h = min(a.shape[0], b.shape[0])
    w = min(a.shape[1], b.shape[1])
    if h < 7 or w < 7:
        return 1.0 if a.shape == b.shape else 0.0
    a = a[:h, :w]
    b = b[:h, :w]
    return float(ssim(a, b, data_range=255))


def main() -> int:
    parser = argparse.ArgumentParser(description="Stage 10.4a per-region SSIM scoring")
    parser.add_argument("--client", required=True)
    parser.add_argument("--niche", default=None)
    parser.add_argument("--loop", type=int, default=0)
    args = parser.parse_args()

    niche = resolve_niche(args.niche)
    client_dist = REPO_ROOT / "clients" / args.client / f"{args.client} Website" / "dist"
    reference_dist = REPO_ROOT / "templates" / niche / "dist"
    if not (client_dist / "index.html").exists():
        sys.exit(f"ERROR: client dist missing at {client_dist}")
    if not (reference_dist / "index.html").exists():
        sys.exit(f"ERROR: reference dist missing at {reference_dist} (run build-fidelity-diff.py --build-reference first)")

    qa_dir = client_dist.parent / "qa-screenshots"
    qa_dir.mkdir(parents=True, exist_ok=True)

    client_server, client_port = serve_dist(client_dist)
    ref_server, ref_port = serve_dist(reference_dist)

    try:
        from playwright.sync_api import sync_playwright

        regions_report: dict[str, dict] = {}
        with sync_playwright() as p:
            browser = p.chromium.launch()
            for viewport_name, viewport in (("desktop", DESKTOP_VIEWPORT), ("mobile", MOBILE_VIEWPORT)):
                client_page = browser.new_page(viewport=viewport)
                ref_page = browser.new_page(viewport=viewport)

                client_shots = screenshot_regions(
                    client_page, f"http://127.0.0.1:{client_port}/", HOME_REGIONS, qa_dir,
                    f"loop-{args.loop}-{viewport_name}-client",
                )
                ref_shots = screenshot_regions(
                    ref_page, f"http://127.0.0.1:{ref_port}/", HOME_REGIONS, qa_dir,
                    f"loop-{args.loop}-{viewport_name}-reference",
                )

                for label, _selector, threshold, weight in HOME_REGIONS:
                    key = f"{label}_{viewport_name}"
                    if label not in client_shots or label not in ref_shots:
                        regions_report[key] = {
                            "score": 0.0, "weight": weight, "threshold": threshold,
                            "passed": False, "note": "screenshot missing",
                        }
                        continue
                    score = score_region(client_shots[label], ref_shots[label])
                    regions_report[key] = {
                        "score": round(score, 4),
                        "weight": weight,
                        "threshold": threshold,
                        "passed": score >= threshold,
                    }

                client_page.close()
                ref_page.close()
            browser.close()
    finally:
        client_server.shutdown()
        ref_server.shutdown()

    total_w = sum(r["weight"] for r in regions_report.values())
    aggregate = sum(r["score"] * r["weight"] for r in regions_report.values()) / total_w if total_w else 0.0
    failures = [k for k, r in regions_report.items() if not r["passed"]]
    passed = aggregate >= 0.90 and not failures

    report = {
        "loop": args.loop,
        "aggregate": round(aggregate, 4),
        "regions": regions_report,
        "universal_hard_halts": [],
        "passed": passed,
        "failures": failures,
    }

    log_dir = REPO_ROOT / "clients" / args.client / "Pipeline Data" / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    out_path = log_dir / "design-fidelity-scores.json"
    out_path.write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
