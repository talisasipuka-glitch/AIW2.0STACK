# Research Report, Bricks Law

Client: Bricks Law (Peter Bricks, PC)
Website: https://www.brickslaw.com
Niche: personal-injury-lawyers
Compiled: 2026-06-15
Method: WebFetch (brickslaw.com homepage + internal pages via apify website-content-crawler)
plus WebSearch (Avvo, Martindale-Hubbell, directory listings, competitor landscape).
Apify GBP/Facebook/Instagram scrapes were unavailable this run (Apify account returned
HTTP 402 Payment Required on all calls beyond the first; the first call also matched
the wrong business, "Brick Law Firm"). All figures below come from the firm's own site
and independently verifiable directory pages. Flagged below wherever a figure could not
be independently confirmed.

---

## 1. Business Overview

Bricks Law is the trading name used on the firm's website for Peter Bricks, PC, a solo
practitioner law firm based in Atlanta, Georgia. The firm's own homepage describes
itself as "Atlanta Personal Injury and Bankruptcy Attorney - Your Trusted Legal Advocate
in Metro Atlanta." Peter Bricks has been an active member in good standing of the State
Bar of Georgia since 2006 (the site states "over 15 years of experience"; Avvo lists 19
years licensed). The practice is built around two core service lines: personal injury
(representing injured plaintiffs against negligent parties and their insurers) and
consumer bankruptcy (Chapter 7 and Chapter 13). A third, smaller service line is civil
mediation, for which Peter Bricks is registered with the Georgia Office of Dispute
Resolution (GODR).

The site is built on Wix and carries Organization and LocalBusiness schema markup
(`brickslaw.com`), with a logo, contact point, and area-served declared as "Atlanta,
Georgia." The mailing address on file is a P.O. Box (P.O. Box 467007, Atlanta, GA
31146), but a directory listing (Martindale / Lawful.com) shows a physical office at
1200 Ashwood Parkway Suite 502, Atlanta, GA 30338. The client intake notes also flag a
second office location in Jonesboro, GA. This street-address discrepancy should be
confirmed directly with the client before LocalBusiness/Attorney schema is finalized
for the new build, since "Atlanta Personal Injury and Bankruptcy Attorney" combined with
a P.O. Box reads as less trustworthy to an injured visitor doing due diligence.

## 2. Services / Offerings

- **Personal injury**, representing injured plaintiffs on a contingency basis. The
  website's verdicts/settlements page documents auto-collision cases specifically
  (rear-end, T-bone, hit-and-run, pedestrian-vs-vehicle).
- **Bankruptcy**, Chapter 7 and Chapter 13 filings for individual debtors, including
  related sub-services referenced in the blog: Chapter 13 plan modifications, liens and
  bankruptcy, bankruptcy and divorce, motions to lift stay.
- **Mediation**, general civil case mediation, Peter Bricks is a GODR-registered
  mediator.
- **Estate planning basics** (wills, powers of attorney) are referenced in third-party
  directory listings (Lawyers.com) but are not prominent on the current site.

The current site splits its primary messaging fairly evenly between personal injury and
bankruptcy, which the client intake correctly flagged as a focus problem. For the new
build, personal injury should be the dominant above-the-fold message given this stack's
niche focus, with bankruptcy and mediation positioned as secondary practice areas.

## 3. Service Areas / Geography

Primary city: Atlanta, GA. The website lists a broad service area: Sandy Springs,
Dunwoody, Jonesboro, College Park, Forest Park, Lovejoy, Morrow, Riverdale, and the
greater Atlanta metro area. The Organization schema declares area served as "Atlanta,
Georgia." Counties served per the homepage: Clayton, Cobb, Cherokee, DeKalb, Fulton, and
Gwinnett. One of the documented jury verdicts (the $300,000 case) took place in Gwinnett
County, consistent with this service-area claim. The client intake notes a second
physical office in Jonesboro, GA (Clayton County), which lines up with Jonesboro being
named first among the secondary cities. Population context: Atlanta metro is the
largest metro in Georgia (~6.3 million), giving this firm a very large addressable pool
of accident victims relative to a single-office solo practice.

