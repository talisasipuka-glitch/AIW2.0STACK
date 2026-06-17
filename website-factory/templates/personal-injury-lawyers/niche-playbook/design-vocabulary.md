<!-- niche-playbook v1 -->
# Design Vocabulary: Personal Injury Lawyers

Catalogue of design patterns observed in the niche's reference pool. The
build agent picks from these when composing client sites.

---

## 1. Per-site one-liners

- **morgan-and-morgan** (90/100, winner), Near-black + bright-yellow + white
  palette with Plus Jakarta Sans display + Inter body, hero with a single
  spokesperson pointing at camera over a dark band, sticky "CALL NOW" header
  with an "OPEN 24/7" badge, a distinctive 3-step "how it works" block
  directly below the hero.
- **dolman-law-group** (89/100), Navy + white palette with a clean grotesque
  sans throughout, hero with three attorneys arms-crossed looking at camera,
  full-width "Results We Get" grid of case cards with large dollar figures,
  full-width press-logo band (Inc., Forbes, Entrepreneur, People, HuffPost,
  Bloomberg) immediately after the hero.
- **omar-ochoa-law-firm** (lower score), Red + navy + white palette, single
  named attorney hero image, dense 7+ field hero form, "In the Community"
  band lower on the page, multi-office location grid.
- **perdue-and-kidd** (81/100), Charcoal + gold palette, understated
  typography, simple stats strip, fewer decorative elements than the top two.
- **gair-gair-conason**, Navy + white, large multi-attorney team grid,
  directory-style practice-area list, minimal motion.
- **pm-law-firm** (Houston, source for `02-customer-voice.md`), Blue + white,
  Google reviews widget prominent, simpler single-office layout.

## 2. Layout vocabulary catalogue

### 2.1 Hero compositions

- **Spokesperson-pointing** (morgan-and-morgan), a single named individual
  centered or right-aligned, looking at or pointing toward the camera, dark
  background band behind the text. Mood: confident, direct.
- **Team-arms-crossed** (dolman-law-group), 2-3 attorneys standing together,
  arms crossed, looking at camera. Mood: united, formidable.
- **Single-attorney-portrait** (omar-ochoa-law-firm), one named attorney,
  chest-up, suit, neutral background. Mood: approachable, personal.

The niche template uses **single-attorney-portrait** as the default
(matches the "named attorney(s)" requirement and the founder-photo asset
category), with **team-arms-crossed** as the variant for multi-attorney
firms.

### 2.2 Section-to-section transitions

- **Hard-cut with alternating background** (morgan-and-morgan, dolman-law-
  group), sections alternate white and light-grey (`silver`) backgrounds with
  no decorative divider, separation comes from background contrast alone.
  Frequency: dominant pattern across the top 3 sites.
- **Chevron corner accents** (new for this template, derived from
  `pick.json.components.shapeMotif`), low-opacity (0.08) angular chevron
  shapes anchor the hero and CTA band corners, replacing a literal divider
  shape. Frequency: introduced by this template as the niche's signature
  motif, not directly copied from a single reference site.

### 2.3 Card grids

- **4-up settlement stat grid** (dolman-law-group), four dollar-figure cards
  in a horizontal row (desktop), scroll-snap on mobile. Mood: dense, factual.
- **4-col practice area grid** (morgan-and-morgan, gair-gair-conason),
  4-column desktop / 2-column tablet / 1-column mobile card grid for practice
  areas, each card: icon or image, case type name, one-line description.

### 2.4 Trust signal placements

- **Full-width press-logo band** (dolman-law-group), greyscale media logos in
  a single row immediately below the stats bar.
- **Inline trust-chip row under H1** (morgan-and-morgan), 3-4 short claim
  lines with thin-line icons, directly under the hero headline.
- **Badge wall in footer** (omar-ochoa-law-firm), bar association and award
  badges clustered in the footer.

The niche template uses inline trust chips under the H1 (hero placement) PLUS
a press/badge band (floating-strip placement) PLUS a footer badge cluster,
combining all three at the 9-badge density called for in `trust-signals.json`.

### 2.5 Service / offering / category grids

- **Practice area cards with dollar result** (morgan-and-morgan,
  dolman-law-group), each practice-area card shows the case type name AND a
  dollar result, not just a description. This pairing (category + proof) is
  the niche's dominant card pattern and is required, not optional.

