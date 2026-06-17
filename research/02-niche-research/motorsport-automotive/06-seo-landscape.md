# 06 — SEO Landscape (Motorsport / Automotive: Performance & Tuning Shops)

Source: `apify/google-search-scraper` (3 queries: "dyno tuning Houston", "performance shop near me", "ECU tuning shop New York", US) + `compass/crawler-google-places` (GBP density, 10 results for "performance shop near me").

---

## Primary keyword cluster

1. **"[service] + [city]"** ("dyno tuning Houston") is the dominant working pattern — this query returned a clean, localized result set: Serious HP (#1), Houston House of Power (#3), a Yelp "TOP 10 BEST Dyno Tuning in Houston, TX" directory (#4), Kozmic Motorsports (#5), Bumbera's Performance in nearby Sealy TX (#6), G-Force Motorsports (#7). Service-first, city-second phrasing ("dyno tuning Houston," "ECU tuning Houston") is the pattern a niche template should target.
2. **"[city] + [service]"** generic forms appear in related-query suggestions ("Tuning shops Houston," "Best performance shops in Houston") and in directory page titles.
3. **"performance shop near me"** and **"ECU tuning shop [city]"** did NOT return usable localized results in this pass — "performance shop near me" geocoded to Sumy Oblast, Ukraine (returning Ukrainian auto-tuning parts retailers), and "ECU tuning shop New York" returned zero organic results. This is the same "near me" / sparse-query geocoding artifact documented in the real-estate and personal-injury niches; the GBP density search (below) is the reliable source for "near me" intent in this market.

## Secondary / long-tail clusters

- **Brand/platform-specific tuning queries**: related-query suggestions surfaced "LS performance shop Houston," "Mustang Performance shop Houston," "Vag performance parts shop," "Toyota performance shop near me," "Motorcycle performance shop near me" — confirms Sub-task 3/4's finding that make/model-specific landing pages match real search intent.
- **Cost/value queries**: "Dyno tuning houston prices," "Dyno tuning houston cost," "How much does a dyno tune usually cost?", "How much HP will a dyno tune add?", "Is dyno tuning worth it?" — these PAA/related-query questions are cost-and-outcome questions, directly mirroring the personal-injury niche's cost-focused PAA cluster.
- **Legal/compliance queries**: "Are ECU Tunes street legal?" appeared as a PAA answer referencing EPA emissions rules — this is a niche-unique trust/content opportunity not present in either prior niche; a shop that proactively addresses street-legality concerns (e.g., "track-only" vs. "street-legal" tune options) answers a real fear before it becomes an objection.
- **Forum/community results rank alongside business sites**: Reddit, Facebook groups, and brand-specific forums (Bimmerpost, hdforums.com) appear as organic results for service+city queries — confirms that the enthusiast community itself is a competing "source of truth" a shop's website must out-rank or at least match in credibility.

## Geographic targets: GBP density

The Google Maps search for "performance shop near me" returned 10 Los Angeles-area listings:

| Business | Rating | Reviews |
|---|---|---|
| 410 Garage | 4.9 | 185 |
| Performance Syndicate | 5.0 | 34 |
| M/T Auto shop | 4.7 | 100 |
| Bubba's performance & more | 4.8 | 65 |
| Full Blown Performance | 4.6 | 96 |
| MTR Motorsports | 4.9 | 55 |
| D1 MPerformance | — | — |
| 6th Gear Mobile Motorcycle Mechanic | 5.0 | 8 |
| Platinum Showgirls LA | 3.5 | 107 |
| League Motorsports | 4.1 | 47 |

- **Review counts are modest and varied** (8 to 185), with ratings clustering 4.1-5.0 — much smaller absolute review counts than the personal-injury niche's GBP listings (86-7,856), consistent with this being a smaller, more local-scale service category.
- **One listing ("Platinum Showgirls LA," an unrelated business) appears in the results** — a reminder that GBP category matching for "performance shop" is imperfect, and a niche template's local-SEO setup should ensure tight category selection (e.g., "Auto Repair Shop" + "Auto Tuning" rather than a broad "Performance" category).
- **Naming convention is mixed**: some names bake in the service ("Full Blown Performance," "Performance Syndicate," "MTR Motorsports"), others are personal/brand names with no service or geography cue ("410 Garage," "Bubba's performance & more") — geography is rarely baked into the name (similar to the personal-injury niche, unlike real-estate's "Austin Luxury Group" pattern).

## Title and H1 patterns of top-ranking pages

- **Service + location formula** dominates for service+city queries: "AWD Dyno Tuning Shop | Kozmic Motorsports | Houston, Texas," "Serious Horsepower Performance Shop in Houston | Serious HP," "Houston House of Power: Home in Houston, TX."
- **Directory pages** ("TOP 10 BEST Dyno Tuning in Houston, TX - Updated 2026" on Yelp) rank in the top 5 for service+city queries, same pattern as both prior niches — a competing aggregator a small shop's site competes against.
- **Brand-led titles for franchise/network shops** ("API Tuning | Automotive Performance Dyno Tuning | Dyno Tuners," "Eurocharged Performance | ECU Tuning Experts") — these lean on brand recognition rather than city, consistent with their "world's premier" positioning from Sub-task 3.

## Common schema markup (expected for this niche)

- `AutoRepair` / `LocalBusiness` schema for the shop entity (name, address, phone, areaServed, openingHours, makesOffer for tuning/service packages).
- `AggregateRating` / `Review` schema — GBP review counts and star ratings appear directly in SERP snippets for directory pages (Yelp "4.2," "4.5," "4.7" averages), so a shop's own site should surface its aggregate rating in schema to compete for the same rich-result space.
- `FAQPage` schema — the PAA cluster for this niche (cost of an ECU/dyno tune, "is it worth it," street-legality/EPA questions, "can I do this myself") is directly answerable on-page and matches the FAQ-as-SEO-and-trust pattern identified in the personal-injury niche.
- `Product` / `Offer` schema for vehicle-specific performance packages (Sub-task 3/4's "Performance Packages by Vehicle" pattern) — each named platform package (e.g., "Hellcat Performance Package") is a natural Product entity with a price range.

## Content gap analysis

- **Make/model/platform-specific landing pages are the clearest SEO opportunity**, mirroring the personal-injury niche's case-type pages: related-query data shows real search volume for brand-specific queries ("LS performance shop Houston," "Mustang Performance shop Houston," "Toyota performance shop near me"), and Serious HP's "Performance Packages by Vehicle" page (Sub-task 4) already demonstrates this structure with ~16 platform-specific pages.
- **Cost-transparency / PAA-driven FAQ content is underused**: none of the crawled business homepages (Sub-task 3) directly state pricing, yet "how much does a dyno/ECU tune cost" is one of the most consistent PAA questions across queries (with one source giving a concrete $200-$500 / $500-$1,500 range). A niche template FAQ that gives at least a price RANGE (even "starting at") addresses a real on-page gap and a real customer fear (sticker shock / "will they tell me a number or make me call to find out").
- **Street-legality / emissions-compliance content is a unique gap and trust opportunity**: a shop that clearly distinguishes "track-only" vs. "street-legal, emissions-compliant" tune options on-page answers a real legal-anxiety PAA question that none of the crawled homepages addressed directly.
- **Forum/community presence as a parallel channel**: because Reddit and brand-forum threads rank alongside business sites for service+city queries, a niche template should consider surfacing (or at least linking to) community proof — build threads, forum mentions, or a blog/build-log section (several crawled sites already run a blog/"latest from" section per Sub-task 3) — to compete for the same SERP real estate forums currently occupy.