## 4. Owner / Founder / Host Profile

**Peter Bricks** is the founder and sole attorney. Education: Bachelor of Journalism,
University of Texas at Austin (1998); Juris Doctor, Georgia State University (2006).
Licensed by the State Bar of Georgia since 2006 (active, good standing). Additional bar
admissions: Supreme Court of Georgia, Georgia Court of Appeals, U.S. District Court for
the Northern District of Georgia, U.S. District Court for the Middle District of
Georgia. He is a registered civil mediator with the Georgia Office of Dispute
Resolution. He is a member of the National Association of Consumer Bankruptcy Attorneys
and the American Bankruptcy Institute, both bankruptcy-focused affiliations rather than
personal-injury-focused ones, a possible authority-signal gap for the PI side of the
new site.

On Avvo, client reviews praise his "problem-solving abilities," ability to "resolve an
impossible situation," responsive communication, and willingness to take a second look
at a case a prior attorney had under-valued (directly mirrored in the $1,325,000
featured settlement, where Bricks Law found over $1 million in additional coverage a
previous attorney had missed). This "we dig deeper than the last guy" angle is a strong,
differentiated story hook for the new site's founder section.

No verbatim vision or mission statement was found beyond the homepage tagline
"Your Trusted Legal Advocate in Metro Atlanta" and "dedicated to providing compassionate
legal assistance."

## 5. Vision, Mission & Values

No formal vision/mission/values page exists. Inferred values from site copy and
testimonial themes: accessibility (fast response to calls/emails), thoroughness
(explaining the legal process in plain language to first-time clients), persistence
(re-examining cases other attorneys gave up on), and personal attention (solo
practitioner, clients deal directly with Peter, not a junior associate or call center).
These four themes recur across all four written testimonials and the Avvo review
summary, so they are well-supported, not guesswork.

## 6. Brand Identity Signals

- **Primary/secondary colors**: not formally documented. The Wix site's logo is a
  horizontal black wordmark ("Brickslaw") on a white background; the hero/OG image uses
  a neutral palette. No locked brand colors found, this build is free to set its own
  palette per the niche playbook.
- **Logo style**: wordmark (text-only, no icon or mascot).
- **Tagline**: "Atlanta Personal Injury and Bankruptcy Attorney" / "Your Trusted Legal
  Advocate in Metro Atlanta."
- **Has mascot**: No.
- **Brand voice**: Plain-spoken, client-facing, slightly informal (the homepage CTA
  copy has a typo, "Should have been involved in an automobile accident, protect your
  legal rights"), but the FAQ and blog content is more formal and informational. Overall
  tone is approachable rather than aggressive, "compassionate legal assistance" is used
  twice on the homepage. 3-5 brand voice keywords: approachable, plain-spoken,
  client-first, informational, understated (no "we fight for you" aggression language
  found anywhere on the current site, a contrast with most PI competitor messaging).

## 7. Brand Voice & Copy Tone Analysis

The current site's copy register sits closer to "helpful neighborhood attorney" than
"aggressive injury fighter," which is unusual for this niche (most competitors lean hard
into fighter/protector framing). The four testimonials all emphasize communication and
hand-holding through an unfamiliar process rather than dollar amounts won, even though
the firm has a genuinely strong settlement track record ($1.325M, $300K jury verdict,
$100K policy limits, $75K bad-faith recovery) that is currently buried on a secondary
"verdicts and settlements" page rather than used as homepage proof.

For the new build, the niche playbook's locked voice register ("commercial": serious,
direct, personally accountable, see `templates/personal-injury-lawyers/niche-playbook/copywriting.md`
Section 1) should be applied, while preserving the genuinely differentiated "we look
harder than your last attorney" story and the plain-English FAQ tone, which tests well
with first-time accident victims who are intimidated by legal jargon.

