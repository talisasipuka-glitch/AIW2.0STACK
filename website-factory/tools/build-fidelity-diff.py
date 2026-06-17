#!/usr/bin/env python3
"""
build-fidelity-diff.py — Stage 10.4c build fidelity DOM diff.

Compares the per-client build (`clients/[Client]/[Client] Website/dist/`)
against the canonical per-niche template build
(`templates/{niche-slug}/dist/`) and confirms structural fidelity: same DOM
tree shape, same component class taxonomy, same section order.

Per-client deltas allowed (NOT compared): text content, image `src` (only
`has_alt` is checked), exact href URL (only the link kind: tel / mailto /
internal / external), inline style values, color hex codes.

What IS compared: HTML tag name, `class` set (sorted, dedup), `id`
attribute, `data-*` attribute names, DOM tree depth + ordering.

Usage:
    python3 tools/build-fidelity-diff.py --client "Client Name" --build-reference
    python3 tools/build-fidelity-diff.py --client "Client Name"

The reference build is produced the same way as Stage 10.4a's
render-template-reference.py: the per-niche template's source tree, with
this client's `src/config/brand-dna.js` + `public/` overlaid, built in an
isolated temp copy. The resulting `dist/` is copied to
`templates/{niche-slug}/dist/` so subsequent runs (`--build-reference`
omitted) can reuse it without rebuilding, and so it matches what
10-4c-build-fidelity.md documents as the reference location.

Writes:
    clients/[Client]/Pipeline Data/qa/build-fidelity.json

Exit codes:
    0  diff ran (see "passed" field in the JSON for the gate result)
    1  client dist/ missing
    2  reference build failed
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup, Tag

REPO_ROOT = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = REPO_ROOT / "templates"
STACK_STATE_PATH = REPO_ROOT.parent / "stack-state.json"

IGNORE_DIRS = {"node_modules", "dist", ".git", "niche-playbook", "qa-screenshots", ".vite"}
MAX_MISMATCHES = 50


def resolve_niche(cli_niche: str | None) -> str:
    if cli_niche:
        return cli_niche
    if STACK_STATE_PATH.exists():
        state = json.loads(STACK_STATE_PATH.read_text())
        n = state.get("niche")
        if isinstance(n, str) and n.strip():
            return n.strip()
    sys.exit("ERROR: no --niche given and no niche set in stack-state.json")


def run(cmd: list[str], cwd: Path, **kwargs) -> subprocess.CompletedProcess:
    print(f"$ {' '.join(cmd)} (cwd={cwd})", file=sys.stderr)
    resolved = shutil.which(cmd[0])
    if resolved:
        cmd = [resolved] + cmd[1:]
    return subprocess.run(cmd, cwd=cwd, text=True, **kwargs)


def copy_tree_overlay(src: Path, dst: Path) -> None:
    for item in src.rglob("*"):
        rel = item.relative_to(src)
        target = dst / rel
        if item.is_dir():
            target.mkdir(parents=True, exist_ok=True)
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(item, target)


def build_reference(client: str, niche: str) -> Path:
    """Build templates/{niche}/ with this client's brand-dna in a temp copy,
    copy the resulting dist/ to templates/{niche}/dist/, and return its path."""
    import os

    template_dir = TEMPLATES_DIR / niche
    client_site = REPO_ROOT / "clients" / client / f"{client} Website"
    client_brand_dna = client_site / "src" / "config" / "brand-dna.js"
    if not client_brand_dna.exists():
        sys.exit(f"ERROR: missing {client_brand_dna} (run Stage 10.1 first)")

    tmp_root = Path(tempfile.mkdtemp(prefix="build-fidelity-ref-"))
    tmp_site = tmp_root / "site"
    try:
        print(f"copying template {template_dir.relative_to(REPO_ROOT)} -> {tmp_site}", file=sys.stderr)
        shutil.copytree(
            template_dir,
            tmp_site,
            ignore=lambda _d, names: [n for n in names if n in IGNORE_DIRS],
        )

        template_node_modules = template_dir / "node_modules"
        if template_node_modules.exists():
            if sys.platform == "win32":
                r = subprocess.run(
                    ["cmd", "/c", "mklink", "/J", str(tmp_site / "node_modules"), str(template_node_modules)],
                    capture_output=True, text=True,
                )
                if r.returncode != 0:
                    shutil.copytree(template_node_modules, tmp_site / "node_modules")
            else:
                (tmp_site / "node_modules").symlink_to(template_node_modules, target_is_directory=True)
        else:
            r = run(["npm", "install"], cwd=tmp_site)
            if r.returncode != 0:
                sys.exit("ERROR: npm install failed for reference template")

        shutil.copyfile(client_brand_dna, tmp_site / "src" / "config" / "brand-dna.js")
        client_public = client_site / "public"
        if client_public.exists():
            copy_tree_overlay(client_public, tmp_site / "public")

        env = {**os.environ, "PUPPETEER_SKIP_DOWNLOAD": "true"}
        r = run(["npm", "run", "build"], cwd=tmp_site, env=env, capture_output=True)
        if r.returncode != 0:
            print(r.stdout, file=sys.stderr)
            print(r.stderr, file=sys.stderr)
            sys.exit("ERROR: reference build failed")

        ref_dist = template_dir / "dist"
        if ref_dist.exists():
            shutil.rmtree(ref_dist)
        shutil.copytree(tmp_site / "dist", ref_dist)
        print(f"OK: reference dist -> {ref_dist.relative_to(REPO_ROOT)}", file=sys.stderr)
        return ref_dist
    finally:
        shutil.rmtree(tmp_root, ignore_errors=True)


# ----- DOM signature extraction --------------------------------------------


def link_kind(href: str) -> str:
    if href.startswith("tel:"):
        return "tel"
    if href.startswith("mailto:"):
        return "mailto"
    if not href or href.startswith("#"):
        return "internal"
    parsed = urlparse(href)
    if not parsed.scheme and not parsed.netloc:
        return "internal"
    return "external"


def node_signature(tag: Tag) -> dict:
    sig: dict = {"tag": tag.name}

    classes = tag.get("class")
    if classes:
        sig["class"] = sorted(set(classes))

    if tag.get("id"):
        sig["id"] = tag["id"]

    data_attrs = sorted(a for a in tag.attrs if a.startswith("data-"))
    if data_attrs:
        sig["data_attrs"] = data_attrs

    if tag.name == "a":
        sig["link_kind"] = link_kind(tag.get("href", ""))

    if tag.name == "img":
        sig["has_alt"] = bool(tag.get("alt"))

    return sig


def walk(soup: BeautifulSoup) -> list[tuple[int, dict]]:
    """Return a flat list of (depth, signature) for every element in
    document order, depth-first, starting from <body>."""
    body = soup.find("body")
    root = body if body else soup
    out: list[tuple[int, dict]] = []

    def _recurse(node, depth: int) -> None:
        for child in node.children:
            if isinstance(child, Tag):
                if child.name == "script":
                    continue
                out.append((depth, node_signature(child)))
                _recurse(child, depth + 1)

    _recurse(root, 0)
    return out


def find_html_files(dist: Path) -> list[Path]:
    return sorted(dist.rglob("*.html"))


def diff_dist(client_dist: Path, reference_dist: Path) -> dict:
    client_files = {p.relative_to(client_dist).as_posix(): p for p in find_html_files(client_dist)}
    reference_files = {p.relative_to(reference_dist).as_posix(): p for p in find_html_files(reference_dist)}

    common = sorted(set(client_files) & set(reference_files))
    only_client = sorted(set(client_files) - set(reference_files))
    only_reference = sorted(set(reference_files) - set(client_files))

    mismatches: list[dict] = []
    total_client_nodes = 0
    total_reference_nodes = 0

    for rel in common:
        client_nodes = walk(BeautifulSoup(client_files[rel].read_text(encoding="utf-8"), "html.parser"))
        reference_nodes = walk(BeautifulSoup(reference_files[rel].read_text(encoding="utf-8"), "html.parser"))
        total_client_nodes += len(client_nodes)
        total_reference_nodes += len(reference_nodes)

        for i in range(max(len(client_nodes), len(reference_nodes))):
            if len(mismatches) >= MAX_MISMATCHES:
                break
            c = client_nodes[i] if i < len(client_nodes) else None
            r = reference_nodes[i] if i < len(reference_nodes) else None
            if c == r:
                continue
            mismatches.append({
                "file": rel,
                "position": i,
                "client": {"depth": c[0], "signature": c[1]} if c else None,
                "reference": {"depth": r[0], "signature": r[1]} if r else None,
            })

    for rel in only_client:
        total_client_nodes += len(walk(BeautifulSoup(client_files[rel].read_text(encoding="utf-8"), "html.parser")))
        mismatches.append({"file": rel, "position": None, "client": "present", "reference": "missing"})

    for rel in only_reference:
        total_reference_nodes += len(walk(BeautifulSoup(reference_files[rel].read_text(encoding="utf-8"), "html.parser")))
        mismatches.append({"file": rel, "position": None, "client": "missing", "reference": "present"})

    node_count_delta = total_client_nodes - total_reference_nodes

    return {
        "client_node_count": total_client_nodes,
        "reference_node_count": total_reference_nodes,
        "node_count_delta": node_count_delta,
        "files_compared": common,
        "mismatches": mismatches[:MAX_MISMATCHES],
        "passed": node_count_delta == 0 and len(mismatches) == 0,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Stage 10.4c build fidelity DOM diff")
    parser.add_argument("--client", required=True)
    parser.add_argument("--niche", default=None)
    parser.add_argument("--build-reference", action="store_true")
    parser.add_argument("--tolerance", type=int, default=0)
    args = parser.parse_args()

    niche = resolve_niche(args.niche)
    client_dist = REPO_ROOT / "clients" / args.client / f"{args.client} Website" / "dist"
    if not client_dist.exists():
        print(f"ERROR: client dist missing at {client_dist}", file=sys.stderr)
        return 1

    reference_dist = TEMPLATES_DIR / niche / "dist"
    if args.build_reference or not (reference_dist / "index.html").exists():
        reference_dist = build_reference(args.client, niche)

    report = diff_dist(client_dist, reference_dist)
    if args.tolerance:
        report["tolerance"] = args.tolerance
        report["passed"] = abs(report["node_count_delta"]) <= args.tolerance and len(report["mismatches"]) == 0

    qa_dir = REPO_ROOT / "clients" / args.client / "Pipeline Data" / "qa"
    qa_dir.mkdir(parents=True, exist_ok=True)
    out_path = qa_dir / "build-fidelity.json"
    out_path.write_text(json.dumps(report, indent=2))
    print(f"wrote {out_path.relative_to(REPO_ROOT)}", file=sys.stderr)
    print(json.dumps({k: v for k, v in report.items() if k != "mismatches"}, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
