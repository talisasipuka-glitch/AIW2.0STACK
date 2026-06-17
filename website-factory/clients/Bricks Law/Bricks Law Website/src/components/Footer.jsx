import { Link } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';
import LeadForm from './LeadForm.jsx';

const SOCIAL_LINKS = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'youtube', label: 'YouTube' },
];

export default function Footer() {
  const hoursDisplay = brandDNA.hours.display || [];
  const socials = SOCIAL_LINKS.filter((s) => brandDNA.social?.[s.key]);

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-xl mx-auto mb-12">
          <LeadForm variant="footer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Hours</h4>
            <ul className="space-y-1 text-silver">
              {hoursDisplay.map((entry) => (
                <li key={entry.label} className="tabular-nums">
                  {entry.label}: {entry.value}
                </li>
              ))}
            </ul>
            {brandDNA.hours.emergencyBadge ? (
              <p className="mt-2 inline-flex items-center rounded-full bg-accent text-ink text-xs font-bold uppercase tracking-eyebrow px-3 py-1">
                {brandDNA.hours.emergencyBadge}
              </p>
            ) : null}
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-3">Practice Areas</h4>
            <ul className="space-y-1 text-silver">
              {(brandDNA.services || []).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/case-types/${service.slug}`}
                    className="hover:text-accent transition-colors"
                    style={{ transitionDuration: 'var(--motion-duration)' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-3">Firm</h4>
            <ul className="space-y-1 text-silver">
              <li>{brandDNA.address.full}</li>
              <li className="tabular-nums">{brandDNA.contact.phone}</li>
              <li>{brandDNA.contact.email}</li>
              {brandDNA.company.licenseNumber ? (
                <li>License #{brandDNA.company.licenseNumber}</li>
              ) : null}
            </ul>
            {socials.length > 0 ? (
              <ul className="flex gap-3 mt-3">
                {socials.map((social) => (
                  <li key={social.key}>
                    <a
                      href={brandDNA.social[social.key]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-silver hover:text-accent transition-colors"
                      style={{ transitionDuration: 'var(--motion-duration)' }}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="border-t border-primary-slate mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral">
          <p>{brandDNA.copy.copyright}</p>
          <p>{brandDNA.copy.footerCta}</p>
          {brandDNA.credit?.agency ? (
            brandDNA.credit.url ? (
              <a
                href={brandDNA.credit.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
                style={{ transitionDuration: 'var(--motion-duration)' }}
              >
                Site by {brandDNA.credit.agency}
              </a>
            ) : (
              <span>Site by {brandDNA.credit.agency}</span>
            )
          ) : null}
        </div>
      </div>
    </footer>
  );
}
