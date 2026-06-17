import { brandDNA } from '../config/brand-dna.js';

export default function AttorneyProfile() {
  const founder = brandDNA.team?.founder;
  const photo = brandDNA.team_group_photo;
  const profile = brandDNA.attorneyProfile || {};
  const copy = brandDNA.copy?.founder || {};

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">

        {/* Top: photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-12">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] w-full max-w-sm rounded-xl bg-silver/40 overflow-hidden flex items-center justify-center mx-auto lg:mx-0">
              {photo ? (
                <img
                  src={photo.startsWith('http') ? photo : `/team/${photo}`}
                  alt={founder?.displayName || 'Attorney Peter Bricks'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-neutral text-sm px-6 text-center">
                  {founder?.displayName || 'Attorney photo'}
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {copy.label || 'Attorney'}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-1">
              {copy.heading || founder?.name}
            </h2>
            {founder ? (
              <p className="text-neutral text-sm mb-5">
                {founder.title}
                {founder.yearsExp ? ` — ${founder.yearsExp} ${founder.expLabel || 'years of experience'}` : ''}
              </p>
            ) : null}

            <div className="space-y-4 text-ink text-base leading-relaxed">
              {copy.para1 ? <p>{copy.para1}</p> : null}
              {copy.para2 ? <p>{copy.para2}</p> : null}
            </div>

            {copy.vision || copy.mission ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {copy.vision ? (
                  <div className="rounded-lg bg-silver/30 p-4 border border-silver">
                    <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-1">
                      {copy.visionLabel || 'Why This Firm Exists'}
                    </p>
                    <p className="text-sm text-ink">{copy.vision}</p>
                  </div>
                ) : null}
                {copy.mission ? (
                  <div className="rounded-lg bg-silver/30 p-4 border border-silver">
                    <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-1">
                      {copy.missionLabel || 'How We Work'}
                    </p>
                    <p className="text-sm text-ink">{copy.mission}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* Bottom: education + admissions */}
        {(profile.education?.length > 0 || profile.admissions?.length > 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-silver pt-10">
            {profile.education?.length > 0 ? (
              <div>
                <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-4">
                  Education
                </p>
                <ul className="space-y-2">
                  {profile.education.map((item) => (
                    <li key={item} className="text-sm text-ink flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {profile.admissions?.length > 0 ? (
              <div>
                <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-4">
                  Bar Admissions and Credentials
                </p>
                <ul className="space-y-2">
                  {profile.admissions.map((item) => (
                    <li key={item} className="text-sm text-ink flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

      </div>
    </section>
  );
}
