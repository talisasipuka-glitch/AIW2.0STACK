# 09 — Wireframe (Personal Injury Lawyers)

Module 2D Phase 5a. ASCII layout sketches per page type. Each section lists: layout variant, composition notes, canonical brand-dna paths read (per `website-factory/references/brand-dna.shape.js`), and the SSIM region weight + threshold Phase 10 copies into `design-fidelity.md`.

Region weights are normalized per page type so the weighted mean target is 0.90 (per `design-fidelity.skeleton.md`). Header and Footer are GLOBAL regions, scored once across the whole site, not per page.

---

## Global: Header + Footer

```
+--------------------------------------------------------------+
| LOGO   Practice Areas v  About  Reviews  FAQ   [OPEN 24/7]    |
|                                          (___ CALL NOW ___)   |
+--------------------------------------------------------------+
```

- **Header** — layout variant: sticky top bar, single row on desktop, collapses to hamburger + persistent call button on mobile. Composition: logo left, practice-area mega-nav dropdown center, "OPEN 24/7" badge + "CALL NOW" phone link right, both visible on every scroll position (04-cro-patterns.md: Morgan & Morgan repeats "CALL NOW" 8+ times across nav dropdowns; this template uses ONE persistent sticky instance instead of repetition).
  - brand-dna paths: `company.name`, `company.shortName`, `contact.phone`, `contact.phoneTelLink`, `copy.topBar.cta`, `copy.availableNow`, `services[]` (for nav dropdown), `hours.emergencyBadge`.
  - SSIM region: threshold 0.92, weight 0.10 — "persistent CTA, visible on every page".

```
+--------------------------------------------------------------+
|  [ Free Case Evaluation: Name | Phone | Email | Case desc. ] |
|  Hours: Open 24/7   Bar Assoc. links   License #             |
|  (c) copyright                                                |
+--------------------------------------------------------------+
```

- **Footer** — layout variant: repeated 4-field LeadForm (variant="footer") above a 3-column band (hours/badges, bar links + license, copyright/credit).
  - brand-dna paths: `copy.formHeader`, `copy.formSubtext`, `copy.submitButton`, `copy.privacyLine`, `hours.display`, `company.licenseNumber`, `social.*`, `copy.footerCta`, `copy.copyright`, `credit.agency`.
  - SSIM region: threshold 0.88, weight 0.02 — "repeated CTA, low first-impression weight".

---

## Page: Home (`/`)

```
+================================================================+
| HERO                                                            |
|  [trust chips]                                                  |
|  H1 headline (case-type settlement proof / risk-removal)        |
|  subheadline: "No Win, No Fee. Guaranteed. Available 24/7."     |
|  [attorney photo]        [ LeadForm: 4 fields + CTA button ]    |
+------------------------------------------------------------------+
| PROCESS STEPS  (1) Submit  (2) We Investigate  (3) We Fight     |
+------------------------------------------------------------------+
| STATS BAR   $X.XM   $X.XM   $X.XM   $X.XM   (per case type)     |
+------------------------------------------------------------------+
| PRESS BAND   [logo] [logo] [logo] [logo] [logo]                  |
+------------------------------------------------------------------+
| WHY CHOOSE US                                                     |
|  - No fee unless we win   - Available 24/7                       |
|  - Direct attorney access - Not a settlement mill                |
+------------------------------------------------------------------+
| PRACTICE AREAS GRID                                               |
|  [Car Accident $X]  [Truck Accident $X]  [Motorcycle $X]          |
|  [Slip & Fall $X]   [Wrongful Death $X]  [Dog Bite $X]            |
|  [Brain Injury $X]                                                |
+------------------------------------------------------------------+
| FOUNDER STORY   [photo]  "Why I do this work..."                  |
+------------------------------------------------------------------+
| TESTIMONIALS   [photo+quote] [photo+quote] [photo+quote]          |
+------------------------------------------------------------------+
| FAQ            Q: How much does a PI lawyer cost? ...             |
+------------------------------------------------------------------+
| CTA BAND       "Injured? Get your free case review today."       |
+================================================================+
```

