# Delivery Report, Bricks Law (Stage 12)

## Live site

Production URL: https://bricks-law-website.vercel.app
Vercel project: talisa-sipuka-s-projects/bricks-law-website
Status: deployed, smoke-checked HTTP 200, sitemap.xml HTTP 200.

## Build summary

- Niche template: personal-injury-lawyers
- Region: Metro Atlanta, Georgia (primary city Atlanta; service area covers Sandy
  Springs, Dunwoody, Jonesboro, College Park, Forest Park, Lovejoy, Morrow,
  Riverdale, plus Fulton/DeKalb/Clayton/Cobb/Cherokee/Gwinnett counties)
- Theme mode: light
- Voice register: family (approachable, plain-spoken, client-first)
- Shape motif: chevron (corner overlay, gold #F2B705 at 8% opacity)
- Palette: primary navy #16233E, primary-dark #090E19, accent gold #F2B705,
  neutral #6B7280, ink #0F172A
- Typography: heading Plus Jakarta Sans, body Inter (loaded via preload +
  onload-swap, see Stage 10.4d)
- Key counts:
  - Practice area / case-type pages: 6 (car accident, truck accident,
    motorcycle accident, pedestrian/hit-and-run, slip and fall, wrongful death)
  - Location pages: 9 (Atlanta, Sandy Springs, Dunwoody, Jonesboro,
    College Park, Forest Park, Lovejoy, Morrow, Riverdale)
  - Blog posts: 6
  - FAQ items (homepage): 6, plus 5 per case-type page

## QA scores

- **10.4a Design fidelity**: 0.9962 aggregate (gate 0.90). All 24 region
  scores (12 sections x desktop/mobile) pass their individual thresholds.
  Lowest scores: StatsBar_mobile 0.9602, StatsBar_desktop 0.9762, both still
  above their 0.92 thresholds.
- **10.4b SOP compliance**: 112/112 scoreable items pass (100%), gate 95%.
  3 items marked N/A (dog-bite and brain-injury case types not part of this
  client's 6-case-type practice mix; one structural-equivalence item).
  Zero HALT-level failures. Zero em-dash hits, zero `__REQUIRED__` sentinel
  hits, zero hard AI-vocab failures (2 acceptable hits: "seamless" in a
  verbatim client testimonial, "dedicated" describing insurer claims-handling).
- **10.4c Build fidelity**: structural DOM diff vs the niche template's
  reference build, pass.
- **10.4d Perf (Lighthouse LCP)**: desktop 559 ms / score 1.00 (pass), mobile
  2633 ms / score 0.92 (pass, gate < 3000 ms). Required a template-level fix
  to Google Fonts loading (preload + onload-swap), now applied to both this
  client's build and the personal-injury-lawyers template.

## Asset inventory

- Logo: `bricks-law-logo.png`, `bricks-law-logo-lockup.png` (2 files,
  `Bricks Law Assets/logo/`), built as `public/logo.webp`
- Founder/owner photo: 1 (`owner-peter-bricks.jpg`, 621x876), used as
  `public/owner.webp` and `public/team/owner-peter-bricks.jpg`. Below the
  niche playbook's preferred 800x1000 studio-headshot guidance. See flag below.
- Project/case photos: 1 (`lawyers-and-lay-people.png`), built as
  `public/work/project1.webp`
- Trust badge / review-platform icons: 3
  (`review-badge-google.png`, `review-badge-avvo.png`,
  `review-badge-thumbtack.png`)
- Team photos, office photos, press logos, testimonial photos: 0 (none
  available; `team_group_photo` is null for this single-attorney client)
- Hero image: composed from the founder photo per
  `Pipeline Data/hero-image/hero-composition.md` (split hero layout, no
  synthetic image generation; this niche's Stage 9 is a composition stage).
  Confirmed above-the-fold and visually correct via 10.4a (Hero_desktop and
  Hero_mobile both score 1.00).

## Outstanding flags

1. **Founder photo quality** (`Bricks Law Assets/founder-photos/MANUAL-DROP-NEEDED.md`):
   only one usable photo of Peter Bricks exists (621x876, outdoor background,
   arms-crossed pose), below the niche playbook's preferred studio-headshot
   spec (800x1000+, chest-up, neutral/office background). It is in use as a
   placeholder. Recommend the client commission a professional headshot.

2. **Trust badge set** (`Bricks Law Assets/trust-badges/MANUAL-DROP-NEEDED.md`):
   no curated SVG badge set exists yet for this niche's 12-badge trust-signal
   list. Of those 12, only 3 are confirmed for this client
   (state-bar-association, avvo-rating, google-reviews) and rendered as icon
   components. The remaining 9 (no-win-no-fee, million-dollar-advocates-forum,
   national-trial-lawyers, super-lawyers, bbb-accredited, bilingual-spanish,
   open-24-7, community-involvement, as-seen-in) are NOT claimed on the site
   and should not be added without client confirmation.

3. **LeadForm has no backend wiring (critical, pre-launch blocker)**: the
   LeadForm component (`src/components/LeadForm.jsx`) is fully client-side.
   On submit it calls `preventDefault()` and shows a "Thank you" message, but
   does not send the lead anywhere (no email, no webhook, no CRM, no API
   call). Verified via a Playwright smoke test against the live URL: the
   thank-you state renders correctly, but **submitted leads are currently
   discarded**. Before this site goes live for the client, wire the form to
   an actual destination (e.g., a serverless function, Formspree/web3forms,
   or the agency's AI infrastructure stack / CRM webhook).

4. **Apify research gaps**: Facebook/Instagram scrapes returned HTTP 402 this
   run (Apify billing). Google review count/rating for the `google-reviews`
   badge is unverified. Re-run social scrapes once Apify billing is restored
   if additional founder photos or review data are needed.

## Apify spend

Total: $0.1232
- google-places: $0.0043
- website: $0.1189

## Pipeline timing (Stage 10-11, from build-log.md)

- Stage 10.1 Build: completed 2026-06-15T11:36:59Z
- Stage 10.2 Personalize: completed 2026-06-15T12:00:00Z
- Stage 10.3 Uplift: completed 2026-06-15T12:20:00Z
- Stage 10.4a Design fidelity: completed 2026-06-15T12:40:00Z
- Stage 10.4c Build fidelity: completed 2026-06-15T12:35:00Z
- Stage 10.4b SOP QA: completed 2026-06-15T13:10:00Z
- Stage 10.4d Perf: completed 2026-06-15T13:40:00Z
- Stage 11 Deploy: completed 2026-06-15T14:00:00Z

## Next step

Stage 13 (Proposal). Note: `credit.agency` in `brand-dna.json` still holds the
sentinel `__REQUIRED__AGENCY_NAME__` (not rendered in the shipped site, so it
does not affect this delivery), which indicates `agency-brand.json` is not yet
populated. Stage 13 may halt until `/setup-agency` is run.
