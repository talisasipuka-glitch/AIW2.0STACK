/**
 * BlogPostHeader — full-width cover image, overlay title, date, category,
 * read time.
 */
export default function BlogPostHeader({ post }) {
  if (!post) {
    return null;
  }

  return (
    <section className="relative bg-ink text-white">
      <div className="aspect-[16/7] w-full bg-primary-slate overflow-hidden flex items-end">
        {post.cover ? (
          <img
            src={`/blog/${post.cover}`}
            alt={post.title}
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : null}
        <div className="relative w-full bg-gradient-to-t from-ink/90 to-transparent px-4 md:px-6 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            {post.category ? (
              <p className="text-xs font-bold uppercase tracking-eyebrow text-accent mb-2">
                {post.category}
              </p>
            ) : null}
            <h1 className="font-heading text-2xl md:text-4xl font-extrabold leading-display-tight tracking-display mb-2">
              {post.title}
            </h1>
            <p className="text-sm text-silver tabular-nums">
              {post.date}
              {post.readTime ? ` · ${post.readTime}` : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
