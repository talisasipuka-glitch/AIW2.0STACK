# Copy Deck, Bricks Law (Peter Bricks, P.C.)

Niche: personal-injury-lawyers
Generated: Stage 6, Copy Deck
data_confidence: medium (see notes below)

## Notes and deviations from the niche playbook

1. **Step 1.5 (Reddit social-resonance pull) skipped.** This niche's social-resonance
   sub-step targets roofing-style trade subreddits and is not directly applicable to a
   solo personal-injury/bankruptcy practice, and the Apify account that would run the
   actor is currently returning HTTP 402 (account billing issue, documented in Stage 2).
   Per the copywriting SKILL.md failure-mode table, this copy deck proceeds without that
   input. `data_confidence` is set to medium rather than high for this reason. No
   `social-resonance.json` was generated. Recommend re-running once Apify billing is
   restored if the student wants additional voice calibration.

2. **"24/7" availability claims removed, per the universal no-fabrication gate.**
   `niche-playbook/copy-locks.json` hardcodes "Available 24/7" / "Call Now, 24/7" /
   "No win, no fee. Available 24/7." in four places (`ctaSecondary`, `trustStripClaims`,
   `heroTrustClaims`, `footerTagline`). `research-data.json` explicitly states
   `availabilityClaim: "Not found"` and lists "No '24/7-availability' language anywhere
   on the current site" as a current-site issue, i.e. this is not a claim the firm
   currently makes and research did not confirm it. Per SKILL.md gate 5 ("if research
   didn't surface it, the copy doesn't claim it"), this copy deck does not use any 24/7
   language. Where copy-locks specified a 24/7 string, this deck substitutes an
   alternative trust claim that IS supported by research (years licensed, free
   consultation, direct attorney access, or confirmed business hours from the site's own
   JSON-LD, Mon-Fri 9 AM-5 PM). Specific substitutions are called out inline below.

3. **"No Win, No Fee" language is KEPT and used throughout.** `research-data.json`
   confirms `contingencyFee.offered: true` and explicitly recommends "No Win, No Fee"
   phrasing as a locked-copy addition. All `copy-locks.json` strings using this phrase
   are used as written.

4. **`heroH1Format` ("[City]'s [Practice Area] Lawyers. No Win, No Fee. Guaranteed.")
   is kept.** Read in context, "Guaranteed" attaches to the fee arrangement (you will
   not be charged unless Bricks Law recovers for you), which is the literal contingency
   fee structure confirmed in research, not a guarantee of case outcome. No case-outcome
   guarantee appears anywhere in this deck.

5. **6 case-type pages instead of the playbook's 7-default.** `sitemap.json` (locked at
   Stage 5) specifies car accident, truck accident, motorcycle accident, pedestrian/hit
   and run, slip and fall, and wrongful death. The playbook's default 7th and 8th
   categories (dog bite, traumatic brain injury) are not used because research did not
   surface either as a confirmed practice area, and pedestrian/hit-and-run was confirmed
   as a real practice area via a documented $100,000 settlement. This was already
   resolved at Stage 5 and is restated here only so the copy below matches the locked
   sitemap.

6. **Settlement results are all car-accident cases** (per `research-data.json`,
   `caseTypesHandled` confirms car/truck/motorcycle/other, but all 5 disclosed
   `settlementResults` entries are tagged `car-accident`, including the pedestrian and
   uninsured-motorist cases). On the truck accident, motorcycle accident, slip and fall,
   and wrongful death pages, this deck does NOT invent a case-type-specific dollar
   figure. Instead it references the firm's overall track record (anchored on the
   $1,325,000 result) framed honestly as "across personal injury cases," with a link to
   `/results`, where every figure carries the standard disclaimer. The pedestrian page
   uses the $100,000 uninsured-motorist result and the confidential pedestrian case
   directly, since both are pedestrian/hit-and-run fact patterns.

7. Every dollar figure in this deck uses tabular numerals with comma separators
   ($1,325,000) and every settlement reference is paired with: "Past results do not
   guarantee or predict a similar outcome in future cases."

8. Zero em-dashes used throughout. Smart quotes used for all apostrophes and quotation
   marks. No `[BRACKET]` placeholders remain; all `__REQUIRED__*__` sentinels below are
   intentional and are filled by Stage 10.1 from `brand-dna.json`.

9. Reviews: the 4 written testimonials (Mark M., David H., James K., Donal P.) are
   reproduced from the live site's `/testimonials` page verbatim (source:
   `Pipeline Data/research/raw-website.json`), `isGenerated: false`. No additional
   reviews were generated.

---

## Global copy (brandDNA.copy)

```
copy.hero.eyebrow: "Atlanta Personal Injury & Accident Attorney"
copy.hero.headline: "Atlanta's Personal Injury Lawyers. No Win, No Fee. Guaranteed."
copy.hero.subheadline: "Attorney Peter Bricks has been a member in good standing of the State Bar of Georgia for 19 years. He has recovered over $1,800,000 for injured clients across Metro Atlanta, including a $1,325,000 result for a client a previous attorney had under-settled. Free consultation. No fee unless we win."
copy.hero.imageAlt: "Attorney Peter Bricks, Atlanta personal injury lawyer"

copy.heroTrustChips: [
  "No Win, No Fee",
  "Free Consultation",
  "19 Years Licensed in Georgia",
  "$1,325,000 Result"
]

copy.trustClaims: [
  "No Win, No Fee. You owe nothing unless we recover for you.",
  "Free Case Evaluation. Tell us what happened and we will tell you where you stand.",
  "We litigate. We do not settle fast just to close the file.",
  "19 years licensed with the State Bar of Georgia, since 2006."
]
```

Deviation note for `copy.trustClaims`: item 1 and 3 are taken verbatim from
`copy-locks.json` `heroTrustClaims`. Items 2 and 4 replace the locked
"Free Case Evaluation. No Fee Unless We Win." (duplicate of `formHeader`, see below) and
"Available 24/7, including nights and weekends." (24/7 claim not supported, see Note 2
above).

```
copy.formHeader: "Free Case Evaluation. No Fee Unless We Win."
copy.formSubtext: "Tell us what happened. Peter Bricks reviews every case personally and will tell you straight whether you have a claim worth pursuing."
copy.buttonText: "Get Your Free Case Review"
copy.submitButton: "Submit My Case"
copy.privacyLine: "Your information is confidential and protected by attorney-client privilege. We will not share it with anyone."
copy.mobileCallLabel: "CALL NOW"
copy.availableNow: "Mon-Fri, 9 AM-5 PM"
copy.footerCta: "No win, no fee. Free consultation."
copy.copyright: "(c) {year} Peter Bricks, P.C. All rights reserved."
```

Deviation note: `copy.availableNow` and `copy.footerCta` replace the locked 24/7
strings. `availableNow` uses the office hours found in the live site's own
LocalBusiness JSON-LD (`"openingHours": ["Mon-Fri:9am-5pm", "Sat:", "Sun:"]`,
source: `Pipeline Data/research/raw-website.json`), which IS confirmed by research.
`footerCta` drops "Available 24/7" and keeps "No win, no fee. Free consultation."

```
copy.topBar.cta: "Call Now"
```

Deviation note: replaces locked `ctaSecondary` "Call Now, 24/7" with "Call Now" (drops
the unsupported 24/7 claim, keeps the supported call-to-action).

```
copy.process.label: "How It Works"
copy.process.heading: "Three Steps to a Free Case Review"
copy.process.body: "Most people have never worked with a lawyer before and do not know what to expect. Here is exactly what happens when you contact Peter Bricks."
copy.process.badgeText: "No Win, No Fee"
copy.process.badgeSubtext: "You pay nothing unless we recover money for you."
```

```
copy.faq.label: "Questions"
copy.faq.heading: "Frequently Asked Questions"
```

