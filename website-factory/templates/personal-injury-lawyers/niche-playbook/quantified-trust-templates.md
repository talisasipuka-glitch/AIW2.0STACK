<!-- niche-playbook v1 -->
# Quantified Trust Templates: Personal Injury Lawyers

Patterns for the hero's quantified-trust inline line. Stage 6 walks these
patterns top-to-bottom and uses the first whose `research-data.json`
conditions match. These extend the universal patterns in
`copywriting.md` Section 11 with legal-specific patterns.

---

## Pattern format

```
### Pattern {N}
Conditions: {expressions over research.json fields}
Output template: "{string with placeholders}"
Justification: {one sentence on what this proves about the client}
Source: {site URL from pool that uses this pattern}
```

## Placeholders

In addition to the universal placeholders (`{years}`, `{foundedYear}`,
`{primaryCity}`, `{adjacentCity}`, `{region}`, `{jobCount}`, `{reviewCount}`,
`{audienceNoun}`), this niche adds:

- `{settlementTotal}`, `research.nicheExtensions.personal-injury-lawyers.totalRecovered`
  (formatted as "$X.XM" or "$X.XB")
- `{casesWon}`, `research.nicheExtensions.personal-injury-lawyers.casesWon`
- `{largestSettlement}`, `research.nicheExtensions.personal-injury-lawyers.largestSettlement`
- `{caseTypeLabel}`, the display name of the client's most prominent case
  type (from `services[]`)

---

## Patterns (top to bottom, in priority order)

### Pattern 1 (settlement total, high-trust)
Conditions: `settlementTotal >= 10000000 && years >= 5`
Output template: "{settlementTotal}+ recovered for {primaryCity} families since {foundedYear}"
Example output: "$45M+ recovered for Houston families since 2012"
Justification: combines a large aggregate dollar figure with tenure, the
niche's dominant proof currency
Source: dolmanlaw.com, omarochoalaw.com ("$1 Billion Recovered")

### Pattern 2 (case-type specific, mid-trust)
Conditions: `casesWon >= 50 && caseTypeLabel is set`
Output template: "{casesWon}+ {caseTypeLabel} cases won for {audienceNoun} across {region}"
Example output: "200+ car accident cases won for clients across Greater Houston"
Justification: ties volume to a specific, searchable case type, useful when a
firm's strength is concentrated in one practice area
Source: dolmanlaw.com's per-case-type "Results We Get" grid

### Pattern 3 (largest single settlement, anchor figure)
Conditions: `largestSettlement >= 1000000`
Output template: "Including a {largestSettlement} settlement for a {caseTypeLabel} client right here in {primaryCity}"
Example output: "Including a $3.2M settlement for a slip and fall client right here in Houston"
Justification: a single large, specific figure is more memorable and
credible than an aggregate, especially for newer or smaller firms
Source: dolman-law-group's individual case cards ($6.7M / $5M / $3.2M / $3.85M)

### Pattern 4 (owner-led, multi-area)
Conditions: `serviceAreas.length >= 2 && reviewCount >= 20`
Output template: "Owner-led {audienceNoun-verb} across {primaryCity} and {N} surrounding areas"
Justification: owner-led emphasis + geographic spread, useful for firms
without a large settlement total to lead with
Source: pm-law-firm (single-office, high review volume)

### Pattern 5 (tenure + review count, established but modest figures)
Conditions: `years >= 10 && reviewCount >= 100`
Output template: "{years} years fighting for injured {audienceNoun} in {primaryCity}, {reviewCount}+ five-star reviews"
Example output: "14 years fighting for injured clients in Houston, 600+ five-star reviews"
Justification: combines tenure + review volume when settlement figures are
not available or not disclosable
Source: pm-law-firm (627 reviews, 4.9 stars)

### Pattern 6 (fallback, newer firms)
Conditions: (always)
Output template: "Fighting for injured {audienceNoun} in {primaryCity} since {foundedYear}. No win, no fee."
Justification: minimum viable quantified-trust line that still carries the
niche's core risk-removal promise when no other condition matches
Source: universal fallback, reinforced by the "no win no fee" pattern present
on every crawled site

---

## Per-niche customisation note

Pattern 1 ("$X+ recovered") is this niche's signature pattern, equivalent to
"Hosting N weddings a year" for hospitality or "N+ roofs kept dry" for
contractor. Module 2D and Stage 6 should prefer Pattern 1 whenever
`settlementTotal` data exists, even if a later pattern would also match,
because it is the format the niche's top-of-pool sites converge on most
strongly.

---

## Source traceback

```
## Source traceback
- Pattern 1 source: omarochoalaw.com ("$1 Billion Recovered"), dolmanlaw.com
- Pattern 2 source: dolman-law-group "Results We Get" grid
- Pattern 3 source: dolman-law-group individual case cards
- Pattern 4 source: pm-law-firm (02-customer-voice.md)
- Pattern 5 source: pm-law-firm (627 reviews / 4.9 stars)
- Pattern 6 source: universal fallback + niche-wide "no win no fee" framing
```
