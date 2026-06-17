#!/usr/bin/env python3
"""
render-template-reference.py — Stage 10.4a design-fidelity reference renderer.

Headless-builds `templates/{niche-slug}/` with this client's composed
`src/config/brand-dna.js` + `public/` assets applied, in an isolated temp
copy (the canonical per-niche template is never mutated), then screenshots
the built site at desktop (1440x900) and mobile (375x812) viewports, full
page, via Playwright.

This is the visual "contract" Stage 10.4a diffs the per-client build
against: same source tree, same brand-dna, so any divergence in the
rendered output reflects a Stage 10.1-10.3 client-side regression rather
than a template-vs-client content difference.

Usage:
    python3 tools/render-template-reference.py --client "Client Name"
    python3 tools/render-template-reference.py --client "Client Name" --niche personal-injury-lawyers

Reads:
    templates/{niche-slug}/                                  (source tree)
    clients/[Client]/[Client] Website/src/config/brand-dna.js
    clients/[Client]/[Client] Website/public/                (overlay assets)
    ../stack-state.json                                      (niche, if --niche omitted)

Writes:
    clients/[Client]/[Client] Website/qa-screenshots/reference-desktop.png
    clients/[Client]/[Client] Website/qa-screenshots/reference-mobile.png

Exit codes:
    0  success, both PNGs written
    1  template build failed (prebuild validator or vite build)
    2  prerequisite missing (template dir, client brand-dna.js, etc.)
"""

from __future__ import annotations

import argparse
import json
import shutil
import socket
import subprocess
import sys
import tempfile
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = REPO_ROOT / "templates"
STACK_STATE_PATH = REPO_ROOT.parent / "stack-state.json"

DESKTOP_VIEWPORT = {"width": 1440, "height": 900}
MOBILE_VIEWPORT = {"width": 375, "height": 812}

IGNORE_DIRS = {"node_modules", "dist", ".git", "niche-playbook", "qa-screenshots", ".vite"}


def resolve_niche(cli_niche: str | None) -> str:
    if cli_niche:
        return cli_niche
    if STACK_STATE_PATH.exists():
        state = json.loads(STACK_STATE_PATH.read_text())
        n = state.get("niche")
        if isinstance(n, str) and n.strip():
            return n.strip()
    sys.exit("ERROR: no --niche given and no niche set in stack-state.json")


def find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def run(cmd: list[str], cwd: Path, **kwargs) -> subprocess.CompletedProcess:
    print(f"$ {' '.join(cmd)} (cwd={cwd})", file=sys.stderr)
    resolved = shutil.which(cmd[0])
    if resolved:
        cmd = [resolved] + cmd[1:]
    return subprocess.run(cmd, cwd=cwd, text=True, **kwargs)


def copy_tree_overlay(src: Path, dst: Path) -> None:
    """Recursively copy every file in src into dst, overwriting existing files."""
    for item in src.rglob("*"):
        rel = item.relative_to(src)
        target = dst / rel
        if item.is_dir():
            target.mkdir(parents=True, exist_ok=True)
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(item, target)


