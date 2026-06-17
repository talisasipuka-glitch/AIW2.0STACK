import { useState } from 'react';
import { brandDNA } from '../config/brand-dna.js';

/**
 * LeadForm — CRO-locked at exactly 4 fields: name, phone, email, case
 * description. Never add a 5th field. `variant` controls visual context
 * only (hero / footer / page); the field set never changes.
 */
export default function LeadForm({ variant = 'page' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const submitLabel =
    brandDNA.copy.submitButton || brandDNA.copy.buttonText || 'Submit';

  const isHero = variant === 'hero';
  const isFooter = variant === 'footer';

  const wrapperClasses = isFooter
    ? 'bg-primary-dark text-white rounded-xl p-6 md:p-8'
    : isHero
      ? 'bg-white text-ink rounded-xl shadow-floating p-6 md:p-8'
      : 'bg-white text-ink rounded-xl shadow-card-lg p-6 md:p-8 border border-silver';

  const labelClasses = isFooter ? 'text-silver' : 'text-neutral-dim';
  const inputClasses = isFooter
    ? 'w-full rounded-md border border-primary-slate bg-primary text-white placeholder:text-neutral px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent transition'
    : 'w-full rounded-md border border-silver bg-white text-ink placeholder:text-neutral px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent transition';

  if (submitted) {
    return (
      <div className={wrapperClasses} data-variant={variant}>
        <h3 className="font-heading text-xl font-bold mb-2">
          {brandDNA.copy.formHeader}
        </h3>
        <p className={labelClasses}>
          Thank you. Your case details have been received. Our team will call
          you back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={wrapperClasses} data-variant={variant}>
      <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
        {brandDNA.copy.formHeader}
      </h3>
      <p className={`text-sm mb-5 ${labelClasses}`}>
        {brandDNA.copy.formSubtext}
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-3"
        style={{ transitionDuration: 'var(--motion-duration)' }}
      >
        <div>
          <label htmlFor={`name-${variant}`} className="sr-only">
            Full name
          </label>
          <input
            id={`name-${variant}`}
            name="name"
            type="text"
            placeholder="Full name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`phone-${variant}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`phone-${variant}`}
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
            className={`${inputClasses} tabular-nums`}
          />
        </div>
        <div>
          <label htmlFor={`email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            placeholder="Email address"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`case-${variant}`} className="sr-only">
            Briefly describe what happened
          </label>
          <textarea
            id={`case-${variant}`}
            name="case"
            rows={3}
            placeholder="Briefly describe what happened"
            required
            className={`${inputClasses} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-accent text-ink font-heading font-bold py-3 text-base hover:bg-accent-light transition-colors"
          style={{ transitionDuration: 'var(--motion-duration)' }}
        >
          {submitLabel}
        </button>
        {brandDNA.copy.privacyLine ? (
          <p className={`text-xs ${labelClasses}`}>
            {brandDNA.copy.privacyLine}
          </p>
        ) : null}
      </form>
    </div>
  );
}
