import { brandDNA } from '../config/brand-dna.js';

export const SITE_URL = (brandDNA.company.url || '').replace(/\/$/, '');

export function buildBreadcrumbList(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildFaqPage(faqItems) {
  if (!faqItems || faqItems.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

function buildAddress() {
  const addr = brandDNA.address;
  return {
    '@type': 'PostalAddress',
    streetAddress: addr.street,
    addressLocality: addr.city,
    addressRegion: addr.state,
    postalCode: addr.zip,
    addressCountry: 'US',
  };
}

function buildOpeningHours() {
  const weekday = brandDNA.hours?.weekday;
  if (!weekday) return undefined;
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: weekday.dayOfWeek,
      opens: weekday.opens,
      closes: weekday.closes,
    },
  ];
}

function buildReviews() {
  const items = brandDNA.reviews?.items;
  if (!items || items.length === 0) return undefined;
  return items.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  }));
}

/**
 * Homepage / firm-wide LegalService + Attorney schema, per the
 * personal-injury-lawyers niche SOP for Stage 10.2.
 */
export function buildLegalServiceSchema() {
  const company = brandDNA.company;
  const founder = brandDNA.team.founder;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: company.name,
    url: SITE_URL,
    telephone: brandDNA.contact.phoneTelLink,
    email: brandDNA.contact.email,
    description: company.tagline,
    areaServed: brandDNA.serviceAreas,
    address: buildAddress(),
    founder: {
      '@type': 'Attorney',
      name: founder.name,
      jobTitle: founder.title,
    },
    employee: {
      '@type': 'Attorney',
      name: founder.name,
      jobTitle: founder.title,
    },
  };

  if (company.licenseNumber) {
    schema.hasCredential = {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: company.licenseNumber,
    };
  }

  const openingHours = buildOpeningHours();
  if (openingHours) schema.openingHoursSpecification = openingHours;

  const reviews = buildReviews();
  if (reviews) schema.review = reviews;

  return schema;
}

/**
 * Case-type page LegalService schema, scoped to one practice area.
 */
export function buildCaseTypeLegalServiceSchema(service, detail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${service.name} Lawyer`,
    url: `${SITE_URL}/case-types/${service.slug}`,
    provider: {
      '@type': 'Attorney',
      name: brandDNA.team.founder.name,
    },
    areaServed: brandDNA.serviceAreas,
    description: detail?.description || service.body,
  };
}

/**
 * Blog post Article schema.
 */
export function buildArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: brandDNA.team.founder.name,
    },
    publisher: {
      '@type': 'Organization',
      name: brandDNA.company.name,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
