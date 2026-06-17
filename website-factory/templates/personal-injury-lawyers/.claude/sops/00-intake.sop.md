# 1 - Intake

Implements: Stage 1.

## Purpose

Capture the new personal injury law firm client's information and scaffold
the per-client folder structure. The intake interview must surface every
fact the downstream pipeline needs to populate the canonical brand-dna
shape, with extra attention to the legal-specific fields this niche requires
(license number, attorney bios, contingency terms, case types covered).

## Inputs (per-client)

```
Client intake interview (live or written)
clients/[Client Name]/  (created by this stage if absent)
```

## Procedure

1. Confirm the client's legal firm name, any DBA names, and the attorney(s)
   whose names appear publicly (named-partner branding is the norm in this
   niche, per `05-trust-signals.md`).
2. Confirm primary office address, phone number (the "CALL NOW" number),
   email, and hours. Note whether the firm advertises "Open 24/7" (the
   universal GBP pattern in this niche per `06-seo-landscape.md`) and only
   keep that claim if the firm can actually support it (after-hours intake
   line, answering service, etc.).
3. Confirm the firm's state bar admission(s) and license number(s). This
   field is required: `company.licenseNumber` is displayed in the footer on
   every page per `09-wireframe.md`.
4. Ask which of the 7 case types this template ships (car accident, truck
   accident, motorcycle accident, slip and fall, wrongful death, dog bite,
   brain injury) the firm actually handles. If the firm does not handle one
   or more, flag it now so Stage 5 (strategy) can decide whether to keep,
   relabel, or redirect that case-type page. Do not silently drop a page
   without a flag.
5. Confirm contingency fee terms in the firm's own words ("No win, no fee",
   "The Fee Is Free", or local equivalent). This becomes the trust-claim
   copy lock used in Stage 6 and repeated near every CTA per
   `05-trust-signals.md` signal #1.
6. Collect attorney bio basics for each named attorney who will appear on
   the site: full name, headshot availability, years practicing, notable
   results (tie to a case type and dollar figure where possible), and a
   short personal "why I do this work" angle for the FounderStory section
   (per `09-template-spec.md` Section 4, item 8).
7. Ask for settlement/result figures per case type, if the client has them
   and is legally permitted to disclose them. These feed
   `pages.services.items[].settlementFigure` and the StatsBar /
   PracticeAreasGrid sections. If a firm has no disclosable figures, flag
   this for Stage 5 (the template still needs a credible alternative
   framing, e.g. "Millions recovered for clients" without a specific
   number, or a case-type-level industry-average framing reviewed by the
   client's compliance).
8. Confirm bilingual service (Spanish or other languages) per
   `05-trust-signals.md` ("Spanish-speaking / bilingual service badge").
9. Confirm whether the firm is single-office or multi-office. Multi-office
   firms populate `brandDNA.location_pages[]`; single-office firms leave it
   `[]` and the Office Locations section is omitted per
   `09-template-spec.md` Section 7, item 9.
10. Scaffold the client folder structure: `Pipeline Data/`, `[Client Name]
    Assets/`, `[Client Name] Website/`, `[Client Name] Proposal/`.

## Pass criteria

- Firm name, attorney name(s), license number, primary phone, address, and
  hours are recorded.
- Contingency fee statement is recorded verbatim in the client's own words.
- Each of the 7 case types has a status: covered with figure, covered
  without figure, or not offered (with redirect plan).
- At least one named attorney has a bio and a headshot status (have / need
  to shoot via Stage 4 asset scraper).
- Folder scaffold exists under `clients/[Client Name]/`.

## When this stage halts

- The client cannot confirm a license number or bar admission. This is a
  hard requirement for `LegalService` / `Attorney` schema (Stage 10.2) and
  for the footer trust block. Escalate to the student before proceeding.
- The client cannot state contingency terms in plain language. Without this,
  Stage 6 cannot write the trust-claim copy that appears near every CTA.
- The client cannot confirm whether "Open 24/7" is true. Do not pass this
  claim downstream as a default; either confirm it or mark it false.

## Niche-specific notes

For this niche, the following pattern applies (derived from
`research/02-niche-research/personal-injury-lawyers/09-template-spec.md` +
the niche playbook):

This niche's intake differs from a typical home-services intake in three
ways. First, legal credentialing (bar admission, license number) is a hard
schema requirement, not a nice-to-have. Second, the 7 case-type pages are
the template's primary SEO differentiator (`06-seo-landscape.md`), so intake
must produce a clear per-case-type status for all 7, not a generic "what do
you do" answer. Third, named-attorney presence (face, bio, personal story)
is the single strongest trust element in this niche (`05-trust-signals.md`),
so intake should push for at least one attorney willing to be photographed
and to share a short personal account of why they do this work, even if the
firm is otherwise reluctant to "put a face" on the brand.

---

## Author + version

Generated by Module 2D at `2026-06-14` from:

- Niche: `personal-injury-lawyers`
- Wireframe: `research/02-niche-research/personal-injury-lawyers/09-wireframe.md`
- Playbook: `templates/personal-injury-lawyers/niche-playbook/`
- Source skill versions: see `templates/personal-injury-lawyers/MANIFEST.json`
