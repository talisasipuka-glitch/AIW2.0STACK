# Manual drop needed: trust-badges

`templates/personal-injury-lawyers/niche-playbook/trust-badges/` contains
only its own `MANUAL-DROP-NEEDED.md`, no curated SVG badge set exists for
the 12 badges defined in `niche-playbook/trust-signals.json`
(no-win-no-fee, state-bar-association, million-dollar-advocates-forum,
national-trial-lawyers, super-lawyers, avvo-rating, bbb-accredited,
google-reviews, as-seen-in, bilingual-spanish, open-24-7,
community-involvement).

Based on `research-data.json` and `research-report.md`, Bricks Law
plausibly qualifies for:

- `state-bar-association` (State Bar of Georgia, member in good standing
  since 2006, confirmed)
- `avvo-rating` (Avvo Client's Choice + Top Contributor, 22 reviews at 5.0,
  confirmed)
- `google-reviews` (active GBP listing confirmed via testimonials page link;
  review count/rating unverified due to Apify 402, see
  `research-report.md`)

Not confirmed and should NOT be claimed without client confirmation:
`no-win-no-fee` (contingency fee structure is implied by the practice area
but no "No Win, No Fee" language was found on the site), `million-dollar-
advocates-forum`, `national-trial-lawyers`, `super-lawyers`, `bbb-
accredited`, `bilingual-spanish`, `open-24-7`, `community-involvement`.

This folder currently holds 3 third-party review-platform link icons
(Google, Avvo, Thumbtack) scraped from the client's own testimonials page.
These are useful as "leave us a review" link icons but are not a substitute
for the trust-signals.json badge set.

Recommendation: the build/uplift stage should render the confirmed badges
(state-bar-association, avvo-rating, google-reviews) as icon components
(e.g. an icon library) per `trust-signals.json` placements, rather than
waiting on image files, since no curated SVG set exists for this niche yet.
If the niche playbook is refined later (`/refine-template`), add the SVG set
to `templates/personal-injury-lawyers/niche-playbook/trust-badges/`.
