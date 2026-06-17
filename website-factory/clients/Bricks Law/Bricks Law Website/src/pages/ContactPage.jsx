import { brandDNA } from '../config/brand-dna.js';
import SEO from '../components/SEO.jsx';
import { buildBreadcrumbList } from '../lib/seo.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import ContactDetails from '../components/ContactDetails.jsx';
import LeadForm from '../components/LeadForm.jsx';

export default function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact Us | ${brandDNA.company.name}`}
        description={brandDNA.pages.contact.intro}
        path="/contact"
        jsonLd={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <Header />
      <main>
        <PageHero
          title={`Contact ${brandDNA.company.name}`}
          intro="Reach out any time. Free, no-obligation case review."
        />
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-section-gap-lg grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactDetails />
            <LeadForm variant="page" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
