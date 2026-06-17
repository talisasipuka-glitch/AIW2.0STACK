import { useState } from 'react';
import { brandDNA } from '../config/brand-dna.js';

/**
 * FAQSection — accordion. Renders brandDNA.faq[] by default; an `items`
 * prop override lets case-type pages pass case-type-specific FAQs.
 */
export default function FAQSection({ items }) {
  const faqs = items || brandDNA.faq || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          {brandDNA.copy.faq?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.faq.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            {brandDNA.copy.faq?.heading}
          </h2>
        </div>

        <dl className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border border-silver rounded-lg overflow-hidden">
                <dt>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-heading font-semibold text-ink"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.q}
                    <span aria-hidden="true" className="text-accent-dark">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                </dt>
                {isOpen ? (
                  <dd className="px-5 pb-4 text-neutral-dim">{item.a}</dd>
                ) : null}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