## 8. Business Model & Market Segment

**Business model**: Hybrid. Personal injury work is contingency-fee ("no recovery, no
fee" is implied by "representing injured plaintiffs on a contingency basis," though the
exact phrase "No Win, No Fee" does not appear on the current site, a gap versus the
niche playbook's locked copy expectations). Bankruptcy work is flat-fee/hourly
(standard for consumer bankruptcy filings, not contingency).

**Market segment**: Individual consumers exclusively, no commercial/business clients,
no mass-tort or class-action signals found. All five documented case results are
single-plaintiff auto-collision injury cases.

## 9. Reviews & Reputation

- **Avvo**: 22 client reviews, all 5.0/5.0 (perfect score). Overall Avvo attorney rating
  7.5/10 ("Very Good"). Holds the "Avvo Client's Choice Award" badge and "Avvo Top
  Contributor" badge. Review themes: problem-solving, responsiveness, clear
  explanations, fair/competitive pricing, trustworthiness.
- **Martindale-Hubbell**: "Distinguished" rating (peer-review based, indicates high
  professional standing).
- **Google reviews**: Could not be independently verified this run (Apify GBP lookup
  failed with HTTP 402, and WebSearch did not surface a confirmed Google rating/count
  for this specific business; a same-name competitor, "Brick Law Firm" in Cumberland,
  GA, with 11 Google reviews at 5.0, was found instead and explicitly excluded as a
  disambiguation false-positive). The firm's own testimonials page links out to a Google
  review-collection URL, confirming a live GBP listing exists; count/rating should be
  re-pulled once Apify billing is restored.
- **Facebook**: Page exists at facebook.com/peterbricksPC, described in search results
  as "a boutique law firm dedicated to representing individuals and families who have
  been injured," with roughly 8 page likes found via search snippet (low social
  following, an opportunity area for the content engine later).
- **Website testimonials**: 4 written client testimonials (Mark M., David H., James K.,
  Donal P.), consistent in theme with the Avvo reviews.

## 10. Trust & Certification Signals

- State Bar of Georgia, active member in good standing (since 2006)
- Georgia Supreme Court, Georgia Court of Appeals, and both Georgia federal district
  courts admission
- Georgia Office of Dispute Resolution, registered civil mediator
- National Association of Consumer Bankruptcy Attorneys, member
- American Bankruptcy Institute, member
- Avvo Client's Choice Award, Avvo Top Contributor
- Martindale-Hubbell "Distinguished" peer-review rating
- No Super Lawyers, BBB accreditation, Million Dollar Advocates Forum, National Trial
  Lawyers Top 100, or AVVO numeric attorney rating (10.0) found. These represent
  realistic upgrade targets for the trust-signal section of the new site, the firm
  qualifies for some of these (BBB, Super Lawyers) on track record but does not appear
  to hold them yet.
- No press/"As Seen In" media mentions found.

## 11. Competitor Landscape

Top PI-focused competitors serving the same Sandy Springs / Dunwoody / Jonesboro / metro
Atlanta service area, identified via directory rankings:

1. **Butler Kahn**, ranked among top Sandy Springs PI firms (Expertise.com)
2. **The Williamson Law Firm** (attorney Scott Williamson), offices in Alpharetta and
   Dunwoody, negligence-victim focus
