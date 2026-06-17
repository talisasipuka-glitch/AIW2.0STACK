import { brandDNA } from '../config/brand-dna.js';

/**
 * CTABand — full-width band, accent-yellow background, centered copy +
 * button. Final conversion push before the footer. Chevron motif accent
 * kept subtle.
 */
export default function CTABand() {
  return (
    <section className="relative bg-accent text-ink overflow-hidden">
      {brandDNA.corner_overlay ? (
        <div
          className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 40% 100%, 70% 50%, 40% 0)',
            backgroundColor: brandDNA.palette.ink,
            opacity: (brandDNA.corner_overlay.opacity ?? 0.08) * 1.5,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16 text-center">
        {brandDNA.copy.cta?.label ? (
          <p className="text-xs font-bold uppercase tracking-eyebrow mb-2">
            {brandDNA.copy.cta.label}
          </p>
        ) : null}
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">
          {brandDNA.copy.cta?.heading}
        </h2>
        {brandDNA.copy.cta?.body ? (
          <p className="text-base md:text-lg mb-6 max-w-prose mx-auto">
            {brandDNA.copy.cta.body}
          </p>
        ) : null}
        <a
          href={brandDNA.contact.phoneTelLink}
          className="inline-flex items-center rounded-md bg-ink text-white font-heading font-bold px-6 py-3 text-base hover:bg-primary-slate transition-colors tabular-nums"
          style={{ transitionDuration: 'var(--motion-duration)' }}
        >
          {brandDNA.copy.buttonText}: {brandDNA.contact.phone}
        </a>
      </div>
    </section>
  );
}
