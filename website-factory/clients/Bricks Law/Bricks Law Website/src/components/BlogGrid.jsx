import { Link } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';

/**
 * BlogGrid — cards: cover, title, excerpt, date, category.
 */
export default function BlogGrid() {
  const posts = brandDNA.blog_posts || [];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg">
        <div className="text-center mb-10">
          {brandDNA.copy.blog?.label ? (
            <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-2">
              {brandDNA.copy.blog.label}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            {brandDNA.copy.blog?.heading}
          </h2>
          {brandDNA.copy.blog?.body ? (
            <p className="text-neutral-dim mt-2 max-w-prose mx-auto">
              {brandDNA.copy.blog.body}
            </p>
          ) : null}
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-lg border border-silver bg-white overflow-hidden shadow-card hover:shadow-card-lg transition-shadow"
                style={{ transitionDuration: 'var(--motion-duration)' }}
              >
                <div className="aspect-video bg-silver/40 flex items-center justify-center overflow-hidden">
                  {post.cover ? (
                    <img
                      src={`/blog/${post.cover}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-neutral-dim text-sm">{post.title}</span>
                  )}
                </div>
                <div className="p-5">
                  {post.category ? (
                    <p className="text-xs font-bold uppercase tracking-eyebrow text-accent-dark mb-1">
                      {post.category}
                    </p>
                  ) : null}
                  <h3 className="font-heading text-lg font-bold text-ink mb-1 group-hover:text-accent-dark transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt ? (
                    <p className="text-sm text-neutral-dim line-clamp-3 mb-2">{post.excerpt}</p>
                  ) : null}
                  <p className="text-xs text-neutral-dim">
                    {post.date}
                    {post.readTime ? ` · ${post.readTime}` : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-dim">
            New articles are on the way.
          </p>
        )}
      </div>
    </section>
  );
}
