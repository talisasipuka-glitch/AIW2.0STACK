# 03 — Copy Patterns That Resonate (Real Estate Agents)

Source: `apify/website-content-crawler` (8 real estate agent/brokerage homepages) + `apify/facebook-ads-scraper` (Meta Ad Library, keyword "real estate agent", US, active ads).

Note on Facebook ads: the Ad Library query for "real estate agent" (US, active ads) returned 1 ad collation with no extractable creative text (body/title/CTA fields empty in the response) — the matching advertiser pages ("Own Up", "Call to Leap") appear to be mortgage/rate-comparison services adjacent to the niche rather than individual agents running ads under this keyword. Given the cost of this actor (~$0.10/run on this account's budget), copy patterns below are drawn from the 8 crawled agent homepages, which were rich in headline/value-prop language.

---

## Top 10 hero headlines (from crawled homepages)

1. "Luxury Real Estate Specialist. Specializing in Residential, Commercial and Investment Property. 40 years experience over 2000 transactions." (johnigean.com) — **pattern: track-record numbers as the headline**
2. "Austin's #1 Luxury REALTOR — The last 4 consecutive years" (kumarawilcoxon.com) — **pattern: ranking + recency ("still #1 now")**
3. "Making Your Vision a Reality" (barbaravandyke.com) — **pattern: outcome/transformation promise**
4. "Discover our exclusive selection of active luxury real estate listings. Explore the finest homes currently on the market and find your next extraordinary residence." (barbaravandyke.com) — **pattern: invite to browse inventory, framed as exclusivity**
5. "Local Expertise — Global Connections" (gingermartin.com) — **pattern: dual positioning (hyper-local + far-reaching network)**
6. "Cynthia Lopez | C&D Realty Group — Luxury Real Estate Broker guiding clients into their next chapter in Dallas to destinations worldwide." (cynthialopez.com) — **pattern: life-stage/transformation framing ("next chapter")**
7. "Begin My Private Search — We analyze, refine, and guide your search, so you move forward with clarity from the very start." (cynthialopez.com) — **pattern: reduce-anxiety promise (clarity, guidance) tied to a CTA**
8. "Napa Valley Luxury Real Estate | Ginger Martin + Co — Sotheby's International Realty" (gingermartin.com) — **pattern: borrowed authority (global brand affiliation) in the headline**
9. "Carolwood Estates | Beverly Hills Real Estate" (carolwoodre.com) — **pattern: brand name + hyper-specific geography, minimal copy, image-led**
10. "Village Properties | Santa Barbara Real Estate — founded in 1996... a focused mission on serving the community" (villagesite.com) — **pattern: longevity + community-service framing**

## Top 10 CTAs and phrasing pattern

1. "Search Listings" (barbaravandyke.com) — direct inventory action
2. "Begin My Private Search" (cynthialopez.com) — possessive + "private" framing makes a generic search feel bespoke
3. "Active Listings" (barbaravandyke.com, nav item acting as CTA)
4. Implicit "View Gallery" / "Compare Websites" style CTAs seen in agency tooling (carry over from Recipe 1, agentimage.com) — useful pattern for "compare" interactions but agent-facing, not buyer-facing
5. "Areas Where I Operate" framed as an invitation to ask ("I am available to assist you... I will work with you in any price range") (johnigean.com) — **pattern: remove gatekeeping, signal availability to all budgets**

Overall CTA phrasing pattern across this niche: action verbs tied to listings/search ("Search", "Discover", "Explore", "Begin"), almost never "Contact Us" or "Get a Quote" as the PRIMARY hero CTA — the primary hook is browsing inventory, with contact as a secondary/sticky action.

## Top 10 value props and framing

1. **Track record numbers** ("40 years", "2000 transactions", "#1 for 4 consecutive years") — framed as proof of durability and current relevance, not just experience.
2. **Geographic specialism** ("Austin's #1", "Beverly Hills Real Estate", "Napa Valley Luxury Real Estate", "Santa Barbara Real Estate") — hyper-local framing signals insider knowledge.
3. **Borrowed brand authority** (Sotheby's International Realty affiliation) — third-party prestige transfer.
4. **Transformation / life-stage language** ("Making Your Vision a Reality", "guiding clients into their next chapter") — sells the emotional outcome, not the transaction.
5. **Clarity-from-anxiety promise** ("move forward with clarity from the very start") — directly addresses the fear of an overwhelming process.
6. **Exclusivity + access framing** ("exclusive selection", "Private Search") — luxury cue, but the underlying mechanic (curated search) is universally applicable.
7. **Community/longevity framing** ("founded in 1996", "serving the community") — trust through institutional permanence.
8. **Dual local/global positioning** ("Local Expertise — Global Connections") — reassures both local buyers and relocating/international buyers.
9. **Availability framing** ("I will work with you in any price range") — removes the fear of being "too small a client."
10. **Media/press tie-in** (Oppenheim Group leaning on "Selling Sunset" Netflix association) — celebrity/media halo effect, an extreme version of "as seen in."

## Common ad hook structures

No usable Facebook ad creative was retrieved for this niche in this pass (see note above). Based on the homepage hero patterns, the implied ad hooks this niche would use are: (a) a track-record stat as the opener ("20 years, #1 in Austin"), (b) a transformation promise ("Your next chapter starts here"), and (c) an anxiety-reduction promise ("Clarity from the very start — start your private search").

## 5 paste-ready hero headline templates

1. "[Years] years. [Number] homes sold. [City]'s trusted [agent/brokerage name]."
2. "Your next chapter starts here — [agent name] guides you through [city]'s market with clarity from day one."
3. "[City]'s #1 [niche specialism] for [N] consecutive years."
4. "Local expertise, [wider region] reach — find your next home in [city] with [agent name]."
5. "Whatever your budget, [agent name] is ready to help — explore [city] listings now."
