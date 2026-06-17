# 06 — SEO Landscape (Real Estate Agents)

Source: `apify/google-search-scraper` (3 primary-keyword queries, US) + `compass/crawler-google-places` (GBP density, 10 results/search across New York, Houston, Los Angeles searches).

---

## Primary keyword cluster

1. **"[city] real estate agent"** / "real estate agent in [city]" — agent-discovery intent.
2. **"realtor near me"** — hyper-local, device-location-driven intent. Notably, an individual agent site (kumarawilcoxon.com, title "Austin Real Estate Agent & Realtor Near Me") ranked #2 nationally for this term, ahead of most portals — proof that exact-match local titling can beat aggregators on this query.
3. **"homes for sale [city]"** — listing-discovery intent, dominated by portals (Zillow, Redfin, Trulia, Homes.com, HAR.com).

## Secondary / long-tail clusters

- "[city] luxury real estate" / "[neighborhood] homes for sale"
- "best real estate agents in [city]" (realtrends.com ranking appeared for NY)
- "[city] realtor reviews" (Zillow professional-reviews pages ranked for both NY and Dallas variants)
- Brokerage-branded terms: "Keller Williams [city]", "Compass [city]", "Douglas Elliman", "SERHANT" — brokerage brand searches feed into individual agent pages hosted under brokerage domains.

## Geographic targets: GBP density

The Google Maps search for "real estate agent near me" returned 30 listings, with naming patterns clustering around:
- **Brokerage-affiliated individual agents**: "[Agent Name] | [Brokerage]" (e.g. "Julia Fitch - ELUX Real Estate Group | Compass", "Johnny Leou Real Estate Agent | eXp Realty", "Kim Holt Los Angeles Real Estate Agent, LPT Realty") — this naming convention dominates.
- **Team brands**: "The Nav Agency", "The Julian Team at Compass", "Brock & Lori Harris Real Estate Team" — team-based listings are common and often outrank solo agents on density.
- **Geography is baked into the business name** for nearly every listing ("Austin Luxury Group", "Smart LA Realty", "Manhattan Realty Group") — confirms hyper-local naming/branding is the norm, not an exception.

Note: the actual GBP results skewed toward Austin/LA/SF-area listings rather than evenly across New York/Houston/Los Angeles as targeted — likely a proxy/geocoding artifact of the "near me" phrasing on this account's default location. The naming-convention and density findings above are still directionally valid; a follow-up pass with explicit city-anchored queries (e.g. "real estate agent, Manhattan, New York, NY") would tighten the per-city breakdown if needed.

## Title and H1 patterns of top-ranking pages

- **Portals** (Zillow, Redfin, Trulia, Homes.com, HAR.com): formula = "[City], [State] Real Estate & Homes For Sale" — broad, city-name-first.
- **Brokerage team sites** (Keller Williams NYC, Douglas Elliman, SERHANT): brand name + "Luxury Real Estate" / "Real Estate Agents" + city.
- **Individual agent site that ranked competitively** (kumarawilcoxon.com): formula = "[City] Real Estate Agent & Realtor Near Me" — directly mirrors the search query as the title, which appears to be a strong ranking signal for the "near me" cluster specifically.

## Common schema markup (expected for this niche)

- `RealEstateAgent` / `LocalBusiness` schema for the agent/brokerage entity (name, address, phone, areaServed).
- `Product` / `Residence` or listing-specific schema for individual property pages (price, address, image).
- `AggregateRating` / `Review` schema tied to the agent entity — directly supports the trust signal identified in Sub-task 5 (review rating visibility).
- `BreadcrumbList` for listing/category navigation depth.

## Content gap analysis

- Individual agent sites rarely outrank national portals for broad "homes for sale [city]" queries — that battle isn't winnable for a small client site.
- The realistic opportunity is the **"realtor near me" / "[city] real estate agent" cluster**, where exact-match, hyper-local titling (as seen with kumarawilcoxon.com) can place an individual agent site competitively against portals and brokerage pages.
- **Gap**: none of the top-ranking pages combine the "near me" SEO win with the buyer-outcome trust signals identified in Sub-task 5 (specific story-based testimonials, responsiveness commitments). A page built to rank for "[city] real estate agent near me" AND lead with a specific-story testimonial + a "private search" lead form would combine the SEO opportunity with the conversion opportunity identified in Sub-tasks 2-4.
