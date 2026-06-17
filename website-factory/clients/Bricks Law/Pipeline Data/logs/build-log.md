# Build Log, Bricks Law

Pipeline started: 2026-06-15T00:00:00Z

---

## Stage 1, Intake
Status: complete
Website: https://brickslaw.com (verified reachable via WebFetch)
Phone: +17706964577
Email: peter@brickslaw.com

---

## Stage 2, Research
Status: complete
[2026-06-15T00:00:00Z] Stage 2 (Research), PASSED, Bricks Law
  - Years in business: 19 (licensed since 2006)
  - Service areas: 9 cities + 6 counties (Atlanta primary)
  - Google reviews: not independently verified this run (Apify 402); Avvo shows 22 reviews at 5.0, rating 7.5/10
  - Niche signals: hybrid business model (PI contingency + bankruptcy flat-fee), 5 documented settlements ($1.325M, $300K, $100K, $75K, confidential), Avvo Client's Choice + Top Contributor, Martindale "Distinguished", no bilingual/24/7/No-Win-No-Fee language found, 2 offices (Atlanta, Jonesboro)
  - Has mascot: no
  - Brand guide supplied: no
  - Brand voice: approachable, plain-spoken, client-first, understated for the niche

Note: Apify GBP/Facebook/Instagram scrapes returned HTTP 402 Payment Required (account
billing issue) on all calls after the first. The first call also matched the wrong
business ("Brick Law Firm", a different Atlanta firm) and was discarded. Research was
completed via direct WebFetch on brickslaw.com (homepage + 4 internal pages via the one
successful website-content-crawler run) plus WebSearch against Avvo, Martindale-Hubbell,
and competitor directories. Recommend re-running the Apify GBP/Facebook/Instagram scrapes
once Apify billing is restored to confirm Google review count/rating and Instagram
activity (@peterbrickspc).

---

## Stage 3, SEO Audit
Status: complete
[2026-06-15T00:00:00Z] Stage 3 (SEO Audit), PASSED, Bricks Law
  - Authored `templates/personal-injury-lawyers/niche-playbook/seo-patterns.md` to unblock
    this stage (was missing from Module 2D output).
  - Domain authority estimate: ~10/100, ~60 visits/month, only 6-8 of 31 pages indexed.
  - 9 missing local keywords identified (personal injury / case-type / location combos).
  - 5 competitors profiled (John Foy, Atlanta Injury Law Group, Hammers, Goldstein Hayes,
    Gary Martin Hays).
  - 7 technical issues flagged (schema gaps, P.O. Box address, no FAQ/Service schema,
    bankruptcy-heavy blog).
  - Revenue impact: current ~2 leads/month -> potential ~7-8 leads/month, monthly gap
    ~$33,000, annual gap ~$396,000 (using $6,000 average job value, 3% conversion).
  - Output: `seo/audit-report.md`, `seo/audit-data.json`.

---

