import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';

const NAV_LINKS = [
  { to: '/about', label: 'Attorney' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const YOUTUBE_URL = 'https://www.youtube.com/@PeterBricksPC';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const services = brandDNA.services || [];

  return (
    <header className="sticky top-0 z-50 bg-primary text-white">
      {/* Utility bar */}
      <div className="bg-primary-dark border-b border-primary-slate/50 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            {brandDNA.social?.facebook ? (
              <a href={brandDNA.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-silver/60 hover:text-silver transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            ) : null}
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-silver/60 hover:text-silver transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
            </a>
            {brandDNA.social?.linkedin ? (
              <a href={brandDNA.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-silver/60 hover:text-silver transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            ) : null}
          </div>
          <div className="flex items-center gap-5 text-xs text-silver/70">
            <a href={brandDNA.contact.phoneTelLink} className="hover:text-silver transition-colors tabular-nums" style={{ transitionDuration: 'var(--motion-duration)' }}>
              {brandDNA.contact.phone}
            </a>
            <a href={`mailto:${brandDNA.contact.email}`} className="hover:text-silver transition-colors" style={{ transitionDuration: 'var(--motion-duration)' }}>
              {brandDNA.contact.email}
            </a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="border-b border-primary-slate">
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
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              style={{ transitionDuration: 'var(--motion-duration)' }}
            >
              Videos
            </a>
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
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-2 hover:text-accent transition-colors"
              onClick={() => setNavOpen(false)}
            >
              Videos
            </a>
          </nav>
        ) : null}
      </div>
      </div>
    </header>
  );
}
