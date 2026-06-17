# Factory Run Feedback Log

## Run 1, Bricks Law, 2026-06-15
Niche: personal-injury-lawyers
Deploy URL: https://bricks-law-website.vercel.app
Proposal URL: https://bricks-law-website-proposal.vercel.app
Factory commit: not available (git CLI not present in this environment)
Template version: 1

What worked:
- Too early to tell. No live traffic yet, client (Peter Bricks) has not seen the site.

What did not:
- Too early to tell. Same reason as above.

Client pushback:
- Too early. Client has not seen the site yet.

End-customer signal (if available):
- Too early. No analytics or call-tracking in place yet.

Template change suggested:
- `niche-playbook/proposal-pages.json` had each page's `sections` field
  double-nested as `{"sections": [...]}` instead of a direct array. This
  broke `_expand_sections` in `tools/build-proposal.py` with
  `AttributeError: 'str' object has no attribute 'get'`. Fixed for the
  personal-injury-lawyers template; Module 2D's generation step for this
  file should match the direct-array contract exactly.
- The niche template's Hero, FounderStory, and PracticeAreasGrid section
  components shipped with no `id="hero"` / `id="about"` /
  `id="service-area"` attributes at all. Stage 13's build-anchor-ID
  validator failed until these were added by hand. Module 2D's per-section
  component generation should stamp these IDs onto the matching sections
  by default.
- `strategy.json` (Stage 5 output) does not carry `services` /
  `service_areas` keys for this niche; the real data lives in
  `brand-dna.json` under `services` / `serviceAreas`. Stage 13's PAGE_DATA
  generation initially produced 0 services + 0 location chips until a
  fallback to brand-dna was added. Either Stage 5 should populate
  `strategy.services` / `strategy.service_areas`, or `derive_page_data`
  should always read from brand-dna for this niche.
- `proposal-pages.json`'s `perServicePageTemplate` section descriptions use
  a `{city}` token that `derive_page_data`'s `base_tokens` did not supply,
  producing 6x "token {city} did not resolve" warnings every run until
  fixed.
- `templates/proposal/agency-logo.svg` (referenced by the proposal
  template's topbar and footer on every client build) did not exist
  anywhere in the repo. This is a universal proposal-template asset gap,
  not niche- or client-specific. A placeholder wordmark was created this
  run; the agency should replace it with a real logo via `/setup-agency`
  follow-up.

Surprises:
- The overall efficiency and speed of the pipeline: going from intake to a
  deployed website plus a deployed sales proposal, end to end, in one
  session was faster than expected.

Operator notes:
- Several of these gaps (anchor IDs, proposal-pages.json shape, strategy.json
  shape, missing agency-logo.svg) only surfaced during the actual client
  build/proposal stages, not during Module 2D's template validator. Worth
  considering whether the validator should check for these specifically
  before a template is marked `factory.generated=true`.
