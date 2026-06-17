# Module 2D — Site Scores (Personal Injury Lawyers)

Source: Apify `apify/playwright-scraper` captures (desktop 1440x900 + mobile 390x844, DOM + colors + fonts) for all 6 candidates, cross-referenced with Sub-task 3 (copy patterns) and Sub-task 4 (CRO patterns, screenshot-based) for dolmanlaw.com, omarochoalaw.com, morganandmorgan.com.

Rubric: 8 categories, 12.5 points each, 100 total. CTA visibility, trust signal density, hero clarity, mobile pattern, visual coherence, navigation, form friction, conversion confidence.

---

## 1. Morgan & Morgan (morganandmorgan.com) — 90/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 12.5/12.5 | Sticky header repeats "CALL NOW" across multiple practice-area dropdowns, "OPEN 24/7" badge persistent across scroll. Best-in-class persistent CTA. |
| Trust signal density | 11/12.5 | National brand recognition, ABC/CNN/Fox/NBC press logos, but less case-specific dollar-tagging than Dolman. |
| Hero clarity | 12/12.5 | "For the People, Not the Powerful" us-vs-them framing + hero video + 3-step "how it works." |
| Mobile pattern | 11/12.5 | Sticky call bar persists on mobile per Sub-task 4. |
| Visual coherence | 12.5/12.5 | Distinctive black/white/bright-yellow (rgb(253,235,14)) brand palette, immediately recognizable, used consistently. |
| Navigation | 11/12.5 | Practice-area dropdown mega-nav is dense but well organized. |
| Form friction | 8/12.5 | Hero form: first/last name, phone, zip, email, case description — 5 fields, one over the 4-field universal floor, but leaner than Omar Ochoa. Repeated verbatim in footer. |
| Conversion confidence | 12/12.5 | Multiple converging CTAs (form + sticky phone), national trust, clear process framing. |

**Distinctive moves:** sticky "CALL NOW" header treatment; single saturated brand-yellow accent color used only for CTAs/highlights; 3-step "how it works" placed directly below hero, before any stats.

**Anti-patterns:** dense practice-area mega-nav could overwhelm a first-time visitor; 5-field form still above the universal 4-field guidance.

---

## 2. Dolman Law Group (dolmanlaw.com) — 89/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 12/12.5 | "Free Case Evaluation" hero CTA + "You owe us nothing until we recover compensation" risk-removal line adjacent. |
| Trust signal density | 12.5/12.5 | $6.7M/$5M/$3.2M/$3.85M settlement grid immediately below hero, 7-outlet press band (Inc., Forbes, Entrepreneur, People, HuffPost, Bloomberg), "Results We Get" case-card grid, founder personal story. Densest trust stack of the 6. |
| Hero clarity | 12/12.5 | Three-attorney group photo, arms crossed, direct eye contact + "OUR FIGHT. YOUR VICTORY." headline. |
| Mobile pattern | 10/12.5 | Per Sub-task 4 screenshot crawl, structure holds on mobile but stat grid likely stacks tall. |
| Visual coherence | 11.5/12.5 | Earthy tan (rgb(185,148,118)) + navy + black/white palette reads as serious and premium, distinct from the generic navy/gold "law firm" look. |
| Navigation | 10/12.5 | Standard top nav, not a differentiator either way. |
| Form friction | 9/12.5 | Not the worst offender in the niche; lean-scope research didn't surface an excessive field count for this firm specifically. |
| Conversion confidence | 12/12.5 | Founder origin story ("I've been in your shoes") + "not a settlement mill" positioning directly answers Sub-task 2's top fears. |

**Distinctive moves:** case-type-tagged settlement stat grid as the first thing after the hero; founder personal story as an emotional trust mechanism; "Results We Get" grid with dollar amounts per case type (mirrors the case-type landing page pattern).

**Anti-patterns:** none significant identified in this pass.

---

## 3. Perdue & Kidd (perdueandkidd.com) — 81/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 10/12.5 | "View all Case Results" / "View all Case Types" are clear but route through a click before any contact path — no immediate hero lead form detected. |
| Trust signal density | 9/12.5 | Smaller firm (5.0 stars / 30 reviews per Sub-task 6 SERP data); case-type framing is present but without the loud dollar-stat grids of the larger firms. |
| Hero clarity | 10/12.5 | H1 "Perdue & Kidd Personal Injury Accident Lawyers in Houston, TX" — plain category + city + firm name, no settlement hook. |
| Mobile pattern | 10/12.5 | Modern font stack (azo-sans-web, acumin-pro-condensed) suggests a contemporary, responsive build. |
| Visual coherence | 12/12.5 | Clean near-black/white/navy palette with a modern sans + condensed-sans pairing — the most restrained, design-led palette of the 6. |
| Navigation | 10/12.5 | Case-type-led navigation matches the niche's SEO content-gap opportunity (Sub-task 6). |
| Form friction | 11/12.5 | No 7+ field monster form (0 input fields detected on homepage) — low friction, though this may also mean no immediate lead-capture on the homepage itself. |
| Conversion confidence | 9/12.5 | Lacks the loud aggregate trust signals (press logos, settlement totals) bigger firms lean on; relies more on case-type navigation and implied reputation. |

**Distinctive moves:** modern, restrained typography (azo-sans-web / acumin-pro-condensed) breaks from the generic "law firm" template look; case-type-first navigation.

