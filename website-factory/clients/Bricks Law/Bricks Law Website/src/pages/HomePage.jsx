import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildLegalServiceSchema, buildFaqPage } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import StatsBar from '../components/StatsBar.jsx';
import PressBand from '../components/PressBand.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import PracticeAreasGrid from '../components/PracticeAreasGrid.jsx';
import FounderStory from '../components/FounderStory.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTABand from '../components/CTABand.jsx';
import DirectLineBand from '../components/DirectLineBand.jsx';
import VideosBand from '../components/VideosBand.jsx';

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
        <ProcessSteps />
        <StatsBar />
        <PressBand />
        <WhyChooseUs />
        <PracticeAreasGrid />
        <FounderStory />
        <DirectLineBand />
        <VideosBand />
        <Testimonials />
        <FAQSection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
