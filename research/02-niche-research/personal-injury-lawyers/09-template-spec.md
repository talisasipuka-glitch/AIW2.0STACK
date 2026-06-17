# 09 — Template Spec (Personal Injury Lawyers)

Module 2D Phase 5a. Base reference: Morgan & Morgan (90/100, winner per `templates/pick.json`). Trust density borrowed from Dolman Law Group (89/100) where the niche research calls for a denser proof stack than Morgan & Morgan alone provides. End customer: a person recently injured, in pain, stressed, comparing firms within hours of searching (per `08-starter-template.md`).

---

## 1. Visual identity

- **Theme mode**: light. Serious, professional, trustworthy. Not a dark/moody theme.
- **Palette** (source: morgan-and-morgan captured colors):
  - `primary`: near-black (ink/charcoal) — header, footer, body text on light backgrounds, hero background block.
  - `accent`: bright yellow (`rgb(253,235,14)` family) — reserved ONLY for CTAs, dollar figures, and the "OPEN 24/7" badge. Never used as a body or large-surface color. This restraint is what gives Morgan & Morgan its visual coherence (12.5/12.5 in scores.md).
  - `neutral` / `silver`: light greys for section backgrounds and dividers, alternating with white to separate sections without hard borders.
  - `ink`: darkest shade, for headings and high-contrast text on light backgrounds.
- **Shape motif**: `chevron` (per `pick.json components.shapeMotif`). Sharp, angular accents (corner overlays, divider shapes, card edges) evoke forward motion and "fighting for you" without becoming a literal gavel/scales-of-justice cliche (08-starter-template.md explicitly flags generic legal iconography as an anti-pattern).
- **Corner overlay**: chevron motif, accent-yellow, low opacity (0.08), used sparingly on hero and CTA band backgrounds only.

## 2. Typography

- Heading and body fonts extracted from the morgan-and-morgan capture (`templates/raw/morgan-and-morgan/desktop/fonts.json`) via `extract-niche-design-tokens.py`. Expect a clean grotesque sans (Graphik-family or nearest available Google Fonts equivalent) for both heading and body, with heading at heavier weights (600-800) for dollar figures and headlines.
- Dollar figures and stat numbers use `tabular-nums` (universal foundation rule in `index.css.template`) so settlement amounts align in grids.

## 3. Motion

- Preset: **restrained** (per `studentNotes` in `pick.json` — premium, professional tone, not an energetic trade-service feel). `--motion-duration: 600ms`, `--motion-stagger: 90ms`. All motion honors `prefers-reduced-motion` per the universal foundation CSS.

## 4. Section composition (homepage), in order

Section order follows Morgan & Morgan (`sectionOrderFrom`), with Dolman-level trust density (`trustDensityFrom`) layered into the StatsBar and PressBand sections.

1. **Header** (global, sticky) — logo, practice-area nav, phone number with "CALL NOW" treatment repeated, "OPEN 24/7" badge persistent across scroll. Reads `brandDNA.contact.phone`, `brandDNA.contact.phoneTelLink`, `brandDNA.copy.topBar.cta`, `brandDNA.copy.availableNow`, `brandDNA.hours.emergencyBadge`.
2. **Hero** — H1 from `brandDNA.copy.hero.headline` (case-type-tagged settlement proof OR risk-removal framing per the 08-starter-template swipe file), subheadline `brandDNA.copy.hero.subheadline` ("No Win, No Fee. Guaranteed." + "Available 24/7"), hero image of named attorney(s) (`brandDNA.copy.hero.imageAlt`, `brandDNA.team.founder` / `brandDNA.team_group_photo`), trust chips (`brandDNA.copy.heroTrustChips`), and the primary **LeadForm** (4-field cap, see Section 6).
3. **ProcessSteps** — Morgan & Morgan's distinctive 3-step "how it works" placed directly below the hero, before any stats. Reads `brandDNA.process_steps[]` (`{n, title, body}`) and `brandDNA.copy.process.*`.
4. **StatsBar** — horizontal grid of settlement dollar figures tagged by case type (Dolman density: 4+ figures). Reads `brandDNA.services[]` for case-type names and a per-service settlement figure carried in `brandDNA.pages.services.items[]` (niche-specific extension within the canonical `pages.services` bucket).
5. **PressBand** — "as seen in" media logos or local "Best of [city]" / bar association badges for firms without national press. Reads `brandDNA.press_logos[]` and falls back to `brandDNA.trust_badges[]` when `press_logos` is empty.
6. **WhyChooseUs** — risk-removal bullets (no fee unless we win, available 24/7, direct attorney access, "not a settlement mill", bilingual where applicable). Reads `brandDNA.why_choose_us[]` and `brandDNA.copy.whyChoose.*`.
7. **PracticeAreasGrid** — one card per case type (car accident, truck accident, motorcycle accident, slip and fall, wrongful death, dog bite, brain injury). Each card shows case type, a dollar result, one-line description, links to `/case-types/{slug}`. Reads `brandDNA.services[]` + `brandDNA.pages.services.items[]` and `brandDNA.copy.services.*`.
8. **FounderStory** — named attorney photo + personal origin story ("I've been in your shoes" per Dolman, scores.md). Reads `brandDNA.team.founder`, `brandDNA.copy.founder.*`.
9. **Testimonials** — named clients with photo, case type, and outcome where possible. Reads `brandDNA.reviews.items[]`, `brandDNA.reviews.rating`, `brandDNA.copy.reviews.*`.
10. **FAQSection** — PAA-driven questions (cost, case value, "is it worth suing", timeline, partial fault). Reads `brandDNA.faq[]`, `brandDNA.copy.faq.*`. Tagged with `FAQPage` schema.
11. **CTABand** — final conversion push before the footer. Reads `brandDNA.copy.cta.*`.
12. **Footer** (global) — repeats the 4-field LeadForm, displays `brandDNA.hours.display`, bar association links, `brandDNA.company.licenseNumber`, `brandDNA.copy.footerCta`, `brandDNA.copy.copyright`.