**Anti-patterns:** no hero lead-capture form detected — a small firm's site shouldn't make the visitor click through to a case-type page before any contact option appears.

---

## 4. Omar Ochoa Law Firm (omarochoalaw.com) — 74/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 10/12.5 | "Free Case Evaluation" / "Don't settle for less than you deserve!" CTAs present, paired with phone-first "Call Us." |
| Trust signal density | 12/12.5 | "$1 Billion Recovered" headline stat, "why choose us" bullets, multi-office locations grid (McAllen, Houston, Edinburg, San Antonio), Spanish-speaking badge, video testimonial. |
| Hero clarity | 11/12.5 | "Over $1 Billion Recovered" + "No Win, No Fee. Guaranteed." is a strong two-line hero. |
| Mobile pattern | 9/12.5 | 7+ field hero form is especially punishing on mobile. |
| Visual coherence | 8/12.5 | Default unstyled link color (rgb(0,0,238), browser default blue) detected in the captured CSS — a legacy/unstyled-element signal that undercuts an otherwise navy/white palette. |
| Navigation | 9/12.5 | Multi-office structure adds navigation complexity. |
| Form friction | 5/12.5 | Hero form runs 7+ fields (name, phone, email, Texas-resident flag, location, injury status, practice area, language, message) — the worst form-friction violation among the 6, well above the universal 4-field floor. |
| Conversion confidence | 10/12.5 | Strong aggregate trust stat, but the form friction likely costs completed submissions. |

**Distinctive moves:** "$1 Billion Recovered" as a single eye-popping cumulative stat; explicit Spanish-language service callout; multi-office locations grid.

**Anti-patterns:** 7+ field hero form (clearest CRO violation in the niche, flagged in Sub-task 4); unstyled default link color suggests incomplete CSS coverage.

---

## 5. PM Law Firm (pmtxlaw.com) — 60/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 8/12.5 | Phone number ("281-968-9529") + "Contact Us Now" present, phone-first matches niche pattern, but no surrounding trust stack to reinforce it. |
| Trust signal density | 7/12.5 | No press logos, settlement grids, or "why choose us" bullets detected — smaller firm with a thinner trust stack. |
| Hero clarity | 7/12.5 | H1 "PM Law Firm Personal Injury Lawyers" — plain firm name + category, no hook, no settlement figure, no risk-removal line. |
| Mobile pattern | 8/12.5 | No specific mobile signal beyond the general theme stack. |
| Visual coherence | 6/12.5 | Captured font list includes Open Sans, Questrial, Raleway, Roboto, Roboto Slab plus multiple icon-font sets (FontAwesome, sow-fontawesome) — a generic multi-font WordPress theme stack, low typography discipline. |
| Navigation | 8/12.5 | Standard, unremarkable. |
| Form friction | 9/12.5 | Only 1 input field detected on the homepage — low friction, but may indicate no real lead-capture form (a search box or newsletter field instead). |
| Conversion confidence | 7/12.5 | Phone-first CTA without supporting trust signals leaves the visitor with little reason to act beyond "call this number." |

**Distinctive moves:** practice-area subpages (car accident, truck accident, FedEx-truck-accident per Sub-task 3) demonstrate case-type landing page structure even if the homepage itself is thin.

**Anti-patterns:** generic multi-font WordPress theme stack signals low design investment; homepage lacks any trust-stack elements (no press, no stats, no "why choose us").

---

## 6. Gair Gair Conason (gairgair.com) — 56/100

| Category | Score | Rationale |
|---|---|---|
| CTA visibility | 8/12.5 | "Click Here to Open Contact Us Now" and "Tap Here to Call Us" are present but phrased awkwardly (literal click/tap instructions rather than benefit-led CTAs). |
| Trust signal density | 8/12.5 | Large established NYC firm, but the captured CTA/heading set surfaces "Lectures and Articles by our Attorneys" — attorney-credential content aimed at peers, not the injured end customer. |
| Hero clarity | 8/12.5 | H1 "NYC Personal Injury Lawyers" — plain category + geography, no settlement hook or risk-removal line surfaced. |
| Mobile pattern | 7/12.5 | "Tap Here" phrasing suggests a mobile-adapted but dated interaction pattern. |
| Visual coherence | 7/12.5 | Navy (rgb(32,61,107)) + brown/gold (rgb(141,97,32)) + amber (rgb(237,170,0)) is the conservative "traditional law firm" palette — functional but undifferentiated from dozens of competitors. |
| Navigation | 8/12.5 | Standard. |
| Form friction | 3/12.5 | 22 input fields detected on the homepage — by far the most severe form-friction violation in the niche, an order of magnitude above even Omar Ochoa's 7-field form. |
| Conversion confidence | 7/12.5 | Large-firm credibility offset by a dated interface and an extreme-friction contact form. |

**Distinctive moves:** none that stand out positively for the end customer.

**Anti-patterns:** 22-field form is a severe CRO violation; "Lectures and Articles by our Attorneys" CTA targets attorney-ego/peer-credibility rather than the injured end customer's decision moment; conservative navy/gold palette is the least differentiated of the 6.

---

## Summary ranking

1. Morgan & Morgan — 90/100
2. Dolman Law Group — 89/100
3. Perdue & Kidd — 81/100
4. Omar Ochoa Law Firm — 74/100
5. PM Law Firm — 60/100
6. Gair Gair Conason — 56/100

Top 3 (presented to student in Phase 4): Morgan & Morgan, Dolman Law Group, Perdue & Kidd.