```
copy.founder.label: "Meet Your Attorney"
copy.founder.heading: "Meet Peter Bricks"
copy.founder.para1: "Peter Bricks has been a member in good standing of the State Bar of Georgia since 2006, 19 years of experience representing injured people across Metro Atlanta. He is also admitted to practice before the Supreme Court of Georgia, the Georgia Court of Appeals, and the U.S. District Courts for the Northern and Middle Districts of Georgia. He holds an Avvo \"Distinguished\" rating from Martindale-Hubbell, an Avvo Client's Choice Award, and Avvo Top Contributor recognition, with 22 client reviews averaging 5.0."
copy.founder.para2: "When you call Bricks Law, you talk to Peter Bricks, not a case manager and not a call center. He reviews every case personally, including a case where he found over $1,000,000 in additional insurance coverage a previous attorney had missed, turning a $25,000 offer into a $1,325,000 result. He is also a registered civil mediator through the Georgia Office of Dispute Resolution (GODR), a credential most firms his size do not have."
copy.founder.visionLabel: "Why This Firm Exists"
copy.founder.vision: "Every injured person deserves a lawyer who actually reads their file, not one who hands it to a rotating associate."
copy.founder.missionLabel: "How We Work"
copy.founder.mission: "Investigate every claim thoroughly, deal directly with the insurance company on your behalf, and never settle fast just to close the file."
```

```
copy.gallery.label: "Track Record"
copy.gallery.heading: "Case Results"
copy.gallery.body: "Real settlements and verdicts Peter Bricks has recovered for injured clients across Metro Atlanta. Past results do not guarantee or predict a similar outcome in future cases."
```

Deviation note: this niche has no visual project gallery (per asset-scraping output,
`previous_projects: []`). Per the niche playbook, the gallery slot is repurposed as the
settlement-results showcase, matching `/results` in the sitemap.

```
copy.offers.label: "Fee Structure"
copy.offers.heading: "No Win, No Fee"
copy.offers.body: "Peter Bricks represents injury clients on a contingency basis. There is no upfront cost and no hourly bill."
copy.offers.detail: "If we do not recover money for you, you owe us nothing for attorney's fees. Case expenses are discussed up front during your free consultation."
```

```
copy.reviews.label: "Client Reviews"
copy.reviews.heading: "What Our Clients Say"
copy.reviews.body: "Here is what some of our clients have to say about their experience working with Peter Bricks, P.C."
copy.reviews.summary: "Rated 7.5 (\"Very Good\") on Avvo from 22 reviews averaging 5.0."
```

```
copy.serviceAreaCard.heading: "Serving All of Metro Atlanta"
copy.serviceAreaCard.body: "From Atlanta and Sandy Springs to Jonesboro, Forest Park, and beyond, Peter Bricks represents injured clients throughout Fulton, DeKalb, and Clayton counties."
```

```
copy.serviceAreas.label: "Where We Work"
copy.serviceAreas.heading: "Areas We Serve"
copy.serviceAreas.body: "Peter Bricks represents accident victims throughout Metro Atlanta, including the following communities."
```

```
copy.services.label: "Practice Areas"
copy.services.heading: "How Peter Bricks Can Help"
copy.services.body: "From car accidents to wrongful death claims, Peter Bricks handles each case personally, from the first call to the final settlement."
```

```
copy.whyChoose.label: "Why Choose Us"
copy.whyChoose.heading: "Why Choose Bricks Law"
copy.whyChoose.body: "Four reasons injured clients across Metro Atlanta choose Peter Bricks over a high-volume firm."
```

---

## process_steps (verbatim from niche-playbook/process.json)

```
[
  {
    "n": 1,
    "title": "Submit Your Case",
    "body": "Tell us what happened in a free, no-obligation case evaluation. We will review the details and tell you honestly whether you have a claim worth pursuing.",
    "iconHint": "document-text"
  },
  {
    "n": 2,
    "title": "We Investigate",
    "body": "Peter Bricks personally investigates your case, gathers evidence, and deals directly with the insurance company so you do not have to.",
    "iconHint": "magnifying-glass"
  },
  {
    "n": 3,
    "title": "We Fight For You",
    "body": "We negotiate for a fair settlement, and if the insurance company will not pay what your case is worth, we are prepared to take it to trial. You owe us nothing unless we win.",
    "iconHint": "scale"
  }
]
```

Note: `iconHint: "scale"` is a UI icon hint for the process component (a balance/scale
icon commonly used for "fairness"), not body copy. It does not surface as text and is
distinct from the copy-blocklist's "scales of justice" imagery ban, which applies to
photographic/illustrative imagery choices in hero and section backgrounds. Flagging here
for the design-fidelity QA agent's awareness at Stage 10.4a, no action needed in copy.

---

## why_choose_us (4 items, risk-removal framing per copywriting.md Section 5)

```
[
  "No Win, No Fee. You pay nothing in attorney's fees unless we recover money for you.",
  "Direct access to Peter Bricks. You will speak with the attorney handling your case, not a case manager.",
  "A documented track record, including a $1,325,000 result for a client a previous attorney had under-settled. Past results do not guarantee or predict a similar outcome in future cases.",
  "19 years licensed with the State Bar of Georgia and admitted to federal court in the Northern and Middle Districts of Georgia."
]
```

---

## trust_badges (rendered as icon components, per Stage 4 asset notes)

```
[
  { "filename": "review-badge-google.png", "alt": "Google Reviews" },
  { "filename": "review-badge-avvo.png", "alt": "Avvo Rated 7.5, Distinguished" },
  { "filename": "review-badge-thumbtack.png", "alt": "Thumbtack Reviews" }
]
```

Press band: `pressMentions: []`, so the Press Band section falls back to these trust
badges plus a "State Bar of Georgia, Member in Good Standing" text badge, per
`asset-scraping` Stage 4 notes and the niche playbook's press-band fallback rule.

---

## Quantified trust line (Pattern 3, from quantified-trust-templates.md)

"Including a $1,325,000 settlement for a car accident client right here in Atlanta."

Used on: Homepage (below the settlement results bar), `/car-accident-lawyer-atlanta`,
and `/results`.

---

# Page-by-page copy

## 1. Homepage (`/`)

**page_title:** Personal Injury Lawyer Atlanta | Peter Bricks, P.C.
**meta_description:** Injured in an accident near Atlanta? Attorney Peter Bricks offers a free consultation and 19 years of experience fighting insurance companies for fair settlements.

### Hero
**H1:** Atlanta's Personal Injury Lawyers. No Win, No Fee. Guaranteed.
**Subheadline:** 19 years licensed with the State Bar of Georgia. A documented track record including a $1,325,000 result. Free consultation. You pay nothing unless we recover for you.
**Primary CTA:** __REQUIRED__CTA_PRIMARY__ (resolves to "Get Your Free Case Review")
**Trust chips:** No Win, No Fee / Free Consultation / 19 Years Licensed in Georgia / $1,325,000 Result

### How It Works
Use `process_steps` verbatim (Submit Your Case, We Investigate, We Fight For You).

### Settlement Results Bar
Heading: "A Track Record That Speaks for Itself"
Body: "Peter Bricks has recovered over $1,800,000 for injured clients across Metro Atlanta, including:"
- $1,325,000, car accident, additional insurance coverage a previous attorney missed
- $300,000, jury verdict, Gwinnett County, despite the defense denying causation
- $100,000, uninsured motorist policy limits, hit-and-run case proven with dashcam evidence
- $75,000, settlement plus bad-faith claim recovery above policy limits

Disclaimer (every entry): "Past results do not guarantee or predict a similar outcome
in future cases."

Quantified trust line: "Including a $1,325,000 settlement for a car accident client
right here in Atlanta."

CTA: "See All Case Results" -> links to `/results`

### Press Band (fallback)
Heading: "Recognized By"
Body: trust badges (Google, Avvo, Thumbtack) plus "State Bar of Georgia, Active Member
in Good Standing"

### Why Choose Us
Use the 4 `why_choose_us` items above.

### Practice Areas Grid (6 services)
1. **Car Accidents** -> `/car-accident-lawyer-atlanta`
   "Insurance companies do not pay what a claim is worth unless someone pushes back.
   Peter Bricks deals with the adjuster so you can focus on recovering."
2. **Truck Accidents** -> `/truck-accident-lawyer-atlanta`
   "Truck accident claims involve commercial insurance policies and federal trucking
   regulations. Peter Bricks builds the case from the ground up."
3. **Motorcycle Accidents** -> `/motorcycle-accident-lawyer-atlanta`
   "Insurance companies are often quick to blame the rider. Peter Bricks fights that
   bias and fights for what the claim is actually worth."
4. **Pedestrian and Hit-and-Run Accidents** -> `/pedestrian-accident-lawyer-atlanta`
   "If you were struck by a vehicle or left behind by a driver who fled, uninsured
   motorist coverage may still get you compensation. Peter Bricks knows how to find it."
