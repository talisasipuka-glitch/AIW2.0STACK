import { brandDNA } from '../config/brand-dna.js';

/**
 * FounderStory — image left, copy right (reverses on mobile: image first).
 * Named attorney photo + 2-paragraph origin story.
 */
export default function FounderStory() {
  const founder = brandDNA.team?.founder;
  const photo = brandDNA.team_group_photo;

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-1">
          <div className="aspect-square w-full max-w-md rounded-xl bg-silver/40 overflow-hidden flex items-center justify-center mx-auto lg:mx-0">
            {photo ? (
              <img
                src={`/team/${photo}`}
                alt={founder?.displayName || 'Founding attorney'}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-neutral-dim text-sm px-6 text-center">
                {founder?.displayName || 'Attorney photo'}
              </span>
            )}
          </div>
        </div>

        <div className="order-2">
          {brandDNA.copy.founder?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.founder.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-1">
            {brandDNA.copy.founder?.heading}
          </h2>
          {founder ? (
            <p className="text-neutral-dim mb-4">
              {founder.displayName}
              {founder.title ? `, ${founder.title}` : ''}
              {founder.yearsExp ? ` — ${founder.yearsExp} ${founder.expLabel || ''}`.trim() : ''}
            </p>
          ) : null}

          <div className="space-y-4 text-ink max-w-prose">
            {brandDNA.copy.founder?.para1 ? <p>{brandDNA.copy.founder.para1}</p> : null}
            {brandDNA.copy.founder?.para2 ? <p>{brandDNA.copy.founder.para2}</p> : null}
          </div>

          {brandDNA.copy.founder?.vision || brandDNA.copy.founder?.mission ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {brandDNA.copy.founder?.vision ? (
                <div className="rounded-lg bg-silver/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-1">
                    {brandDNA.copy.founder.visionLabel}
                  </p>
                  <p className="text-sm text-ink">{brandDNA.copy.founder.vision}</p>
                </div>
              ) : null}
              {brandDNA.copy.founder?.mission ? (
                <div className="rounded-lg bg-silver/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-1">
                    {brandDNA.copy.founder.missionLabel}
                  </p>
                  <p className="text-sm text-ink">{brandDNA.copy.founder.mission}</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
