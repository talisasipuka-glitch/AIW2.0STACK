import { brandDNA } from '../config/brand-dna.js';

/**
 * PressBand — full-width logo strip. Falls back to trust_badges[] when
 * press_logos[] is empty. Renders nothing if both are empty.
 */
export default function PressBand() {
  const pressLogos = brandDNA.press_logos || [];
  const trustBadges = brandDNA.trust_badges || [];
  const logos = pressLogos.length > 0 ? pressLogos : trustBadges;

  if (logos.length === 0) {
    return null;
  }

  return (
    <section className="bg-white border-y border-silver">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <img
              key={logo.filename}
              src={`/badges/${logo.filename}`}
              alt={logo.alt}
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
