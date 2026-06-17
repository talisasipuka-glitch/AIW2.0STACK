# Website Factory Brief, personal-injury-lawyers

This brief drives the niche-tailoring of the factory's SOPs, locked
phrases, trust badge registry, default copy patterns, voice register, and
hero image directives via `/tailor-factory`. The active per-niche template
is already scaffolded at `website-factory/templates/personal-injury-lawyers/`
(Module 2D). Per-client intake (business name, URL, phone, location) is NOT
part of this brief, it happens separately at `/run-factory` time.

---

## Part A, Niche identity

```
niche: personal-injury-lawyers
nicheLabel: Personal Injury Lawyers
nicheCategory: other (legal services)

endCustomerProfile:
  who: A person who was just injured (most often in a car accident),
       stressed, often in pain, with no time or appetite to research
       lawyers carefully.
  decisionMoment: Almost always reviewing/searching AFTER an accident,
       in an acute, stressful, often physically painful situation, either
       acting on a referral or cold-searching "personal injury lawyer near
       me" right after the crash.
  topFears:
    - Being ignored or left in the dark (no updates, unreturned calls)
    - Not getting enough compensation / being lowballed by the insurer
    - Picking the wrong firm in a sea of identical-sounding ads
  topPains:
    - Not understanding the legal process while injured and overwhelmed
    - Cost of hiring a lawyer before knowing if it is worth it
    - Every hero form in the niche runs 5-7+ fields, adding friction at
      the exact moment the visitor wants a fast, low-risk first contact

agencyPositioningSentence: "I help personal injury law firms win the trust
of accident victims who are hurt, stressed, and unsure which firm to call
right after a crash, so they choose this firm over the dozens of
similarly-worded competitors they find in the same search."

agencyOneLiner: "I build high-converting websites for personal injury law
firms."
```

---

## Part B, Niche-tailoring directives

### Active template
- Path: `website-factory/templates/personal-injury-lawyers/`
- Source inspiration: Morgan & Morgan (morganandmorgan.com), winner per
  `research/02-niche-research/personal-injury-lawyers/templates/pick.json`
  (90/100). Trust density borrowed from Dolman Law Group (89/100) for the
  StatsBar and PressBand sections.
- Visual personality: Serious, professional, trustworthy. Light theme,
  near-black primary with a single bright-yellow accent reserved for CTAs,
  dollar figures, and the "OPEN 24/7" badge. Sharp chevron shape motif
  evokes forward motion ("fighting for you") without gavel/scales-of-justice
  cliches.

### Trust stack (top 5 in order)

1. "No Win, No Fee" / contingency guarantee, stated explicitly and
   repeatedly near every primary CTA, not just once.
2. Settlement/dollar-amount proof, tagged by case type (e.g. $6.7M
   wrongful death, $5M car accident).
