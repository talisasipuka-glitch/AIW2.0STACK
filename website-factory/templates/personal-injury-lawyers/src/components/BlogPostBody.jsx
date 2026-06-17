/**
 * BlogPostBody — single-column prose, max-width ~720px. Renders typed
 * content blocks (`p`, `h2`, `list`) or a markdown-ish `.body` string
 * split into paragraphs.
 */
export default function BlogPostBody({ post }) {
  if (!post) {
    return null;
  }

  const blocks = post.content;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="prose-narrow text-ink space-y-4">
          {Array.isArray(blocks) && blocks.length > 0 ? (
            blocks.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={index} className="font-heading text-2xl font-bold mt-6 mb-2">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-1">
                    {(block.items || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })
          ) : post.body ? (
            post.body.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>This article is being written.</p>
          )}
        </div>
      </div>
    </section>
  );
}
