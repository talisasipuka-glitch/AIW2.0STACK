import { useParams, Link } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList, buildArticleSchema } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BlogPostHeader from '../components/BlogPostHeader.jsx';
import BlogPostBody from '../components/BlogPostBody.jsx';
import CTABand from '../components/CTABand.jsx';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = (brandDNA.blog_posts || []).find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <SEO
          title="Article Not Found"
          description="This article does not exist or has been moved."
          path={`/blog/${slug}`}
          noindex
        />
        <Header />
        <main>
          <section className="bg-white">
            <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 text-center">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">
                Article not found
              </h1>
              <p className="text-neutral-dim mb-6">
                This article does not exist or has been moved.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center rounded-md bg-accent text-ink font-heading font-bold px-6 py-3 text-base hover:bg-accent-light transition-colors"
                style={{ transitionDuration: 'var(--motion-duration)' }}
              >
                Back to blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | ${brandDNA.company.shortName}`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={[
          buildArticleSchema(post),
          buildBreadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <BlogPostHeader post={post} />
        <BlogPostBody post={post} />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
