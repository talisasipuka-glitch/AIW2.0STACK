import { brandDNA } from '../config/brand-dna.js';

/**
 * CaseTypeHero — centered, full-width band. H1 = case type + city + firm
 * name; settlement figure prominent, accent-yellow, tabular-nums.
 *
 * `slug` and `service` (the matching brandDNA.services[] entry) are
 * provided by CaseTypeLandingPage. `detail` is the matching
 * brandDNA.pages.services.items[slug] entry, or undefined.
 */
export default function CaseTypeHero({ service, detail }) {
  const city = brandDNA.address?.city;
  const caseTypeName = detail?.name || service?.name || 'Personal Injury';
  const figure = detail?.settlementFigure;

  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {brandDNA.corner_overlay ? (
        <div
          className="pointer-events-none absolute -left-24 -top-24 w-96 h-96"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%)',
            backgroundColor: brandDNA.palette.accent,
            opacity: brandDNA.corner_overlay.opacity ?? 0.08,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative mx-auto max-w-4xl px-4 md:px-6 py-14 md:py-20 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-display-tight tracking-display mb-4">
          {caseTypeName} Lawyer in {city} | {brandDNA.company.name}
        </h1>

        {figure ? (
          <p className="font-heading text-5xl md:text-6xl font-extrabold text-accent tabular-nums mt-6">
            {figure}
          </p>
        ) : null}
      </div>
    </section>
  );
}
