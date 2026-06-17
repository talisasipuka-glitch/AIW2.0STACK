<!-- niche-playbook v1 -->
# CRO Rules: Personal Injury Lawyers

Consensus conversion-rate-optimisation patterns derived from the niche's
top-of-niche reference pool (morgan-and-morgan, dolman-law-group,
omar-ochoa-law-firm, perdue-and-kidd, gair-gair-conason, pm-law-firm). Stage
10.4b (SOP-QA) reads these as additional gates beyond the universal CRO rules
in `.claude/sops/00-master-blueprint.md`.

---

## 1. Above-the-fold rules

```
Rule: hero contains an H1, the no-win-no-fee + 24/7 subheadline, an attorney
photo, and a 4-field Free Case Evaluation form, all visible above 900px on a
1440x900 viewport.
Evidence: 3 of 3 crawled homepages (morganandmorgan.com, dolmanlaw.com,
omarochoalaw.com) place a lead-capture form directly in or beside the hero.
Failure mode: if the form is below the fold, the niche's dominant conversion
mechanic (immediate free case evaluation) is lost on first impression.

Rule: the phone number with a "CALL NOW" treatment is visible in the sticky
header at all scroll positions.
Evidence: morganandmorgan.com repeats "CALL NOW" across nav dropdowns;
treated here as ONE persistent sticky instance instead of repetition.
Failure mode: visitors who prefer to call (a meaningful share of an injured,
stressed audience) lose the path to action once they scroll past the hero.

Rule: an "OPEN 24/7" badge is present in the header, persistent across scroll.
Evidence: 10 of 10 GBP listings for "personal injury lawyer near me"
(06-seo-landscape.md) are marked "Open 24 hours" with no exceptions, this is
both a CRO and SEO/GBP-alignment signal.
Failure mode: omitting it understates a near-universal niche expectation.
```

## 2. Trust signal density

```
Rule: the primary trust signal surface (floating strip / hero trust chips)
renders 4 claims under the H1.
Evidence: derived from `copy-locks.json` heroTrustClaims (4 entries),
normalised from the niche's recurring risk-removal bullet sets.
Failure mode: fewer than 4 underweights the risk-removal message that
addresses the niche's top-2 customer fears; more than 4 crowds the hero.

Rule: the badge library (`trust-signals.json`) supplies up to 9 badges across
hero, floating-strip, why-choose-us, reviews, footer, and service-page
placements.
Evidence: trustStripCount = 9, matching the 9-item trust stack order in
`09-template-spec.md` Section 7.
Failure mode: below 9 in the combined badge library, the niche's dense proof
stack (settlement figures + press + bar association + reviews) is
under-represented relative to top-of-pool sites.

Rule: the Settlement Results Bar renders 4-7 dollar figures, each tagged with
a case type.
Evidence: dolman-law-group's $6.7M / $5M / $3.2M / $3.85M grid (4 figures,
score 89/100) is the trust-density benchmark this template borrows.
Failure mode: fewer than 4 figures looks thin against the niche's dominant
proof currency; more than 7 becomes a wall of numbers.
```

## 3. Form friction

```
Rule: every primary LeadForm instance (hero, footer, case-type CTA, contact
page) has exactly 4 fields above the fold: name, phone, email, one-line case
description.
Rule: required fields: name, phone, email, case description.
Rule: optional fields: none on the first ask.
Rule: phone number is required (this niche's intake process depends on a
callback within the hour).
Rule: case type, zip/location, injury status, and language preference are
collected in a SECOND-STEP flow (post-submit confirmation screen or a
follow-up call from intake), never on the first-ask form.
```

This is a deliberate divergence from every crawled competitor (Morgan &
Morgan: 5 fields, Omar Ochoa: 7+ fields), per `pick.json.notedDeviation` and
`04-cro-patterns.md`'s Trust SOP B3 analysis. The niche's genuine intake need
for case-type/location data is real, the resolution is to move it to a
second step rather than relax the universal 4-field floor.

## 4. Mobile-specific rules

```
Rule: sticky bottom CTA bar is present on mobile, showing the phone number
during business hours and `ctaPrimary` ("Get Your Free Case Review") after
hours.
Rule: click-to-call is present and prominent on mobile (tel: link, not just
displayed text).
Rule: form field count on mobile = 4 (same as desktop, no further reduction).
Rule: tap-target minimum size = 44px, per universal mobile guidance.
```

## 5. Pricing transparency