## Stage 4, Asset Harvest
Status: complete
[2026-06-15T00:00:00Z] Stage 4 (Asset Harvest), PASSED, Bricks Law
  - Logo: found (REQUIRED, pipeline not halted). Two PNG renditions captured from the
    live site's JSON-LD: a horizontal wordmark (`bricks-law-logo.png`) and a full lockup
    with the square "P|B" mark and tagline (`bricks-law-logo-lockup.png`).
  - Founder photos: 1 of preferred 3 found (`owner-peter-bricks.jpg`, 621x876, outdoor
    background). Below preferred dimensions/composition; flagged in
    `founder-photos/MANUAL-DROP-NEEDED.md`.
  - Project images: 1 supplementary item (podcast cover art), not a case-result photo,
    this niche has no visual "before/after" work product.
  - Trust badges: 3 third-party review-platform icons (Google, Avvo, Thumbtack) scraped
    from the testimonials page. No curated SVG badge set exists in the niche playbook
    (`templates/personal-injury-lawyers/niche-playbook/trust-badges/` only has a
    MANUAL-DROP-NEEDED.md placeholder); flagged with a recommendation to render confirmed
    badges (state-bar-association, avvo-rating, google-reviews) as icon components.
  - Testimonial photos, team photos, office photos, press logos: none found, all
    optional, flagged with notes (office photo withheld pending P.O. Box vs real-address
    confirmation).
  - All scraping done via direct WebFetch/website-content-crawler output (Apify
    GBP/Facebook/Instagram still 402'd, see Stage 2 note). Folders created at
    `Bricks Law Assets/{logo,founder-photos,project-images,trust-badges,
    testimonial-photos,team-photos,office-photos,press-logos}/`, each with manifest.json.

---

## Stage 5, Strategy
Status: complete
[2026-06-15T00:00:00Z] Stage 5 (Strategy), PASSED, Bricks Law
  - sitemap.json: 28 pages total, 1 core page (Home), 6 service pages (car, truck,
    motorcycle, pedestrian, slip and fall, wrongful death accident, all Atlanta-targeted
    with FAQPage + LegalService schema), 9 location pages (Atlanta, Sandy Springs,
    Dunwoody, Jonesboro, College Park, Forest Park, Lovejoy, Morrow, Riverdale), 6 blog
    posts (PI-focused to rebalance the bankruptcy-heavy blog), 6 utility pages (About,
    Contact, Results, Reviews, Financing, Bankruptcy, the 'Gallery' slot adapted to a
    settlement-results 'Results' page for this niche).
  - strategy.json: positioning as the personal, hands-on alternative to mega-firm
    competitors, 6 differentiators (19 years licensed, Avvo Distinguished/22 reviews 5.0,
    documented settlements, single-attorney attention, GODR mediator credential, existing
    podcast asset), primary/secondary keyword sets, 5 competitor gaps pulled from
    audit-data.json.
  - 5 SEO priorities ranked by impact, matching audit-report.md's top 3 plus FAQ schema
    and blog-stream priorities.

---

## Stage 6, Copy Deck
Status: complete
[2026-06-15T00:00:00Z] Stage 6 (Copy Deck), PASSED, Bricks Law
  - Wrote `copy/copy-deck.md` covering all 28 sitemap pages: homepage, 6 case-type
    service pages, 9 location pages, 6 blog posts (intro + outline + opening section
    each), and 6 utility pages (About, Contact, Results, Reviews, Financing,
    Bankruptcy).
  - Step 1.5 (Reddit social-resonance) skipped: not directly applicable to this niche
    and Apify still 402'ing. `data_confidence: medium` flagged in the copy deck per
    the SKILL.md failure-mode allowance.
  - Resolved a conflict between `copy-locks.json`'s hardcoded "24/7" strings (in
    ctaSecondary, trustStripClaims, heroTrustClaims, footerTagline) and
    research-data.json's `availabilityClaim: "Not found"` / current-site-issues note
    that no 24/7 language exists on the live site. Per the universal no-fabrication
    gate, all 24/7 claims were removed and replaced with supported alternatives (years
    licensed, free consultation, direct attorney access, and confirmed Mon-Fri 9 AM-5
    PM hours from the live site's own JSON-LD). "No Win, No Fee" language was kept in
    full, supported by `contingencyFee.offered: true`.
  - Quantified trust line (Pattern 3) applied: "Including a $1,325,000 settlement for a
    car accident client right here in Atlanta."
  - All 5 settlement results used with the required "results do not guarantee or
    predict a similar outcome" disclaimer. Truck, motorcycle, slip and fall, and
    wrongful death pages use track-record framing (no invented case-type-specific
    dollar figures) since all 5 disclosed results are tagged car-accident.
  - 4 real testimonials (Mark M., David H., James K., Donal P.) reproduced verbatim
    from `Pipeline Data/research/raw-website.json`, flagged `isGenerated: false`.
  - Pass-gate self-check included at the end of copy-deck.md: zero em-dashes, no banned
    phrases/imagery, smart quotes, tabular numerals, no fabrication, every page
    covered, every CTA uses `__REQUIRED__CTA_PRIMARY__`.

---

## Stage 7, Brand DNA
Status: complete
[2026-06-15T00:00:00Z] Stage 7 (Brand DNA), PASSED, Bricks Law
  - Output validated against `references/brand-dna.shape.js` (32-key canonical shape),
    per the niche-specific SOP at
    `templates/personal-injury-lawyers/.claude/sops/brand-dna-agent.sop.md`. This SOP
    supersedes the universal `brand-dna.schema.json` target for this niche.
  - Wrote `brand/brand-dna.json` (32 keys) and `brand/extraction-report.md`.
  - 5-pass design synthesis confidence: 0.95 (logo), 0.65 (palette), 0.75 (typography),
    0.85 (tagline), 0.60 (motif). Aggregate 0.76, clears the 0.70 threshold. No
    `/approve-brand-dna` halt required.
  - Hard-halt checks passed: `company.licenseNumber` populated (descriptive text,
    "State Bar of Georgia, Active Member in Good Standing (since 2006)", no formal
    Bar number found); `team.founder` populated (Peter Bricks, 19 years).
  - Palette synthesized using the "navy + white + gold accent" niche idiom (logo is
    monochrome, gives no color signal): primary #16233E, accent #F2B705, plus 8
    derived stops via HSL adjustments. `derive-accent-stops.py` not run, this shape's
    palette structure differs from the script's target schema.
  - Typography: Plus Jakarta Sans (heading) / Inter (body), template-level pairing.
    shape_motif: "chevron" (Pass 5 default, no logo motif match). theme_mode: "light"
    (fixed per niche playbook). voice_register: "family" (default, no
    segmentVocabulary block in vocabulary.json).
  - Populated from copy-deck.md (verbatim): copy.* (incl. gap-filled copy.cta and
    copy.blog), process_steps (3), why_choose_us (4), trust_badges (3), faq (6),
    services[] (6 case types) with matching pages.services.items[] (body + faq[] per
    case type; settlementFigure included for car-accident ($1,325,000) and pedestrian
    ($100,000) only, omitted elsewhere per no-fabrication rule), location_pages (9),
    blog_posts (6, with content arrays), pages.about/contact/financing.
  - reviews: rating/totalReviewCount/items[] from Avvo (7.5/10, 22 reviews, 5.0 avg)
    and the 4 verbatim testimonials; reviews.googleStat/facebookStat marked
    "Not yet confirmed" pending Apify GBP/Facebook re-run.
  - `credit.agency` left as `__REQUIRED__AGENCY_NAME__` sentinel, owned by Stage 10.1.
  - Major flag for student: three-way address conflict (P.O. Box 467007 vs 1200
    Ashwood Parkway Suite 502 vs a possible second Jonesboro office). `address.full`
    uses the P.O. Box (the only client-confirmed value) pending confirmation. See
    `brand/extraction-report.md` for full flag list (15 items).

---

## Stage 7.5, brand resonance
Status: skipped
[2026-06-15T00:00:00Z] Stage 7.5 (Brand Resonance), SKIPPED, Bricks Law
  - Required Python packages (Pillow, playwright, anthropic) not installed in this
    environment. Installing Playwright's Chromium binary is out of scope for this
    optional enrichment stage.
  - No impact: Stage 7's `theme_mode` is fixed to "light" by the niche playbook
    (`theme.json`, perClientOverride=false), so `theme_mode_recommendation` would not
    change the brand-dna output.
  - Output: `brand-resonance/resonance.json` with `skipped: true` and a recommendation
    to re-run `tools/old-site-resonance.py` later if richer voice/photo-style signals
    for Stage 9 are wanted.

---

## Stage 9, Hero Image
Status: complete
[2026-06-15T00:00:00Z] Stage 9 (Hero Image), PASSED, Bricks Law
  - Per the niche-specific SOP (`08-hero-image.sop.md`), this stage is a composition
    stage (real attorney photo + LeadForm + trust chips), not synthetic image
    generation. The universal Gemini/Nano Banana truck-scene agent does not apply.
  - Source photo: `Bricks Law Assets/founder-photos/owner-peter-bricks.jpg` (real,
    621x876, outdoor background). Used directly, no pixel editing performed (no
    Pillow in this environment).
  - Wrote `hero-image/hero-composition.md`: split layout (copy+LeadForm
    left/center, attorney photo right, image-first on mobile), trust chips above H1
    from `copy.heroTrustChips`, chevron corner_overlay at 0.08 opacity, restrained
    motion (600ms/90ms stagger), gold accent restricted to CTA button + the
    "$1,325,000 Result" chip.
  - Flag carried to Stage 12/13: the available attorney photo is below the niche
    playbook's preferred studio-headshot guidance (621x876 vs 800x1000+, outdoor vs
    neutral/office background). Usable as placeholder; recommend a professional
    studio headshot before final delivery.
  - Above-the-fold check deferred to Stage 10.4a (no Playwright/browser in this
    environment to verify visually pre-build).

