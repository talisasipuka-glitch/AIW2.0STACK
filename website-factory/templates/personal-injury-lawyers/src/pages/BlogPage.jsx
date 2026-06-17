import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import BlogGrid from '../components/BlogGrid.jsx';

export default function BlogPage() {
  return (
    <>
      <SEO
        title={`${brandDNA.pages.blog.heading} | ${brandDNA.company.name}`}
        description={brandDNA.pages.blog.intro}
        path="/blog"
        jsonLd={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <Header />
      <main>
        <PageHero
          title="Injury Law Blog"
          intro="Guidance and updates from our legal team."
        />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
