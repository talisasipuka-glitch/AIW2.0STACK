<!-- niche-playbook v1 -->
# SOP Override: 00-master (Personal Injury Lawyers)

Per-niche overrides to the universal master blueprint at
`.claude/sops/00-master-blueprint.md`. Universal invariants (zero em-dashes,
schema validity, prefers-reduced-motion, etc.) inherit unchanged.

---

## 1. Locked CRO copy (cross-references `copy-locks.json`)

- ctaPrimary: "Get Your Free Case Review"
- ctaSecondary: "Call Now, 24/7"
- formHeader: "Free Case Evaluation. No Fee Unless We Win."
- formPrivacy: "Your information stays private. We never sell or share your details with anyone."
- mobileCallLabel: "CALL NOW"

## 2. Section counts

- Trust signal claim count: 4 (hero trust chips, from `copy-locks.json` `heroTrustClaims`)
- Trust signal badge count: 9 (from `trust-signals.json` `trustStripCount`)
- Process section step count: 3 (from `process.json` `stepCount`)
- Reviews shown on homepage: 4-6
- FAQ items shown: 5-8 (homepage); 3-5 (per case-type page)
- Trust-badge placements: hero, floating-strip, why-choose-us, reviews, footer, service-page (from `trust-signals.json` `placements`)

## 3. Page order (from `09-template-spec.md` Section 4)

Homepage section order, exactly:

1. Header (global, sticky)
2. Hero
3. ProcessSteps
4. StatsBar (Settlement Results Bar)
5. PressBand
6. WhyChooseUs
7. PracticeAreasGrid
8. FounderStory
9. Testimonials
10. FAQSection
11. CTABand
12. Footer (global)

Stage 10.4b verifies the build's `HomePage.jsx` renders sections in this
exact order.

## 4. Required sections (cannot be omitted)

- Hero (with 4-field LeadForm)
- ProcessSteps
- StatsBar
- WhyChooseUs
- PracticeAreasGrid (all 7 case-type cards)
- FounderStory (must reference a named individual, see Section 6)
- FAQSection
- CTABand
- Footer (with repeated 4-field LeadForm)

## 5. Conditional sections (render when data exists)

- PressBand: renders media logos if `press_logos[]` is non-empty, otherwise
  falls back to `trust_badges[]`. Never renders empty.
- Testimonials: renders if `reviews.items[]` has at least 1 entry. If 0
  reviews exist, this section is replaced by an "early reviews" placeholder
  module per `copywriting.md` Section 7, never a fabricated testimonial.
- Office Locations grid: renders only if `location_pages[].length >= 2`
  (multi-office firms). Single-office firms omit this section entirely.

## 6. Niche-specific cross-cutting rules

- The FounderStory section must reference a NAMED individual (from
  `team.founder`) with a photo. A generic "our attorneys" or "our team"
  framing fails Stage 10.4b.
- Every dollar figure rendered anywhere on the site (StatsBar, case-type
  pages, founder cards) uses `tabular-nums` and is tagged with a case type.
  An untagged dollar figure fails Stage 10.4b.
- "No win, no fee" (or the client's contingency equivalent from
  `copy-locks.json` `trustStripClaims`) must appear at least once near every
  primary CTA: hero, mid-page CTAs, case-type CTA bands, and the final CTA
  band. The footer form alone does not satisfy this.
- The "OPEN 24/7" badge (or the client's actual hours if not 24/7, see Halt
  Conditions) is persistent in the sticky header across all scroll
  positions.
- The chevron shape motif (`shape_motif: "chevron"`) appears ONLY on the
  hero background and the final CTA band background, at 0.08 opacity, in
  the accent color. It does not appear as a repeating pattern across other
  sections.
- The accent color (`palette.accent`, bright yellow by niche default) is
  used ONLY for: CTAs/buttons, dollar figures, and the "OPEN 24/7" /
  availability badge. It never appears as a body-text color, large
  background fill, or card background outside these uses.

## 7. Halt conditions

In addition to the universal halt conditions:

- All 7 case-type pages (`/practice-areas/{slug}` per `09-sitemap.json`) must
  resolve to a rendered page with a non-empty `pages.services.items[slug]`
  entry. If any case-type slug is missing data, Stage 10.1 halts with a
  pointer back to Stage 5 (strategy) to populate `services[]` with all 7
  case types.
- Every `LeadForm` instance must render exactly 4 fields (name, phone, email,
  case description). If a client's brand-dna or copy-deck attempts to add a
  5th field to the first-ask form, Stage 10.4b halts and points to
  `cro-rules.md` Section 3 (the second-step qualification flow is the
  correct destination for additional fields).
- If `team.founder.name` is a placeholder sentinel (e.g.
  `__REQUIRED__FOUNDER_NAME__`) at Stage 10.1, the build halts, this niche
  cannot ship without a named attorney.
- If the founder photo (`photo-manifest.json` `founder-photos` category) is
  below `minCount: 1` at Stage 4, Stage 9 (hero image) halts per
  `hero-composition.md` Section 2, this niche does not generate a
  subject-less hero.

## 8. 4-field form cap, deviation from a "collect full contact details" SOP

If the universal master blueprint or any other SOP instructs "collect full
contact details on first ask" (name, phone, email, address, and additional
qualification fields), this niche OVERRIDES that instruction. The first-ask
LeadForm caps at 4 fields (name, phone, email, one-line case description).
Address, case type, zip/location, injury status, and language preference are
collected in a second-step flow (post-submit confirmation or follow-up
call), per `cro-rules.md` Section 3. This override exists because every
crawled competitor in this niche runs 5-7+ field hero forms and still
underperforms the universal 4-field floor on form friction (see
`04-cro-patterns.md`); the niche template intentionally resolves that
industry-wide CRO gap rather than matching it.

## 9. All-seven-case-type-pages-shipped requirement

This niche's primary SEO and conversion differentiator (per
`06-seo-landscape.md` and `08-starter-template.md`) is shipping all 7
case-type landing pages (car accident, truck accident, motorcycle accident,
slip and fall, wrongful death, dog bite, brain injury) as fully-built pages
with the FULL trust stack, not stripped-down variants. Stage 10.1 and Stage
10.4b both halt if fewer than 7 case-type pages are present in the build, or
if any case-type page is under the 500-word minimum from `copywriting.md`
Section 9.

---

## Source traceback

```
## Source traceback
- Cross-cutting rules: derived from morgan-and-morgan (palette discipline,
  sticky CTA), dolman-law-group (trust density, named founder)
- Conditional section logic: dolman-law-group (has press band),
  pm-law-firm (single-office, no location grid)
- 4-field form override: 04-cro-patterns.md Trust SOP B3 divergence analysis
- All-7-case-types requirement: 06-seo-landscape.md content gap analysis
```
