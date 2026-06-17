import { Link } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';

/**
 * PracticeAreasGrid — 4-col (desktop) / 2-col (tablet) / 1-col (mobile)
 * card grid, one card per case type. Each card: case type name, dollar
 * result, one-line description, links to /case-types/{slug}.
 */
export default function PracticeAreasGrid() {
  const services = brandDNA.services || [];
  const serviceItems = brandDNA.pages?.services?.items;
  const itemsBySlug = serviceItems && !Array.isArray(serviceItems) ? serviceItems : {};

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="service-area" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          {brandDNA.copy.services?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.services.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            {brandDNA.copy.services?.heading}
          </h2>
          {brandDNA.copy.services?.body ? (
            <p className="text-neutral-dim mt-2 max-w-prose mx-auto">
              {brandDNA.copy.services.body}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const detail = itemsBySlug[service.slug];
            const figure = detail?.settlementFigure;
            const description = detail?.body || service.body;

            return (
              <Link
                key={service.slug}
                to={`/case-types/${service.slug}`}
                className="group block rounded-lg border border-silver bg-white p-5 shadow-card hover:shadow-card-lg transition-shadow"
                style={{ transitionDuration: 'var(--motion-duration)' }}
              >
                <h3 className="font-heading text-lg font-bold text-ink mb-2 group-hover:text-accent-dark transition-colors">
                  {service.name}
                </h3>
                {figure ? (
                  <p className="font-heading text-2xl font-extrabold text-accent-dark tabular-nums mb-2">
                    {figure}
                  </p>
                ) : null}
                {description ? (
                  <p className="text-sm text-neutral-dim line-clamp-3">{description}</p>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