3. Communication / responsiveness proof, ideally with a named-person
   guarantee ("you reach the person handling your case, not a rotating
   intake line").
4. "Not a settlement mill" / fight-for-you positioning.
5. Free, low-friction first consultation, framed as informational ("Free
   Case Evaluation," "understand your rights and options," not a sales
   call).

Full homepage trust-stack order (canonical, from `09-template-spec.md`):
no win/no fee near every CTA -> settlement-dollar proof by case type ->
press/"as seen in" or local award badges -> risk-removal "why choose us"
bullets -> case results grid with dollar figures -> named attorney story
and photo -> testimonials with photos tied to case type and outcome -> FAQ
(PAA-driven) -> office locations (multi-office firms only).

### Hero composition (already in template, reference here)

- Subject: named attorney(s), group photo or single named attorney in a
  suit. Faces are the dominant hero visual, never case photos or generic
  legal stock imagery (no gavels, no scales of justice).
- Mood: serious, confident, restrained. Light background, near-black text,
  bright-yellow accent used only for the dollar figures, CTA button, and
  "OPEN 24/7" badge.
- Primary CTA: "Get Your Free Case Review" (from `copy-locks.json
  ctaPrimary`).
- Secondary CTA: "Call Now, 24/7" (from `copy-locks.json ctaSecondary`),
  sticky in the header as a persistent "CALL NOW" link with the "OPEN 24/7"
  badge.
- Social proof inline: hero trust chips drawn from `heroTrustClaims`
  ("No win, no fee. You pay nothing unless we recover for you.", "Available
  24/7, including nights and weekends.", "You work directly with your
  attorney, not a call center.", "We litigate. We do not settle fast just
  to close the file.").

### Copy voice

Sample headlines (from `03-copy-patterns.md`, 5 paste-ready templates):
1. "[City]'s [Practice Area] Lawyers. No Win, No Fee. Guaranteed." (the
   locked `heroH1Format`)
2. "[Case type] victims have recovered up to $[X]M. Find out what your
   case is worth."
3. "Injured in [city]? You deserve a real fight, not a settlement mill."
4. "Available 24/7. Free Case Evaluation. You pay nothing unless we win."
5. "[Firm name]: [N]+ years, $[X]M+ recovered for [city] families like
   yours."

Sample CTAs:
- "Get Your Free Case Review" (locked `ctaPrimary`)
- "Call Now, 24/7" (locked `ctaSecondary`)
- "Free Case Evaluation. No Fee Unless We Win." (locked `formHeader`)

End-customer phrases to echo verbatim (from `02-customer-voice.md`):
1. "Kept me updated"
2. "Always there and always concerned for my case"
3. "Explained every aspect of the process"
4. "Treat you as family" / "caring people"
5. "Fight for you to get the best [outcome] back"
6. "Your road to justice starts with a single call"
7. "We offer free initial consultations to help you understand your
   rights and your options"
8. "Legal issues don't wait for a 'good time' to happen"
9. "Highly Personalized Service" / "treat every client like family"
10. "I've been in your shoes" (founder personal-story framing)

Section-by-section copy rules (homepage section order, per
`09-sitemap.json`):
- **Hero**: H1 is either case-type settlement proof or the locked
  risk-removal `heroH1Format`. Subheadline restates "No Win, No Fee.
  Guaranteed. Available 24/7." Never lead with the firm's name, never use a
  question as the H1.
- **ProcessSteps**: exactly 3 steps (Submit / We Investigate / We Fight,
  per `process.json`). Never expand past 3.
- **StatsBar**: 4-7 dollar figures, each tagged with a case type, rendered
  with `tabular-nums`, accent-yellow.
- **PressBand**: "As Seen In" (national press) or "Recognized By" (local
  awards/bar badges). Falls back to `trust_badges[]` when `press_logos[]`
  is empty, never left empty or invented.
- **WhyChooseUs**: 4 risk-removal bullets, each removes a specific fear
  (cost, abandonment, being a number, slow process). No generic "quality
  service" bullets.
- **PracticeAreasGrid**: all 7 case types present (car accident, truck
  accident, motorcycle accident, slip and fall, wrongful death, dog bite,
  brain injury). Never collapse below 7.
- **FounderStory**: a NAMED individual with a photo. Two paragraphs:
  personal origin story, then what working with this attorney is like
  day-to-day (direct access, communication commitment).
- **Testimonials**: tie each to a case type and outcome where possible.
  Never fabricate full reviews in this niche (compliance risk for the
  client firm), flag thin review counts to the client instead.
- **FAQSection**: 5-8 plain-language Q&A pairs covering cost, case value,
  "is it worth suing," timeline, partial fault. Tagged with `FAQPage`
  schema. Every answer must be a real answer, never a deflection to
  "contact us."
- **CTABand**: "Injured? Get Your Free Case Review Today." Restates at
  least one risk-removal claim.

### SEO targets

- Primary keywords: "[case type] lawyer [city]" (dominant ranking
  pattern, e.g. "car accident lawyer Houston"), "personal injury lawyer
  [city]".
- Secondary keywords: "truck accident lawyer", "motorcycle accident
  lawyer", "wrongful death lawyer", "brain injury lawyer", "burn injury
  lawyer", "[city] + free consultation", "no fee unless we win".
- Service pages (case-type landing pages, `/case-types/:slug`, all 7 must
  ship): car-accident, truck-accident, motorcycle-accident, slip-and-fall,
  wrongful-death, dog-bite, brain-injury.
- Service-area pages: none by default (`location_pages[]` defaults to
  `[]`). Most clients in this niche are single-office firms; geography is
  carried by GBP data and on-page mentions. Multi-office clients get
  location pages added per `niche-playbook/copywriting.md` Section 8.
- GBP optimization: yes. `Attorney` / `LegalService` / `LocalBusiness`
  schema, `AggregateRating`/`Review` schema, `FAQPage` schema on FAQ and
  every case-type page, `BreadcrumbList` on case-type pages. "Open 24
  hours" is a universal GBP pattern in this niche and should be reflected
  in `hours`/`businessHours`.

### Form pattern

- Already in template per `09-template-spec.md` Section 6: every
  `LeadForm` instance (hero, footer, case-type CTA, contact page) is capped
  at 4 fields, name, phone, email, one-line case description. This resolves
  the niche-wide 5-7+ field violation seen on every competitor site.
- For the factory's intake stage: the 4-field first ask is the universal
  floor. Additional qualification (case type, zip/location, injury status,
  language preference) is collected as a second step (post-submit or
  follow-up call), documented in `niche-playbook/cro-rules.md`, never added
  to the first-ask form.
- Friction-removal: "No Win, No Fee" / `formHeader` ("Free Case Evaluation.
  No Fee Unless We Win.") sits directly above the form. `formPrivacy`
  ("Your information stays private...") sits directly below it. Sticky
  phone "CALL NOW" link is the secondary CTA, always visible.

### What the Factory should NOT do

- No gavel, scales-of-justice, or courtroom-stock imagery anywhere on the
  site (explicit anti-pattern from `09-template-spec.md` / starter
  template).
- Never run hero or footer forms past 4 fields, even though every
  competitor in this niche does.
- Never fabricate client testimonials or settlement figures. Placeholder
  figures must be clearly marked for replacement during per-client
  tailoring, real reviews only.
- Never collapse the PracticeAreasGrid below 7 case types, even if a
  client's research data is thin (use niche defaults from
  `pages.services.items[]`).
- Never expand ProcessSteps past 3 steps.
- Never leave PressBand empty or invent press mentions, fall back to
  `trust_badges[]`.
- Zero em-dashes, smart quotes throughout (universal, also enforced by the
  factory's typographic standards).
- AI-vocab blocklist applies (the niche playbook's
  `copy-blocklist-additions.md` adds "navigate the complexities,"
  "experienced legal counsel," "vigorous representation," "complex legal
  landscape," "trusted advocate" on top of the universal list).

---

## Part C, brand-dna defaults for this niche

```
palette:
  primary:       #1a1a1a   (near-black, header/footer/body text)
  primary_dark:  #0d0d0d
  primary_slate: #33363d
  accent:        #fdeb0e   (bright yellow, CTAs/dollar figures/OPEN 24/7 only)
  accent_light:  #fff566
  accent_dark:   #cabc0b
  neutral:       #94a3b8
  neutral_dim:   #475569
  silver:        #cbd5e1
  ink:           #0a0a0a

typography:
  displayFont: Plus Jakarta Sans (heading, weights 400-800)
  bodyFont: Inter (body, weights 400-700)

voice_register: commercial (serious, direct, personally accountable; see
  niche-playbook/copywriting.md Section 1 for the full voice grammar)

shape_motif: chevron (sharp, angular accents on corners/dividers/cards,
  accent-yellow at 0.08 opacity, hero and CTA bands only)

theme_mode_default: light (this niche is light-only per
  niche-playbook/theme.json, no dark mode, no per-client override)

motion: restrained preset, 600ms duration, 90ms stagger, honors
  prefers-reduced-motion
```

---

## Part D, Missing fields

All fields required by `research/_structure/Website_Factory_Structure.md`
for niche-tailoring (Parts A-C above) are filled from research. No
per-niche field is `[MISSING]`.

Per-client fields are intentionally out of scope for this brief and remain
unset until `/run-factory` intake for a real client:

- `[MISSING, needs input from operator]` businessName
- `[MISSING, needs input from operator]` websiteUrl
- `[MISSING, needs input from operator]` phone
- `[MISSING, needs input from operator]` email
- `[MISSING, needs input from operator]` address (street, city, state, zip)
- `[MISSING, needs input from operator]` founder/attorney name + photo
- `[MISSING, needs input from operator]` real settlement figures per case
  type
- `[MISSING, needs input from operator]` real client testimonials
- `[MISSING, needs input from operator]` press logos / local award badges
  (or confirmation to fall back to `trust_badges[]`)

These are collected at `/run-factory` intake time, not here.
