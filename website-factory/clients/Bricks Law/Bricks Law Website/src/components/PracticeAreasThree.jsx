import { brandDNA } from '../config/brand-dna.js';

const ICONS = {
  'Personal Injury': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.833 5.083 8.5 4 6 4a9.04 9.04 0 00-1.5.126M12 6.253C13.167 5.083 15.5 4 18 4c.514 0 1.017.042 1.5.126M12 19.253C10.833 20.423 8.5 21.5 6 21.5c-.514 0-1.017-.042-1.5-.126M12 19.253C13.167 20.423 15.5 21.5 18 21.5c.514 0 1.017-.042 1.5-.126M3.75 6.379C3.278 6.573 2.832 6.82 2.42 7.117M3.75 6.379V18.5M3.75 6.379c.47-.193.96-.35 1.5-.44M20.25 6.379c.472.194.918.441 1.33.738M20.25 6.379V18.5M20.25 6.379a8.997 8.997 0 00-1.5-.44" />
    </svg>
  ),
  'Bankruptcy': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  'Mediation': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
};

export default function PracticeAreasThree() {
  const areas = brandDNA.practiceAreas || [];

  if (areas.length === 0) return null;

  const lead = areas.find((a) => a.name === 'Personal Injury') || areas[0];
  const secondary = areas.filter((a) => a !== lead);

  return (
    <section id="practice-areas" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
            Practice Areas
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            How Peter Bricks Can Help
          </h2>
        </div>

        {/* Lead: Personal Injury, full-width feature */}
        <div className="rounded-xl border border-primary bg-primary text-white p-8 md:p-10 mb-6">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-accent mb-5 flex-shrink-0">
            {ICONS[lead.name] || null}
          </div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            {lead.name}
          </h3>

          <p className="text-silver text-base leading-relaxed mb-5 max-w-prose">
            {lead.description}
          </p>

          {lead.subTypes && lead.subTypes.length > 0 ? (
            <ul className="flex flex-wrap gap-3 mb-5">
              {lead.subTypes.map((sub) => (
                <li
                  key={sub}
                  className="text-sm text-white border border-white/30 rounded-full px-3 py-1"
                >
                  {sub}
                </li>
              ))}
            </ul>
          ) : null}

          {lead.badge ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              {lead.badge}
            </p>
          ) : null}
        </div>

        {/* Secondary: Bankruptcy, Mediation, smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((area) => (
            <div
              key={area.name}
              className="rounded-xl border border-silver bg-white p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-3 flex-shrink-0"
                style={{ background: 'rgba(27,78,60,0.08)' }}
              >
                {ICONS[area.name] || null}
              </div>

              <h3 className="font-heading text-lg font-bold text-ink mb-2">
                {area.name}
              </h3>

              <p className="text-neutral text-sm leading-relaxed mb-3 flex-1">
                {area.description}
              </p>

              {area.subTypes && area.subTypes.length > 0 ? (
                <ul className="border-t border-silver pt-3 mt-auto space-y-1">
                  {area.subTypes.map((sub) => (
                    <li key={sub} className="text-sm text-neutral flex items-start gap-2">
                      <span className="text-accent font-bold text-xs mt-1 flex-shrink-0">+</span>
                      {sub}
                    </li>
                  ))}
                </ul>
              ) : null}

              {area.badge ? (
                <p className="mt-3 text-xs font-bold uppercase tracking-eyebrow text-primary border-t border-silver pt-3">
                  {area.badge}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