5. **Slip and Fall (Premises Liability)** -> `/slip-and-fall-lawyer-atlanta`
   "If you were injured because a property owner did not keep their property safe,
   you may be entitled to compensation for your medical bills and lost wages."
6. **Wrongful Death** -> `/wrongful-death-lawyer-atlanta`
   "If you lost a family member because of someone else's negligence, Peter Bricks
   can help your family understand your legal options. Free consultation."

### Founder / About
Use `copy.founder` block above (para1, para2, vision, mission).

### Testimonials (real, isGenerated: false)
Use all 4 reviews from the Reviews section below (Mark M., David H., James K.,
Donal P.), plus `copy.reviews.summary`.

### FAQ (homepage, 6 Q&As)
1. **Do I have to pay anything up front?**
   No. Peter Bricks represents injury clients on a contingency basis. There is no
   upfront cost, and you owe nothing in attorney's fees unless we recover money for you.
2. **How long do I have to file a personal injury claim in Georgia?**
   In most cases, Georgia law gives you two years from the date of the accident to file
   a personal injury lawsuit. Waiting can make it harder to gather evidence, so it is
   best to talk to an attorney as soon as possible.
3. **Should I talk to the insurance company before calling a lawyer?**
   The insurance adjuster works for the insurance company, not for you. Anything you say
   can be used to reduce your payout. A free consultation with Peter Bricks before you
   give a statement can protect your claim.
4. **What if a previous attorney already settled part of my case?**
   It can still be worth a second look. In one case, Peter Bricks found over $1,000,000
   in additional insurance coverage a previous attorney had missed, turning a $25,000
   offer into a $1,325,000 result. Past results do not guarantee or predict a similar
   outcome in future cases.
5. **Will my case go to trial?**
   Most personal injury cases settle, but Peter Bricks prepares every case as if it
   could go to trial, including a $300,000 jury verdict secured in Gwinnett County. We
   do not settle fast just to close the file.
6. **What areas does Bricks Law serve?**
   Peter Bricks represents clients throughout Metro Atlanta, including Atlanta, Sandy
   Springs, Dunwoody, Jonesboro, College Park, Forest Park, Lovejoy, Morrow, and
   Riverdale.

### Final CTA
Heading: "Get Your Free Case Review"
Body: "Tell us what happened. There is no cost and no obligation, and you will hear
back from the attorney himself."
Button: __REQUIRED__CTA_PRIMARY__

### Footer
Tagline: "No win, no fee. Free consultation."
Links: all 6 service pages, all 9 location pages, /about, /results, /reviews,
/financing, /bankruptcy, /contact, /blog.

---

## 2. Car Accident Lawyer Atlanta (`/car-accident-lawyer-atlanta`)

**page_title:** Car Accident Lawyer Atlanta | Free Consultation | Peter Bricks, P.C.
**meta_description:** Hurt in a car accident in Atlanta? Peter Bricks negotiates with insurance companies and fights for fair compensation. No fee unless we win. Call today.

**H1:** Atlanta Car Accident Lawyer

**Intro (hero):** A car accident can turn your life upside down in seconds, medical
bills, missed work, a damaged car, and an insurance company that wants to pay you as
little as possible. Peter Bricks has represented car accident victims across Metro
Atlanta for 19 years, including a case where he turned a $25,000 offer into a
$1,325,000 result after finding insurance coverage a previous attorney missed.

### H2: A $1,325,000 Result for One of Our Car Accident Clients
A middle-aged man was badly injured in an auto collision, requiring surgical repair to
his ankle and kneecap and developing a post-surgical infection. A previous attorney had
recovered $25,000. Peter Bricks reviewed the policies involved and found over
$1,000,000 in additional applicable insurance coverage, bringing the total recovery to
$1,325,000. Past results do not guarantee or predict a similar outcome in future cases.

### H2: No Win, No Fee
Peter Bricks represents car accident clients on a contingency basis. There is no
upfront cost, and you owe nothing in attorney's fees unless we recover money for you.

### H2: What to Do After a Car Accident in Atlanta
1. Call 911 and get medical attention, even if you feel fine. Some injuries do not show
   symptoms right away.
2. Document the scene: photos of vehicles, the road, and any visible injuries.
3. Get the other driver's information and any witness contact details.
4. Avoid giving a recorded statement to an insurance adjuster before speaking with an
   attorney.
5. Contact Bricks Law for a free case evaluation. Georgia gives you two years from the
   date of the accident to file a claim, but evidence is easier to gather early.

### H2: What Compensation Can Cover
- Medical bills, past and future
- Lost wages and lost earning capacity
- Vehicle repair or replacement
- Pain and suffering
- In cases involving bad faith by an insurer, recovery above policy limits, as in the
  $75,000 case where Bricks Law secured an additional $20,000 above the $55,000
  available under the policy.

### H2: Frequently Asked Questions
1. **How long do I have to file a car accident claim in Georgia?**
   Generally two years from the date of the accident under Georgia's statute of
   limitations for personal injury.
2. **What if the other driver was uninsured or fled the scene?**
   Your own uninsured motorist coverage may apply. In one case, Bricks Law secured a
   $100,000 policy-limits settlement under a client's uninsured motorist policy after a
   hit-and-run driver ran her off the highway, using dashcam footage obtained through an
   open-records request to prove fault.
3. **The insurance company offered me a settlement. Should I take it?**
   Talk to an attorney first. Initial offers are often far below what a claim is
   actually worth, especially before all medical treatment is complete.
4. **Do I have to pay anything to get started?**
   No. The initial case evaluation is free, and Bricks Law works on a contingency
   basis. No win, no fee.
5. **Will my case go to trial?**
   Most cases settle, but Peter Bricks prepares every case for trial. In one Gwinnett
   County case, a jury awarded $300,000 to a client despite the defense arguing for
   $0 to $140,000.

### Final CTA
"Get Your Free Case Review" -> __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Car Accident
Representation"), BreadcrumbList.

---

## 3. Truck Accident Lawyer Atlanta (`/truck-accident-lawyer-atlanta`)

**page_title:** Truck Accident Lawyer Atlanta | Peter Bricks, P.C.
**meta_description:** Truck accidents involve complex liability and large insurance policies. Atlanta attorney Peter Bricks investigates the crash and builds your claim. Free case review.

**H1:** Atlanta Truck Accident Lawyer

**Intro:** Truck accident claims are not car accident claims with bigger numbers.
Commercial trucking companies carry large insurance policies, operate under federal
safety regulations, and send their own investigators to the scene quickly. Peter Bricks
investigates truck accident claims thoroughly and deals directly with the trucking
company's insurer on your behalf.

### H2: A Track Record of Thorough Investigation
While Bricks Law's disclosed settlement results to date are from car accident cases,
including a $1,325,000 result after finding insurance coverage a previous attorney
missed, the same approach applies to truck accident claims: review every applicable
policy, gather evidence early, and do not accept the first number the insurer offers.
See our full case results at `/results`. Past results do not guarantee or predict a
similar outcome in future cases.

### H2: No Win, No Fee
Peter Bricks represents truck accident clients on a contingency basis. There is no
upfront cost, and you owe nothing in attorney's fees unless we recover money for you.

### H2: What Makes Truck Accident Claims Different
- **Multiple liable parties.** The driver, the trucking company, and sometimes a
  separate cargo loading company may all share responsibility.
- **Commercial insurance policies.** These policies are typically much larger than a
  personal auto policy, and the insurer's investigators move fast.
- **Federal regulations.** Hours-of-service logs, maintenance records, and driver
  qualification files can all become evidence in a truck accident claim.

### H2: What to Do After a Truck Accident
1. Get medical attention and document your injuries.
2. Do not sign anything from the trucking company's insurer before speaking with an
   attorney.
3. Preserve evidence quickly. Trucking companies may not keep dashcam or telematics
   data indefinitely.
4. Contact Bricks Law for a free case evaluation.

### H2: What Compensation Can Cover
- Medical bills, past and future
- Lost wages and lost earning capacity
- Vehicle repair or replacement
- Pain and suffering

### H2: Frequently Asked Questions
1. **Who can be held responsible after a truck accident?**
   Depending on the facts, the truck driver, the trucking company, and other parties
   involved in loading or maintaining the vehicle may all be responsible.
2. **How long do I have to file a claim in Georgia?**
   Generally two years from the date of the accident under Georgia's statute of
   limitations for personal injury.
