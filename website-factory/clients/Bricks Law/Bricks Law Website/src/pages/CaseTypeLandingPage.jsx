import { useParams } from 'react-router-dom';
import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildCaseTypeLegalServiceSchema,
} from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CaseTypeHero from '../components/CaseTypeHero.jsx';
import RiskRemovalBand from '../components/RiskRemovalBand.jsx';
import StatsBar from '../components/StatsBar.jsx';
import CaseTypeExplainer from '../components/CaseTypeExplainer.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTABand from '../components/CTABand.jsx';
import LeadForm from '../components/LeadForm.jsx';

const CASE_TYPE_NAMES = {
  'car-accident': 'Car Accident',
  'truck-accident': 'Truck Accident',
  'motorcycle-accident': 'Motorcycle Accident',
  'slip-and-fall': 'Slip and Fall',
  'wrongful-death': 'Wrongful Death',
  'dog-bite': 'Dog Bite',
  'brain-injury': 'Brain Injury',
};

export default function CaseTypeLandingPage() {
  const { slug } = useParams();

  const service = (brandDNA.services || []).find((item) => item.slug === slug);

  const serviceItems = brandDNA.pages?.services?.items;
  const detail = Array.isArray(serviceItems)
    ? serviceItems.find((item) => item.slug === slug)
    : serviceItems?.[slug];

  const fallbackName = CASE_TYPE_NAMES[slug] || 'Personal Injury';
  const resolvedService = service || { slug, name: fallbackName };

  const figures = detail?.settlementFigure
    ? [{ label: detail.name || resolvedService.name, value: detail.settlementFigure }]
    : undefined;

  const faqItems = detail?.faq && detail.faq.length > 0 ? detail.faq : undefined;

  const city = brandDNA.address.city;

  return (
    <>
      <SEO
        title={`${resolvedService.name} Lawyer in ${city} | ${brandDNA.company.shortName}`}
        description={detail?.description || resolvedService.body || brandDNA.meta.description}
        path={`/case-types/${slug}`}
        jsonLd={[
          buildCaseTypeLegalServiceSchema(resolvedService, detail),
          buildFaqPage(faqItems),
          buildBreadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Practice Areas', path: '/practice-areas' },
            { name: resolvedService.name, path: `/case-types/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <CaseTypeHero service={resolvedService} detail={detail} />
        <RiskRemovalBand />
        <StatsBar figures={figures} />
        <CaseTypeExplainer service={resolvedService} detail={detail} />
        <FAQSection items={faqItems} />
        <CTABand />
        <section className="bg-white">
          <div className="mx-auto max-w-md px-4 md:px-6 py-12 md:py-section-gap-lg">
            <LeadForm variant="page" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
