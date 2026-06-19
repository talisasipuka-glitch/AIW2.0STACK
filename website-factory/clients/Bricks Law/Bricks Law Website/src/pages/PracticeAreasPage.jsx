import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import PracticeAreasGrid from '../components/PracticeAreasGrid.jsx';
import OtherPracticeAreas from '../components/OtherPracticeAreas.jsx';
import CTABand from '../components/CTABand.jsx';

export default function PracticeAreasPage() {
  return (
    <>
      <SEO
        title={`Practice Areas | ${brandDNA.company.name}`}
        description={brandDNA.copy.services.body}
        path="/practice-areas"
        jsonLd={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Practice Areas', path: '/practice-areas' },
        ])}
      />
      <Header />
      <main>
        <PageHero
          title="Practice Areas"
          intro="We represent injury victims across every major case type. Select your case below to see how we can help."
        />
        <PracticeAreasGrid />
        <OtherPracticeAreas />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
