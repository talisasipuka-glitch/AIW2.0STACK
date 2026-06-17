# 02 — Customer Voice (Motorsport / Automotive: Performance & Tuning Shops)

Source: `compass/crawler-google-places` (1 place, "performance shop" near Los Angeles, CA, 10 reviews) + `trudax/reddit-scraper-lite` attempt (returned unusable mixed feed, same limitation as the real-estate and personal-injury niches).

---

## GBP reviews: Westside Performance Speed Shop (Los Angeles, 4.6 stars, 53 reviews total)

Review distribution: 43 five-star, 4 four-star, 2 three-star, 1 two-star, 3 one-star — a long tail of very satisfied customers with a small but visible negative tail.

Google's auto-generated review tags for this business: "knowledgeable staff" (13 mentions), "school" (6), "engine" (5), "parts availability" (3), "stock" (3), "old school shop" (2), "classic cars" (2), "performance parts" (2), "old school" (2).

### Sample review text (10 reviews pulled)

- "They are really helpful." (5 stars)
- "My car broke down a short walk from this shop, and they helped me out when I was in a pinch. Very nice people, would 100% recommend" (5 stars)
- "OG. Westside old school. It's just a part of West LA. Like any automotive shop everybody's gonna have a different opinion, but it's hard to find someone that actually rebuild a carburetor." (5 stars)
- "Excellent repair service!" (5 stars)
- "These guys know their stuff." (5 stars)
- "Great place" (5 stars)
- "They were unable to provide me with the needed parts that I was seeking so I can't [move] in any further with his company and any kind of rating" (3 stars — negative, parts-availability complaint)
- 2 reviews with star ratings but no text (5 stars, 4 stars)

### Themes for the end customer

1. **Specialist expertise is the #1 trust driver.** "Knowledgeable staff" is by far the most-tagged attribute (13 of ~53 reviews), and the standout 5-star review explicitly calls out a rare skill ("hard to find someone that actually rebuild a carburetor"). The end customer for a performance/tuning shop is often trusting the shop with non-routine, sometimes irreplaceable work (older engines, custom builds) — they are searching for proof of *specific* expertise, not just "friendly service."
2. **Heritage/"old school" identity builds trust through longevity.** Two reviewers explicitly frame the shop's age and reputation ("OG," "old school shop," "part of West LA") as a positive signal — for an end customer, a shop that has clearly operated in the same community for a long time signals it can be trusted with an expensive or sentimental vehicle.
3. **Going above-and-beyond in emergencies builds loyalty.** The breakdown-rescue review ("helped me out when I was in a pinch... would 100% recommend") shows that responsiveness in a moment of stress (a car not running) creates a strong positive impression — directly analogous to the urgency dynamics seen in other service niches.
4. **Parts availability is the clearest negative-experience driver.** The one negative review in this sample is specifically about the shop being unable to source needed parts — for a performance/tuning end customer (who often needs specific aftermarket or hard-to-find parts), failing on parts availability is a concrete trust-breaker, separate from labor quality.
5. **Reviews skew toward short, blunt affirmations** ("Great place," "Excellent repair service!", "These guys know their stuff") rather than long narratives — end customers in this niche appear to leave quick, confidence-based endorsements rather than detailed stories, which is useful context for what testimonial-style content will feel authentic on a shop's site.

## Reddit attempt: limitation confirmed again

The query "choosing a tuning shop for my car" against `trudax/reddit-scraper-lite` (maxItems 10, type posts) returned an unrelated mixed feed (gym equipment posts, an AI roleplay subreddit thread, a Range Rover buying question, and empty subreddit-landing links for r/nurburgring and r/ECU_Tuning) rather than targeted results. This is the same actor limitation documented for real-estate-agents and personal-injury-lawyers: the `searches` parameter does not reliably filter to on-topic results. One marginally relevant item appeared (a Nurburgring forum post about suspension/brake recommendations for track use), but it concerns DIY parts selection, not shop selection, and is not usable as customer-voice evidence.

**Net effect**: customer-voice evidence for this niche relies on the single GBP review set above (10 of 53 reviews from one LA shop). This is consistent with the evidence-base limitation already flagged for the other two niches and should be weighed the same way in the final synthesis.
