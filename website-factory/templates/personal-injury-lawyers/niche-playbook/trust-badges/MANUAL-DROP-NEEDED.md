<!-- niche-playbook v1 -->
# MANUAL DROP NEEDED: Trust Badges (Personal Injury Lawyers)

The badges listed in `trust-signals.json` reference filenames that do not
ship with the niche template. These are credential and award badges that
belong to specific issuing organisations and cannot be auto-generated or
substituted. During client onboarding (Stage 4, asset scraping), drop the
client's actual badge files into this folder using the filenames below.

If a client does not qualify for a given badge (e.g. they are not a Million
Dollar Advocates Forum member), leave that file out. The factory's
`trust-signals.json` fuzzy-matches against `research.certifications`
(Stage 4) and only renders badges the client actually qualifies for, up to
`trustStripCount: 9`.

---

## Badge files needed

| Filename | Display name | Where to get it | Alt-text guidance |
|---|---|---|---|
| `no-win-no-fee.svg` | No Win, No Fee Guarantee | Generated/stock badge, not issuer-specific. Can ship as a template default. | "No win, no fee guarantee badge" |
| `state-bar-association.svg` | [State] Bar Association Member | Client's state bar association logo (e.g. Florida Bar, State Bar of Texas, New York State Bar Association). Usually available from the bar association's media/brand page or the attorney's own bar profile page. | "[State] Bar Association member badge" |
| `million-dollar-advocates-forum.svg` | Million Dollar Advocates Forum | Only if the attorney is a member. Logo available at milliondollaradvocates.com member resources. | "Million Dollar Advocates Forum member badge" |
| `national-trial-lawyers.svg` | National Trial Lawyers Top 100 | Only if the attorney holds this rating. Logo available via thenationaltriallawyers.org member portal. | "National Trial Lawyers Top 100 badge" |
| `super-lawyers.svg` | Super Lawyers Rated | Only if rated. Logo available from the attorney's Super Lawyers profile (superlawyers.com), usually a downloadable badge image. | "Super Lawyers rated attorney badge" |
| `avvo-rating.svg` | AVVO Rating | Only if rated. Available from the attorney's AVVO profile (avvo.com). | "AVVO [rating] rated attorney badge" |
| `bbb-accredited.svg` | BBB Accredited Business | Only if accredited. Available from the firm's BBB profile (bbb.org). | "Better Business Bureau accredited business badge" |
| `google-reviews.svg` | Google Reviews Rating | Can be generated from the firm's actual Google rating + review count (Stage 2 research data). Not a third-party logo, can be templated. | "Google reviews rating badge, [rating] stars, [count] reviews" |
| `as-seen-in.svg` | As Seen In / Press | Composite of media outlet logos the firm has actually appeared in (local news, etc). Each individual press logo also lands in `press-logos/` per `photo-manifest.json`. | "As seen in [outlet name] badge" |
| `bilingual-spanish.svg` | Se Habla Espanol | Only if the firm offers bilingual service. Can be a template-default badge (not issuer-specific). | "Se habla espanol, bilingual service available" |
| `open-24-7.svg` | Open 24/7 | Template-default badge (not issuer-specific), reflects the firm's actual hours per `brandDNA.hours`. | "Open 24 hours, 7 days a week" |
| `community-involvement.svg` | Community Involvement | Only if the firm has documented local sponsorships, charity work, or community recognitions. Source from the firm's "In the Community" page or local news mentions. | "[Firm name] community involvement badge" |

---

## Notes

- Badges marked "template-default" (`no-win-no-fee`, `google-reviews`,
  `bilingual-spanish` if applicable, `open-24-7`) can ship as generic SVGs
  with the factory's default styling, monochrome per
  `trust-signals.json` `isMultiColor: false`, recolored to the client's
  palette at build time.
- Issuer-specific badges (bar association, Million Dollar Advocates Forum,
  National Trial Lawyers, Super Lawyers, AVVO, BBB) must be the client's
  ACTUAL badge for an ACTUAL credential. Never fabricate or substitute a
  generic placeholder for these, an unearned credential badge is both a
  compliance risk for the law firm client and a trust violation for the end
  customer.
- If a client has fewer than `trustStripCount: 9` qualifying badges, the
  trust signal surface renders only the badges that qualify. Do not pad with
  unearned badges to reach 9.
- All issuer-specific badges should be monochrome (`isMultiColor: false`)
  per `trust-signals.json`, recolor to the client's `palette.ink` or
  `palette.primary` at build time to match the niche's restrained palette
  discipline.
