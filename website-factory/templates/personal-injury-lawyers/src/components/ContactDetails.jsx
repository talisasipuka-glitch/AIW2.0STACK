import { brandDNA } from '../config/brand-dna.js';

/**
 * ContactDetails — address, phone, hours, map. Paired with LeadForm
 * variant="page" on the Contact page.
 */
export default function ContactDetails() {
  const hoursDisplay = brandDNA.hours.display || [];

  return (
    <div className="bg-white rounded-lg border border-silver p-6 md:p-8 space-y-6">
      <div>
        <h3 className="font-heading text-lg font-bold text-ink mb-2">Address</h3>
        <p className="text-neutral-dim">{brandDNA.address.full}</p>
        {brandDNA.contact.googleMapsUrl ? (
          <a
            href={brandDNA.contact.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-accent-dark font-semibold hover:underline"
          >
            Get directions
          </a>
        ) : null}
      </div>

      <div>
        <h3 className="font-heading text-lg font-bold text-ink mb-2">Phone</h3>
        <a
          href={brandDNA.contact.phoneTelLink}
          className="text-accent-dark font-heading font-bold text-xl tabular-nums hover:underline"
        >
          {brandDNA.contact.phone}
        </a>
      </div>

      <div>
        <h3 className="font-heading text-lg font-bold text-ink mb-2">Email</h3>
        <a href={`mailto:${brandDNA.contact.email}`} className="text-accent-dark font-semibold hover:underline">
          {brandDNA.contact.email}
        </a>
      </div>

      {hoursDisplay.length > 0 ? (
        <div>
          <h3 className="font-heading text-lg font-bold text-ink mb-2">Hours</h3>
          <ul className="space-y-1 text-neutral-dim">
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
      ) : null}

      {brandDNA.contact.mapsEmbedUrl ? (
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <iframe
            title="Office location map"
            src={brandDNA.contact.mapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  );
}
