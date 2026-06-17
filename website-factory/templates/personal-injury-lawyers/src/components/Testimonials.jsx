import { brandDNA } from '../config/brand-dna.js';

/**
 * Testimonials — 3-card grid (also works as the full-list grid on the
 * Testimonials page). Photo, name, case type, outcome where available.
 */
export default function Testimonials() {
  const items = brandDNA.reviews?.items || [];

  return (
    <section className="bg-silver/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          {brandDNA.copy.reviews?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.reviews.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            {brandDNA.copy.reviews?.heading}
          </h2>
          {brandDNA.copy.reviews?.body ? (
            <p className="text-neutral-dim mt-2 max-w-prose mx-auto">
              {brandDNA.copy.reviews.body}
            </p>
          ) : null}
          {brandDNA.reviews?.rating ? (
            <p className="font-heading font-bold text-ink mt-3 tabular-nums">
              {brandDNA.reviews.rating} / 5
              {brandDNA.reviews?.totalReviewCount
                ? ` from ${brandDNA.reviews.totalReviewCount} reviews`
                : ''}
            </p>
          ) : null}
          {brandDNA.copy.reviews?.summary ? (
            <p className="text-sm text-neutral-dim mt-1">{brandDNA.copy.reviews.summary}</p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <figure
                key={`${item.author || item.name || 'review'}-${index}`}
                className="bg-white rounded-lg p-6 shadow-card"
              >
                {item.rating ? (
                  <p className="text-accent-dark font-bold tabular-nums mb-2">
                    {item.rating} / 5
                  </p>
                ) : null}
                <blockquote className="text-ink mb-4">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-neutral-dim">
                  <span className="font-heading font-bold text-ink">
                    {item.author || item.name}
                  </span>
                  {item.source ? ` via ${item.source}` : ''}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-dim">
            Client reviews are on the way.
          </p>
        )}
      </div>
    </section>
  );
}
