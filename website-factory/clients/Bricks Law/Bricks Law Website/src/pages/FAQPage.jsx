import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList, buildFaqPage } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTABand from '../components/CTABand.jsx';

export default function FAQPage() {
  return (
    <>
      <SEO
        title={`Frequently Asked Questions | ${brandDNA.company.name}`}
        description="Answers to the questions we hear most from injury victims and their families."
        path="/faq"
        jsonLd={[
          buildFaqPage(brandDNA.faq),
          buildBreadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />
      <Header />
      <main>
        <PageHero
          title="Frequently Asked Questions"
          intro="Answers to the questions we hear most from injury victims and their families."
        />
        <FAQSection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
