import { brandDNA } from '../config/brand-dna.js';

const YOUTUBE_URL = 'https://www.youtube.com/@PeterBricksPC';

export default function VideosBand() {
  return (
    <section id="videos" className="bg-white border-y border-silver">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              Podcast and Videos
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-2">
              Legal insights from Peter Bricks
            </h2>
            <p className="text-neutral max-w-prose">
              Peter Bricks hosts interviews and legal commentary for Georgia residents navigating personal injury claims, insurance disputes, and more.
              Watch on YouTube.
            </p>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-md bg-primary text-white font-heading font-bold px-5 py-3 text-sm hover:bg-primary-slate transition-colors"
            style={{ transitionDuration: 'var(--motion-duration)' }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
