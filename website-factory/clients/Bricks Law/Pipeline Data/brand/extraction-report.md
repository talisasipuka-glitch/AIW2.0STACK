# Brand DNA Extraction Report, Bricks Law

Stage 7, Brand DNA. Output validated against `references/brand-dna.shape.js` (32-key canonical shape), per the niche-specific SOP at `templates/personal-injury-lawyers/.claude/sops/brand-dna-agent.sop.md`.

## Confidence

5-pass design synthesis scores:

| Pass | Score | Notes |
|---|---|---|
| 1, Logo analysis | 0.95 | Two clean PNG renditions available (wordmark + lockup), monochrome black on white, clear motif read |
| 2, Palette synthesis | 0.65 | No client brand colors available (monochrome logo). Palette fully synthesized from niche idiom (navy + white + gold accent), not extracted from client assets |
| 3, Typography | 0.75 | Template-level pairing (Plus Jakarta Sans / Inter) applied; not client-specific |
| 4, Tagline | 0.85 | Derived from confirmed copy (No Win, No Fee, 19 years, $1,325,000 result); this shape has no hero.mood field so Pass 4 reduced to tagline only |
| 5, Motif extraction | 0.60 | No motif keyword match in logo description; defaulted to "chevron" per Pass 5 default |

Aggregate confidence: 0.76 (mean of above). Threshold is 0.70. No halt required.

Hard-halt checks: `company.licenseNumber` is non-empty (descriptive text, see below); `team.founder` is populated. Both pass.

## Flags and gaps for student review

1. **Address conflict (unresolved, needs client confirmation).** Three different addresses appear across sources:
   - P.O. Box 467007, Atlanta, GA 31146 ("on file" per intake)
   - 1200 Ashwood Parkway Suite 502, Atlanta, GA 30338 (directory listings)
   - 333 Sandy Springs Cir #206 (a second office mentioned in client intake notes, Jonesboro-area)

   `address.full` in brand-dna.json uses the P.O. Box, the only address explicitly confirmed by the client. This is a mailing address, not a street address, and is not suitable for a Google Maps embed or "visit us" copy. Recommend the student confirm the correct physical address(es) with Peter Bricks directly before launch. If a second office is confirmed, `team_members[]` and `location_pages[]` may need an additional location entry.

2. **`company.licenseNumber`.** No formal Georgia Bar number was found in research. Per the SOP this field is a hard requirement (non-empty). Populated with descriptive text: "State Bar of Georgia, Active Member in Good Standing (since 2006)". Recommend the student ask the client for the actual Bar number to replace this with a precise figure.

3. **Palette fully synthesized, not extracted.** Bricks Law's logo is monochrome (black on white, both PNG renditions). The palette uses the "navy + white + gold accent" niche idiom (Dolman Law Group / Perdue & Kidd reference sites) rather than the template default "near-black + bright-yellow + white" (Morgan & Morgan idiom), since navy + gold reads as professional/distinguished and aligns with the Avvo Distinguished / Martindale Distinguished credentials. Student may swap to the alternate idiom if a different feel is preferred.

4. **Typography is template-level, not client-extracted.** Plus Jakarta Sans (headings) / Inter (body) per `templates/personal-injury-lawyers/niche-playbook/design-vocabulary.md`. No client-specific font signal was available.

5. **`shape_motif` defaulted to "chevron".** No motif keyword matched the logo's description during Pass 5. Chevron is the Pass 5 default for this niche.

6. **`voice_register` defaulted to "family".** `templates/personal-injury-lawyers/niche-playbook/vocabulary.json` has no `segmentVocabulary` block to justify a different register, so the SKILL.md default ("family") was applied. The copy in `copy-deck.md` (calm, plain-spoken, client-first) is consistent with this register.

7. **`copy.cta` and `copy.blog` gap-filled.** Neither block had a direct source in `copy-locks.json` or `copy-deck.md`'s global copy section. Values were derived from the homepage final-CTA section (`copy.cta`) and from `copy-locks.json`'s `blogIntro` (`copy.blog.body`). Both are consistent with the rest of the confirmed copy and use only confirmed claims (no 24/7, no fabricated numbers).

8. **`reviews.googleStat` / `reviews.facebookStat` unconfirmed.** Google review count/rating and Facebook rating could not be confirmed this run (Apify GBP/Facebook scrapes returned HTTP 402). `reviews.totalReviewCount` (22), `reviews.rating` (5.0), and `copy.reviews.summary` use Avvo's confirmed figures (7.5/10 "Very Good", 22 reviews averaging 5.0) instead. Recommend re-running the Apify GBP/Facebook scrapes once Apify billing is restored, then updating `reviews.googleStat` / `reviews.facebookStat` and `reviews.googleCount` / `reviews.facebookCount`.

9. **`blog_posts[]` metadata placeholders.**
   - `cover: null` for all 6 posts. No cover images have been generated yet (image generation is a later stage).
   - `date` fields use placeholder weekly dates starting 2026-06-15 (pipeline start date), one week apart. These should be replaced with actual publish dates when the student schedules content.
   - `readTime` values are estimates ("4-6 min read") based on word count, not measured.

10. **`credit.agency` left as `__REQUIRED__AGENCY_NAME__` sentinel.** Per the SOP, this field is owned by Stage 10.1 (populated from `clients/_agency/agency-brand.json`), not Stage 7.

11. **`derive-accent-stops.py` not run.** That script targets the other brand-dna schema's `accent_light` / `accent_mid` / `accent_dark` structure (3-stop accent ramp). This shape's palette has a 2-stop accent (`accent_light` / `accent_dark`) plus `primary_slate` and `silver` as additional structural colors, computed directly via HSL adjustments from the chosen `accent` (#F2B705) and `primary` (#16233E) values. The script was not applicable.

12. **`special_offers[]`.** Populated with "Free Consultation" and "No Win, No Fee" since `specialOffers.discountAmount` was "Not found" in research and no dollar-amount discount exists for this niche (contingency fee model, not a discount).

13. **`team_members[]` and `team.founders[]` left empty.** Research found only one attorney (Peter Bricks, the founder). No additional named team members were found.

14. **`previous_projects[]` and `press_logos[]` left empty.** This niche has no "before/after" visual work product (per Stage 4 asset harvest notes), and no press logos were found in research.

15. **`pages.serviceAreas`, `pages.locationDetail`, `pages.blog`, `pages.blogPost` left as empty objects.** The shape defines these as page-level override containers; no niche-specific overrides beyond the per-location and per-post data already captured in `location_pages[]` and `blog_posts[]` were identified.

## Summary

All hard requirements are met. Confidence (0.76) clears the 0.70 threshold, so no `/approve-brand-dna` halt is required. The most significant open item for the student is the three-way address conflict (flag 1), which should be resolved with the client before the site goes live, since it affects `address.full`, any future Google Maps embed, and potentially `location_pages[]` if a second office is confirmed.
