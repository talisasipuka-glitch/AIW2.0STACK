import { brandDNA } from '../config/brand-dna.js';
import { useCountUp } from '../hooks/useCountUp.js';

/**
 * StatFigure — single settlement figure with a count-up animation that
 * fires the first time it scrolls into view.
 */
function StatFigure({ value, label, isSingle }) {
  const [display, ref] = useCountUp(value);

  return (
    <div ref={ref} className={isSingle ? 'text-center' : 'text-center md:text-left'}>
      <p
        className={`font-heading font-extrabold text-accent tabular-nums ${
          isSingle ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'
        }`}
      >
        {display}
      </p>
      <p className="text-silver text-sm md:text-base mt-1">{label}</p>
    </div>
  );
}

/**
 * StatsBar — horizontal grid of settlement dollar figures.
 *
 * `figures` prop: optional array of { label, value } to render directly
 * (used by case-type pages for the single-figure variant). If omitted,
 * falls back to `brandDNA.pages.services.items[]` settlement figures, then
 * to a generic placeholder grid built from `brandDNA.services[]`.
 */
export default function StatsBar({ figures }) {
  let items = figures;

  if (!items || items.length === 0) {
    const serviceItems = brandDNA.pages?.services?.items;
    const list = Array.isArray(serviceItems) ? serviceItems : Object.values(serviceItems || {});
    if (list.length > 0) {
      items = list
        .filter((item) => item && item.settlementFigure)
        .map((item) => ({ label: item.name, value: item.settlementFigure }));
    }
  }

  if (!items || items.length === 0) {
    items = (brandDNA.services || []).map((service) => ({
      label: service.name,
      value: '$--',
    }));
  }

  const isSingle = items.length === 1;

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
        <div
          className={
            isSingle
              ? 'flex justify-center'
              : 'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto'
          }
        >
          {items.map((item) => (
            <StatFigure key={item.label} value={item.value} label={item.label} isSingle={isSingle} />
          ))}
        </div>
      </div>
    </section>
  );
}
