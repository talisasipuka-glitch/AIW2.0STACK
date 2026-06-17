# 04 — CRO Patterns (Motorsport / Automotive: Performance & Tuning Shops)

Source: `apify/website-content-crawler` (crawlerType: "playwright:adaptive", saveScreenshots: true) on serioushp.com (Houston), dmetuningtexas.com (Houston, European/exotic), fullblown-performance.com (LA, American muscle). Screenshots saved to `raw/screenshots/`.

---

## Section order (homepage, top to bottom)

All three homepages follow a recognizable order, with minor variation:

1. **Hero**: full-width vehicle/build photography (a Dodge Hellcat at speed, a McLaren in a dark studio, etc.) with a short headline and a single primary CTA — "PICK YOUR VEHICLE >>" (Serious HP), implicit "Tune it →" car-selector (DME), "Contact Us" (Fullblown).
2. **Early trust/credibility statement**: a one-line claim placed immediately below or beside the hero — "Top Rated Performance Shop in Houston" (Serious HP, in a high-contrast red banner), a sticky top utility bar with phone number "Call Us At 844 FBP-1320" (Fullblown), or a services-overview grid that visually demonstrates breadth (DME's 8-tile "WHAT WE DO" grid: Tuning, Exhaust/Downpipes, PPF, Wraps, Tinting, Engine Modifications, Wheels, Carbon Fiber).
3. **Reviews/testimonials carousel**, tagged by the customer's car**: Serious HP runs a star-rated review carousel (named reviewer "Brock Haymond," 5 stars, with pagination showing 28 total reviews); DME's "WHAT DRIVERS ARE SAYING" section names each driver AND their car model (McLaren 720s Driver, BMW M5 Driver, BMW M6 Driver) against a dark background for contrast.
4. **Vehicle-specific package/selector grid**: Serious HP's "Performance Packages by Vehicle" lists ~16 named platforms (Hellcat, Dodge Demon, Charger, Challenger, Corvette C7, Camaro, CTS-V, Trackhawk, Mustang GT, Shelby GT350, F-150, etc.); DME's "Cars we tune" carousel pairs a build photo with a brand selector and "Tune it →" CTA; Fullblown leads a two-column block with "View our Power Packages."
5. **Secondary engagement/commerce blocks**: Fullblown runs a full e-commerce-style merchandise grid (hoodie $45, poster $70, license plates $10) with "View All," plus "Subscribe to our YouTube Channel" and partner-brand logos ("We Have Partnered With The Best"). Serious HP closes with a simple "FOLLOW US ON INSTAGRAM" button.
6. **Contact/lead form**: DME's "LET'S GO FASTER" form is the most fully visible lead form in this set — 6 fields: Name, Email, Telephone, City and State, **Your Ride** (make/year/model), Message.
7. **Footer**: hours, address, phone, payment-method icons (DME, Fullblown), shop navigation, social icons.

## Hero composition

- All three heroes use a single dramatic vehicle photo (not a person/team photo, in contrast to the personal-injury niche's attorney-team-photo pattern) — the "hero" of a performance-shop site is the car/build itself.
- Headlines are short and benefit-led ("Ready to get some Serious Horsepower?", "YOUR TRUSTED EXPERTS IN LATE-MODEL HIGH PERFORMANCE", "THE WORLD'S MOST ADVANCED ENGINE TUNING SOFTWARE") rather than name/brand-led.
- Each hero carries exactly ONE primary CTA, and that CTA is almost always a vehicle-selection action ("PICK YOUR VEHICLE", car-model carousel) rather than a generic "Contact Us" — the first conversion step in this niche is "tell us what car you have," not "fill out a form."

## Trust stack ordering

1. **Aggregate "top rated" / review-count signal**, placed high on the page (Serious HP's red "Top Rated Performance Shop in Houston" banner directly under the hero; 28-review carousel).
2. **Named, vehicle-tagged testimonials** — the single strongest niche-specific trust pattern (DME's McLaren/BMW M5/BMW M6 driver testimonials), consistent with Sub-task 3's finding.
3. **Service-breadth demonstration via visual grid** (DME's 8-tile services grid) — builds "one-stop-shop" trust visually rather than in a paragraph.
4. **Brand/partner logos** (Fullblown's "We Have Partnered With The Best") — third-party association as a trust signal, similar to press-logo rows in other niches.
5. **Merchandise/community signals** (Fullblown's branded apparel shop) — a niche-unique trust signal: a shop selling its own branded hoodies and license plates signals an established community/fanbase around the business, which an enthusiast end customer reads as social proof ("people are loyal enough to this shop to wear its merch").

## Form patterns

DME's "LET'S GO FASTER" form is the only fully-rendered lead form captured. It runs **6 fields**: Name, Email, Telephone, City and State, Your Ride (make/year/model), Message. This is one field over the universal 4-field floor (Trust/Conversion SOP B3), but unlike the personal-injury niche's 5-7 field forms (which ask for redundant qualification detail), the extra field here — "Your Ride" — is the single most functionally necessary piece of information for a tuning shop to respond meaningfully (a quote or tune recommendation is meaningless without knowing the car). "City and State" is the second non-core field; for a shop serving a defined metro area, this could plausibly be dropped or replaced with a simple service-area confirmation, bringing the form to 4 fields (Name, Email/Phone combined, Your Ride, Message).

## Sticky elements

Fullblown Performance runs a persistent top utility bar with "Call Us At 844 FBP-1320," visible above the main navigation — directly analogous to Morgan & Morgan's sticky "CALL NOW" header in the personal-injury niche (Sub-task 4 of that niche). This suggests phone-first contact remains a strong secondary CTA even on sites that otherwise lead with vehicle-selector tools.

## Divergence from universal CRO SOPs

- **Trust SOP B1** (pair aggregate stats with named-client, story-based testimonials): DME is the strongest example in this niche of doing both at once — a review carousel/aggregate AND named, car-specific testimonials. Serious HP has the aggregate (28-review carousel with star ratings) but the sampled testimonial, while named, doesn't tag a specific car model — a niche template should always pair the reviewer's name with their vehicle (make/model/year), which is the single most persuasive trust unit found across both Sub-task 3 and this sub-task.
- **Conversion SOP B3** (4-field floor): DME's 6-field form is over the floor, but — unlike the personal-injury niche, where the extra fields were redundant qualification questions — here "Your Ride" is core information, not noise. The niche template should treat "Your Ride" (make/model/year, ideally as three short dropdowns or a single combined field) as a required 4th field alongside Name, Email/Phone, and Message, and drop or defer secondary fields like "City and State" to keep the form at 4 fields total.
- **Vehicle-selector-as-CTA is a niche-specific pattern not seen in RE or PI**: in both prior niches, the primary CTA was always a lead-capture form ("Free Case Evaluation," "Get a Free Home Valuation"). Here, the primary CTA is frequently "select your car" — a personalization step that happens BEFORE any contact-info request. A niche template should treat the vehicle selector as the true top-of-funnel CTA, with the contact form as the next step after the visitor has self-identified their vehicle.
