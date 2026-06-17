import { SITE_URL } from '../lib/seo.js';

/**
 * Per-route meta tags + JSON-LD injection. React 19 hoists <title>,
 * <meta>, and <link> tags rendered anywhere in the tree into <head>
 * automatically, so no helmet library is needed. `jsonLd` may be a
 * single schema object or an array of schema objects.
 */
export default function SEO({ title, description, path = '/', jsonLd, noindex = false }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : jsonLd ? [jsonLd] : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
}
