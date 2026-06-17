import { brandDNA } from '../config/brand-dna.js';
import LeadForm from './LeadForm.jsx';

/**
 * Hero — split layout: copy + trust chips + LeadForm left/center, attorney
 * photo right (stacks on mobile, image first). Chevron corner overlay per
 * the niche shape motif, kept subtle.
 */
export default function Hero() {
  const chips = brandDNA.copy.heroTrustChips || [];
  const photo = brandDNA.team_group_photo;
  const founder = brandDNA.team?.founder;

  return (
    <section id="hero" className="relative bg-primary text-white overflow-hidden">
      {brandDNA.corner_overlay ? (
        <div
          className="pointer-events-none absolute -right-24 -top-24 w-96 h-96"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 40% 100%, 70% 50%, 40% 0)',
            backgroundColor: brandDNA.palette.accent,
            opacity: brandDNA.corner_overlay.opacity ?? 0.08,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          {chips.length > 0 ? (
            <ul className="flex flex-wrap gap-3 mb-4">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="text-xs font-bold uppercase tracking-eyebrow text-accent border border-accent/40 rounded-full px-3 py-1"
                >
                  {chip}
                </li>
              ))}
            </ul>
          ) : null}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-display-tight tracking-display mb-4">
            {brandDNA.copy.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-silver mb-8 max-w-prose">
            {brandDNA.copy.hero.subheadline}
          </p>

          <div className="max-w-md">
            <LeadForm variant="hero" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="aspect-[4/5] w-full rounded-xl bg-primary-slate overflow-hidden flex items-center justify-center">
            {photo ? (
              <img
                src={photo.startsWith('http') ? photo : `/team/${photo}`}
                alt={brandDNA.copy.hero.imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-silver text-sm px-6 text-center">
                {brandDNA.copy.hero.imageAlt || founder?.displayName || 'Attorney photo'}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
