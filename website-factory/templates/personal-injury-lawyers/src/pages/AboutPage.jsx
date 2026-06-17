import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import FounderStory from '../components/FounderStory.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABand from '../components/CTABand.jsx';

export default function AboutPage() {
  return (
    <>
      <SEO
        title={`About ${brandDNA.team.founder.name} | ${brandDNA.company.name}`}
        description={brandDNA.pages.about.storyClosing}
        path="/about"
        jsonLd={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <Header />
      <main>
        <PageHero
          title={`About ${brandDNA.company.name}`}
          intro={brandDNA.company.description}
        />
        <FounderStory />
        <WhyChooseUs />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