def main() -> int:
    parser = argparse.ArgumentParser(description="Render the per-niche template + this client's brand-dna as the Stage 10.4a visual reference")
    parser.add_argument("--client", required=True)
    parser.add_argument("--niche", default=None)
    args = parser.parse_args()

    niche = resolve_niche(args.niche)
    template_dir = TEMPLATES_DIR / niche
    if not (template_dir / "package.json").exists():
        print(f"ERROR: no template at {template_dir}", file=sys.stderr)
        return 2

    client_site = REPO_ROOT / "clients" / args.client / f"{args.client} Website"
    client_brand_dna = client_site / "src" / "config" / "brand-dna.js"
    if not client_brand_dna.exists():
        print(f"ERROR: missing {client_brand_dna} (run Stage 10.1 first)", file=sys.stderr)
        return 2

    qa_dir = client_site / "qa-screenshots"
    qa_dir.mkdir(parents=True, exist_ok=True)

    tmp_root = Path(tempfile.mkdtemp(prefix="render-ref-"))
    tmp_site = tmp_root / "site"
    try:
        print(f"[1/5] copying template {template_dir.relative_to(REPO_ROOT)} -> {tmp_site}", file=sys.stderr)
        shutil.copytree(
            template_dir,
            tmp_site,
            ignore=lambda _d, names: [n for n in names if n in IGNORE_DIRS],
        )

        print("[2/5] linking node_modules from template (no reinstall)", file=sys.stderr)
        template_node_modules = template_dir / "node_modules"
        if template_node_modules.exists():
            if sys.platform == "win32":
                r = subprocess.run(
                    ["cmd", "/c", "mklink", "/J", str(tmp_site / "node_modules"), str(template_node_modules)],
                    capture_output=True, text=True,
                )
                if r.returncode != 0:
                    print(f"  WARN: junction failed ({r.stderr.strip()}), copying instead", file=sys.stderr)
                    shutil.copytree(template_node_modules, tmp_site / "node_modules")
            else:
                (tmp_site / "node_modules").symlink_to(template_node_modules, target_is_directory=True)
        else:
            print("  WARN: template has no node_modules, running npm install", file=sys.stderr)
            r = run(["npm", "install"], cwd=tmp_site)
            if r.returncode != 0:
                return 1

        print("[3/5] overlaying client brand-dna.js + public assets", file=sys.stderr)
        shutil.copyfile(client_brand_dna, tmp_site / "src" / "config" / "brand-dna.js")
        client_public = client_site / "public"
        if client_public.exists():
            copy_tree_overlay(client_public, tmp_site / "public")

        print("[4/5] building (npm run build)", file=sys.stderr)
        env_overrides = {"PUPPETEER_SKIP_DOWNLOAD": "true"}
        import os
        env = {**os.environ, **env_overrides}
        r = run(["npm", "run", "build"], cwd=tmp_site, env=env, capture_output=True)
        if r.returncode != 0:
            print(r.stdout, file=sys.stderr)
            print(r.stderr, file=sys.stderr)
            print("ERROR: template reference build failed (HARD halt per design-fidelity-qa-agent Step 3)", file=sys.stderr)
            return 1
        if not (tmp_site / "dist" / "index.html").exists():
            print("ERROR: build succeeded but dist/index.html missing", file=sys.stderr)
            return 1

        print("[5/5] screenshotting reference build", file=sys.stderr)
        port = find_free_port()
        preview = subprocess.Popen(
            ["npm" if sys.platform != "win32" else shutil.which("npm"), "run", "preview", "--", "--port", str(port), "--strictPort"],
            cwd=tmp_site, env=env,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True,
        )
        try:
            url = f"http://localhost:{port}/"
            _wait_for_server(url, preview)
            _screenshot(url, qa_dir / "reference-desktop.png", DESKTOP_VIEWPORT)
            _screenshot(url, qa_dir / "reference-mobile.png", MOBILE_VIEWPORT)
        finally:
            preview.terminate()
            try:
                preview.wait(timeout=10)
            except subprocess.TimeoutExpired:
                preview.kill()

        print(f"OK: wrote {qa_dir / 'reference-desktop.png'} and reference-mobile.png", file=sys.stderr)
        return 0
    finally:
        shutil.rmtree(tmp_root, ignore_errors=True)


def _wait_for_server(url: str, proc: subprocess.Popen, timeout: float = 30.0) -> None:
    import urllib.request
    import urllib.error

    deadline = time.time() + timeout
    while time.time() < deadline:
        if proc.poll() is not None:
            out = proc.stdout.read() if proc.stdout else ""
            raise RuntimeError(f"preview server exited early:\n{out}")
        try:
            urllib.request.urlopen(url, timeout=1)
            return
        except (urllib.error.URLError, ConnectionError):
            time.sleep(0.5)
    raise RuntimeError(f"preview server did not respond at {url} within {timeout}s")


def _screenshot(url: str, out_path: Path, viewport: dict) -> None:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport=viewport)
        page.goto(url, wait_until="networkidle")
        page.screenshot(path=str(out_path), full_page=True)
        browser.close()
    print(f"  wrote {out_path}", file=sys.stderr)


if __name__ == "__main__":
    sys.exit(main())
