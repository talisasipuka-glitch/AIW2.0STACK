# Content Engine, Structure Overview

## What the Engine does

A single-tenant web app, deployed to the student's own Vercel project and
backed by their own Supabase database, that ingests context about the
student's agency and voice into seven role-defined buckets, then generates
ready-to-film Instagram reels, carousels, and story sequences in the
student's voice. Includes a kanban pipeline, a content radar that scans the
niche for trending angles, and a performance loop that feeds posted results
back into the generator.

## Content types the Engine produces

- Instagram reels (short / medium / long, hook -> body -> CTA)
- Carousels (8-10 slides)
- Story sequences (5-7 frames)
- Long-form outlines (YouTube/podcast, 5-15 min, sectioned)

## Inputs the Engine needs (the 7 buckets)

The live bucket set (`content-engine/src/lib/content-engine/buckets.ts`)
differs slightly from the framework's reference table: the sixth bucket is
named **context**, not **my_business**. The student's business identity
(niche, avatar, offer, lead magnet, comment keyword) is captured separately
as a `BusinessProfile` during the setup wizard, not as a bucket item; the
**context** bucket is the freeform companion to that profile (proof points,
case studies, docs).

| Bucket | Purpose | Accepted source types |
|---|---|---|
| video_ideas | One-line topic dumps. Generator pulls from here first when asked "what should I make today" | text, instagram_reel, tiktok_url, youtube_url, link |
| inspiration | Competitor reels/viral examples, analyzed for structure only, never topic or phrasing | instagram_reel, tiktok_url, youtube_url, link, text |
| expert_brain | Long-form sources: frameworks, principles, mental models, case studies | youtube_url, pdf, link, text, audio_file, video_file |
| my_voice | Past posts, captions, voice memos, writing samples. Primary, binding voice anchor | text, audio_file, video_file, instagram_reel, tiktok_url, youtube_url, link |
| context | Any relevant context (proof points, case studies, named programs/clients, internal docs) | text, pdf, link, audio_file, video_file, youtube_url |
| instructions | Hard rules: always end with X, never say Y, etc. Override everything | text |
| feedback | Auto-written performance learnings from posted content. Outranks everything except instructions | (auto-populated by the engine) |

Separately, the **BusinessProfile** (set during onboarding, editable in
Settings) carries: `niche`, `avatar_description`, `offer_description`,
`lead_magnet`, `default_comment_keyword`. Every generated script's CTA
points at the lead magnet via the comment-keyword pattern, and every
script's topic must serve this avatar + offer.

## Voice / style metadata

`VoiceProfile` (from `src/lib/ai/types.ts`):
- `tone_descriptor`: creator self-description (treated as low-confidence;
  overridden by extracted voice_signatures when they conflict)
- `catchphrases`: phrases to drop naturally into output
- `do_not_use_phrases`: hard ban list (NEVER used, regardless of context)
- `sample_transcripts`: raw past-content samples for cadence matching

`my_voice` bucket items can additionally carry an extracted
`voice_signature` (avg sentence length, rhythm, register, profanity level,
opening/closing patterns, signature phrases, filler words, distinctive
moves). When present, these are binding constraints on every generation and
override `tone_descriptor`.

`expert_brain` items can carry extracted `expert_frameworks` (named
frameworks with ordered steps, principles, mental models, key terminology,
case studies). The generator must name the specific framework used in every
script's `why_it_works` field.

`inspiration` items can carry `deep_analysis` (hook, hook_formula,
body_summary, cta pattern, why_it_works, reusable_hook_template,
key_findings). The generator lifts structure only, never verbatim hooks or
phrasing.

## Source ingestion pipelines

- YouTube URLs -> transcript extracted (youtube-transcript, free), summarized, tagged
- Instagram reels / TikTok URLs -> Apify scrapes metadata + transcript, deep_analysis extracted for inspiration items
- PDFs -> extracted, chunked, summarized
- Audio / video files -> AssemblyAI transcription
- Text -> stored directly; voice_signature extraction for my_voice, expert_frameworks extraction for expert_brain

All ingestion runs through `POST /api/context` (`startIngest`), keyed by
`bucket` + `source_type`. `GET /api/context?bucket=X` lists items;
`GET /api/context` (no bucket) returns per-bucket counts for the dashboard.

## Handoff format

The brief lands at `research/output/content-engine-brief.md`, structured by
the seven buckets above plus the BusinessProfile and VoiceProfile fields.
The `/walk-engine` command walks the student through pasting each section
into the live dashboard's Library and Settings pages, one bucket at a time.

## Required env vars (for deploy)

- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- ANTHROPIC_API_KEY
- APIFY_TOKEN
- ASSEMBLYAI_API_KEY (optional, only if my_voice or expert_brain ingests audio/video)
- CRON_SECRET (for the radar + performance-loop cron routes)

The app boots without paid API keys; anything needing Anthropic/Apify/AssemblyAI
runs in stub mode until the key is added via the in-app Settings page.