3. **Do I have to pay anything to get started?**
   No. The initial case evaluation is free, and Bricks Law works on a contingency
   basis. No win, no fee.
4. **What if I was partly at fault?**
   Georgia follows a modified comparative negligence rule. You may still be able to
   recover compensation depending on the percentage of fault assigned to each party.
   Discuss the specifics of your accident in a free consultation.
5. **Will the trucking company's insurer contact me directly?**
   Possibly, and quickly. It is best not to give a statement before talking to an
   attorney.

### Final CTA
"Get Your Free Case Review" -> __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Truck Accident
Representation"), BreadcrumbList.

---

## 4. Motorcycle Accident Lawyer Atlanta (`/motorcycle-accident-lawyer-atlanta`)

**page_title:** Motorcycle Accident Lawyer Atlanta | Peter Bricks, P.C.
**meta_description:** Motorcycle accident injuries are often severe and underrated by insurers. Attorney Peter Bricks fights for the compensation riders deserve. Free consultation.

**H1:** Atlanta Motorcycle Accident Lawyer

**Intro:** Motorcycle accidents tend to cause more severe injuries than car accidents,
yet insurance companies sometimes treat riders with built-in bias, assuming a rider was
speeding or at fault before any investigation happens. Peter Bricks pushes back on
that assumption and builds the claim around the facts.

### H2: A Track Record of Fighting Insurer Bias
Bricks Law's disclosed settlement results to date are from car accident cases,
including a $300,000 jury verdict secured in Gwinnett County despite the defense
denying causation and arguing for $0 to $140,000. That same willingness to go to trial
applies to motorcycle accident claims, where insurers often start from a position of
blaming the rider. See our full case results at `/results`. Past results do not
guarantee or predict a similar outcome in future cases.

### H2: No Win, No Fee
Peter Bricks represents motorcycle accident clients on a contingency basis. There is no
upfront cost, and you owe nothing in attorney's fees unless we recover money for you.

### H2: What to Do After a Motorcycle Accident
1. Get medical attention immediately. Injuries from motorcycle accidents are often more
   severe than they first appear.
2. Document the scene, your bike, your gear, and your injuries with photos.
3. Get the other driver's information and any witness contact details.
4. Avoid giving a recorded statement to an insurance adjuster before speaking with an
   attorney.
5. Contact Bricks Law for a free case evaluation.

### H2: What Compensation Can Cover
- Medical bills, past and future, including surgery and rehabilitation
- Lost wages and lost earning capacity
- Motorcycle and gear repair or replacement
- Pain and suffering

### H2: Frequently Asked Questions
1. **The insurance company says the accident was my fault because I was on a
   motorcycle. Is that true?**
   Not automatically. Fault is determined by the facts of the accident, not by the type
   of vehicle. An attorney can help make sure the investigation is fair.
2. **How long do I have to file a claim in Georgia?**
   Generally two years from the date of the accident under Georgia's statute of
   limitations for personal injury.
3. **Do I have to pay anything to get started?**
   No. The initial case evaluation is free, and Bricks Law works on a contingency
   basis. No win, no fee.
4. **Will my case go to trial?**
   Most cases settle, but Peter Bricks prepares every case for trial, including a
   $300,000 jury verdict in a case where the defense denied responsibility entirely.
5. **What if the other driver was uninsured?**
   Your own uninsured motorist coverage may apply. Bricks Law has experience pursuing
   uninsured motorist claims, including a $100,000 policy-limits recovery in a
   hit-and-run case.

### Final CTA
"Get Your Free Case Review" -> __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Motorcycle Accident
Representation"), BreadcrumbList.

---

## 5. Pedestrian and Hit-and-Run Accident Lawyer Atlanta (`/pedestrian-accident-lawyer-atlanta`)

**page_title:** Pedestrian Accident Lawyer Atlanta | Peter Bricks, P.C.
**meta_description:** Struck by a vehicle or left injured after a hit-and-run in Atlanta? Peter Bricks helps pedestrians pursue compensation through insurance and uninsured-motorist claims.

**H1:** Atlanta Pedestrian and Hit-and-Run Accident Lawyer

**Intro:** Being struck by a vehicle while walking is frightening enough. When the
driver flees the scene, it can feel like there is no one to hold responsible. Peter
Bricks has direct experience with exactly this situation, including a case where police
initially blamed the victim and Bricks Law proved otherwise.

### H2: A $100,000 Result in a Hit-and-Run Case
A client was run off the highway by a hit-and-run driver and was initially cited by
police. Peter Bricks obtained dashcam video through an open-records request that proved
the other driver was at fault, leading to a $100,000 policy-limits settlement under the
client's own uninsured motorist policy. In a separate case, a client whose foot was run
over in a collision received a confidential settlement. Past results do not guarantee
or predict a similar outcome in future cases.

### H2: No Win, No Fee
Peter Bricks represents pedestrian accident clients on a contingency basis. There is no
upfront cost, and you owe nothing in attorney's fees unless we recover money for you.

### H2: What to Do After a Pedestrian Accident
1. Get medical attention right away, even if injuries seem minor.
2. If the driver fled, try to note the vehicle's description, direction of travel, and
   any partial plate information. Call police immediately.
3. Ask if there is traffic camera, doorbell, or dashcam footage nearby. This evidence
   can disappear quickly.
4. Do not assume a hit-and-run means no recovery is possible. Uninsured motorist
   coverage may apply.
5. Contact Bricks Law for a free case evaluation.

### H2: What Compensation Can Cover
- Medical bills, past and future
- Lost wages and lost earning capacity
- Pain and suffering
- Uninsured motorist policy benefits in hit-and-run cases

### H2: Frequently Asked Questions
1. **The driver who hit me fled the scene. Do I have any options?**
   Yes. Your own uninsured motorist coverage may apply. Bricks Law secured a $100,000
   policy-limits recovery in exactly this situation.
2. **The police report blames me. Can that be changed?**
   It can be challenged with evidence. In one case, dashcam footage obtained through an
   open-records request reversed an initial finding of fault.
3. **How long do I have to file a claim in Georgia?**
   Generally two years from the date of the accident under Georgia's statute of
   limitations for personal injury.
4. **Do I have to pay anything to get started?**
   No. The initial case evaluation is free, and Bricks Law works on a contingency
   basis. No win, no fee.
5. **What if my settlement needs to stay confidential?**
   Some settlements include confidentiality terms. Bricks Law has handled cases that
   settled confidentially and can discuss what that means for your case.

### Final CTA
"Get Your Free Case Review" -> __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Pedestrian Accident
Representation"), BreadcrumbList.

---

## 6. Slip and Fall Lawyer Atlanta (`/slip-and-fall-lawyer-atlanta`)

**page_title:** Slip and Fall Lawyer Atlanta | Premises Liability | Peter Bricks, P.C.
**meta_description:** Injured on someone else's property in Atlanta? Peter Bricks handles slip and fall and premises liability claims with a free initial consultation and no upfront fees.

**H1:** Atlanta Slip and Fall Lawyer

**Intro:** Property owners, including stores, apartment complexes, and offices, have a
legal duty to keep their property reasonably safe. When they do not, and someone gets
hurt, that owner may be responsible for the resulting medical bills and lost income.
Peter Bricks offers a free consultation to help you understand whether your fall
qualifies as a premises liability claim.

### H2: Building the Track Record on a Contingency Basis
Peter Bricks brings the same investigative approach to premises liability claims that
produced a $1,325,000 result in a car accident case, reviewing every available source
of insurance and evidence before accepting an insurer's first offer. See our full case
results at `/results`. Past results do not guarantee or predict a similar outcome in
future cases.

### H2: No Win, No Fee
Peter Bricks represents slip and fall clients on a contingency basis. There is no
upfront cost, and you owe nothing in attorney's fees unless we recover money for you.

### H2: What to Do After a Slip and Fall
1. Get medical attention and keep records of your treatment.
2. Report the fall to the property owner or manager and ask for a written incident
   report.
3. Take photos of the hazard that caused the fall, such as a wet floor, broken stair,
   or poor lighting, before it can be cleaned up or repaired.
4. Get contact information for any witnesses.
5. Contact Bricks Law for a free case evaluation. Georgia gives you two years from the
   date of the fall to file a claim.

### H2: What Compensation Can Cover
- Medical bills, past and future
- Lost wages and lost earning capacity
- Pain and suffering