3. **Steven I. Goldman**, Atlanta-based, ~40 years of experience, serves Sandy Springs
4. **ReisLaw, LLC** (founder Laura Reis), represents Georgia injury victims
5. **Guardian Accident & Injury Lawyers**, serves Atlanta, Sandy Springs, and Jonesboro
   directly (closest geographic overlap with Bricks Law's stated service area)

All five are multi-channel firms with stronger directory presence (Super Lawyers,
Expertise.com rankings, Yelp) than Bricks Law currently has. Bricks Law's differentiator
against this field is the solo-practitioner "you deal with the actual attorney"
positioning plus the documented track record of finding additional insurance coverage
other firms missed.

## 12. Tech Stack & Current Site Assessment

- **CMS**: Wix (confirmed via `static.wixstatic.com` asset URLs)
- **HTTPS**: Yes
- **Schema markup**: Yes, Organization + LocalBusiness JSON-LD present on the homepage
- **Sitemap/robots**: Not directly checked this run; Wix sites generate these by default
- **Mobile viewport**: Wix sites are responsive by default; page-by-page mobile QA
  deferred to Stage 3 (SEO audit)
- **Blog**: Active, multiple posts on bankruptcy and PI topics (lien law, Chapter 13
  modifications, lemon law, hit-and-run claims, etc.)
- **Podcast**: "Lawyers and Lay People" podcast embedded on the site, multiple episodes
  with guest attorneys covering landlord-tenant law, criminal law, social security
  disability, and lemon law. This is a strong, underused content asset.
- **Known issues** (per client intake + this research): messaging is split roughly
  evenly between personal injury and bankruptcy with no clear hierarchy; no prominent
  conversion CTA on the homepage beyond a phone number; settlement results are buried on
  a secondary page; mailing address is a P.O. Box rather than the firm's real office
  address; no "No Win, No Fee" or 24/7-availability language anywhere on the current
  site, both are near-universal trust signals in this niche and are currently absent.

## 13. Differentiators & Unique Story Hooks

1. **"We looked harder than your last attorney"**, the $1,325,000 featured case
   explicitly describes finding over $1 million in additional insurance coverage after
   a prior attorney settled for $25,000. This is a rare, concrete, high-stakes proof
   point and should anchor the homepage results section.
2. **Solo practitioner, direct access**, clients deal with Peter Bricks personally, not
   a call center or rotating associate, repeatedly cited in testimonials as the reason
   clients felt informed and supported.
3. **Underdog wins against denial of liability**, the $300,000 Gwinnett County jury
   verdict was won despite the defense denying causation and arguing for $0-$140,000,
   and the $100,000 hit-and-run recovery required the firm to source dashcam evidence
   via an open-records request after police initially blamed the client. Both are
   strong "we don't give up" narratives.
3. **19+ years of Georgia bar standing** combined with federal court admissions and a
   GODR mediator credential, a depth-of-credential story that is currently invisible on
   the homepage.
4. **An existing podcast and blog**, "Lawyers and Lay People," gives the content engine
   (Module 7) a ready-made library of long-form material and guest-attorney
   relationships to mine for future episodes/social content.

---

# nicheExtensions["personal-injury-lawyers"] summary

See `research-data.json` for the structured payload. Headline signals:

- Case types documented: car accidents (rear-end, T-bone, hit-and-run, pedestrian)
- Contingency fee confirmed for PI; "No Win, No Fee" phrasing not currently used,
  recommended as a locked copy addition for the new build
- Free consultation: confirmed
- 24/7 availability: not claimed, recommend adding if true (confirm with client)
- Bilingual (Spanish) services: not found, English-only per schema
- Office locations: 2 (Atlanta primary, Jonesboro secondary per client intake)
- Bar admissions: Georgia (state + federal courts)
- Years licensed: 19-20 (since 2006)
- Professional affiliations: Avvo Client's Choice + Top Contributor, Martindale-Hubbell
  Distinguished, NACBA member, ABI member, GA Bar active good standing
- Settlement results: $1,325,000 / $300,000 / $100,000 / $75,000 / confidential
  (all auto-collision, all Georgia)
- Testimonial themes: responsive communication, thorough explanation, attentiveness,
  smooth process, trustworthiness/dependability
- Business model: hybrid (PI contingency + bankruptcy flat-fee)
- Market segment: individual-injury only
- Brand voice tags: trustworthy, accessible, compassionate, local, results-driven
