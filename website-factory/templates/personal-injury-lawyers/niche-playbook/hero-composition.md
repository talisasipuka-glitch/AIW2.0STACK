<!-- niche-playbook v1 -->
# Hero Composition: Personal Injury Lawyers

Complete per-niche prompt template Stage 9 (Nano Banana hero image) reads.
`tools/generate-hero.py` substitutes per-client tokens into this file and
sends the result to the Gemini Image API.

---

## 1. Composition spec

```
Subject: a named attorney, chest-up to waist-up, positioned right-of-center
or center, looking directly at the camera with a confident, approachable
expression. Suit or business-professional attire.
Scale: subject occupies 35-45% of the frame width, vertically centered to
slightly above center.
Foreground: clean, minimal, subject's torso and shoulders.
Midground: subject, softly blurred professional office or neutral studio
background (bookshelf, window with soft light, or solid near-black panel).
Background: solid near-black or deep charcoal panel (matches `palette.primary`)
behind the subject on the left 40-55% of the frame, providing contrast for
text overlay.
Text overlay zone: LEFT 40-55% reserved over the dark panel, kept
unobstructed for H1, subheadline, and trust chips.
People: one named attorney (or 2-3 for multi-attorney firms, arranged
shoulder-to-shoulder, all facing camera). No other people in frame.
Anchor object: none required, the attorney's presence IS the anchor. If a
firm logo is available, a subtle glass-etched or wall-mounted logo may appear
softly in the midground background, not overlapping the subject.
Negative space: the dark text-overlay panel on the left is the primary
negative space, kept free of any object or texture beyond a subtle chevron
corner accent (see Section 6).
Forbidden in frame: gavel, scales of justice, law books as props, courtroom
imagery, generic stock-photo "handshake" compositions, any other people
besides the named attorney(s).
```

## 2. Subject reference photo handling

- Lives at `[Client] Assets/founder-photos/{filename}` per
  `photo-manifest.json` `founder-photos` category.
- **Required.** This niche's imagery direction (`09-template-spec.md`
  Section 9) is people-centric and explicitly people-first; a subject-less
  hero composition contradicts the niche's core trust pattern.
- **Behaviour when missing**: HALT. Stage 9 does not generate a subject-less
  hero for this niche. The pipeline flags the missing founder photo back to
  Stage 4 (asset scraper) and, if still missing, to the proposal as a
  photo-shoot requirement (`photo-manifest.json`
  `photoShootBriefRequired: true`).
- **Required composition for the cutout**: chest-up, neutral or
  softly-blurred professional background, looking at camera, suit or
  business-professional attire, even studio-quality lighting.

## 3. Logo handling in-frame

- The firm's logo does NOT appear prominently in the hero image itself, this
  niche's hero is people-first, not signage-first.
- If a logo asset exists, it may appear subtly: a small wall-mounted or
  glass-etched rendering in the blurred office background, sized small
  enough that it reads as environmental detail, not a focal point.
- The logo's primary placement remains the site header, not the hero image.

## 4. Mood baseline

Default `brand-dna.hero.mood` for this niche: `bright_midday_clean` (per
`hero-mood-mapping.json` `defaultMood`). Two niche-specific moods are
available for case-type-specific framing:

- `settlement_proof`, used on case-type pages where a large dollar figure
  appears alongside the attorney image, higher contrast lighting to make the
  accent-yellow figure pop.
- `risk_removal`, used on the homepage hero and About page, slightly warmer
  and softer than `settlement_proof`, to read as reassuring rather than
  combative.

## 5. Region defaults

This niche does not vary hero composition by region in the way a
hospitality or contractor niche would (no landscape, climate, or property-
style variation). The attorney's appearance, office background style, and
firm branding are the only per-client variables. No `hero-regions.json` is
shipped for this niche.

One exception: clients in markets with a significant Spanish-speaking
population (per `06-seo-landscape.md`'s bilingual-service finding) may
include a small "Se Habla Espanol" badge element in the trust-chip row, not
in the hero image itself.

## 6. Lighting + colour

The `bright_midday_clean` mood's even, bright studio-quality light pairs with
this niche's near-black + white + bright-yellow palette by keeping the
subject and dark panel in clean, high-contrast separation, the dark panel
reads as deliberate design, not underexposure. For `settlement_proof` mood
on case-type pages, the lighting brief shifts to higher contrast so the
accent-yellow dollar figure (rendered as a UI overlay, not part of the
generated image) has a clean dark or light field to sit against.

The chevron corner overlay (0.08 opacity, accent-yellow) sits in a corner of
the dark text-overlay panel, never overlapping the subject's face.

## 7. Style ladder

- **Generated baseline** (Stage 9 default): Nano Banana composes the
  attorney's reference photo into the spec above, dark panel + chevron
  accent + clean studio lighting. Used when the client has a usable headshot
  but no full marketing photography.
- **Professional shoot** (proposal-recommended tier): a half-day studio or
  on-location shoot producing the chest-up attorney portrait described in
  Section 1, plus 2-3 alternate poses/expressions for A/B testing the hero.
- **Cinematic premium** (niche top-of-pool tier): morgan-and-morgan-style
  spokesperson photography, professional lighting rig, multiple outfit/pose
  options, and a separate brand photography session covering founder,
  team, and office.

## 8. Example prompt assembly

```
A confident, professional headshot-style photo of {company}'s lead attorney,
chest-up, looking directly at the camera with a warm but serious expression,
wearing professional business attire. The subject occupies the right
40-45% of the frame. The left 45-55% of the frame is a solid {primary_color}
panel with a subtle {accent_color} chevron accent in the lower-left corner at
low opacity, reserved for text overlay. Background behind the subject is a
softly blurred modern law office, warm wood tones and soft window light,
{mood_lighting}. Clean, editorial, trustworthy. No props, no gavel, no
scales of justice, no other people in frame. {owner_block}
```

Example with tokens filled (Stage 9 dry-run fixture):

```
A confident, professional headshot-style photo of Garcia & Associates's lead
attorney, chest-up, looking directly at the camera with a warm but serious
expression, wearing professional business attire. The subject occupies the
right 40-45% of the frame. The left 45-55% of the frame is a solid #1a1a1a
panel with a subtle #fdeb0e chevron accent in the lower-left corner at low
opacity, reserved for text overlay. Background behind the subject is a softly
blurred modern law office, warm wood tones and soft window light, even,
bright studio-quality light with soft shadows; clean, neutral background that
reads as professional and trustworthy. Clean, editorial, trustworthy. No
props, no gavel, no scales of justice, no other people in frame. Subject
reference: [Client] Assets/founder-photos/owner.jpg, chest-up cutout,
neutral background.
```

---

## Source traceback

```
## Source traceback
- Composition patterns: morganandmorgan.com (spokesperson hero),
  dolmanlaw.com (team hero variant)
- Mood preferences: morganandmorgan.com (bright, high-contrast),
  dolmanlaw.com (founder-story warmth for About page)
- Subject scale + placement: morganandmorgan.com hero capture
  (templates/raw/morgan-and-morgan/desktop/result.json)
```
