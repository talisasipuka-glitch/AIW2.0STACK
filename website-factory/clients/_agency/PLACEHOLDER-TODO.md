# agency-brand.json, placeholders to revisit

Written by `/setup-agency` on 2026-06-15. The fields below were marked as
placeholders so the proposal build (Stage 13) can run before Talisa has a
portfolio. Revisit each of these after the first client build lands.

## Assets (currently text stub files, replace with real images)

- `assets/founder-portrait.jpg`, square portrait of Talisa, at least 800x800
- `assets/guarantee-seal.png`, transparent PNG, ~200x200
- `assets/review-avatars/1.webp`, `2.webp`, `3.webp`, reviewer profile photos
- `assets/client-builds/1.webp`, desktop screenshot of first real client build
- `assets/founder-signature.svg`, optional, Talisa said she may add this later

## JSON fields

- `reviews[]`, replace all 3 placeholder reviews with real client reviews
  (minimum 3). Update `review_total_count` to the real aggregate count.
- `client_builds[]`, replace the placeholder entry with a real client build
  (name, live URL, screenshot, owner quote, owner name).
- `case_studies[]`, currently empty. Add 1-4 short video testimonials once
  available (optional).
- `proof.*`, all fields are placeholders. Once you have a flagship result,
  fill in `stat`, `stat_subtitle`, `intro_paragraph`, `video_url` or
  `video_path`, `video_thumbnail_url`, `video_title`.
- `ai_infrastructure.*`, fill in once your AI lead-handling stack
  (GoHighLevel, Make.com, etc.) is set up.
- `blueprint_pdf_path` / `blueprint_pdf_title`, add your methodology PDF
  once you have one. `blueprint_pdf_path` can stay `null` to omit the
  section.
- `domain`, currently "TBD". Update once you register a domain.
- `youtube_channel`, currently `null`. Add if you start one.

## Re-running

`/setup-agency` is idempotent. Run it again any time to update these
sections; it will read the existing file and ask whether to revise.
