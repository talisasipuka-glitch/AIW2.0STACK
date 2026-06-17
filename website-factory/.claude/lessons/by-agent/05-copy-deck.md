# Lessons for `05-copy-deck`

This file accumulates rules learned from `/lesson` corrections.
It is empty on a fresh clone. Every confirmed lesson lands here and is auto-loaded by the agent at Step 0.

---

## Niche voice seed, personal-injury-lawyers

Seeded by `/tailor-factory`. Canonical data lives in
`templates/personal-injury-lawyers/niche-playbook/copy-locks.json`,
`copywriting.md`, and `.claude/sops/06-copywriting.sop.md`. The rules below
are a quick-reference summary, do not edit the canonical files from here.

### Hero headline pattern (locked)

`heroH1Format`: "[City]'s [Practice Area] Lawyers. No Win, No Fee.
Guaranteed." Subheadline restates "No Win, No Fee. Guaranteed. Available
24/7." Never lead with the firm's name, never use a question as the H1.

### Locked CTAs

- `ctaPrimary`: "Get Your Free Case Review"
- `ctaSecondary`: "Call Now, 24/7" (sticky header link with "OPEN 24/7"
  badge)
- `formHeader`: "Free Case Evaluation. No Fee Unless We Win."

### Top 5 end-customer phrases to echo verbatim

1. "Kept me updated"
2. "Always there and always concerned for my case"
3. "Explained every aspect of the process"
4. "Treat you as family" / "caring people"
5. "Fight for you to get the best [outcome] back"

### Top 5 end-customer fears to answer directly

1. Being ignored or left in the dark, no updates, unreturned calls.
2. Not getting enough compensation, being lowballed by the insurer.
3. Picking the wrong firm in a sea of identical-sounding ads.
4. Cost of hiring a lawyer before knowing if it is worth it.
5. Long, confusing legal process while injured and overwhelmed.

### Banned phrases (on top of the universal AI-vocab blocklist)

"navigate the complexities," "experienced legal counsel," "vigorous
representation," "complex legal landscape," "trusted advocate." Zero
em-dashes, smart quotes throughout.

### Top 5 trust elements to weave into copy

1. "No Win, No Fee" / contingency guarantee, near every CTA.
2. Settlement-dollar proof tagged by case type.
3. Communication / responsiveness promise with a named-person guarantee.
4. "Not a settlement mill" / fight-for-you positioning.
5. Free, low-friction case evaluation, framed as informational, not a
   sales call.

### Homepage section order (canonical, do not reorder)

Hero -> ProcessSteps (3 steps: Submit / We Investigate / We Fight) ->
StatsBar -> PressBand -> WhyChooseUs -> PracticeAreasGrid (7 case types,
never collapse) -> FounderStory -> Testimonials -> FAQSection -> CTABand.
