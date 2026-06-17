import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const services = brandDNA.services || [];

  return (
    <header className="sticky top-0 z-50 bg-primary text-white border-b border-primary-slate">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-heading text-lg md:text-xl font-extrabold tracking-tight">
            {brandDNA.company.shortName || brandDNA.company.name}
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-body text-sm">
            <div
              className="relative"
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-accent transition-colors"
                style={{ transitionDuration: 'var(--motion-duration)' }}
                aria-haspopup="true"
                aria-expanded={practiceOpen}
              >
                Practice Areas
                <span aria-hidden="true">v</span>
              </button>
              {practiceOpen && services.length > 0 ? (
                <div className="absolute left-0 top-full mt-1 w-64 rounded-md bg-white text-ink shadow-floating py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/case-types/${service.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-silver transition-colors"
                      style={{ transitionDuration: 'var(--motion-duration)' }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`
                }
                style={{ transitionDuration: 'var(--motion-duration)' }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {brandDNA.hours.emergencyBadge ? (
              <span className="hidden md:inline-flex items-center rounded-full bg-accent text-ink text-xs font-bold uppercase tracking-eyebrow px-3 py-1">
                {brandDNA.hours.emergencyBadge}
              </span>
            ) : null}
            <a
              href={brandDNA.contact.phoneTelLink}
              className="inline-flex items-center rounded-md bg-accent text-ink font-heading font-bold px-3 md:px-4 py-2 text-sm md:text-base hover:bg-accent-light transition-colors tabular-nums"
              style={{ transitionDuration: 'var(--motion-duration)' }}
            >
              <span className="hidden sm:inline">{brandDNA.copy.topBar.cta}: </span>
              {brandDNA.contact.phone}
            </a>
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setNavOpen((open) => !open)}
              aria-label="Open navigation"
              aria-expanded={navOpen}
            >
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>

        {navOpen ? (
          <nav className="lg:hidden border-t border-primary-slate py-3 font-body text-sm">
            <p className="px-2 py-1 text-xs uppercase tracking-eyebrow text-neutral">
              Practice Areas
            </p>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/case-types/${service.slug}`}
                className="block px-2 py-2 hover:text-accent transition-colors"
                onClick={() => setNavOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <div className="border-t border-primary-slate my-2" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-2 py-2 hover:text-accent transition-colors"
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