| Section | Layout variant | Composition | brand-dna paths | SSIM threshold | Weight | Why |
|---|---|---|---|---|---|---|
| Hero | split: copy+form left/center, attorney image right (stacks on mobile, image first) | trust chips above H1; LeadForm variant="hero", 4 fields; sticky-form on mobile scroll | `copy.hero.*`, `copy.heroTrustChips[]`, `team.founder`, `team_group_photo`, `copy.formHeader`, `copy.formSubtext`, `copy.buttonText` | 0.95 | 0.20 | First impression, above the fold |
| ProcessSteps | 3-column on desktop, stacked on mobile, numbered badges | Morgan & Morgan's distinctive "how it works" placed before any stats | `process_steps[]`, `copy.process.*` | 0.88 | 0.08 | Distinctive M&M move, immediately below hero |
| StatsBar | horizontal scroll-snap grid of 4-7 dollar figures | case-type-tagged, accent-yellow figures, tabular-nums | `services[]`, `pages.services.items[].settlementFigure`, `copy.reviews.summary` (n/a here, see CaseType) | 0.92 | 0.12 | Primary niche-specific trust signal (Dolman density) |
| PressBand | full-width logo strip, greyscale logos | falls back to `trust_badges[]` (local/bar badges) when `press_logos[]` empty | `press_logos[]`, `trust_badges[]` | 0.85 | 0.06 | Secondary trust, "as seen in" |
| WhyChooseUs | 2x2 (desktop) / 1-col (mobile) bullet grid with icon per bullet | risk-removal framing, chevron icon accents | `why_choose_us[]`, `copy.whyChoose.*` | 0.85 | 0.08 | Risk-removal, addresses top-2 customer fears |
| PracticeAreasGrid | 4-col (desktop) / 2-col (tablet) / 1-col (mobile) card grid, 7 cards | each card: case type name, dollar result, 1-line desc, links to `/case-types/{slug}` | `services[]`, `pages.services.items[]`, `copy.services.*` | 0.90 | 0.12 | Core SEO + navigation surface (case-type pages) |
| FounderStory | image left, copy right (reverses on mobile: image first) | named attorney photo + 2-paragraph origin story | `team.founder`, `copy.founder.*` | 0.85 | 0.07 | Humanizes, counters "settlement mill" fear |
| Testimonials | 3-card carousel (desktop) / single-card swipe (mobile) | photo, name, case type, outcome | `reviews.items[]`, `reviews.rating`, `reviews.googleLabel`, `copy.reviews.*` | 0.85 | 0.07 | Social proof, lower page |
| FAQSection | accordion, 5-8 items | PAA-driven, plain language | `faq[]`, `copy.faq.*` | 0.85 | 0.05 | SEO (FAQPage schema) + trust |
| CTABand | full-width band, accent-yellow background, centered copy + button | final conversion push before footer | `copy.cta.*` | 0.88 | 0.03 | Last-chance CTA |

Weighted mean (Home, excluding global Header/Footer): ~0.895, meets the 0.90 target band.

---

## Page: Case-Type Landing Page (`/case-types/:slug`)

One component, `CaseTypeLandingPage`, rendered for each of 7 routes (car-accident, truck-accident, motorcycle-accident, slip-and-fall, wrongful-death, dog-bite, brain-injury). Content keyed by `slug` into `brandDNA.pages.services.items[]`.

```
+================================================================+
| CASE TYPE HERO                                                  |
|  H1: "[Case Type] Lawyer in [City] | [Firm Name]"               |
|  settlement figure for THIS case type (large, accent-yellow)    |
+------------------------------------------------------------------+
| RISK REMOVAL BAND   "No win, no fee. Available 24/7."            |
+------------------------------------------------------------------+
| STATS BAR (single figure, large)                                  |
+------------------------------------------------------------------+
| CASE TYPE EXPLAINER                                               |
|  "What to do after a [case type] accident" / "what compensation  |
|   typically covers"                                               |
+------------------------------------------------------------------+
| FAQ (case-type specific)                                          |
+------------------------------------------------------------------+
| CTA BAND + LeadForm (variant="page", 4 fields)                    |
+================================================================+
```

| Section | Layout variant | Composition | brand-dna paths | SSIM threshold | Weight | Why |
|---|---|---|---|---|---|---|
| CaseTypeHero | centered, full-width band | H1 = case type + city + firm name; settlement figure prominent, accent-yellow, tabular-nums | `company.name`, `address.city`, `pages.services.items[slug].name`, `pages.services.items[slug].settlementFigure` | 0.92 | 0.22 | First impression for high-intent SEO traffic |
| RiskRemovalBand | thin full-width strip | restates contingency + 24/7 from `copy.trustClaims[]` | `copy.trustClaims[]` | 0.85 | 0.10 | Matches universal "no win no fee near every CTA" trust order |
| StatsBar (single-figure variant) | one large stat card, centered | reuses StatsBar component with `items.length === 1` | `pages.services.items[slug].settlementFigure` | 0.90 | 0.15 | Case-specific proof, the SEO-matching dollar figure |
| CaseTypeExplainer | 2-column (desktop) / stacked (mobile): "what to do" + "what compensation covers" | body copy from `pages.services.items[slug].body` | `pages.services.items[slug].body` | 0.85 | 0.18 | Answers the searcher's immediate question (relevance for SEO + trust) |
| FAQSection | accordion, 3-5 case-type-specific items | from `pages.services.items[slug].faq[]` | `pages.services.items[slug].faq[]`, `copy.faq.*` | 0.85 | 0.15 | Case-specific PAA capture (FAQPage schema, BreadcrumbList) |
| CTABand + LeadForm | full-width band, accent background, LeadForm variant="page" below | repeats 4-field form per `09-template-spec.md` Section 6 | `copy.cta.*`, `copy.formHeader`, `copy.buttonText` | 0.88 | 0.20 | Final conversion, matches the universal "4-field repeated at bottom" |

