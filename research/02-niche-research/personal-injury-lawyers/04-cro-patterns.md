# 04 — CRO Patterns That Win (Personal Injury Lawyers)

Source: `apify/website-content-crawler` with `saveScreenshots: true` (Recipe 4, run `K13fmefwNrWn8gMxc`) on 3 homepages (omarochoalaw.com, dolmanlaw.com, morganandmorgan.com), cross-referenced with the full Recipe 3 homepage text crawl (Sub-task 3).

---

## Most common section order

1. **Hero** — firm name/tagline + a primary stat (settlement total, "no win no fee" guarantee) + a lead-capture form or "Free Case Evaluation" CTA, almost always visible without scrolling.
2. **Settlement/results stats bar** — a horizontal grid of dollar figures tagged by case type (Dolman: $6.7M / $5M / $3.2M / $3.85M), sitting directly below the hero.
3. **"As seen in" / press logos** — major media outlet logos (Inc., Forbes, Entrepreneur, People, HuffPost, Bloomberg for Dolman; ABC/CNN/Fox/NBC for Morgan & Morgan) appear immediately after the hero/stats, before any body copy.
4. **"Why choose us" / firm difference** — bulleted reasons-to-choose (personalized representation, proven results, available 24/7, no fee unless we win, Spanish-speaking, etc.) — Omar Ochoa places this directly under the practice-area selector.
5. **Practice areas / case results grid** — case-type cards with specific dollar amounts ("Burn Injury $3,000,000", "Truck Accident $1,750,000.00") — Dolman runs an entire "Results We Get" section as a grid of case cards.
6. **Founder/attorney presence** — a named individual (Matthew Dolman, Omar Ochoa) with photo, video, or personal story, positioned roughly mid-page.
7. **Testimonials / reviews** — client photo + name + review, often with a Google reviews widget — positioned after the founder section, not in the hero.
8. **"How it works" process** — Morgan & Morgan's 3-step "Submit your claim / We take action / We fight for you" sits directly below the hero video, before any stats or testimonials.
9. **Locations / offices grid** — multi-office firms (Omar Ochoa: McAllen, Houston, Edinburg, San Antonio) show an office-location grid lower on the page.
10. **Footer with repeated form** — a second full lead-capture form appears near the bottom of the page (Morgan & Morgan repeats the entire hero form in the footer area).

## Hero composition

- **Imagery subject:** group photo of the attorney team (Dolman: three attorneys, arms crossed, looking directly at camera) or a single named attorney in a suit (Omar Ochoa, Morgan & Morgan's "John Morgan" pointing-at-camera spokesperson image) — faces are the dominant hero visual, not case photos or generic stock imagery.
- **Primary CTA:** "Free Case Evaluation" / "Request a Free Case Review" — almost always a multi-field form placed directly in or beside the hero (Omar Ochoa's hero form has 7+ fields: name, phone, email, location, case type, language preference, message).
- **Secondary CTA:** a phone number, frequently displayed in a sticky header bar with "CALL NOW" repeated multiple times across the top nav (Morgan & Morgan's header repeats "CALL NOW" 8+ times across different practice-area dropdowns).
- **Social proof placement:** the settlement-dollar stat bar sits immediately below the hero, functioning as the first trust signal the visitor sees after the fold — this is earlier and more numbers-heavy than the real-estate-agents niche's track-record stats.

## Trust stack ordering

1. Settlement/dollar-amount stats (case-type tagged) — immediately below hero, before press logos.
2. Press/media "as seen in" logos — second position, very prominent (Dolman dedicates a full-width band to 7 outlet logos).
3. Reasons-to-choose / "why choose us" bullets — third position, framed around risk-removal (no fee unless we win, available 24/7) more than credentials.
4. Case results grid with specific dollar figures per case type — mid-page, functions as expanded proof of the hero stats.
5. Founder/attorney personal story and video — mid-to-lower page, humanizes the firm after the numbers have done the heavy lifting.
6. Testimonials with photos — lower page, often via embedded Google reviews widget rather than custom-written quotes.
7. Office locations and team grid — lowest, multi-office firms only.

## Form patterns

Unlike the real-estate-agents niche (where the primary CTA is a listings search, not a form), PI firm homepages lead with an actual lead-capture FORM in the hero, not just a CTA button. Omar Ochoa's hero form has 7+ fields (first/last name, phone, email, "Are you a Texas resident?", location, "Are you injured or did you suffer property damage?", practice area, preferred language, message) — this is well above the universal SOP's "4 fields or fewer on first ask" guidance. Morgan & Morgan's form is leaner (first/last name, phone, zip code, email, case description) — still 5 fields, one over the universal floor. Both firms repeat the form a second time lower on the page (Morgan & Morgan repeats it verbatim near the footer).

## Sticky elements

Morgan & Morgan's header is a sticky bar with repeated "CALL NOW" links across multiple practice-area dropdowns and an "OPEN 24/7" badge — the phone-call path is persistent across the entire scroll. This is a stronger sticky-CTA pattern than seen in the real-estate-agents niche and should be treated as a strong niche signal: phone access must be persistently visible, not just present in a footer.

---

## Divergence from universal CRO SOPs (Trust SOP B1 / Conversion SOP B3)

- **B1 (trust loads early-and-heavy in high-ticket niches; case studies lead with the result):** This niche fully matches B1's "lead with the result" guidance — the dollar-amount stat bars (Dolman's $6.7M/$5M/$3.2M/$3.85M grid, the "Results We Get" case cards) are pure result-first proof, appearing before any "how we work" narrative. Where this niche DIVERGES from the real-estate-agents pattern is in WHO the proof is about: it is firm-level aggregate proof (total dollars recovered, case-type settlement amounts) rather than individual-client-outcome stories. Per Sub-task 2, the end customer's top fear is being "ignored" or treated as a number — the niche template should pair the aggregate dollar stats (which the firms clearly believe work, given how universal they are) with at least one named-client story (per B1's "social proof tied to a recent transformation result") to avoid the "settlement mill" perception that Sub-task 1 and 2 both flagged as a risk.
- **B3 (frictionless first-ask form, 4 fields or fewer; primary + secondary CTA above the fold):** Every crawled PI homepage VIOLATES the 4-field guidance — hero forms run 5 to 7+ fields. This is a consistent niche pattern, likely because PI intake genuinely needs case-type and location info to route the lead (these are often handled by intake teams, not the attorney directly). The niche template should hold the universal 4-field floor for the PRIMARY hero CTA (name, phone, email, brief case description) and route the additional qualification fields (case type, location, injury status) to a second-step form or a follow-up call — preserving the "free, fast, no-risk first contact" feeling Sub-task 2 identified as critical, while still capturing what intake needs downstream. The phone-call secondary CTA (B3's "primary + secondary above the fold") is already strongly present and should be preserved as-is, including the persistent/sticky treatment seen on Morgan & Morgan.
