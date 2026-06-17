# 04 — CRO Patterns That Win (Real Estate Agents)

Source: `apify/website-content-crawler` across 8 agent/brokerage homepages (Recipe 3) + 5 agency-built sites (Recipe 1) + 3 desktop screenshots (kumarawilcoxon.com, barbaravandyke.com, agentimage.com) in `raw/screenshots/`.

---

## Most common section order

1. **Hero** — agent/brokerage name + a track-record claim (years, $ volume, ranking) as the headline, not a generic tagline.
2. **Listings / search entry point** — "Active Listings", "Search Listings", "Begin My Private Search" — framed as the primary action.
3. **Proof / "Proven Results"** — repeated stats block (years of experience, $ sold, ranking) often duplicated from the hero, reinforced.
4. **About / bio** — agent's story, specialism, geography.
5. **Specialty services** (where present) — e.g. "Ranch & Land" (barbaravandyke.com), "Concierge Services" (johnigean.com, ogroup.com).
6. **Office / locations** (brokerage sites) — addresses, team structure (villagesite.com).
7. **Media / press / testimonials** (where present) — pushed lower on the page (ogroup.com: Testimonials comes after Stats, CTA, and Concierge sections).
8. **Newsletter / final contact** — footer-level capture.

## Hero composition

- **Imagery subject:** luxury property photography is the dominant hero visual, not headshots — except where the agent's personal brand IS the product (Oppenheim Group leads with "Jason" the founder, tied to the Netflix "Selling Sunset" association).
- **Primary CTA:** browse/search action ("Search Listings", "Begin My Private Search", "Active Listings") — not a contact form.
- **Secondary CTA:** about/bio link, or a "Past Sales" / portfolio link.
- **Social proof placement:** track-record numbers (years, $ volume, ranking) sit IN or immediately below the hero — this is the niche's primary above-the-fold trust signal, doing double duty as both value prop and proof.

## Trust stack ordering

1. Track-record stats (years, $ sold, "#1 for N years") — earliest, often in the hero itself.
2. Brand affiliation (Sotheby's International Realty, brokerage name) — header/hero level.
3. Portfolio / past sales — mid-page, framed as evidence of the track-record claim.
4. Press / media tie-ins and client testimonials — pushed below stats and CTAs (later in the page than the universal SOP would suggest for a high-ticket purchase).
5. Team/office presence — brokerage sites only, lower on page.

## Form patterns

None of the crawled homepages surface a visible contact form in the hero or early page. The dominant "first ask" is a **listings search or saved-search signup** ("Begin My Private Search"), which functions as a soft lead-capture (name + search criteria) rather than a direct "Contact me" form. Direct contact forms appear to live on dedicated Contact pages, reached via nav, not the homepage flow.

## Sticky elements

Not directly verifiable from full-page screenshots/text crawl alone (would need interaction-level capture). Given the listings-search-as-primary-CTA pattern, a sticky "Search/Saved Search" or "Contact" element in the nav bar is the likely pattern, consistent with IDX-heavy real estate sites generally — flag this for confirmation during Module 2D's live site capture.

---

## Divergence from universal CRO SOPs (Trust SOP B1 / Conversion SOP B3)

- **B1 (trust loads early-and-heavy in high-ticket niches):** This niche DOES front-load trust — but as **agent-credential proof** (years, $ volume, rankings), not as **buyer-outcome case studies**. B1 calls for case studies structured "situation → solution → result, lead with the result" — this niche's portfolios lead with the AGENT's credentials and the PROPERTY's price, not with a buyer's before/after story. The niche template should consider adding a buyer-outcome layer (e.g. "helped the Smiths find their home in 3 weeks after 2 failed offers elsewhere") on top of the credential stack, since Sub-task 2 showed buyers explicitly value "smooth, stress-free, communicative" experiences over raw credentials.
- **B3 (primary + secondary CTA above the fold, first-ask form ≤4 fields):** This niche's primary above-the-fold CTA is "browse listings," not a contact/lead form. The universal floor (a frictionless first-ask form) still applies, but for this niche it should likely be a "saved search" / "private search" form (which doubles as lead capture) rather than a generic "Contact Us" form — matching the "Begin My Private Search" pattern, which got the strongest framing in Sub-task 3.
