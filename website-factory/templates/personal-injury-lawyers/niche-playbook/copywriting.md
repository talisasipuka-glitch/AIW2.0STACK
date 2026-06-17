<!-- niche-playbook v1 -->
# Copywriting Framework: Personal Injury Lawyers

This file is the niche's copywriting framework. The Stage 6 copywriting agent
loads it. `.claude/skills/copywriting/SKILL.md` is the universal contract;
this file supplies personal-injury-lawyer specifics.

---

## 1. Voice grammar

Voice in one sentence: **serious, direct, and personally accountable**,
speaking to **a person recently injured, in pain, and stressed** about
**whether hiring this firm is worth it, affordable, and will actually get
them taken care of**.

Voice principles:

1. **Avoid:** "Our experienced legal team works hard to fight for your rights."
   **Use:** "When you call, you talk to the attorney handling your case. Not an intake line."
   Specificity beats a vague claim.

2. **Avoid:** "We offer comprehensive legal representation for accident victims."
   **Use:** "We've recovered $14M for car accident victims in [City]. Here's what your case could be worth."
   Lead with a number, not a category.

3. **Avoid:** "Don't wait, contact us today for a consultation."
   **Use:** "Free Case Evaluation. No fee unless we win. Available 24/7."
   State the terms plainly instead of pushing urgency.

4. **Avoid:** "We understand this is a difficult time for you and your family."
   **Use:** "You're hurt, the insurance company is already calling, and you don't know what your case is worth. We'll tell you straight."
   Name the actual situation instead of a generic empathy line.

5. **Avoid:** "Our firm has a proven track record of success."
   **Use:** "$6.7M for a single car accident case. $5M for a truck accident. $3.2M for a slip and fall." (with specific figures per client)
   Numbers, not adjectives.

6. **Avoid:** softening every claim with "we believe" or "we try to."
   **Use:** direct statements. "We litigate. We don't settle fast just to close the file."
   Confidence without hedging is the tone this niche's top performers use.

## 2. Banned phrases (niche-specific additions)

See `copy-blocklist-additions.md` for the full fenced list. Summary: avoid
"navigate the complexities," "experienced legal counsel," "vigorous
representation," "complex legal landscape," "trusted advocate," and any
gavel/scales-of-justice imagery references in copy.

## 3. Preferred phrases (niche-specific tells of authenticity)

- "No win, no fee" / "You owe us nothing unless we recover for you."
- "You work directly with your attorney."
- "We're not a settlement mill."
- "Free Case Evaluation" (not "free consultation" alone, the niche's reference
  pool consistently uses "case evaluation" or "case review").
- "Here's what your case could be worth."
- "We've been in your shoes." (when the founder has a personal connection to
  the practice area)
- "Open 24/7" / "Available 24/7, including nights and weekends."
- "[N]+ years recovered $[X]M for [city] families like yours."

## 4. Tone calibration by sub-segment

This niche is largely uniform: the visitor is injured and stressed regardless
of case type. The one calibration: wrongful death pages should drop the
dollar-figure-forward framing from the hero (no large accent-yellow number
above the fold) and lead instead with the risk-removal and "we'll handle this
so your family doesn't have to" framing. Settlement figures for wrongful
death cases still appear lower on the page, but never as the first thing a
grieving visitor sees.

## 5. Section-by-section copy frameworks

