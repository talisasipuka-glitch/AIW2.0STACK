# Manual drop needed: founder-photos

Required category (minCount 1, preferredCount 3). Currently have 1 photo
(`owner-peter-bricks.jpg`), sourced from the live brickslaw.com site.

Gaps:

- The existing photo is 621x876, below the preferred 800x1000 minimum in
  `photo-manifest.json`.
- The composition (outdoor park background, arms crossed, casual pose) does
  not match the "studio_clean" lighting and "chest-up, looking directly at
  camera, neutral or office background" guidance for this category.
- No additional attorney or staff portraits were found on the site, Facebook
  (facebook.com/peterbricksPC), or Instagram (@peterbrickspc); Apify social
  scrapes returned HTTP 402 this run (see `research-report.md`).

Recommendation: use `owner-peter-bricks.jpg` as a placeholder for the build.
If the client can supply 1-2 additional studio-style headshots (or a
professional photo shoot is arranged), drop them into this folder and update
`manifest.json`. Re-run the Facebook/Instagram scrape once Apify billing is
restored, social photos may include better portraits.
