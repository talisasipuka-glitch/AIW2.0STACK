# 6 - Copy Deck

Implements: Stage 6.

## Purpose

Write the complete site copy: every headline, body section, FAQ, founder
story, case-type page, testimonial summary, and CTA, in the serious,
professional, trustworthy voice this niche requires, while honoring the
4-field LeadForm cap and the trust-claim placement rules.

## Inputs (per-client)

```
clients/[Client Name]/Pipeline Data/strategy/
clients/[Client Name]/Pipeline Data/research/
```

## Procedure

1. Write the hero copy: H1 from a case-type-tagged settlement proof OR a
   risk-removal framing (per `09-template-spec.md` Section 4, item 2),
   subheadline carrying the contingency guarantee ("No Win, No Fee.
   Guaranteed.") and availability claim ("Available 24/7" only if Stage 1
   confirmed it). Write `heroTrustChips` as short trust fragments (e.g.
   "No Fee Unless We Win", "Free Case Review", "[X] Years Combined
   Experience").
2. Write the LeadForm copy (`formHeader`, `formSubtext`, `buttonText`,
   `privacyLine`) for the 4-field form: name, phone, email, one-line case
   description. Do NOT write copy implying additional fields (case type,
   zip, injury status); these belong to the second-step qualification flow
   documented in the niche playbook's `cro-rules.md`, not the first-ask
   form.
3. Write `process_steps[]` (3 steps): "Submit your case", "We investigate",
   "We fight for you" or the client's equivalent framing, per
   `09-template-spec.md` Section 4, item 3.
4. Write the StatsBar copy: present each settlement figure with its case
   type label. Dollar figures render with `tabular-nums`; write the figures
   as plain numerals with currency symbol (e.g. "$3,200,000"), the
   formatting is handled by the template's CSS.
5. Write `why_choose_us[]`: risk-removal bullets covering contingency
   guarantee, availability (only if true), direct attorney access, "not a
   settlement mill" positioning, and bilingual service (if applicable), per
   `09-template-spec.md` Section 4, item 6.
6. Write `pages.services.items[]` for each covered case type: name,
   one-line description for the PracticeAreasGrid card, `settlementFigure`
   (or omit if not disclosable), a longer `body` for the case-type page's
   CaseTypeExplainer ("what to do after this accident type", "what
   compensation typically covers"), and `faq[]` (3 to 5 case-type-specific
   questions per `09-wireframe.md`).
7. Write the FounderStory copy (`copy.founder.*`): a 2-paragraph personal
   origin story for the named attorney, per `05-trust-signals.md`'s
   strongest-found pattern ("I've been in your shoes"). Use the personal
   angle collected at Stage 1. Avoid generic "I've always cared about
   justice" framing; ground the story in a specific reason this attorney
   does this work.
8. Write `reviews.items[]` testimonial summaries from Stage 2's tagged
   reviews: pair each testimonial with a case type and outcome where
   possible (per `05-trust-signals.md`: "Car accident victim, recovered $X
   - 'they kept me updated the whole time'").
9. Write the homepage FAQ (`faq[]`): cost of hiring a lawyer, average
   settlement amounts, "is it worth suing," timeline, partial-fault
   scenarios (the PAA set identified in Stage 3).
10. Write `copy.trustClaims[]` for the RiskRemovalBand on case-type pages:
    short restatements of the contingency guarantee and availability.
11. Write `copy.cta.*` for the final CTABand: a direct, urgent but
    non-pressuring call to action ("Injured? Get your free case review
    today.").
12. Write footer copy: `copy.footerCta`, `copy.copyright`,
    `hours.display`, and confirm `company.licenseNumber` is present (from
    Stage 1, hard requirement).
13. Run the copy-lint check against `references/copy/ai-vocab-blocklist.md`
    and `references/copy/typographic-standards.md`. Zero em-dashes, no
    banned vocabulary, curly quotes, tabular-nums on all dollar figures.

## Pass criteria

- Every brand-dna copy path listed in `09-template-spec.md` and
  `09-wireframe.md` has content.
- LeadForm copy (hero, footer, case-type CTA, contact page) implies exactly
  4 fields: name, phone, email, case description.
- All 7 (or fewer, per Stage 5) case-type pages have a name, description,
  body, and FAQ set in `pages.services.items[]`.
- "No win, no fee" or the client's equivalent contingency statement appears
  near the hero CTA, the footer CTA, every case-type page's
  RiskRemovalBand, and the final CTABand.
- "Available 24/7" / "Open 24/7" copy appears ONLY if Stage 1 confirmed it.
- Copy-lint passes: zero em-dashes, no blocklist hits, curly quotes,
  tabular-nums applied to dollar figures.
- FounderStory is specific and personal, not generic.

## When this stage halts

- Copy-lint fails with banned vocabulary or em-dashes. Rewrite the flagged
  sentences in plain language and re-run.
- A case-type page in `pages.services.items[]` has no `body` or `faq[]`.
  This violates `09-wireframe.md`'s "full trust stack on every case-type
  page" requirement.
- The hero or footer LeadForm copy implies more than 4 fields.

## Niche-specific notes

For this niche, the following pattern applies (derived from
`research/02-niche-research/personal-injury-lawyers/09-template-spec.md` +
the niche playbook):

This niche's copy voice is serious and professional, not energetic or
trade-service casual (per `pick.json` studentNotes). The contingency
guarantee is the single most repeated line in the niche
(`05-trust-signals.md` signal #1) and must appear near every CTA, not just
once. Settlement figures are the niche's dominant proof currency
(`05-trust-signals.md` signal #2) and should be visually and verbally
prominent, written as plain numerals for `tabular-nums` rendering. The
4-field LeadForm cap is a deliberate CRO deviation from the niche norm
(every crawled competitor runs 5 to 7+ fields per `04-cro-patterns.md`); do
not let copy drift back toward implying more fields are needed at first
contact. The FounderStory section is this niche's strongest emotional
trust element; do not write it as a generic bio, write it as the specific
personal account collected at Stage 1.

---

## Author + version

Generated by Module 2D at `2026-06-14` from:

- Niche: `personal-injury-lawyers`
- Wireframe: `research/02-niche-research/personal-injury-lawyers/09-wireframe.md`
- Playbook: `templates/personal-injury-lawyers/niche-playbook/`
- Source skill versions: see `templates/personal-injury-lawyers/MANIFEST.json`
