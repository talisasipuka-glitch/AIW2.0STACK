import { brandDNA } from '../config/brand-dna.js';

/**
 * WhyChooseUs — 2x2 (desktop) / 1-col (mobile) bullet grid with chevron
 * icon accents. Risk-removal framing.
 */
export default function WhyChooseUs() {
  const bullets = brandDNA.why_choose_us || [];

  if (bullets.length === 0) {
    return null;
  }

  return (
    <section className="bg-silver/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          {brandDNA.copy.whyChoose?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.whyChoose.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            {brandDNA.copy.whyChoose?.heading}
          </h2>
          {brandDNA.copy.whyChoose?.body ? (
            <p className="text-neutral-dim mt-2 max-w-prose mx-auto">
              {brandDNA.copy.whyChoose.body}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-card">
              <span
                className="mt-1 flex-shrink-0 w-4 h-4 bg-accent"
                style={{ clipPath: 'polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)' }}
                aria-hidden="true"
              />
              <p className="font-heading font-semibold text-ink">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
