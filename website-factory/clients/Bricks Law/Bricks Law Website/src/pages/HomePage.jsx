import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildLegalServiceSchema, buildFaqPage } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import StatsBar from '../components/StatsBar.jsx';
import DirectLineBand from '../components/DirectLineBand.jsx';
import RiskRemovalBand from '../components/RiskRemovalBand.jsx';
import PracticeAreasThree from '../components/PracticeAreasThree.jsx';
import AttorneyProfile from '../components/AttorneyProfile.jsx';
import Testimonials from '../components/Testimonials.jsx';
import VideosBand from '../components/VideosBand.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function HomePage() {
  return (
    <>
      <SEO
        title={brandDNA.meta.title}
        description={brandDNA.meta.description}
        path="/"
        jsonLd={[buildLegalServiceSchema(), buildFaqPage(brandDNA.faq)]}
      />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <DirectLineBand />
        <RiskRemovalBand />
        <PracticeAreasThree />
        <AttorneyProfile />
        <Testimonials />
        <VideosBand />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
