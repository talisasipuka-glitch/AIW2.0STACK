# 06 — SEO Landscape (Personal Injury Lawyers)

Source: `apify/google-search-scraper` (3 queries: "personal injury lawyer New York", "car accident lawyer Houston", "personal injury attorney near me", US) + `compass/crawler-google-places` (GBP density, 10 results for "personal injury lawyer near me").

---

## Primary keyword cluster

1. **"[case type] lawyer [city]"** ("car accident lawyer Houston") — case-type-first, city-second is the dominant ranking pattern; nearly every top-10 result for the Houston query is a firm or directory page titled around "car accident" specifically, not generic "personal injury."
2. **"personal injury lawyer [city]"** ("personal injury lawyer New York") — broader category term, dominated by large multi-attorney firms (Gair Gair Conason, Block O'Toole & Murphy) and directories (Justia, Super Lawyers, NYC Bar Association).
3. **"personal injury attorney near me"** — this query did NOT return localized results in this pass; instead it surfaced firms from a wide spread of unrelated cities (Corpus Christi, Charleston WV, Honolulu, PA, Kansas City, Charlotte, Oklahoma City) plus directory pages. This mirrors the geocoding-artifact limitation noted in the real-estate-agents niche: "near me" queries on this account default to a non-targeted location rather than NY/Houston/LA. The GBP density search (below) is the more reliable source for "near me" intent in this market.

## Secondary / long-tail clusters

- **Case-type + injury-type combinations**: "truck accident lawyer," "motorcycle accident lawyer," "wrongful death lawyer," "brain injury lawyer," "burn injury lawyer" — Dolman's "Results We Get" grid (Sub-task 4) shows firms build dedicated landing pages per case type, each anchored to a settlement figure.
- **"[city] + free consultation"**: "Personal injury lawyer Houston free consultation" appeared as a related query for the Houston search — confirms the "free case evaluation" CTA pattern (Sub-task 3/4) is also a search-intent match, not just a conversion device.
- **Directory and ranking pages**: Super Lawyers (`attorneys.superlawyers.com`), Justia Lawyer Directory, and local bar association pages (NYC Bar) consistently rank in the top 5 to 10 for both broad and case-type queries — these are aggregator pages a small firm's own site competes against directly.
- **"No fee unless we win" / "no win no fee"** appears as emphasized/highlighted text in multiple organic snippets (West Law Firm WV: "Free case review. No fee unless we win.") — Google appears to surface this phrase as a key differentiator in search snippets, reinforcing it as both an SEO and CRO asset (Sub-task 4, 5).

## Geographic targets: GBP density

The Google Maps search for "personal injury lawyer near me" returned 10 Los Angeles listings (geocoded to downtown LA / Financial District), all marked "Open 24 hours" with no exceptions:

- **Review counts vary enormously**: Morgan & Morgan (7,856 reviews), Wilshire Law Firm (2,527 reviews), Eisenberg Law Group (903 reviews) sit alongside much smaller firms (Blair & Ramirez, 86 reviews; C&B Law Group, 161 reviews) — all still ranking in the top 10. Review VOLUME alone does not appear to gate ranking position the way it might in other niches; rating (4.6 to 5.0 across the board) is more uniform than count.
- **Naming convention**: almost all listings are "[Founder/Firm Name] + Law Firm / Law Group / Accident Attorneys / Personal Injury Lawyers" — geography is NOT baked into the business name (unlike the real-estate-agents niche's "Austin Luxury Group" pattern). Local SEO for this niche relies on GBP location data and on-page city mentions, not brand naming.
- **"Open 24 hours" is universal** across all 10 listings — confirms the 24/7 availability framing identified in Sub-task 3, 4, and 5 is not just marketing copy but a GBP-level signal every competitor sets.
- **Service options consistently include "Online appointments," "Onsite services," and English** (with occasional Spanish/Cantonese) — bilingual service flags appear on a minority of listings, consistent with Sub-task 3's finding that Spanish-language service is called out as a differentiator rather than a baseline.

## Title and H1 patterns of top-ranking pages

- **Large multi-office firms** (Morgan & Morgan, Gair Gair Conason, Block O'Toole & Murphy): formula = "[Firm Name]: Personal Injury Lawyers [City/State]" — brand-first, category-second.
- **Case-type specialist pages** (Smith & Hassler, Jed Silverman, Sutliff & Stout for Houston car accidents): formula = "[Case type] Lawyer/Attorney in [City]" or "[City] [Case type] Attorney" — these dominate the case-type-specific query, suggesting a niche template should ship dedicated case-type landing pages (car accident, truck accident, slip and fall, wrongful death, etc.) rather than relying on a single generic "personal injury" page.
- **Directories** (Super Lawyers, Justia): formula = "Best/Top Rated Personal Injury Lawyers in [City], [State]" with a stated count ("Free profiles of 1339 top rated New York... attorneys," "446 top rated Houston... attorneys") — these numbers double as evidence of how saturated the market is (consistent with Sub-task 1's state-by-state attorney-count data).

## Common schema markup (expected for this niche)

- `Attorney` / `LegalService` / `LocalBusiness` schema for the firm entity (name, address, phone, areaServed, openingHours — note the universal "Open 24 hours" pattern from GBP data).
- `AggregateRating` / `Review` schema — directly supports trust signal #5 from Sub-task 5 (Google review aggregate visibility), and several SERP results already show `averageRating` + `numberOfReviews` in the snippet (Perdue & Kidd: 5.0/30, Singleton Schreiber: 4.7/200).
- `FAQPage` schema — the "People Also Ask" boxes for every query in this pass (e.g. "How much do most personal injury lawyers charge?", "What is the average personal injury settlement in New York?", "Is it worth suing for pain and suffering?") are exactly the kind of cost/process/value questions Sub-task 2 identified as top-5 fears — an FAQ section answering these in plain language is both an SEO opportunity (FAQ schema, PAA box capture) and a trust/CRO asset (per the universal Trust SOP's "FAQ addresses 6 to 10 actual buyer objections" checklist item).
- `BreadcrumbList` for case-type and location landing pages.

## Content gap analysis

- **Case-type landing pages are the clearest SEO opportunity**: the Houston query shows case-type-specific pages ("car accident lawyer Houston") ranking ahead of generic "personal injury lawyer Houston" results for that exact phrasing. A niche template that ships pre-built case-type pages (car accident, truck accident, motorcycle accident, slip and fall, wrongful death, dog bite) gives a small firm immediate coverage of this cluster, matching the pattern Dolman and PM Law Firm (Sub-task 3) already use.
- **PAA-driven FAQ content is underused by directory-dominated results**: none of the top organic results in this pass directly answer the "People Also Ask" questions on-page (settlement amounts, attorney fees, "is it worth suing"). A niche template FAQ section that answers these directly, in plain language, addresses both the SEO gap (FAQ schema, PAA capture) and the trust gap (Sub-task 2's fears #2 to #4 around cost, process, and compensation amounts).
- **Gap**: combining the case-type landing-page structure (SEO opportunity) with the trust-stack ordering from Sub-task 4 (settlement-amount stats tagged by case type, "no win no fee" near every CTA, named-attorney presence) on EACH case-type page — rather than only on the homepage — would let a small firm's case-type pages compete on both relevance (matches the search query) and conversion (carries the full trust stack the end customer needs at their most stressed decision point).