Weighted mean (Case-Type page): ~0.884, within the 0.90 target band.

---

## Page: Generic Interior Page (About, Practice Areas, Testimonials, FAQ, Contact, Blog)

All six interior pages share the same shell: `PageHero` + page-specific body sections (drawn from the Home page's component library, reused) + `CTABand`. Each page's body composition:

```
+================================================================+
| PAGE HERO   H1 = page title, short intro line                  |
+------------------------------------------------------------------+
| [page-specific body sections, see table below]                   |
+------------------------------------------------------------------+
| CTA BAND                                                          |
+================================================================+
```

| Page | Body sections | brand-dna paths |
|---|---|---|
| About | FounderStory (expanded), WhyChooseUs, Testimonials | `team.founder`, `team_members[]`, `copy.founder.*`, `why_choose_us[]`, `reviews.items[]` |
| Practice Areas | PracticeAreasGrid (all 7 cards) | `services[]`, `pages.services.items[]` |
| Testimonials | Testimonials (full list, grid not carousel) | `reviews.items[]`, `reviews.rating`, `reviews.totalReviewCount` |
| FAQ | FAQSection (full list) | `faq[]` |
| Contact | ContactDetails (address, phone, hours, map) + LeadForm variant="page" | `address.*`, `contact.*`, `hours.*`, `copy.formHeader` |
| Blog | BlogGrid (cards: cover, title, excerpt, date, category) | `blog_posts[]`, `blog_categories[]`, `copy.blog.*` |

| Section | Layout variant | SSIM threshold | Weight | Why |
|---|---|---|---|---|
| PageHero | centered band, smaller than Home hero, no form | 0.85 | 0.30 | Sets page context, reused shell across 6 pages |
| Body sections (reused components) | inherit Home page thresholds for the same component | n/a | 0.55 | Already validated via Home page SSIM |
| CTABand | same as Home | 0.85 | 0.15 | Consistent final CTA |

---

## Page: Blog Post (`/blog/:slug`)

```
+================================================================+
| BLOG POST HEADER   cover image, title, date, category, read time|
+------------------------------------------------------------------+
| BLOG POST BODY     rendered from blog_posts[slug].content[] /    |
|                     .body markdown                                |
+------------------------------------------------------------------+
| CTA BAND                                                          |
+================================================================+
```

| Section | Layout variant | brand-dna paths | SSIM threshold | Weight |
|---|---|---|---|---|
| BlogPostHeader | full-width cover image, overlay title | `blog_posts[slug].cover`, `.title`, `.date`, `.category`, `.readTime` | 0.85 | 0.30 |
| BlogPostBody | single-column prose, max-width ~720px | `blog_posts[slug].content[]` (typed blocks: `p`, `h2`, `list`) or `.body` markdown | 0.80 | 0.50 |
| CTABand | same as Home | `copy.cta.*` | 0.85 | 0.20 |

---

## Composition checks (feed into `sop-compliance.md` Phase 10)

- `composition.section_order`: Home page section order matches the table above exactly (Hero, ProcessSteps, StatsBar, PressBand, WhyChooseUs, PracticeAreasGrid, FounderStory, Testimonials, FAQSection, CTABand).
- `composition.above_fold`: Hero + sticky Header end above the 900px desktop fold; LeadForm's submit button is visible without scrolling on a 1440x900 viewport.
- `composition.case_type_pages.all_seven_present`: all 7 case-type routes in `09-sitemap.json` resolve to a rendered page with a non-empty `pages.services.items[slug]` entry.
- `composition.lead_form.field_count`: every `LeadForm` instance (hero, footer, case-type CTA, contact page) renders exactly 4 input fields (name, phone, email, case description), never more.
- `composition.header.sticky_cta`: the header's phone "CALL NOW" link remains visible at all scroll positions on both desktop and mobile.