```
Rule: cost is addressed via the contingency promise ("No Win, No Fee.
Guaranteed.") visible above the fold, not a dollar price.
Rule: financing is not mentioned, this niche's pricing model is contingency-
based, not financed.
Rule: price-anchor pattern: settlement figures function as the anchor
("$X.XM recovered for [case type]"), not a service price.
```

## 6. Review presentation

```
Rule: review source: Google (per `02-customer-voice.md`'s PM Law Firm sample,
4.9 stars / 627 reviews).
Rule: review excerpt length: 280 characters maximum, with "read more"
expansion for longer reviews.
Rule: reviewer photo: optional, render an initials-avatar when no photo is
available, never a stock photo.
Rule: review velocity proof: aggregate rating + count in the Reviews section
header (`reviewsHeaderFormat`), individual reviews dated where available.
```

## 7. Process / service explanation

```
Rule: process step count: 3 (Submit, We Investigate, We Fight).
Rule: process step granularity: high-level, each step 1-2 sentences.
Rule: service page (case-type page) minimum word count: 500.
Rule: includes cost section: no, contingency promise replaces a cost section.
Rule: includes FAQ section: yes, with FAQPage schema, on the homepage FAQ
AND on every case-type page (case-type-specific FAQ).
```

## 8. Quantified-trust line

See `quantified-trust-templates.md` for the full pattern set (legal-specific
patterns added on top of the universal patterns).

## 9. Conversion-killer anti-patterns

```
Anti-pattern: hero lead-capture form with 5+ fields on the first ask.
Evidence: omarochoalaw.com's 7+ field hero form (name, phone, email, Texas
resident?, location, injured or property damage?, practice area, language,
message), the worst-in-niche form-friction example per `04-cro-patterns.md`.
Why it fails: an injured, stressed visitor abandons a long form before
reaching the value of a callback.

Anti-pattern: generic "our team" framing in the founder/about section with no
named individual or photo.
Evidence: lower-scoring sites in the pool default to faceless "our
attorneys" copy where Dolman and Omar Ochoa use named individuals with
photos and personal stories (score differential reflected in scores.md).
Why it fails: the niche's #1 customer fear is "being ignored or left in the
dark" (02-customer-voice.md), a faceless team reinforces that fear instead
of resolving it.

Anti-pattern: dollar figures shown without a case-type label.
Evidence: bottom-of-pool sites show aggregate "$X recovered" totals with no
breakdown; top-of-pool sites (Dolman, Omar Ochoa's "$1 Billion Recovered"
paired with case-type grids) always pair the headline number with case-type
specific figures.
Why it fails: a visitor cannot match an undifferentiated number to their own
situation, reducing its persuasive value to a vague brag.

Anti-pattern: gavel, scales-of-justice, or courtroom-stock imagery in the
hero or anywhere on the site.
Evidence: explicit anti-pattern flagged in `08-starter-template.md`, none of
the top-3 scored sites use this imagery; it reads as generic stock and
undercuts the "real person, not a settlement mill" positioning.
Why it fails: signals a templated, impersonal firm at the exact moment the
visitor is evaluating whether this firm will treat them as a person.

Anti-pattern: repeating "CALL NOW" multiple times across different nav
dropdowns (Morgan & Morgan's pattern, 8+ instances).
Evidence: `04-cro-patterns.md` documents this as effective for Morgan & Morgan
at their scale, but the niche template uses ONE persistent sticky instance
instead.
Why it fails for a small firm's template: repetition without Morgan & Morgan's
brand recognition reads as noisy navigation rather than confident
accessibility.

Anti-pattern: case-type pages that are thin (under 300 words) or share
duplicate boilerplate across all 7 case types.
Evidence: `06-seo-landscape.md` shows case-type-specific pages
("car accident lawyer Houston") outrank generic personal injury pages
specifically because they answer the case-type query directly.
Why it fails: duplicate or thin case-type pages lose the SEO advantage that
shipping all 7 pages is meant to capture, and read as low-effort to a
visitor who landed on a specific case-type search.
```

---

## Source traceback

```
## Source traceback
- Above-the-fold + sticky CTA: morganandmorgan.com (90/100) -> rules 1, 9
- Trust density: dolman-law-group (89/100) -> rules 2, 8
- Form friction divergence: morgan-and-morgan (5 fields), omarochoalaw.com
  (7+ fields, worst-in-niche) -> rules 3, 9
- Founder/named-attorney pattern: dolmanlaw.com, omarochoalaw.com -> rule 9
- Anti-patterns (imagery, dollar figures, thin case-type pages):
  08-starter-template.md, 06-seo-landscape.md
```
