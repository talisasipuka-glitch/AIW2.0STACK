# 08 — Starter Design Template (Personal Injury Lawyers)

Sub-task 8. Built after `/pick-niche` locked personal-injury-lawyers as the chosen niche. Synthesizes Sub-tasks 1-7 into a concrete page structure and content scaffold for Module 2D's template builder to use when scaffolding `website-factory/templates/personal-injury-lawyers/`.

End customer: a person recently injured in an accident, often in pain, stressed, and unsure whether hiring a lawyer is worth it or affordable. They are comparing several firms within hours of searching.

The student's client: a small to mid-size personal injury law firm (1-10 attorneys), competing against national brands (Morgan & Morgan), large local firms, and legal directories (Justia, Super Lawyers) that outrank them on generic terms.

---

## Page structure (homepage), in order

1. **Hero**
   - Headline: case-type-tagged settlement proof OR risk-removal framing OR plain category + geography. Use one of the 5 swipe templates from Sub-task 3.
   - Subheadline: "No Win, No Fee. Guaranteed." (or equivalent contingency statement), plus "Available 24/7."
   - Primary CTA: "Free Case Evaluation" form, capped at 4 fields for the first ask (name, phone, email, one-line case description).
   - Secondary CTA: phone number, sticky in header, "CALL NOW" treatment.
   - Imagery: named attorney(s), photographed, looking at camera. Not stock photos of gavels or generic offices.

2. **Settlement / results stats bar**
   - Horizontal grid of dollar figures tagged by case type (e.g. "Car Accident $5M", "Truck Accident $3.85M", "Wrongful Death $6.7M"). Placeholder values per client, replace with real case results during factory tailoring.

3. **"As seen in" / press logos band**
   - Placeholder slots for media logos or local "Best of [city]" badges. For firms without national press, substitute local news or bar association badges.

4. **"Why choose us" — risk-removal bullets**
   - No fee unless we win.
   - Available 24/7.
   - Personalized service, direct attorney access (not a call center).
   - "Not a settlement mill" — we litigate, we don't just settle fast.
   - Bilingual service (where applicable).

5. **Practice areas / case results grid**
   - Card per case type (car accident, truck accident, motorcycle accident, slip and fall, wrongful death, dog bite, brain injury). Each card: case type, a dollar result, one-line description. Links to dedicated case-type landing pages (see below).

6. **Founder / attorney story**
   - Named attorney, photo, short personal origin story connecting to why they do this work. Mid-page placement.

7. **Testimonials**
   - Named clients with photo, case type, and outcome where possible (e.g. "Car accident victim, recovered $X — 'they kept me updated the whole time'"). Pulled from Google reviews widget or written quotes.

8. **FAQ (PAA-driven)**
   - Plain-language answers to: "How much do personal injury lawyers charge?", "What is my case worth?", "Is it worth suing for pain and suffering?", "How long does a case take?", "What if the accident was partly my fault?" Tag with FAQPage schema.

9. **Office locations / team grid** (multi-office firms only)

10. **Footer**
    - Repeat the 4-field lead-capture form.
    - Phone number, hours ("Open 24/7"), bar association links, license numbers.

---

## Case-type landing page template (repeatable, one per practice area)

Each case-type page (car accident, truck accident, slip and fall, etc.) carries the FULL trust stack, not a stripped-down version:

1. Hero: "[Case type] Lawyer in [City] | [Firm Name]" — case type + city in title and H1.
2. Settlement stat for this specific case type, large and prominent.
3. "No win, no fee" + 24/7 availability restated.
4. Short explainer: what to do after this type of accident, what compensation typically covers.
5. FAQ specific to this case type (e.g. for car accidents: "What if the other driver has no insurance?").
6. 4-field lead form, repeated at bottom.

This directly targets the "[case type] lawyer [city]" SEO cluster identified in Sub-task 6, which outranks generic "personal injury lawyer [city]" pages for case-specific searches.

---

## Form pattern (resolves the niche's CRO violation)

- **Primary hero/footer form**: 4 fields max — name, phone, email, one-line case description. This matches the universal CRO SOP floor while every crawled competitor uses 5-7+ fields.
- **Second-step qualification** (after submit, or via a follow-up call): case type, location, injury status, language preference. Route to intake team, not shown on first ask.
- Phone number remains a persistent secondary CTA (sticky header), matching the strongest pattern observed (Morgan & Morgan's repeated "CALL NOW").

---

## Trust stack order (top to bottom on every page)

1. No win, no fee / contingency guarantee — near every CTA.
2. Settlement-dollar proof, tagged by case type.
3. Press / "as seen in" or local award badges.
4. Risk-removal "why choose us" bullets.
5. Case results grid with dollar figures.
6. Named attorney story and photo.
7. Testimonials with photos, tied to case type and outcome.
8. FAQ (PAA-driven).
9. Office locations (if applicable).

---

## Visual / imagery direction

- People-centric, not object-centric: named attorneys with faces, client testimonial photos. Avoid generic gavel/scales-of-justice stock imagery.
- Color palette: convey trust and seriousness — navy/dark blue, charcoal, white, with a single accent color (red or gold) for CTAs and dollar figures, consistent with the "fight for you" positioning.
- Dollar figures and stats should be visually prominent (large type, grid layout) — they are the niche's primary proof currency.

---

## Copy swipe file (from Sub-task 3)

Hero headline templates:
1. "[City]'s [Practice Area] Lawyers — No Win, No Fee. Guaranteed."
2. "[Case type] victims have recovered up to $[X]M. Find out what your case is worth."
3. "Injured in [city]? You deserve a real fight — not a settlement mill."
4. "Available 24/7. Free Case Evaluation. You pay nothing unless we win."
5. "[Firm name]: [N]+ years, $[X]M+ recovered for [city] families like yours."

CTA phrasing: "Free Case Evaluation" / "Get Your Free Case Review" / "Don't settle for less than you deserve" / "You owe us nothing until we recover compensation."

---

## SEO / schema checklist for the template

- `Attorney` / `LegalService` / `LocalBusiness` schema (name, address, phone, areaServed, "Open 24 hours").
- `AggregateRating` / `Review` schema.
- `FAQPage` schema on the FAQ section.
- `BreadcrumbList` on case-type and location pages.
- Pre-built case-type landing pages (car accident, truck accident, motorcycle, slip and fall, wrongful death, dog bite, brain injury) as the default page set.

---

## Open items for factory tailoring (per client)

- Real settlement figures and case results (replace placeholder dollar amounts).
- Attorney name(s), photos, and personal story.
- Local press mentions or "best of [city]" badges, or substitute local news/bar association recognition.
- Bilingual service flag (Spanish, etc.) if applicable to the client's market.
- Office location(s) for multi-office firms.
