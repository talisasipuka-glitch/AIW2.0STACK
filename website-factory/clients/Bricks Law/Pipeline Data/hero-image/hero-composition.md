# Hero Composition, Bricks Law (Stage 9)

Per `templates/personal-injury-lawyers/.claude/sops/08-hero-image.sop.md`, this
niche's Stage 9 is a composition stage, not a synthetic-image-generation stage.
The universal `08-hero-image.md` agent (Gemini/Nano Banana truck-scene generation
for home-services niches) does not apply here.

## Source photo

A real attorney photo exists: `Bricks Law Assets/founder-photos/owner-peter-bricks.jpg`
(621x876, outdoor park/lake background, navy suit, arms crossed, looking at camera).
Per SOP Step 1, since a real photo exists, this stage's job is composition and
background treatment around that photo, not generating a synthetic attorney face.

## Composition (per `09-wireframe.md`)

- Split hero layout: copy + LeadForm left/center, attorney photo right.
- Mobile stacking: attorney photo first, then copy + LeadForm below.
- Trust chips render above the H1, using `copy.heroTrustChips` from
  `brand-dna.json`: "No Win, No Fee", "Free Consultation", "19 Years Licensed in
  Georgia", "$1,325,000 Result".
- Hero headline, subheadline, and form copy come from `brand-dna.json` `copy.hero`
  and `copy.formHeader` / `copy.formSubtext` / `copy.buttonText`, all already
  finalized at Stage 6/7.

## Background treatment

No pixel-level editing was performed on `owner-peter-bricks.jpg` in this stage
(Pillow is not installed in this environment, see Stage 7.5 note). Background
treatment is applied at the component level in Stage 10.1's `HeroSection.jsx`:
a subtle gradient/overlay between the photo and the copy panel, and the
`corner_overlay` chevron motif (`brand-dna.json` `corner_overlay`, color
`#F2B705` at opacity 0.08) in the hero background corner, per SOP step 6.

## Motion and palette restraint (SOP steps 4-5)

- Motion preset: 600ms entrance duration, 90ms stagger, `prefers-reduced-motion`
  honored. No bouncy or energetic treatments.
- Palette restraint: the gold accent (`#F2B705`) is used only on the primary CTA
  button and on the "$1,325,000 Result" trust chip's dollar figure. It is not used
  as a hero background field. Navy (`#16233E`) is the dominant hero color.

## Above-the-fold check (SOP step 7)

Not verified visually in this environment (no Playwright/browser available).
Stage 10.4a (design fidelity QA) should confirm the composed hero, including the
LeadForm submit button, fits above the 900px fold at 1440x900 once Stage 10.1
builds the live component.

## Flag for Stage 12 (delivery report)

The available attorney photo (621x876, outdoor background, arms-crossed pose)
is below the niche playbook's preferred studio-headshot guidance (800x1000+,
chest-up, neutral/office background, looking directly at camera). It is usable
as a placeholder for this build. Recommend the client commission a professional
studio headshot of Peter Bricks to replace it before treating the site as final.
This flag should carry through to Stage 12 (delivery report) and Stage 13
(proposal) as a follow-up item, per the SOP's "no real photo" flag requirement
applied here to "below-preferred-quality real photo."

## Output

No new image files generated. Stage 10.1 will reference
`Bricks Law Assets/founder-photos/owner-peter-bricks.jpg` directly as the hero
image source for `HeroSection.jsx`.