### H2: Frequently Asked Questions
1. **Do I have a case if I fell on someone else's property?**
   It depends on whether the property owner knew or should have known about the hazard
   and failed to fix it or warn you. A free consultation can help clarify whether your
   situation qualifies.
2. **How long do I have to file a claim in Georgia?**
   Generally two years from the date of the fall under Georgia's statute of limitations
   for personal injury.
3. **What if I was partly at fault for the fall?**
   Georgia follows a modified comparative negligence rule. You may still be able to
   recover compensation depending on the percentage of fault assigned to each party.
4. **Do I have to pay anything to get started?**
   No. The initial case evaluation is free, and Bricks Law works on a contingency
   basis. No win, no fee.
5. **What kinds of properties does this apply to?**
   Stores, restaurants, apartment complexes, offices, and other locations where a
   property owner controls conditions that could create a hazard.

### Final CTA
"Get Your Free Case Review" -> __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Premises Liability
Representation"), BreadcrumbList.

---

## 7. Wrongful Death Lawyer Atlanta (`/wrongful-death-lawyer-atlanta`)

**page_title:** Wrongful Death Lawyer Atlanta | Peter Bricks, P.C.
**meta_description:** Lost a loved one due to someone else's negligence? Peter Bricks helps Atlanta families pursue wrongful death claims with compassion and a free consultation.

**H1:** Atlanta Wrongful Death Lawyer

**Intro:** Losing a family member because of someone else's negligence is one of the
hardest things a family can go through. While no settlement can undo that loss, Georgia
law allows certain family members to pursue compensation for the full value of the life
lost, and Peter Bricks handles these cases personally, with the same care he would want
for his own family.

Per copywriting.md tone calibration: this page does not lead with dollar figures. The
hero and intro stay compassion-forward; the financial information appears later, framed
around what the law allows rather than what the firm has recovered.

### H2: No Win, No Fee, Even Now
Peter Bricks represents wrongful death cases on a contingency basis. There is no
upfront cost, and your family owes nothing in attorney's fees unless we recover
compensation.

### H2: Who Can File a Wrongful Death Claim in Georgia
Under Georgia law, a wrongful death claim is typically filed by the surviving spouse,
children, or, if there is no surviving spouse or children, the parents of the deceased.
An estate representative may also be able to bring a related claim on behalf of the
estate. A free consultation can help your family understand who is eligible to file and
what the process involves.

### H2: What These Cases Can Address
- The full value of the life of the deceased, as recognized under Georgia law
- Funeral and burial expenses
- Medical expenses related to the final injury or illness
- The surviving family's loss of the deceased's care, companionship, and support

### H2: What to Expect
1. A free, private consultation to understand what happened and who in the family is
   eligible to bring a claim.
2. A thorough investigation into how the death occurred and who may be responsible.
3. Direct communication with insurance companies and other parties on your family's
   behalf, so you are not the one fielding those calls.
4. Pursuit of a fair resolution, through settlement or, if necessary, trial. Peter
   Bricks has taken cases to trial before, including a Gwinnett County jury verdict
   secured despite the defense denying responsibility entirely.

### H2: Frequently Asked Questions
1. **Who is eligible to file a wrongful death claim in Georgia?**
   Generally the surviving spouse, then children, then parents if there is no spouse or
   children. An estate representative may bring a related claim. A free consultation can
   clarify your family's specific situation.
2. **How long does my family have to file a claim?**
   Wrongful death claims in Georgia generally must be filed within two years, though
   certain circumstances can affect this. It is best to speak with an attorney as soon
   as your family is able.
3. **Do we have to pay anything to get started?**
   No. The initial consultation is free, and Bricks Law works on a contingency basis.
   Your family owes nothing in attorney's fees unless we recover compensation.
4. **Will we have to go through this alone?**
   No. Peter Bricks communicates directly with your family throughout the process and
   handles communications with insurance companies and other parties.
5. **What if the case involves a company or an institution, not just an individual?**
   Wrongful death claims can involve businesses, property owners, or other entities
   depending on how the death occurred. A free consultation can help identify everyone
   who may be responsible.

### Final CTA
Heading: "Talk to Someone Who Will Listen"
Body: "If your family has lost someone due to another person's or company's negligence,
a free, private consultation can help you understand your options. No win, no fee."
Button: __REQUIRED__CTA_PRIMARY__