## 5. Case-type landing page composition

Each of the 7 case-type pages (`/case-types/{slug}`) carries the FULL trust stack, not a stripped-down version, per `08-starter-template.md`:

1. **CaseTypeHero** — H1 "[Case type] Lawyer in [City] | [Firm Name]" pattern. Reads `brandDNA.company.name`, `brandDNA.address.city`, and the matching entry in `brandDNA.pages.services.items[]`.
2. **RiskRemovalBand** — "No win, no fee" + 24/7 availability restated. Reads `brandDNA.copy.trustClaims[]`.
3. **StatsBar** — single large settlement figure for THIS case type, prominent.
4. **CaseTypeExplainer** — what to do after this accident type, what compensation typically covers. Content from `pages.services.items[].body`.
5. **FAQSection** — case-type-specific FAQ (e.g. "What if the other driver has no insurance?" for car accidents). Reads `pages.services.items[].faq[]`.
6. **CTABand** + repeated 4-field LeadForm at the bottom.

## 6. Form pattern (CRO deviation, per `pick.json.notedDeviation`)

- **Primary hero/footer LeadForm**: capped at 4 fields — name, phone, email, one-line case description. This resolves Morgan & Morgan's 5-field violation (scores.md: 8/12.5 on form friction) and the niche-wide pattern of 5-7+ field forms (04-cro-patterns.md, Omar Ochoa 7+ fields = worst-in-niche).
- **Second-step qualification** (post-submit or follow-up call): case type, zip/location, injury status, language preference. NOT part of the `LeadForm` component's first-ask fields; documented in `niche-playbook/cro-rules.md` for Stage 6 copy and Stage 11 intake routing.
- **Secondary CTA**: phone number, sticky in header, "CALL NOW" — preserved as-is from Morgan & Morgan, the strongest pattern in the niche (04-cro-patterns.md).

## 7. Trust stack order (every page)

Per `08-starter-template.md`, repeated here as the canonical order Phase 6 components and Phase 10 design-fidelity weights both reference:

1. No win, no fee / contingency guarantee (near every CTA)
2. Settlement-dollar proof, tagged by case type
3. Press / "as seen in" or local award badges
4. Risk-removal "why choose us" bullets
5. Case results grid with dollar figures
6. Named attorney story and photo
7. Testimonials with photos, tied to case type and outcome
8. FAQ (PAA-driven)
9. Office locations (multi-office firms only — `brandDNA.location_pages[]`, defaults to `[]` for single-office clients and the section is omitted)

## 8. SEO / schema (per `06-seo-landscape.md`)

- `Attorney` / `LegalService` / `LocalBusiness` JSON-LD via `inject-theme.mjs`, populated from `brandDNA.company`, `brandDNA.address`, `brandDNA.contact`, `brandDNA.hours` ("Open 24 hours" pattern is universal in this niche's GBP data).
- `AggregateRating` / `Review` schema from `brandDNA.reviews`.
- `FAQPage` schema on the FAQ section and every case-type page's FAQ block.
- `BreadcrumbList` on case-type pages.
- Case-type pages are the clearest SEO gap per `06-seo-landscape.md` ("[case type] lawyer [city]" outranks generic "personal injury lawyer [city]" for case-specific searches) — shipping all 7 as pre-built pages is the template's primary differentiator for a small firm.

## 9. Imagery direction

- People-centric: named attorneys with faces, client testimonial photos. No gavel/scales-of-justice stock imagery (explicit anti-pattern, 08-starter-template.md).
- Dollar figures and stats are visually prominent — large type, grid layout, accent-yellow highlight on the figure itself.