### 2.6 Gallery / portfolio patterns

This niche does not use a visual portfolio/gallery pattern (no "before and
after" equivalent). The "Results We Get" dollar-figure grid functions as the
niche's proof gallery. No separate gallery page ships (see
`proposal-pages.json` `gallery` entry).

## 3. Typography pairings catalogue

- **Plus Jakarta Sans (heading) + Inter (body)** (morgan-and-morgan, source
  of this template's typography per `niche-design-tokens.json`), a clean
  grotesque pairing with heavy weights (700-800) for headlines and dollar
  figures, regular-to-medium weights for body. Mood: confident,
  contemporary, professional.

Weight-contrast: headline weights of 700-800 against body weights of 400-500
create the "serious but modern" tone the niche calls for. Tracking: tight
(-0.01em to -0.02em) on large display numbers (settlement figures) to keep
them visually dense and impactful.

## 4. Palette idioms

- **Near-black + bright-yellow + white, restrained accent discipline**
  (morgan-and-morgan, this template's `colorSystemFrom`), the accent color
  (`#fdeb0e`) appears ONLY on CTAs, dollar figures, and the "OPEN 24/7" badge.
  Every other surface is near-black, white, or grey. This restraint is the
  single highest-scoring design attribute in `scores.md` (12.5/12.5 for
  visual coherence).
- **Navy + white + gold accent** (dolman-law-group, perdue-and-kidd), an
  alternative idiom for clients whose brand-dna palette is navy-based rather
  than near-black. The chevron motif and restraint rules apply the same way,
  substitute navy for near-black as the `primary`.

## 5. Motion idioms

- **Restrained, minimal motion** (morgan-and-morgan, perdue-and-kidd), subtle
  fade-and-rise on scroll, 600ms duration, premium easing
  (`cubic-bezier(0.16, 1, 0.3, 1)`), 90ms stagger between elements. No bounce,
  no overshoot. This is the niche default per `motion-preset.json`.
- **Number-glow on settlement figures** (new Tier 2 pattern enabled for this
  niche), a subtle glow/scale pulse when a dollar figure scrolls into view,
  reinforcing the "this number matters" framing without adding bounce.
- **Scroll progress bar** (Tier 2, enabled), a thin progress indicator under
  the sticky header, useful for long case-type pages.

## 6. Decorative motif idioms

- **Chevron corner overlay** (`shape_motif: "chevron"`, per `pick.json`),
  angular chevron shapes at 0.08 opacity in the niche's accent color
  (yellow), used ONLY on the hero background and the final CTA band
  background. Evokes forward motion and "fighting for you" without literal
  legal iconography (gavel, scales).
- **Tabular-nums on all stat/dollar displays** (universal foundation rule,
  reinforced here because this niche's primary proof currency is numeric).

## 7. Anti-patterns observed in the pool

- **Gavel / scales-of-justice iconography**, none of the top-3 scored sites
  use this; lower-scoring directory-style sites (Justia, Super Lawyers
  listings referenced in `06-seo-landscape.md`) lean heavily on this
  iconography and read as generic. Explicit "don't do this" rule for the
  build agent.
- **Dark/moody theme**, the niche's top performers are uniformly light-theme.
  A dark theme would misalign with the "approachable, available to you"
  positioning this niche needs (contrast with, e.g., a storm-restoration
  contractor niche where dramatic/dark imagery works).
- **Dense, multi-field hero forms** (omar-ochoa-law-firm's 7+ field form),
  visually busy and a CRO failure (see `cro-rules.md` rule 3 and anti-pattern
  1).
- **Faceless "our team" graphics** (generic icon-based team representations
  in lower-scoring sites), undercuts the personal-trust framing this niche
  depends on.

---

## Source traceback

```
## Source traceback
- Pool size: 6 sites captured (morgan-and-morgan, dolman-law-group,
  omar-ochoa-law-firm, perdue-and-kidd, gair-gair-conason, pm-law-firm)
- High-scoring sites: morgan-and-morgan (90/100), dolman-law-group (89/100)
- Low-scoring sites (anti-pattern source): omar-ochoa-law-firm (form
  friction), directory-style sites referenced in 06-seo-landscape.md (gavel
  iconography)
```
