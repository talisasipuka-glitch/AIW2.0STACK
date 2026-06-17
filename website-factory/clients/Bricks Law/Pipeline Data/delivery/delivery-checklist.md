# Delivery Checklist, Bricks Law (Stage 12)

Live URL: https://bricks-law-website.vercel.app

- [x] Hero loads on desktop AND mobile. No separate generated hero images for
  this niche/client (real founder photo composed into a split hero layout
  per `hero-composition.md`); Hero_desktop and Hero_mobile both score 1.00 in
  10.4a design fidelity.
- [x] All 12 niche-template homepage sections rendered in canonical order
  (Header, Hero, ProcessSteps, StatsBar, PressBand, WhyChooseUs,
  PracticeAreasGrid, FounderStory, Testimonials, FAQSection, CTABand, Footer).
  Confirmed via 10.4a (24/24 region scores pass) and 10.4c (structural DOM
  diff pass).
- [ ] **LeadForm submits end-to-end (CRITICAL, NOT MET)**. Playwright smoke
  test confirms the client-side flow works (fills all 4 fields, submits,
  shows the "Thank you" confirmation state). However `LeadForm.jsx` only
  calls `preventDefault()` and sets local state; no email/webhook/CRM
  integration exists, so submitted leads are not actually captured anywhere.
  Do not treat this site as launch-ready until a real submission destination
  is wired in.
- [x] Sticky mobile call-to-action visible at 375px. Header is
  `sticky top-0` with click-to-call; confirmed via 10.4b mobile checks (5/5
  pass).
- [x] All universal SOP locked phrases present (verified via 10.4b SOP QA,
  112/112 scoreable items pass, 100%, zero HALT failures).
- [x] Schema markup present. `application/ld+json` LocalBusiness block
  confirmed in both the build output and the live page (1 block, populated
  with company/contact/address/hours/reviews/founder from brand-dna.json).
- [x] sitemap.xml accessible at `/sitemap.xml` (HTTP 200 on live URL).
- [x] Click-to-call: phone number wrapped in a `tel:` link
  (`tel:+17706964577`, confirmed in the shipped JS bundle).
- [x] No em-dashes in rendered text (0 hits, confirmed via 10.4b and a direct
  scan of the dist bundle).
- [x] Zero `__REQUIRED__` / FORBIDDEN_STRINGS sentinel hits in `dist/`
  (confirmed via direct scan of the built `dist/` folder).
- [x] No `__REQUIRED__` sentinels surviving in the shipped JS bundle
  (confirmed, 0 hits). Note: `brand-dna.json` itself still has
  `credit.agency = "__REQUIRED__AGENCY_NAME__"`, but this field is not read
  by any component, so it does not leak into the build.
- [x] Lighthouse LCP < 3s on desktop AND mobile (desktop 559 ms / score 1.00,
  mobile 2633 ms / score 0.92).

## Result

11 of 12 items pass. The LeadForm backend-wiring item is an explicit,
documented exception per the SOP's failure-handling table ("Form submission
test fails -> log as critical, do NOT mark complete"). Stage 12 is marked
`complete_with_flags`: the delivery report and this checklist are both
written, and the outstanding items (founder photo quality, trust badge set,
LeadForm backend wiring, Apify research gaps) are surfaced prominently for
the student and the client.
