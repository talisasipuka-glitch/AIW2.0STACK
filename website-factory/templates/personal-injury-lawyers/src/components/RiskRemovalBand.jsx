import { brandDNA } from '../config/brand-dna.js';

/**
 * RiskRemovalBand — thin full-width strip restating contingency + 24/7
 * availability from copy.trustClaims[].
 */
export default function RiskRemovalBand() {
  const claims = brandDNA.copy.trustClaims || [];

  if (claims.length === 0) {
    return null;
  }

  return (
    <section className="bg-accent text-ink">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm md:text-base font-heading font-bold">
          {claims.map((claim) => (
            <li key={claim}>{claim}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
