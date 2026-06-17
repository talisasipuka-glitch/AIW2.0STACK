import { brandDNA } from '../config/brand-dna.js';
import LeadForm from './LeadForm.jsx';

const YOUTUBE_URL = 'https://www.youtube.com/@PeterBricksPC';

export default function ContactSection() {
  const hours = brandDNA.hours?.display || [];
  const address = brandDNA.address;

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-eyebrow text-accent mb-2">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Contact Bricks Law
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact details */}
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-eyebrow text-silver/60 mb-2">Phone</p>
                <a
                  href={brandDNA.contact.phoneTelLink}
                  className="font-heading text-2xl font-bold text-white hover:text-accent transition-colors tabular-nums"
                  style={{ transitionDuration: 'var(--motion-duration)' }}
                >
                  {brandDNA.contact.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-eyebrow text-silver/60 mb-2">Email</p>
                <a
                  href={`mailto:${brandDNA.contact.email}`}
                  className="text-white hover:text-accent transition-colors"
                  style={{ transitionDuration: 'var(--motion-duration)' }}
                >
                  {brandDNA.contact.email}
                </a>
              </div>

              {address?.full ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-eyebrow text-silver/60 mb-2">Address</p>
                  <p className="text-white">{address.full}</p>
                </div>
              ) : null}

              {hours.length > 0 ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-eyebrow text-silver/60 mb-2">Hours</p>
                  <ul className="space-y-1">
                    {hours.map((h) => (
                      <li key={h.label} className="text-sm flex gap-3">
                        <span className="text-silver/60 w-32 flex-shrink-0">{h.label}</span>
                        <span className="text-white tabular-nums">{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Social links */}
              <div>
                <p className="text-xs font-bold uppercase tracking-eyebrow text-silver/60 mb-3">Follow</p>
                <div className="flex items-center gap-4">
                  {brandDNA.social?.facebook ? (
                    <a href={brandDNA.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                      className="text-silver/60 hover:text-white transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                    </a>
                  ) : null}
                  <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                    className="text-silver/60 hover:text-white transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                  </a>
                  {brandDNA.social?.linkedin ? (
                    <a href={brandDNA.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                      className="text-silver/60 hover:text-white transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Lead form */}
          <div>
            <LeadForm variant="footer" />
          </div>
        </div>

        {/* Service area note */}
        <div className="mt-10 pt-8 border-t border-primary-slate">
          <p className="text-sm text-silver/60 max-w-3xl">
            {brandDNA.copy?.serviceAreaCard?.heading
              ? <strong className="text-silver/80">{brandDNA.copy.serviceAreaCard.heading}. </strong>
              : null}
            {brandDNA.copy?.serviceAreaCard?.body}
          </p>
          {brandDNA.copy?.privacyLine ? (
            <p className="text-xs text-silver/40 mt-3">{brandDNA.copy.privacyLine}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
