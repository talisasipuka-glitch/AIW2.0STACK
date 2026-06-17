import { brandDNA } from '../config/brand-dna.js';

/**
 * ProcessSteps — 3-column on desktop, stacked on mobile, numbered badges.
 * Placed directly below the hero, before any stats.
 */
export default function ProcessSteps() {
  const steps = brandDNA.process_steps || [];

  const fallbackSteps = [
    { n: 1, title: 'Submit your case', body: 'Tell us what happened in a few minutes.' },
    { n: 2, title: 'We investigate', body: 'Our team reviews the facts and builds your case.' },
    { n: 3, title: 'We fight for you', body: 'We negotiate or go to trial to get you paid.' },
  ];

  const items = steps.length > 0 ? steps : fallbackSteps;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        {brandDNA.copy.process?.heading ? (
          <div className="text-center mb-10">
            {brandDNA.copy.process?.label ? (
              <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
                {brandDNA.copy.process.label}
              </p>
            ) : null}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
              {brandDNA.copy.process.heading}
            </h2>
            {brandDNA.copy.process?.body ? (
              <p className="text-neutral-dim mt-2 max-w-prose mx-auto">
                {brandDNA.copy.process.body}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((step) => (
            <div key={step.n} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-ink font-heading font-extrabold text-xl tabular-nums mb-4">
                {step.n}
              </div>
              <h3 className="font-heading text-xl font-bold text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-dim">{step.body}</p>
            </div>
          ))}
        </div>

        {brandDNA.copy.process?.badgeText ? (
          <div className="mt-10 text-center">
            <span className="inline-flex flex-col items-center rounded-md bg-silver/40 px-6 py-3">
              <span className="font-heading font-bold text-ink">
                {brandDNA.copy.process.badgeText}
              </span>
              {brandDNA.copy.process?.badgeSubtext ? (
                <span className="text-sm text-neutral-dim">
                  {brandDNA.copy.process.badgeSubtext}
                </span>
              ) : null}
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
