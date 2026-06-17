import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or has moved."
        path="/404"
        noindex
      />
      <Header />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 md:py-32 text-center">
            <p className="font-heading text-6xl font-extrabold text-accent-dark tabular-nums mb-4">
              404
            </p>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">
              Page not found
            </h1>
            <p className="text-neutral-dim mb-6">
              The page you are looking for does not exist or has moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-accent text-ink font-heading font-bold px-6 py-3 text-base hover:bg-accent-light transition-colors"
              style={{ transitionDuration: 'var(--motion-duration)' }}
            >
              Return home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