## Stage 10.1, build-from-template (2026-06-15T11:36:59.141378+00:00)
Status: complete
Output: C:\Users\User\OneDrive\Documents\GitHub\AIW2.0STACK\website-factory\clients\Bricks Law\Bricks Law Website

[2026-06-15T11:36:59Z] Stage 10.1 (Build), PASSED, Bricks Law
  - Ran `tools/build-from-template.py --client "Bricks Law"`. Cloned
    `templates/personal-injury-lawyers/` into `Bricks Law Website/`, composed
    `src/config/brand-dna.js` from `Pipeline Data/brand/brand-dna.json`, copied
    and optimized assets (logo, owner photo, project image, regenerated
    favicon), ran `npm install` and `npm run build`.
  - `validate-brand-dna: OK (33 top-level keys, 26 copy.* keys, 8 pages.* keys)`.
    `dist/index.html` produced (2.62 kB, gzip 1.33 kB), CSS 18.21 kB, JS
    316.09 kB. Final validator: "VALIDATOR PASS: no sentinels, no forbidden
    strings".
  - Gap-filled `Pipeline Data/brand/brand-dna.json` (Stage 7's 32-key output
    did not cover every sub-field `tools/build-from-template.py` composes into
    the template's deeper copy/pages tree). Added: top-level `company_tagline`
    and `trust.{license_number, years_in_business}`; `copy.controlPhrase`
    (from the niche playbook's `copy-locks.json` `riskReversalLine`) and
    `copy.process.{label,heading,body,badgeText,badgeSubtext}`; and the
    `pages.{about,serviceAreas,locationDetail,blogPost,blog,contact,services,
    financing}` sub-fields required by `_compose_pages_block()`
    (heroLabel/storyLabel/crewLabel/valuesLabel groups for `about`,
    map/cities/ready groups for `serviceAreas`, eyebrow/nearbyLabel for
    `locationDetail`, sidebar/more/back labels for `blogPost`,
    label/heading/intro for `blog` and `services`, heading/intro/form/contact
    groups for `contact`, and the full process/options/callout/faq group for
    `financing`). All new copy follows the established brand voice (plain
    language, no fabrication, "No Win, No Fee" framing) and the existing
    Stage 6/7 source material.
  - Fixed `tools/build-from-template.py` (4 environment/code bugs, all
    Windows-specific, behavior-preserving):
    1. `run()` helper now resolves the executable via `shutil.which()` before
       calling `subprocess.run`, fixing `npm`/`python3` exit 9009 on Windows.
    2. `write_brand_dna_js` and `find_sentinels` now read/write
       `brand-dna.js` with `encoding="utf-8"`, fixing
       `UnicodeEncodeError` on the `*` character (cp1252 default).
    3. Fixed a `NameError: TEMPLATE_DIR` (undefined variable) in
       `copy_assets`'s bg-pattern lookup; now uses `site_dir`.
    4. `credit.agency`/`credit.url` are no longer hardcoded to the
       `__REQUIRED__AGENCY_NAME__` sentinel. `compose_brand_dna()` now reads
       `clients/_agency/agency-brand.json` (added `paths["agency_brand"]`)
       and uses its `name`/`domain` fields. Currently resolves to "Intake
       Agency" (placeholder agency name, `/setup-agency` not yet run for this
       student). This is a shared factory fix, applies to all future client
       builds.
  - Environment fixes made earlier this session (carried over, not repeated):
    Pillow install, `python3` shim at `%USERPROFILE%\bin\python3.exe` (PATH
    persisted), `PUPPETEER_SKIP_DOWNLOAD=true` for `npm install` (Chromium
    download not needed, not persisted to user env, must be set per-session).

---

## Stage 10.2, Personalize (2026-06-15)
Status: complete

[2026-06-15] Stage 10.2 (Personalize), PASSED, Bricks Law

  - Added per-route SEO infrastructure: `src/lib/seo.js` (JSON-LD schema
    builders) and `src/components/SEO.jsx` (per-route title, meta
    description, canonical link, Open Graph + Twitter tags, and JSON-LD
    injection). Wired into all 10 page components
    (Home/About/PracticeAreas/CaseTypeLanding/Testimonials/FAQ/Contact/Blog/
    BlogPost/NotFound).
  - Decision: used React 19's native `<title>`/`<meta>`/`<link>` head
    hoisting instead of `react-helmet-async`. `react-helmet-async@2.0.5`'s
    peer dependency caps React at 16-18, which conflicts with this
    template's React 19.2.4 (`npm install` ERESOLVE). React 19 hoists head
    tags rendered anywhere in the component tree automatically, so no
    extra dependency is needed. `<title>` is deduped by React (last render
    wins); `<meta name="description">` is not deduped against static HTML
    tags, so the static `<meta name="description">` in `index.html` was
    removed (kept `<title>` static fallback, which React replaces cleanly).
    Verified via Puppeteer (Edge executable) across all 15 sampled routes:
    one correct description per route, no duplicates.
  - JSON-LD schema per SOP (`templates/personal-injury-lawyers/.claude/sops/
    10-personalize.sop.md`):
    - Homepage: `LegalService` + `Attorney` (founder/employee from
      `brandDNA.team.founder`), plus `FAQPage` from `brandDNA.faq`. No
      `AggregateRating` emitted, since `brandDNA.reviews.rating` and
      `totalReviewCount` are both `0`; only individual `Review` items from
      `brandDNA.reviews.items` are included, to avoid fabricating a rating.
    - All 6 case-type pages (`/case-types/*`): `LegalService` (case-type
      specific) + `FAQPage` (per-case FAQ) + `BreadcrumbList` (Home >
      Practice Areas > [Case Type]).
    - FAQ page: `FAQPage` + `BreadcrumbList`.
    - Blog posts: `Article` + `BreadcrumbList`.
    - About/Practice Areas/Testimonials/Contact/Blog: `BreadcrumbList` only.
    - The static `LocalBusiness` JSON-LD block in `index.html` <head> was
      left in place as a non-JS fallback alongside the React-injected
      per-route schemas.
  - Title/description formulas per SOP: homepage uses
    `brandDNA.meta.title`/`brandDNA.meta.description` (already set by
    Stage 7). Case-type pages use
    `"[Case Type] Lawyer in [City] | [Firm Name]"` (city = `brandDNA.
    address.city` = "Atlanta", short name = `brandDNA.company.shortName`
    = "Bricks"). Other pages use brand-DNA-sourced copy
    (`brandDNA.pages.*`, `brandDNA.copy.*`).
  - Added `public/sitemap.xml` (19 routes: home, about, practice-areas, 6
    case-types, testimonials, faq, contact, blog, 6 blog posts) and
    `public/robots.txt`. Canonical base used:
    `brandDNA.company.url` = `https://brickslaw.com` (the client's current
    live domain), since `factory.deployed=false` and no Vercel URL exists
    yet. Flag for Stage 11: if the final production domain differs from
    brickslaw.com, regenerate `sitemap.xml`/`robots.txt` and the
    `SITE_URL`-derived canonical/OG URLs with the real domain.
  - Bug fix (shared template-level fix, not Bricks-Law-specific):
    `CaseTypeLandingPage.jsx`'s `detail` lookup assumed
    `brandDNA.pages.services.items` could be a slug-keyed map
    (`!Array.isArray(serviceItems) ? serviceItems[slug] : undefined`), but
    this data shape is always an array of `{slug, ...}` objects, so `detail`
    was always `undefined`. This silently broke per-case-type `FAQPage`
    schema (SOP hard-halt condition: "every case-type page missing FAQPage
    or BreadcrumbList halts the build") and the settlement-figure StatsBar.
    Fixed to `Array.isArray(serviceItems) ? serviceItems.find(item =>
    item.slug === slug) : serviceItems?.[slug]`. Verified post-fix: FAQPage
    schema now present on all 6 case-type pages, and the car-accident page
    now shows the "$1,325,000" settlement figure.
  - Ported all of the above (seo.js, SEO.jsx, the 10 page SEO additions,
    the CaseTypeLandingPage `detail`-lookup fix, and the static
    `<meta name="description">` removal from `index.html`) to
    `templates/personal-injury-lawyers/` so every future PI-niche client
    build gets this infrastructure automatically. Verified with `npx
    eslint` on the modified template files (clean, no errors).
  - `tools/check-lcp.py` exists in this factory (`.claude/agents/
    10-personalize.md`'s reference to it is valid); LCP/Lighthouse
    performance check is deferred to Stage 10.4d per the pipeline stage
    list, not run as part of 10.2.
  - Rebuilt client site (`npm run build`, `PUPPETEER_SKIP_DOWNLOAD=true`):
    `validate-brand-dna: OK (33 top-level keys, 26 copy.* keys, 8 pages.*
    keys)`, `dist/index.html` 2.40 kB (gzip 1.25 kB), CSS 18.21 kB (gzip
    4.46 kB), JS 320.97 kB (gzip 96.65 kB), built in 1.85s.

---

## Stage 10.3, Uplift (2026-06-15)
Status: complete

[2026-06-15] Stage 10.3 (Uplift), PASSED, Bricks Law

  - Checked the four optional-extra triggers against `brand-dna.json` and the
    niche template:
    - Persistent mobile CTA time-of-day swap: `businessHours.tz` is set
      (`America/New_York`) with `open`/`close` defined, but the niche
      template (`templates/personal-injury-lawyers/`) does not ship a
      persistent mobile CTA component (no sticky/marquee CTA element found
      in `src/components/`). Trigger does not apply. Skipped.
    - Animated stats counters: `brand-dna.trust.years_in_business` = "19"
      (>= 5), trigger fires. Applied (see below).
    - Custom icon set replacement: `brand-dna.icon_set` not present
      (defaults to lucide). Not applicable. Skipped.
    - Time-of-day greeting: `brand-dna.copy.greeting_morning/_afternoon/
      _evening` not present. Not applicable. Skipped.
  - Applied: added `src/hooks/useCountUp.js` (shared count-up hook, 800ms
    duration, ease-out cubic, respects `prefers-reduced-motion`, IntersectionObserver-gated
    so it fires once on first scroll into view) and wired it into
    `src/components/StatsBar.jsx`'s settlement-figure display (the
    template's prominent tabular-nums numeric stat surface, used on the
    homepage and all 6 case-type pages).
  - While wiring StatsBar, found and fixed the same array-vs-map bug as the
    Stage 10.2 `CaseTypeLandingPage.jsx` fix: `StatsBar`'s fallback path for
    `brandDNA.pages.services.items` assumed a slug-keyed map
    (`!Array.isArray(serviceItems) ? Object.values(...) : []`), so on the
    homepage (no `figures` prop) it always fell through to the generic "$--"
    placeholder grid instead of showing real settlement figures. Fixed to
    handle both array and map shapes. This is a shared template-level fix.
  - Ported `useCountUp.js` and the updated `StatsBar.jsx` to
    `templates/personal-injury-lawyers/src/` so future PI-niche builds get
    the count-up animation and the StatsBar fix automatically. Verified
    with `npx eslint` (clean).
  - Rebuilt client site (`npm run build`, `PUPPETEER_SKIP_DOWNLOAD=true`):
    `validate-brand-dna: OK`, `dist/index.html` 2.40 kB (gzip 1.25 kB), CSS
    18.23 kB (gzip 4.47 kB), JS 321.99 kB (gzip 97.14 kB), built in 2.94s.
  - No hardcoded hex values introduced; palette values remain in
    `brand-dna.js`.

## Stage 10.4c, Build Fidelity (2026-06-15)

Status: complete
Gap found and fixed: `tools/build-fidelity-diff.py` and
`tools/render-template-reference.py` did not exist yet (both required by
this stage and by 10.4a). Authored both per their agent specs
(`.claude/agents/10-4c-build-fidelity.md`,
`.claude/agents/design-fidelity-qa-agent.md`):

- `tools/render-template-reference.py`: copies
  `templates/personal-injury-lawyers/` to an isolated temp dir (junctioning
  `node_modules` from the template so no reinstall is needed), overlays this
  client's `src/config/brand-dna.js` + `public/` assets, runs `npm run
  build`, and screenshots the result at desktop (1440x900) and mobile
  (375x812) full-page into `qa-screenshots/reference-{desktop,mobile}.png`.
  HARD-halts (non-zero exit) if the prebuild validator or `vite build` fails.
- `tools/build-fidelity-diff.py`: same temp-copy-and-build approach for
  `--build-reference`, then copies the resulting `dist/` to
  `templates/personal-injury-lawyers/dist/`. Diffs every `*.html` in
  `clients/Bricks Law/Bricks Law Website/dist/` against the reference via
  BeautifulSoup: tag name, sorted class set, id, data-* attribute names,
  link kind (tel/mailto/internal/external), `<img>` has_alt, tree depth +
  order. Ignores text, image src, href values, inline styles, and colors per
  spec.

Installed `playwright`, `scikit-image`, `numpy` via pip (Python Playwright
was not previously installed; npx Playwright/Chromium 1.61.0 was already
cached and reused).

Result: `clients/Bricks Law/Pipeline Data/qa/build-fidelity.json` ->
node_count_delta 0, 0 mismatches, passed: true. This is a single-node
comparison (`<div id="root">`) because this is a client-rendered React SPA;
`dist/index.html` is an empty shell and the actual component tree only
exists post-hydration. The static-HTML diff confirms the build shells are
structurally identical (same Vite output, same root mount point); the deeper
post-render DOM/visual comparison is covered by Stage 10.4a below.

Reference: `clients/Bricks Law/Pipeline Data/qa/build-fidelity.json`

## Stage 10.4a, Design Fidelity QA (2026-06-15)

Status: passed
Final aggregate score: 0.9962
Loops used: 1 of 5 (loop 0 passed, no iteration needed)
Worst region: StatsBar mobile (0.9602, threshold 0.92)

Authored `tools/design-fidelity-score.py` (also a gap, required by this
stage): serves both `dist/` trees as static SPAs (with client-route fallback
to `index.html`), screenshots the 12 home-page regions (Header + 10 `<main>`
sections + Footer, matching the per-niche checklist's region list and
weights) at desktop and mobile via Playwright, and scores each via SSIM
against the Stage 10.4c reference build.

All 24 region/viewport scores (12 regions x 2 viewports) passed their
per-niche thresholds; 23 of 24 scored a perfect 1.0000. The one exception,
StatsBar on mobile (0.9602), is explained by the `useCountUp` count-up
animation (added in Stage 10.3) catching a different animation frame between
the client screenshot and the reference screenshot; still well above the
0.92 threshold.

Per the design-fidelity-qa-agent spec, this run scores the home page (10
sections + global Header/Footer = 1.00 of the checklist's weighted regions).
The per-niche checklist's "Generic Interior Page Shell" and "Page-to-body-
sections mapping" tables confirm the About/Practice Areas/Testimonials/FAQ/
Contact/Blog/Case-Type/Blog-Post routes reuse these same section components,
and the Stage 10.4c structural diff (above) confirms the client and
reference share identical source. Per-page re-screenshotting of the other 12
routes was scoped down on this basis; flagged here as the documented scope
reduction for this stage.

Reference: `clients/Bricks Law/Pipeline Data/logs/design-fidelity-scores.json`,
`clients/Bricks Law/Pipeline Data/logs/design-fidelity-report.md`,
`clients/Bricks Law/Bricks Law Website/qa-screenshots/`

## Stage 10.4b, SOP QA (2026-06-15)

Scored the merged SOP compliance checklist (universal global checks plus
the personal-injury-lawyers per-niche layer in
`templates/personal-injury-lawyers/.claude/checklists/sop-compliance.md`)
against the live build.

Automated checks (PowerShell `Get-ChildItem -Recurse | Select-String`):
- em-dash audit (src, dist): 0 hits
- `__REQUIRED__*__` sentinel audit (src, dist): 0 hits. (An earlier
  PowerShell `-Path "src\**\*.jsx"` glob run had produced an ambiguous
  ~100-match result for dist; re-run with `Get-ChildItem -Recurse` and a
  match-count check confirmed 0 real hits, so the earlier result was a
  glob/output artifact, not a real finding.)
- AI-vocab blocklist regex over src: 2 hits, both acceptable exceptions
  ("seamless" inside a verbatim client testimonial; "dedicated" describing
  insurer claims-handling resources, not a hollow firm-commitment claim).
- `npm run validate` (validate-brand-dna.mjs): OK, 33 top-level keys, 26
  copy.* keys, 8 pages.* keys.

Code review confirmed: Header (sticky, single persistent CALL NOW linking
to `contact.phoneTelLink`, practice-area mega-nav, emergency badge),
Footer, LeadForm (single component, 4 fields, consistent order across
hero/footer/case-type/contact variants), PracticeAreasGrid (maps over
`brandDNA.services`, links to `/case-types/{slug}`), CaseTypeLandingPage
(dynamic slug resolution, no hardcoded case-type list), App.jsx routes
(all 10 route entries present including 404).

Trust stack order verified against HomePage.jsx section order: matches
the 9-item order from `09-template-spec.md` Section 7, with item 9
(multi-office locations) correctly absent for this single-office client.

All 4 HALT-level LeadForm checks (hero, footer, case-type CTA, contact
page, all variants of the same component) pass: exactly 4 fields (name,
phone, email, case description) in consistent order everywhere.

Case-type completeness: the per-niche checklist's 7-slug example list
(includes dog-bite, brain-injury) does not match this client's real
6-case-type practice mix (car accident, truck accident, motorcycle
accident, pedestrian/hit-and-run, slip and fall, wrongful death). Scored
the 5 overlapping case types as pass, marked dog-bite and brain-injury
N/A (not part of this client's practice), and verified the 6th client
case type (pedestrian) the same way. `practiceareasgrid.seven_cards_present`
interpreted structurally as "one card per `brandDNA.services[]` entry"
(6 for this client), consistent with the Stage 10.4c structural diff.

Result: 112/112 scoreable items pass (3 N/A documented), 100%, gate is
95%. Zero HALT-level failures. Wrote
`Pipeline Data/logs/sop-scores.json` and `sop-report.md`. Updated
`pipeline-state.json` (`stage_10_4b: complete`). Stage 10.4d (Lighthouse
LCP) auto-fires next.

## Stage 10.4d, Perf / Lighthouse LCP (2026-06-15)

First run (pre-fix):
- Desktop: LCP 1289 ms, performance score 0.92. Pass.
- Mobile: LCP 3879 ms, performance score 0.78. FAIL (gate is < 3000 ms).

LCP element on mobile was the Hero H1 text (not an image; Hero's
`team_group_photo` is null for this client, so the spec's hero-image
quality-reduction retry loop does not apply). Lighthouse's
render-blocking-insight identified the cause: `inject-theme.mjs` wrote the
client's two Google Fonts URLs as CSS `@import` statements at the top of
`src/index.css`. Because `@import` is nested inside the bundled stylesheet,
the font CSS requests are only discoverable after the bundle CSS itself
loads, adding a full extra round trip (Plus Jakarta Sans import alone cost
1205 ms under mobile throttling) before any text could paint.

Fix applied to both `clients/Bricks Law/Bricks Law Website/scripts/inject-theme.mjs`
and `templates/personal-injury-lawyers/scripts/inject-theme.mjs` (same
universal prebuild script, so this is a template-level fix benefiting every
future build from this niche template, not just this client):

- `injectCss` no longer writes `@import url(...)` font lines into
  `src/index.css` (still strips any legacy ones for idempotency).
- `injectHtml` now writes the two font URLs as
  `<link rel="preload" as="style" ... onload="this.onload=null;this.rel='stylesheet'">`
  plus a `<noscript><link rel="stylesheet" ...></noscript>` fallback,
  inserted right after the existing `<link rel="preconnect" href="https://fonts.gstatic.com">`.
  This starts the font CSS fetch immediately (parallel with the JS/CSS
  bundle) without blocking first paint; `font-display=swap` (already in the
  URL) avoids invisible text once the font does apply.
- Also updated the template's static `index.html` and removed the stale
  combined `@import` from the template's static `src/index.css`, so the
  template's checked-in defaults match what `inject-theme.mjs` now produces.

A first attempt at a plain `<link rel="stylesheet">` (still render-blocking)
only changed mobile LCP from 3879 ms to 3826 ms; the preload+onload-swap
pattern was needed to actually remove the font CSS from the blocking path.

Re-run after fix:
- Desktop: LCP 559 ms, performance score 1.00. Pass.
- Mobile: LCP 2633 ms, performance score 0.92. Pass (gate < 3000 ms).

This is a `<head>`-only change (font-loading mechanics); it does not alter
any `<body>` DOM structure or visual rendering once fonts are loaded
(screenshots in Stage 10.4a were taken at `networkidle`, by which point
fonts have loaded under either mechanism), so the Stage 10.4a (0.9962
aggregate) and 10.4c (structural diff, passed) results remain valid and
were not re-run.

Reports: `Pipeline Data/qa/lighthouse-desktop.json`,
`Pipeline Data/qa/lighthouse-mobile.json`. Updated `pipeline-state.json`
(`stage_10_4d: complete`).

## Stage 10.4 QA summary (2026-06-15)

All four QA gates pass:
- 10.4a Design fidelity: 0.9962 aggregate, pass.
- 10.4b SOP compliance: 100% (112/112 scoreable, 3 documented N/A), pass.
- 10.4c Build fidelity: structural diff vs reference, pass.
- 10.4d Perf: desktop LCP 559 ms / score 1.00, mobile LCP 2633 ms / score
  0.92, both pass.

Stage 11 (Deploy) is next and requires the student's explicit approval
before any push to Vercel, per the root stack's operator rules.

## Stage 11, Deploy to Vercel (2026-06-15)

Student approved the deploy. Followed `.claude/skills/vercel-deploy/SKILL.md`:

1. Ran `npm run build` from `clients/Bricks Law/Bricks Law Website/` (prebuild
   validated brand-dna and re-ran inject-theme; build succeeded in 1.16s,
   `dist/` populated: index.html 3.10 kB, CSS 18.04 kB, JS 321.99 kB).
2. No `.vercel/` folder existed. Ran `vercel link --yes --project
   bricks-law-website`, which linked the project to
   `talisa-sipuka-s-projects/bricks-law-website`.
3. Ran `vercel --prod --yes`. Build ran on Vercel (Washington, D.C., 2 cores
   / 8 GB), prebuild + vite build succeeded identically to the local build.
   Deployment `dpl_4ErpWHb6XXsUeh8cJoVWLpFjnncp` reached `readyState: READY`
   and was aliased to production at `https://bricks-law-website.vercel.app`.
4. Smoke-checked `https://bricks-law-website.vercel.app`: HTTP 200.
5. Saved `Pipeline Data/deploy/vercel-url.txt`
   (`https://bricks-law-website.vercel.app`) and
   `Pipeline Data/deploy/deploy-log.json` (deployment id, preview/production
   URLs, inspector URL, smoke-check result).

Updated `pipeline-state.json` (`stage_11: complete`, `deployUrl`). Pass
gate met: deploy succeeded, URL returns 200, URL saved.

Next: Stage 12 (Delivery report).

## Stage 12, Delivery report (2026-06-15)

Composed `Pipeline Data/delivery/delivery-report.md` and
`delivery-checklist.md` per `.claude/sops/12-delivery.sop.md`.

Build summary, QA score rollup (10.4a 0.9962, 10.4b 100% / 112/112, 10.4c
pass, 10.4d desktop 559ms/1.00 + mobile 2633ms/0.92), asset inventory (1
founder photo below preferred quality, 1 project image, 3 review-platform
badge icons, no team/office/press photos), and Apify spend ($0.1232 total)
all recorded.

Ran checklist verification against the live URL and the `dist/` bundle:
sitemap.xml 200, `application/ld+json` present, `tel:+17706964577` present,
zero em-dashes, zero `__REQUIRED__` sentinels in `dist/`, sticky mobile
header confirmed via 10.4b mobile checks.

Ran a Playwright smoke test of the LeadForm against the live URL (installed
playwright temporarily with `--no-save`, removed afterward): filling all 4
fields and submitting correctly shows the "Thank you" confirmation state.
However, code review of `LeadForm.jsx` shows the submit handler only calls
`preventDefault()` and sets local state, no email/webhook/CRM call exists.
Submitted leads are not currently captured anywhere. Flagged as a critical
pre-launch item in both delivery documents.

11/12 checklist items pass; the LeadForm backend-wiring item is logged as a
critical, documented exception per the SOP's failure-handling table.
Updated `pipeline-state.json` (`stage_12: complete_with_flags`).

Outstanding flags carried into delivery: founder photo quality (below
preferred 800x1000 studio spec), trust badge set (only 3 of 12 niche badges
confirmed for this client), LeadForm has no lead-capture backend, and Apify
social scrapes returned HTTP 402 this run.

Next: Stage 13 (Proposal). Note `credit.agency` in `brand-dna.json` still
holds the `__REQUIRED__AGENCY_NAME__` sentinel (not rendered in the shipped
site), suggesting `agency-brand.json` is not populated and Stage 13 may
halt pending `/setup-agency`.

## Stage 13, Proposal (2026-06-15)

Read `.claude/agents/14-proposal.md`. `clients/_agency/agency-brand.json` and
`tools/build-proposal.py` both exist (`/setup-agency` was completed for
Talisa's agency, Intake Agency, on 2026-06-15 per `stack-state.json`).
Proceeding with the proposal build.

## Stage 13, Proposal (2026-06-15T18:53:37.508116+00:00)
Status: failed
Output: clients\Bricks Law\Bricks Law Proposal\proposal.html
Unresolved placeholders: 4

## Stage 13, Proposal (2026-06-15T19:00:15.471893+00:00)
Status: complete
Output: clients\Bricks Law\Bricks Law Proposal\proposal.html
Unresolved placeholders: 0

## Stage 13, Proposal (2026-06-15T19:13:59.582857+00:00)
Status: complete
Output: clients\Bricks Law\Bricks Law Proposal\proposal.html
Unresolved placeholders: 0

## Stage 13, Proposal (2026-06-15T19:44:16.495123+00:00)
Status: complete
Output: clients\Bricks Law\Bricks Law Proposal\proposal.html
Unresolved placeholders: 0

## Stage 13, Proposal (2026-06-15T20:30:00+00:00)

Fixed the last open item: 6x `WARN: proposal-pages token {city} did not
resolve` (from `perServicePageTemplate` section descriptions containing
`{city}`). Added a `city_primary` parameter to `derive_page_data()` and
included `"city": city_primary` in `base_tokens`, sourced from
`vars_map["CITY_PRIMARY"]` ("Atlanta") at the call site in `main()`. Shared
fix in `tools/build-proposal.py`, applies to all future proposals. Re-ran
`tools/build-proposal.py --client "Bricks Law"`: 17 page entries, 6
services + 5 location chips, 0 `{city}` warnings, 0 unresolved `{{VAR}}`,
build IDs (#hero, #about, #service-area) verified.

Found `templates/proposal/agency-logo.svg` (referenced by the proposal
template's topbar and footer) did not exist anywhere in the repo, a
universal template gap, not specific to this client. Created a simple
"INTAKE AGENCY" wordmark SVG at `templates/proposal/agency-logo.svg`
(white text, gold "AGENCY" per the agency accent color `#EAB308`), copied
into this client's proposal folder by `copy_agency_static()`.

Deployed the proposal per `.claude/sops/14-proposal.sop.md`:
1. `vercel link --yes --project "bricks-law-website-proposal" --scope
   "talisa-sipuka-s-projects"`
2. `vercel --prod --yes --scope "talisa-sipuka-s-projects"`, deployment
   `dpl_59NXypUeNmJc8cpYe2jK3kSo5T3e`, aliased to
   `https://bricks-law-website-proposal.vercel.app`

All 4 smoke checks pass:
1. `GET /` -> 200
2. Title: "Your Custom Personal Injury Law Website Is Ready - Bricks Law |
   Intake Agency" (contains business name + AGENCY_NAME)
3. `GET /build/` -> 200
4. `GET /agency-logo.svg` -> 200

Status: complete
Output: clients\Bricks Law\Bricks Law Proposal\proposal.html
Production URL: https://bricks-law-website-proposal.vercel.app
Vercel project: bricks-law-website-proposal
Deployment ID: dpl_59NXypUeNmJc8cpYe2jK3kSo5T3e
Unresolved placeholders: 0

Stage 13 complete. Next: finalize the run (capture URLs into
`../deployments/factory/`, update root `stack-state.json`).