### Hero
- **H2 formula**: not applicable (Hero uses H1, see `copy-locks.json`
  `heroH1Format`). H1 is either case-type settlement proof ("[Case type]
  victims have recovered up to $[X]M. Find out what your case is worth.") or
  risk-removal framing ("[City]'s [Practice Area] Lawyers. No Win, No Fee.
  Guaranteed.").
- **Sub-H2 formula**: "No Win, No Fee. Guaranteed. Available 24/7."
- **Body copy framework**: trust chips (4 short lines from `heroTrustClaims`),
  then the 4-field Free Case Evaluation form.
- **Guardrails**: never lead with the firm's name in the H1. Never use a
  question as the H1 ("Were you injured in an accident?") -- the niche's
  top performers state, they don't ask.

### Process / How It Works
- **H2 formula**: "How It Works"
- **Sub-H2 formula**: none, the three numbered steps carry the section.
- **Body copy framework**: Submit / We Investigate / We Fight, per
  `process.json`. Each step 1-2 sentences, plain language, no legal jargon.
- **Guardrails**: never expand past 3 steps for this niche. Morgan & Morgan's
  3-step pattern is the distinctive move; more steps dilute it.

### Settlement Results Bar (Stats)
- **H2 formula**: "Real Results for Real People" or "Case Results" (vary, do
  not use the same heading on the homepage and the case-type pages).
- **Body copy framework**: 4-7 dollar figures, each tagged with a case type.
  All figures rendered with `tabular-nums`, accent-yellow.
- **Guardrails**: never show a dollar figure without a case-type label.
  Never invent figures, placeholder figures must be clearly marked for
  replacement during factory tailoring.

### Press Band
- **H2 formula**: "As Seen In" (national press) or "Recognized By" (local
  awards / bar association badges for firms without national press).
- **Body copy framework**: logo strip only, no body copy needed.
- **Guardrails**: if no press exists, fall back to `trust_badges[]` rather
  than leaving the section empty or inventing press mentions.

### Why Choose Us
- **H2 formula**: "Why Choose [Firm Short Name]" or "Why Choose Us"
- **Sub-H2 formula**: none.
- **Body copy framework**: 4 risk-removal bullets from `why_choose_us[]`. Each
  bullet is a short, declarative sentence (5-10 words), not a paragraph.
- **Guardrails**: every bullet must remove a specific fear (cost, abandonment,
  being a number, slow process). No generic "quality service" bullets.

### Practice Areas Grid
- **H2 formula**: "Practice Areas" or "How We Can Help"
- **Sub-H2 formula**: "Click any case type to see what your case could be worth."
- **Body copy framework**: one card per case type. Each card: case type name,
  dollar result, one sentence description, link to `/practice-areas/{slug}`.
- **Guardrails**: all 7 case types must be present. Never collapse to fewer
  than 7 cards even if a client's research data is thin, use the niche
  defaults from `pages.services.items[]`.

### Founder / About
- **H2 formula**: "Meet [Founder Name]" or "Why [Founder First Name] Became a
  [Practice Area] Lawyer"
- **Sub-H2 formula**: a one-line personal hook (e.g. "After his own family was
  let down by an insurance company, [Name] decided to do something about it.")
- **Body copy framework**: two paragraphs. Paragraph 1: personal origin
  story, why this work. Paragraph 2: what working with this attorney is like
  day-to-day (direct access, communication commitment).
- **Guardrails**: must be a NAMED individual with a photo. Never "our team" as
  a faceless entity in this section.

### Testimonials / Reviews
- **H2 formula**: from `copy-locks.json` `reviewsHeaderFormat`, e.g. "{N}
  Google reviews from people we have helped get back on their feet."
- **Body copy framework**: see Section 7 below.
- **Guardrails**: tie each testimonial to a case type and outcome where
  possible. Never use a generic 5-star quote with no context.

### FAQ
- **H2 formula**: "Frequently Asked Questions" or "Questions People Ask Us
  After an Accident"
- **Body copy framework**: 5-8 plain-language Q&A pairs covering cost, case
  value, "is it worth suing," timeline, partial fault. Tagged with FAQPage
  schema.
- **Guardrails**: every answer must be a real answer, not a deflection to
  "contact us to learn more" -- give the actual plain-language information,
  then invite contact.

### Final CTA Band
- **H2 formula**: "Injured? Get Your Free Case Review Today."
- **Body copy framework**: restate the no-win-no-fee promise + 24/7
  availability + the primary CTA button.
- **Guardrails**: must restate at least one risk-removal claim, this is the
  last chance before the footer.

### Footer
- Repeats the 4-field LeadForm, hours display, bar association links,
  license number, copyright. See `copy-locks.json` for the locked strings.

### Case-Type Landing Pages (7 instances)
- **H1 formula**: "[Case Type] Lawyer in [City] | [Firm Name]"
- **Body copy framework**: see Section 9 below.

---

## 6. CTA microcopy library

- **Hero CTA button** (`ctaPrimary`): "Get Your Free Case Review"
- **Form pre-header** (`formHeader`): "Free Case Evaluation. No Fee Unless We Win."
- **Form privacy line** (`formPrivacy`): "Your information stays private. We never sell or share your details with anyone."
- **Mid-page CTA alternatives**:
  - "See What Your Case Could Be Worth"
  - "Talk to an Attorney, Not an Intake Line"
  - "Find Out If You Have a Case"
  - "Start Your Free Case Review"
- **Bottom-banner CTA alternatives**:
  - "Injured? Get Your Free Case Review Today."
  - "You Pay Nothing Unless We Win. Get Started Now."
  - "Don't Wait. The Insurance Company Already Has a Lawyer."
  - "Free, Confidential, No Obligation. Reach Out Now."
- **Mobile sticky during hours** (`mobileCallLabel`): "CALL NOW"
- **Mobile sticky after hours**: falls back to `ctaPrimary` ("Get Your Free Case Review")
- **Post-submit thank-you**: see `copy-locks.json` `thankYouMessage`.

---

## 7. Review guardrails

When real reviews exist (the common case, per `02-customer-voice.md`'s PM Law
Firm sample of 627 reviews at 4.9 stars):

- Show 4-6 reviews on the homepage, full list on `/testimonials`.
- Format: reviewer first name + last initial, source platform (Google),
  star rating, photo if available, truncate at 280 characters with "read
  more" expansion.
- Pair each review with a case type tag where the review text indicates one
  (e.g. "Car accident client").
- Never edit a real review's wording beyond truncation.

When real reviews are insufficient (0-3 real reviews):

- Do not fabricate full reviews. Instead, render a smaller "early reviews"
  module with the real reviews available, and lean more heavily on the
  Settlement Results Bar and Press Band for trust in that gap.
- If the niche playbook's objection-review generator is used elsewhere in the
  factory, it must NOT be used for this niche, fabricated client testimonials
  in a legal context are a compliance risk for the client firm. Flag this to
  the client instead.

---

## 8. Location-page copy framework

Most clients in this niche are single-office firms (per `06-seo-landscape.md`,
geography is carried by GBP data and on-page mentions, not separate location
pages or brand naming). `location_pages[]` defaults to `[]`.

For multi-office firms that DO need location pages:

- **H1 pattern**: "[Practice Area] Lawyer in [City], [State] | [Firm Name]"
- **Intro paragraph**: 100-150 words, weave in the office's neighborhood,
  the courthouse(s) the firm appears before, and one local landmark.
- **Word-count minimum**: 300 words per location page.
- **Internal linking**: link to 2-3 relevant case-type pages and to the
  contact page for that office.

---

## 9. Case-type page copy framework

For each of the 7 case-type pages (car accident, truck accident, motorcycle
accident, slip and fall, wrongful death, dog bite, brain injury):

- **H1 pattern**: "[Case Type] Lawyer in [City] | [Firm Name]"
- **Hero paragraph**: problem-aware, 2-3 sentences acknowledging the specific
  situation (e.g. "A truck accident is different from a car accident. The
  trucking company has its own investigators on scene within hours. You need
  someone on your side just as fast.")
- **Required H2 sections**:
  1. Settlement figure for this case type (large, prominent)
  2. "No win, no fee" restated
  3. "What to do after a [case type]" explainer
  4. "What compensation typically covers" for this case type
  5. Case-type-specific FAQ (3-5 items)
  6. CTA band with repeated 4-field form
- **Word-count minimum**: 500 words per case-type page.
- **Schema requirement**: FAQPage on the FAQ block, BreadcrumbList on the page.

---

## 10. Blog post patterns

Title formulas:
- "What to Do After a [Case Type] in [City]: A Step-by-Step Guide"
- "How Much Is My [Case Type] Case Worth in [State]?"
- "[N] Things Insurance Companies Don't Want You to Know After a [Case Type]"
- "Do I Need a Lawyer for a [Case Type]? Here's How to Decide"
- "[City] [Case Type] Statistics: What the Data Says About Your Claim"

Default starter list (4-6 posts):
1. "What to Do After a Car Accident in [City]: A Step-by-Step Guide"
2. "How Much Is My Personal Injury Case Worth in [State]?"
3. "5 Things Insurance Companies Don't Want You to Know After an Accident"
4. "Do I Need a Lawyer for a Slip and Fall? Here's How to Decide"
5. "What Happens If the Other Driver Has No Insurance?"
6. "Is It Worth Suing for Pain and Suffering in [State]?"

Section structure: hook (1 paragraph naming the reader's situation) -> 4-6 H2
sections -> internal links to 1-2 case-type pages -> CTA band.

---

## 11. Quantified trust line patterns

See `quantified-trust-templates.md` for the full pattern list. Stage 6 walks
these top-to-bottom and uses the first whose `research-data.json` conditions
match.

---

## 12. Em-dash + smart-quote audit

Zero em-dashes anywhere, including hero headlines, dollar-figure callouts,
and FAQ answers. Smart quotes throughout. `python3 tools/copy-lint.py --check
--include-niche personal-injury-lawyers` must pass before delivery.

---

## 13. Quality bar (niche-specific extras)

- Every dollar figure on the site is tagged with a case type, never a bare
  number.
- All 7 case-type pages are shipped with a unique H1, unique settlement
  figure, and unique FAQ, no templated duplicate content across case types.
- The founder section names a real person with a real photo, never "our
  team" or "our attorneys" as the subject.
- "No win, no fee" (or the client's equivalent contingency line) appears at
  least once near every primary CTA, not just in the hero.
- No gavel, scales-of-justice, or courtroom-stock imagery anywhere on the
  site.
- The 4-field LeadForm cap holds on every instance (hero, footer, case-type
  CTA, contact page), additional intake fields are documented in
  `cro-rules.md`, never added to the first-ask form.

---

## Source traceback

- Voice grammar: derived from morganandmorgan.com, dolmanlaw.com, and PM Law
  Firm Google review sample (`02-customer-voice.md`)
- Section H2 formulas: morganandmorgan.com (Hero, Process, Practice Areas),
  dolmanlaw.com (Stats Bar, Press Band, Founder Story)
- Banned phrases: synthesised from low-scoring sites' generic "legal counsel"
  framing (omarochoalaw.com 7+ field form, generic "we fight for you" copy)
- Preferred phrases: lifted from morganandmorgan.com ("No Win, No Fee.
  Guaranteed.", "OPEN 24/7"), dolmanlaw.com ("I've been in your shoes",
  "litigation bulldogs")
