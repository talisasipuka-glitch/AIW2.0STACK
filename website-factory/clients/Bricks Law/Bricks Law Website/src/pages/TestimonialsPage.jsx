import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABand from '../components/CTABand.jsx';

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title={`Client Reviews | ${brandDNA.company.name}`}
        description={brandDNA.copy.reviews.summary}
        path="/testimonials"
        jsonLd={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Client Reviews', path: '/testimonials' },
        ])}
      />
      <Header />
      <main>
        <PageHero
          title="Client Reviews"
          intro={`See what our clients say about working with ${brandDNA.company.name}.`}
        />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
