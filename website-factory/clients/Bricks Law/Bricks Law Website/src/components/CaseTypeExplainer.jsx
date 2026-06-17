/**
 * CaseTypeExplainer — 2-column (desktop) / stacked (mobile): "what to do"
 * + "what compensation covers". Body copy from
 * pages.services.items[slug].body.
 */
export default function CaseTypeExplainer({ detail, service }) {
  const body =
    detail?.body ||
    service?.body ||
    'Our attorneys review every detail of your accident and outline the steps to protect your claim and pursue full compensation.';

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="prose-narrow max-w-prose mx-auto text-ink space-y-4">
          {body.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