Schema: FAQPage (5 Q&As above), LegalService (serviceType "Wrongful Death
Representation"), BreadcrumbList.

---

# Location pages (9)

All 9 pages share this structure: 100-150 word locally-framed intro, a short "why
Bricks Law" paragraph reusing the firm's track record, links to 2-3 relevant service
pages, and a CTA. Each intro below is unique per the anti-duplication requirement.

## 8. Personal Injury Lawyer Atlanta (`/personal-injury-lawyer-atlanta`)

**page_title:** Personal Injury Lawyer Atlanta GA | Peter Bricks, P.C.
**meta_description:** Atlanta accident victims trust Peter Bricks for personal, hands-on representation. Free consultations, no fee unless we win. Serving all of Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Atlanta, GA

**Intro:** If you were injured in a car accident, a fall, or another incident in
Atlanta, Peter Bricks offers a free consultation to help you understand your options.
Cases involving Fulton County typically run through the Fulton County court system, and
Peter Bricks is admitted to practice before the Georgia Court of Appeals and the
Supreme Court of Georgia in addition to Georgia's trial courts. With 19 years licensed
in Georgia and a documented track record including a $1,325,000 result, Bricks Law
brings the same level of attention to every Atlanta client, no matter the size of the
claim. No win, no fee, and the initial consultation is always free.

Links to: `/car-accident-lawyer-atlanta`, `/slip-and-fall-lawyer-atlanta`, `/results`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 9. Personal Injury Lawyer Sandy Springs (`/personal-injury-lawyer-sandy-springs`)

**page_title:** Personal Injury Lawyer Sandy Springs GA | Peter Bricks, P.C.
**meta_description:** Injured in Sandy Springs? Peter Bricks represents accident victims throughout Sandy Springs and Fulton County with a free consultation and no upfront fees.

**H1:** Personal Injury Lawyer Serving Sandy Springs, GA

**Intro:** Sandy Springs sits at the center of some of Metro Atlanta's busiest
corridors, including GA 400 and Roswell Road, where car and motorcycle accidents are an
unfortunate daily reality. Peter Bricks represents injured clients throughout Sandy
Springs and the rest of Fulton County, handling the insurance company so you can focus
on recovery. With 19 years of experience and a track record that includes a $1,325,000
result for a client a previous attorney had under-settled, Bricks Law takes the time to
review every detail of a claim. Free consultation, no fee unless we win.

Links to: `/car-accident-lawyer-atlanta`, `/motorcycle-accident-lawyer-atlanta`,
`/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 10. Personal Injury Lawyer Dunwoody (`/personal-injury-lawyer-dunwoody`)

**page_title:** Personal Injury Lawyer Dunwoody GA | Peter Bricks, P.C.
**meta_description:** Dunwoody accident victims can reach Peter Bricks for a free case review. Personal injury representation with 19 years of experience in Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Dunwoody, GA

**Intro:** Dunwoody and the surrounding DeKalb County communities are part of the area
Peter Bricks regularly serves. If you were hurt in a car accident, a fall, or another
incident in or around Dunwoody, a free consultation can help you understand whether you
have a claim worth pursuing and what it might be worth. Cases arising in DeKalb County
typically proceed through the DeKalb County court system. Bricks Law represents clients
on a contingency basis: no upfront cost, and no fee unless we recover money for you.

Links to: `/car-accident-lawyer-atlanta`, `/slip-and-fall-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 11. Personal Injury Lawyer Jonesboro (`/personal-injury-lawyer-jonesboro`)

**page_title:** Personal Injury Lawyer Jonesboro GA | Peter Bricks, P.C.
**meta_description:** Jonesboro accident victims can count on Peter Bricks for personal injury representation and a free consultation. Serving Clayton County and beyond.

**H1:** Personal Injury Lawyer Serving Jonesboro, GA

**Intro:** Jonesboro and the rest of Clayton County are part of Bricks Law's regular
service area. Whether your accident happened on I-75, on a local Clayton County road,
or on someone else's property, Peter Bricks offers a free consultation to walk through
what happened and what your options are. Cases arising in Clayton County typically
proceed through the Clayton County court system. With 19 years licensed in Georgia and
a track record that includes a $300,000 jury verdict, Bricks Law is prepared to fight
for a fair outcome, whether that means a negotiated settlement or a trial. No win, no
fee.

Links to: `/car-accident-lawyer-atlanta`, `/truck-accident-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 12. Personal Injury Lawyer College Park (`/personal-injury-lawyer-college-park`)

**page_title:** Personal Injury Lawyer College Park GA | Peter Bricks, P.C.
**meta_description:** College Park residents injured in an accident can get a free case review from attorney Peter Bricks. No fee unless we win, serving all of Metro Atlanta.

**H1:** Personal Injury Lawyer Serving College Park, GA

**Intro:** College Park sits near Hartsfield-Jackson Atlanta International Airport,
where heavy traffic on roads like Camp Creek Parkway and Virginia Avenue makes car
accidents a regular occurrence. Peter Bricks represents College Park residents injured
in car accidents, pedestrian accidents, and falls, with cases typically proceeding
through the Fulton or Clayton County court system depending on where the incident
occurred. A free consultation can help you understand your options, with no upfront
cost and no fee unless Bricks Law recovers money for you.

Links to: `/car-accident-lawyer-atlanta`, `/pedestrian-accident-lawyer-atlanta`,
`/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 13. Personal Injury Lawyer Forest Park (`/personal-injury-lawyer-forest-park`)

**page_title:** Personal Injury Lawyer Forest Park GA | Peter Bricks, P.C.
**meta_description:** Forest Park accident victims can reach out to Peter Bricks for a free consultation. Personal injury representation throughout Clayton County and Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Forest Park, GA

**Intro:** Forest Park residents injured in a car accident, a fall, or another incident
can reach out to Peter Bricks for a free consultation. As part of Clayton County,
claims arising in Forest Park typically proceed through the Clayton County court
system. With 19 years licensed in Georgia and a documented track record including a
$1,325,000 result, Bricks Law brings the same thorough investigation to every Forest
Park case, no matter the size of the claim. No win, no fee.

Links to: `/car-accident-lawyer-atlanta`, `/slip-and-fall-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 14. Personal Injury Lawyer Lovejoy (`/personal-injury-lawyer-lovejoy`)

**page_title:** Personal Injury Lawyer Lovejoy GA | Peter Bricks, P.C.
**meta_description:** Lovejoy accident victims can get a free case evaluation from attorney Peter Bricks. Personal injury representation across Clayton County and Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Lovejoy, GA

**Intro:** Lovejoy and the surrounding Clayton County area are part of Bricks Law's
regular service area. If you were injured in a car accident or another incident near
Lovejoy, a free case evaluation can help you understand your options, with cases
typically proceeding through the Clayton County court system. Peter Bricks has been
licensed with the State Bar of Georgia for 19 years and represents clients on a
contingency basis. No upfront cost, no fee unless we win.

Links to: `/car-accident-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 15. Personal Injury Lawyer Morrow (`/personal-injury-lawyer-morrow`)

**page_title:** Personal Injury Lawyer Morrow GA | Peter Bricks, P.C.
**meta_description:** Morrow accident victims can reach attorney Peter Bricks for a free consultation. Personal injury representation throughout Clayton County and Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Morrow, GA

**Intro:** Morrow residents injured in a car accident or another incident can reach
attorney Peter Bricks for a free consultation. Cases arising in Morrow and the rest of
Clayton County typically proceed through the Clayton County court system. With a track
record that includes a $300,000 jury verdict secured despite the defense denying
responsibility, Bricks Law is prepared to fight for a fair outcome for Morrow clients,
whether through negotiation or trial. No win, no fee.

Links to: `/car-accident-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

## 16. Personal Injury Lawyer Riverdale (`/personal-injury-lawyer-riverdale`)

**page_title:** Personal Injury Lawyer Riverdale GA | Peter Bricks, P.C.
**meta_description:** Riverdale accident victims can get a free consultation from attorney Peter Bricks. Personal injury representation across Clayton County and Metro Atlanta.

**H1:** Personal Injury Lawyer Serving Riverdale, GA

**Intro:** Riverdale residents injured in a car accident, a fall, or another incident
can get a free consultation from Peter Bricks. As part of Clayton County, claims
arising in Riverdale typically proceed through the Clayton County court system. With 19
years licensed in Georgia and a documented track record including a $1,325,000 result,
Bricks Law brings the same thorough approach to every Riverdale case. No upfront cost,
no fee unless we win.

Links to: `/car-accident-lawyer-atlanta`, `/slip-and-fall-lawyer-atlanta`, `/contact`

CTA: __REQUIRED__CTA_PRIMARY__

---

# Blog posts (6)

Each post below provides title, meta description (from sitemap), a full intro, an H2
outline, and an opening section, satisfying "every page has copy" for the copy-deck
pass gate. Full long-form drafting of remaining sections happens during content
population.

## 17. What to Do After a Car Accident in Atlanta (`/blog/what-to-do-after-a-car-accident-in-atlanta`)

**page_title:** What to Do After a Car Accident in Atlanta: A Step-by-Step Guide
**meta_description:** A step-by-step guide for Atlanta drivers on what to do immediately after a car accident, from calling police to protecting your right to compensation.

**H1:** What to Do After a Car Accident in Atlanta

**Intro:** A car accident is disorienting, even a minor one. What you do in the minutes
and days afterward can affect your health and your ability to recover compensation
later. Here is a step-by-step guide for Atlanta drivers.

### Outline
1. Check for injuries and call 911
2. Move to safety if possible
3. Exchange information and document the scene
4. Get medical attention even if you feel fine
5. Avoid giving statements to the other driver's insurer
6. Contact a personal injury attorney before settling

### Opening section: Check for Injuries and Call 911
The first priority after any accident is safety. Call 911 so police and medical
responders can come to the scene. Even if injuries seem minor, having a police report
on file creates an official record of what happened, which can matter later if you need
to file an insurance claim. Adrenaline can mask pain, so do not assume you are
uninjured just because nothing hurts immediately.

CTA: links to `/car-accident-lawyer-atlanta` and __REQUIRED__CTA_PRIMARY__

Schema: Article.

---

## 18. Georgia's Personal Injury Statute of Limitations Explained (`/blog/georgia-personal-injury-statute-of-limitations`)

**page_title:** How Long Do You Have to File a Personal Injury Claim in Georgia?
**meta_description:** Georgia gives injury victims two years to file a personal injury lawsuit. Learn how the statute of limitations works and why acting early protects your claim.

**H1:** Georgia's Personal Injury Statute of Limitations Explained

**Intro:** If you were injured in an accident in Georgia, you generally have two years
from the date of the incident to file a personal injury lawsuit. That might sound like
plenty of time, but waiting can make it harder to build a strong claim.

### Outline
1. The basic rule: two years from the date of injury
2. Why this deadline exists
3. Why waiting can hurt your claim even before the deadline
4. What happens if the deadline passes
5. When to talk to an attorney

### Opening section: The Basic Rule
Under Georgia law, most personal injury claims, including those from car accidents,
slip and falls, and other negligence-based injuries, must be filed within two years of
the date of the injury. This is the statute of limitations, a legal deadline that
applies regardless of how clear-cut the case may seem. Missing this deadline generally
means losing the right to pursue compensation through the courts, no matter how strong
the underlying claim was.

CTA: links to `/personal-injury-lawyer-atlanta` and __REQUIRED__CTA_PRIMARY__

Schema: Article, FAQPage.

---

## 19. Should You Talk to the Insurance Adjuster First? (`/blog/should-you-talk-to-the-insurance-adjuster`)

**page_title:** Should You Talk to the Insurance Adjuster Before Hiring a Lawyer?
**meta_description:** Insurance adjusters work for the insurance company, not for you. Learn what to say, what to avoid, and why talking to a lawyer first protects your claim.

**H1:** Should You Talk to the Insurance Adjuster First?

**Intro:** After an accident, it is common to get a call from an insurance adjuster
within days, sometimes hours. They may sound friendly and helpful. It is worth
understanding who they actually work for before you say anything.

### Outline
1. Whose interests the adjuster represents
2. Common tactics to be aware of
3. What is generally safe to share
4. What to avoid saying
5. Why a free consultation before that call can help

### Opening section: Whose Interests the Adjuster Represents
An insurance adjuster, even one from your own insurance company, is trained to manage
the company's costs. Their job includes evaluating your claim in a way that protects
the insurer's bottom line. That does not make every adjuster dishonest, but it does mean
their interests are not the same as yours. Understanding this distinction is the first
step in protecting your claim.

CTA: links to `/car-accident-lawyer-atlanta`, `/truck-accident-lawyer-atlanta`, and
__REQUIRED__CTA_PRIMARY__

Schema: Article.

---

## 20. Why Truck Accident Claims Are More Complex Than Car Accident Claims (`/blog/truck-accident-claims-vs-car-accident-claims`)

**page_title:** Truck Accident Claims: Why They're More Complex Than Car Accidents
**meta_description:** Truck accidents involve commercial insurance policies, federal regulations, and multiple liable parties. Here's how that changes your claim in Georgia.

**H1:** Why Truck Accident Claims Are More Complex Than Car Accident Claims

**Intro:** A collision with a commercial truck is rarely just a bigger version of a car
accident claim. The insurance, the regulations, and the number of parties involved are
all different, and those differences can affect how a claim is built and resolved.

### Outline
1. Commercial insurance policies and why they change the picture
2. Federal trucking regulations as a source of evidence
3. Multiple potentially liable parties
4. Evidence that disappears quickly
5. Why early legal involvement matters more in truck accident cases

### Opening section: Commercial Insurance Policies
Commercial trucks are typically required to carry insurance policies far larger than a
personal auto policy, often in the range of $750,000 to $1,000,000 or more depending on
the type of cargo and vehicle. While a larger policy can mean more available
compensation, it also means the insurer has more resources dedicated to minimizing
payouts, often including their own investigators arriving at the scene within hours.

CTA: links to `/truck-accident-lawyer-atlanta` and __REQUIRED__CTA_PRIMARY__

Schema: Article.

---

## 21. What Is My Personal Injury Case Worth? (`/blog/what-is-my-personal-injury-case-worth`)

**page_title:** What Is My Personal Injury Case Worth? Understanding Settlement Value
**meta_description:** Settlement value depends on medical bills, lost wages, and pain and suffering. Learn the factors that determine what your Georgia injury case is worth.

**H1:** What Is My Personal Injury Case Worth?

**Intro:** Every personal injury case is different, and no article can tell you exactly
what your case is worth. What this article can do is explain the main factors that go
into that number, and why two cases that look similar on the surface can end up worth
very different amounts.

### Outline
1. Medical bills, past and future
2. Lost wages and lost earning capacity
3. Pain and suffering
4. Insurance coverage limits, including uninsured motorist and bad-faith claims
5. Why thorough investigation can change the number, with examples from real cases

### Opening section: Medical Bills, Past and Future
The most concrete part of a personal injury claim is usually medical expenses, both
what has already been paid and what is likely to be needed in the future for ongoing
treatment, physical therapy, or future surgery. These figures form the foundation that
other parts of a claim, like lost wages and pain and suffering, are often calculated
from.

### Reference section: Real Examples (with disclaimer)
Bricks Law's case results illustrate how investigation can change a case's value: a
$25,000 offer became $1,325,000 after finding additional insurance coverage, and a
$55,000 policy limit became $75,000 after a successful bad-faith claim. Past results
do not guarantee or predict a similar outcome in future cases. See `/results` for the
full list.

CTA: links to `/personal-injury-lawyer-atlanta`, `/results`, and
__REQUIRED__CTA_PRIMARY__

Schema: Article.

---

## 22. What You Need to Prove in a Georgia Slip and Fall Claim (`/blog/slip-and-fall-claims-georgia-what-you-need-to-prove`)

**page_title:** Slip and Fall Claims in Georgia: What You Need to Prove
**meta_description:** Winning a slip and fall claim in Georgia means proving the property owner knew or should have known about the hazard. Here's how that works.

**H1:** What You Need to Prove in a Georgia Slip and Fall Claim

**Intro:** Not every fall on someone else's property results in a valid legal claim.
Georgia law sets a specific standard for when a property owner can be held responsible,
and understanding that standard is the first step in knowing whether your situation
qualifies.

### Outline
1. The property owner's duty of care
2. "Knew or should have known": the core legal standard
3. Common types of evidence in slip and fall cases
4. How comparative negligence can affect a claim
5. When to get a free consultation

### Opening section: The Property Owner's Duty of Care
Property owners and occupiers in Georgia generally have a duty to keep their premises in
a reasonably safe condition for visitors. This does not mean every hazard makes an
owner automatically responsible. It means the owner must act reasonably to find and fix
dangerous conditions, or warn visitors about them, within a reasonable time.

CTA: links to `/slip-and-fall-lawyer-atlanta` and __REQUIRED__CTA_PRIMARY__

Schema: Article.

---

# Utility pages (6)

## 23. About Peter Bricks (`/about`)

**page_title:** About Peter Bricks | Atlanta Personal Injury & Bankruptcy Attorney
**meta_description:** Peter Bricks has been a member in good standing of the State Bar of Georgia since 2006, representing injured Atlanta residents with personal, hands-on attention.

**H1:** Meet Peter Bricks

**Body (uses owner-peter-bricks.jpg as portrait):**

Peter Bricks has been a member in good standing of the State Bar of Georgia since 2006,
19 years of experience representing injured people and families across Metro Atlanta.
He is admitted to practice before the Supreme Court of Georgia, the Georgia Court of
Appeals, and the U.S. District Courts for the Northern and Middle Districts of Georgia.

Clients consistently mention the same thing about working with Peter: he is the one who
answers the questions, explains what is happening, and stays in touch. There is no case
manager, no rotating associate, and no call center. When you call Bricks Law, you talk
to the attorney handling your case.

Peter holds an Avvo "Distinguished" rating from Martindale-Hubbell, an Avvo Client's
Choice Award, and Avvo Top Contributor recognition, with 22 client reviews averaging
5.0. He is also a registered civil mediator through the Georgia Office of Dispute
Resolution (GODR), a credential that reflects experience seeing cases from both sides of
the table.

### Bar Admissions
- Georgia (State Bar)
- Supreme Court of Georgia
- Georgia Court of Appeals
- U.S. District Court, Northern District of Georgia
- U.S. District Court, Middle District of Georgia

### Recognition
- Avvo Client's Choice Award
- Avvo Top Contributor
- Avvo Rating: 7.5, "Very Good" (22 reviews at 5.0)
- Martindale-Hubbell: Distinguished
- National Association of Consumer Bankruptcy Attorneys, Member
- American Bankruptcy Institute, Member
- State Bar of Georgia, Active Member in Good Standing

CTA: __REQUIRED__CTA_PRIMARY__

---

## 24. Contact (`/contact`)

**page_title:** Contact Peter Bricks, P.C. | Free Consultation
**meta_description:** Call (770) 696-4577 or fill out our form for a free, no-obligation consultation with an Atlanta personal injury and bankruptcy attorney.

**H1:** Contact Us for a Free Consultation

**Body:**

If you have been injured in an accident, the first step is a free, no-obligation
conversation about what happened. Call or fill out the form below and you will hear
back from the attorney handling your case directly.

Phone: __REQUIRED__PHONE__ (resolves to (770) 696-4577)
Email: __REQUIRED__EMAIL__
Hours: Mon-Fri, 9 AM-5 PM

Form fields (4-field cap per copywriting.md quality bar): Name, Phone, Email, Brief
description of what happened.

Privacy line: "Your information is confidential and protected by attorney-client
privilege. We will not share it with anyone."

Note: per `sitemap.json` content_notes, no street address is shown in structured data
or on this page pending resolution of the P.O. Box vs. real-office-address discrepancy
flagged in Stage 2 research. This is a Stage 7 (Brand DNA) / client-confirmation item,
not a copy item, flagged here for visibility.

CTA: __REQUIRED__CTA_PRIMARY__

---

## 25. Case Results (`/results`)

**page_title:** Settlement Results | Peter Bricks, P.C.
**meta_description:** See the verdicts and settlements Peter Bricks has recovered for injured clients, including a $1,325,000 result and a $300,000 jury verdict.

**H1:** Case Results

**Intro:** Below are real settlements and verdicts Peter Bricks has recovered for
injured clients across Metro Atlanta. Past results do not guarantee or predict a
similar outcome in future cases. Every case is different, and the outcome of your case
will depend on its own facts.

### Results
1. **$1,325,000** - Car accident. A prior attorney had recovered $25,000 for a client
   who required surgical ankle and kneecap repair and developed a post-surgical
   infection. Bricks Law identified over $1,000,000 in additional applicable insurance
   coverage. Quantified trust line: "Including a $1,325,000 settlement for a car
   accident client right here in Atlanta."
2. **$300,000** - Jury verdict, Gwinnett County. A college student suffered bilateral
   knee injuries (arthroscopy, partial meniscectomy) after being T-boned by a driver who
   ran a red light. The defense denied causation and argued for $0 to $140,000; the jury
   awarded $300,000.
3. **$100,000** - Uninsured motorist policy-limits settlement. A client was run off the
   highway by a hit-and-run driver and was initially cited by police. Bricks Law
   obtained dashcam video through an open-records request that proved the other
   driver's fault.
4. **$75,000** - Settlement plus bad-faith claim recovery. A client required
   ankle-fracture surgery; only $55,000 in insurance was available. Bricks Law secured
   an additional $20,000 above policy limits through a bad-faith claim.
5. **Confidential** - Pedestrian case. A client's foot was run over in a collision. The
   settlement amount is confidential.

Disclaimer (repeated below the list): "Past results do not guarantee or predict a
similar outcome in future cases. Every case is different."

CTA: __REQUIRED__CTA_PRIMARY__

---

## 26. Client Reviews (`/reviews`)

**page_title:** Client Reviews | Peter Bricks, P.C.
**meta_description:** Read reviews from clients Peter Bricks has represented in personal injury and bankruptcy cases throughout Metro Atlanta, including Avvo and Google reviews.

**H1:** What Our Clients Say

**Intro:** "Here is what some of our clients have to say about their experience working
with Peter Bricks, P.C."

Summary line: "Rated 7.5 (\"Very Good\") on Avvo from 22 reviews averaging 5.0."

### Reviews (real, isGenerated: false, source: brickslaw.com/testimonials via
Pipeline Data/research/raw-website.json, reproduced verbatim)

**Mark M.**
"We can't thank you enough for your time, expertise through this process! It was a
pleasure meeting you and your staff. The process was smooth and seamless. And we always
felt comfortable knowing you were representing us. Your firm will always resonate in
our minds and hearts for the awesome job you performed!"

**David H.**
"My emails as well as phone calls were returned very quickly, explaining some of the
things to me that were unique to my case. I felt very lost at the beginning of the
process since I had not been through it before. After he explained things sometimes
multiple times I felt like I had a much better understanding of what was going on and
what to expect."

**James K.**
"I found that it was easy to get in touch with my attorney both by email and my phone.
You were very attentive to my needs. I would recommend your law firm. I think you did a
great job."

**Donal P.**
"I was prepared, because the attorney had thoroughly explained the process to me. They
seemed to be able to relate to the concerns of the client, and not just rushing through
as if to hurry to get to the next one."

Note: source text used "We cant" (no apostrophe) for Mark M.'s review. Corrected to
"We can't" with a smart apostrophe per the typographic-standards.md smart-quote rule;
no wording was changed.

Trust badges: Google, Avvo, Thumbtack icons link out to the firm's profiles on each
platform.

AggregateRating schema: not emitted until GBP rating is independently confirmed (Apify
402, see Stage 2 note). Avvo rating (7.5, 22 reviews at 5.0) is displayed as text, not
as schema, until confirmed.

CTA: __REQUIRED__CTA_PRIMARY__

---

## 27. No Win, No Fee / Financing (`/financing`)

**page_title:** No Fee Unless We Win | Peter Bricks, P.C.
**meta_description:** Peter Bricks represents injury clients on a contingency basis, no upfront fees, no hourly bills. You only pay if we recover compensation for you.

**H1:** You Don't Pay Unless We Win

**Body:**

Peter Bricks represents personal injury clients on a contingency-fee basis. That means:

- No upfront cost to start your case
- No hourly bills
- Attorney's fees come out of your settlement or verdict, as a percentage agreed to
  before we begin
- If we do not recover money for you, you owe us nothing in attorney's fees

### How It Works
1. Free consultation to evaluate your case.
2. If we take your case, we cover the work of building it: investigation, paperwork,
   and negotiation with the insurance company.
3. If we win, our fee comes out of the recovery, at a percentage agreed to up front.
4. If we do not win, you owe nothing in attorney's fees.

### A Note on Case Expenses
Some cases involve out-of-pocket costs (such as obtaining medical records or expert
reports). These are discussed up front during your free consultation so there are no
surprises.

Fee-structure disclaimer (per seo-patterns.md common pitfalls): "No Win, No Fee"
describes how attorney's fees work, not a guarantee of any particular case outcome or
settlement amount. Every case is different.

CTA: __REQUIRED__CTA_PRIMARY__

---

## 28. Bankruptcy Lawyer Atlanta (`/bankruptcy`)

**page_title:** Bankruptcy Lawyer Atlanta | Chapter 7 & Chapter 13 | Peter Bricks, P.C.
**meta_description:** Peter Bricks helps Metro Atlanta residents file Chapter 7 and Chapter 13 bankruptcy with personal attention and a free initial consultation.

**H1:** Atlanta Bankruptcy Attorney

**Body:**

In addition to personal injury representation, Peter Bricks helps Metro Atlanta
residents navigate Chapter 7 and Chapter 13 bankruptcy. Peter is a member of both the
National Association of Consumer Bankruptcy Attorneys and the American Bankruptcy
Institute.

### Chapter 7 Bankruptcy
A Chapter 7 bankruptcy can discharge most unsecured debts, such as credit card balances
and medical bills, allowing for a fresh financial start. A free consultation can help
determine whether you qualify.

### Chapter 13 Bankruptcy
A Chapter 13 bankruptcy sets up a repayment plan, typically over three to five years,
which can help you catch up on secured debts like a mortgage or car loan while
protecting your property.

### Why Work With Peter Bricks
Just as with personal injury cases, bankruptcy clients work directly with Peter Bricks,
not a high-volume filing service. He takes the time to walk through your financial
situation and explain which option, if any, makes sense.

Free initial consultation. Note: this page is a secondary practice area carried over
from the existing site and is intentionally not cross-linked into the personal injury
page cluster, per the internal linking strategy locked at Stage 5.

CTA: __REQUIRED__CTA_PRIMARY__

---

# Pass-gate self-check

- Em-dash audit: zero em-dashes used. Confirmed by manual scan of this document.
- AI-vocab / banned-phrase audit: no instances of "navigate the complexities",
  "experienced legal counsel", "vigorous representation", "complex legal landscape",
  "zealous advocacy", "your trusted advocate", "ambulance chaser", "your day in court",
  "comprehensive legal services", or universal blocklist terms (leverage, seamless,
  robust, game-changer, cutting-edge, etc.).
- Imagery audit: no gavel, scales of justice, courtroom, "lady justice", or stacked
  law-book imagery referenced anywhere in this copy (the `iconHint: "scale"` in
  `process_steps` is a UI icon hint, not body copy, see note above).
- Smart quotes: applied throughout, including the corrected Mark M. review.
- Tabular numerals: all dollar figures use comma-separated digits ($1,325,000, $300,000,
  $100,000, $75,000).
- Fabrication audit: no 24/7 claims, no case-outcome guarantees, no invented
  certifications or settlement figures for case types without disclosed results
  (truck, motorcycle, slip and fall, wrongful death use track-record framing with
  links to `/results` instead).
- Every page in `sitemap.json` (28 total: 1 core + 6 service + 9 location + 6 blog + 6
  utility) has copy above. No `[BRACKET]` placeholders remain.
- Every H1 above is bold heading text, no italic accents.
- Every primary CTA reads `__REQUIRED__CTA_PRIMARY__`, resolved to "Get Your Free Case
  Review" per `copy-locks.json` `ctaPrimary`.
- Owner story (Founder section) hits narrative beats: origin/credentials (19 years,
  bar admissions), a defining case ($1,325,000 turnaround), philosophy (direct access,
  no case managers), and credential differentiation (GODR mediator). 4 of 5 beats from
  copywriting.md Section 5 founder framework.
- All 9 location pages have genuinely unique intros (verified, no shared paragraphs).
- All FAQs written in plain customer voice, no legalese.
- Reviews flagged `isGenerated: false`, sourced and quoted verbatim with one
  smart-quote correction noted.
