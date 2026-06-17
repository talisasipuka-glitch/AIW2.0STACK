# SEO Audit, Bricks Law (brickslaw.com)

Compiled: 2026-06-15. Method: WebFetch/WebSearch (no Ahrefs/Moz/SEMrush access this
run; domain authority and traffic figures below are estimates based on site structure,
indexed-page count, and competitive landscape, flagged where estimated).

## 1. Domain authority & trust signals

Bricks Law runs on Wix with no visible backlink-building program, no press mentions, and
a thin third-party footprint (Avvo, Martindale-Hubbell, Lawyers.com, FindLaw, the
standard free legal directories every solo attorney is auto-listed on). Estimated domain
authority is low, roughly 8-12 on a 100-point scale, typical for a single-attorney site
with no dedicated link-building. A `site:brickslaw.com` search returns only 6-8 indexed
pages despite 31 pages existing on the live site, meaning most blog posts and podcast
episodes are not being indexed or are not generating organic visibility. Estimated
organic traffic is low, likely under 100 visits/month, and trending flat, the blog has
not been used to build topical authority around personal injury search terms.

## 2. Local keyword gaps

Searching "personal injury lawyer Atlanta GA" returns zero visibility for Bricks Law;
the result page is dominated by John Foy & Associates, Atlanta Injury Law Group, Hammers
Law Firm, Goldstein Hayes, and Gary Martin Hays & Associates, all of whom lead with "No
Win, No Fee," "24/7," and large recovered-dollar headline numbers. Specific gaps:

- "personal injury lawyer Atlanta", high competition, but currently zero presence
- "car accident lawyer Atlanta" / "car accident lawyer Sandy Springs", no dedicated page exists
- "truck accident lawyer Atlanta", no dedicated page exists
- "motorcycle accident lawyer Atlanta", no dedicated page exists
- "personal injury lawyer Jonesboro" / "Sandy Springs" / "Dunwoody", no location pages exist for any of the 9 service-area cities
- "wrongful death lawyer Atlanta" and "slip and fall lawyer Atlanta", not addressed anywhere on site

Each represents real local search volume; even capturing a handful of map-pack
impressions per city page would meaningfully increase qualified call volume.

## 3. Competitor landscape

The firms outranking Bricks Law for core PI terms share three things Bricks Law
currently lacks: (1) explicit "No Win, No Fee" / contingency messaging on the homepage,
(2) headline recovered-dollar totals ("$100M+ in verdicts," "$600M recovered"), and (3)
dedicated case-type landing pages with FAQ schema. Bricks Law's own track record
($1,325,000 found after a prior attorney under-settled, a $300,000 jury verdict won
against a denied-causation defense) is comparable in quality to what these competitors
lead with, it is simply not surfaced on the homepage or built into schema-eligible pages.

## 4. Website technical audit

- Title tags exist and are reasonably descriptive ("Personal Injury Lawyer Atlanta |
  Top-Rated Attorney - Bricks Law") but only on a handful of pages.
- Organization + LocalBusiness JSON-LD present on the homepage, good foundation, but no
  `AggregateRating`, no `Attorney`/`LegalService` subtype, and the address field will
  need a real street address (current mailing address is a P.O. Box).
- No FAQPage or Service schema found on any practice-area page.
- Content depth on the flagship personal-injury page is moderate but case-type and
  location pages do not exist at all, the single biggest structural gap.
- Blog is active but topically skewed toward bankruptcy (Chapter 13 modifications,
  liens, lift-stay motions), with only incidental personal-injury content (lemon law,
  hit-and-run).
- Mobile performance not benchmarked this run (deferred to Stage 10.4d Lighthouse pass
  on the new build); Wix sites commonly score poorly on LCP due to large hero assets.

## 5. Google Business Profile assessment

Could not be independently verified this run (Apify GBP lookup returned HTTP 402; see
`research-report.md` for details). The firm's testimonials page links to a live Google
review-collection URL, confirming an active GBP listing exists. Avvo shows 22 reviews at
a perfect 5.0, a strong signal that the GBP listing likely carries a comparable rating
once pulled. Recommend re-running the GBP scrape once Apify billing is restored to
confirm review count, rating, photo count, and category accuracy, all of which directly
affect Map Pack ranking potential.

## 6. Content strategy gaps

- Zero dedicated case-type pages (car/truck/motorcycle accident, slip and fall,
  wrongful death)
- Zero location pages for any of the 9 cities or 6 counties in the stated service area
- No FAQ section with schema on any practice-area page
- Settlement results exist but are buried on a secondary page with no schema, no
  homepage callout, and a required "results do not guarantee a similar outcome"
  disclaimer is currently absent
- Blog content is bankruptcy-heavy; needs a personal-injury content stream
- No video testimonials or case-study-style content despite a documented podcast asset

## 7. Revenue impact summary

Average value of a signed personal injury case for this niche (per
`niche-playbook/seo-patterns.md`): **$6,000** (conservative, contingency-fee based).
Conversion baseline: **3%** of organic visitors become leads.

- Current estimated organic traffic: ~60 visitors/month
- Current estimated leads: 60 x 3% = ~2 leads/month
- Potential traffic with full local SEO build-out (9 location pages + 5+ case-type
  pages + schema + active PI-focused blog): ~250 visitors/month (conservative for a
  competitive Atlanta market relative to the mega-firms above)
- Potential leads: 250 x 3% = ~7-8 leads/month
- Additional leads/month: ~5-6
- Monthly revenue left on the table: 5.5 x $6,000 = **~$33,000/month**
- Annual revenue left on the table: **~$396,000/year**

These figures are illustrative and intentionally conservative; actual case value varies
by case-type mix and should be refined with the client's real numbers.

## Top 3 priorities

1. Build dedicated case-type pages (car, truck, motorcycle accident at minimum) with
   FAQ + Service schema, addressing the largest single content gap.
2. Build location pages for all 9 service-area cities, each with unique local content
   per the SEO skill's anti-duplication rules.
3. Surface the settlement-results track record on the homepage with required
   disclaimers, and add "No Win, No Fee" + free-consultation messaging that is currently
   absent.
