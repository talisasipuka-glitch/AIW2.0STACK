import { brandDNA } from '../config/brand-dna.js';

export const SITE_URL = (brandDNA.company.url || '').replace(/\/$/, '');

function buildAddress() {
  const address = brandDNA.address || {};
  return {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.zip,
    addressCountry: address.country || 'US',
  };
}

function buildOpeningHours() {
  const weekday = brandDNA.hours?.weekday;
  if (!weekday) return undefined;
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: weekday.open,
      closes: weekday.close,
    },
  ];
}

function buildReviews() {
  const items = brandDNA.reviews?.items;
  if (!items || items.length === 0) return undefined;
  return items.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
  }));
}

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
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function buildLegalServiceSchema() {
  const founder = brandDNA.team?.founder;
  const people = founder
    ? [
        {
          '@type': 'Attorney',
          name: founder.name,
          hasCredential: brandDNA.company.licenseNumber
            ? {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Bar License',
                identifier: brandDNA.company.licenseNumber,
              }
            : undefined,
        },
      ]
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: brandDNA.company.name,
    url: SITE_URL,
    telephone: brandDNA.company.phone,
    email: brandDNA.company.email,
    description: brandDNA.company.description,
    areaServed: brandDNA.serviceAreas,
    address: buildAddress(),
    openingHoursSpecification: buildOpeningHours(),
    founder: people,
    employee: people,
    review: buildReviews(),
  };
}

export function buildCaseTypeLegalServiceSchema(service, detail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${service.name} Lawyer`,
    url: `${SITE_URL}/case-types/${service.slug}`,
    provider: {
      '@type': 'Attorney',
      name: brandDNA.team?.founder?.name,
    },
    areaServed: brandDNA.serviceAreas,
    description: detail?.description || service.body,
  };
}

export function buildArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: brandDNA.team?.founder?.name },
    publisher: { '@type': 'Organization', name: brandDNA.company.name },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
