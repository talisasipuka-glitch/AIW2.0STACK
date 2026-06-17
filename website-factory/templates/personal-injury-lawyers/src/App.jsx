import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PracticeAreasPage from './pages/PracticeAreasPage.jsx';
import CaseTypeLandingPage from './pages/CaseTypeLandingPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/**
 * Scroll-to-hash on initial mount and on every navigation. Universal.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [pathname, hash]);
  return null;
}

/**
 * Router shell. Module 2D fills {{PAGE_IMPORTS}} with the niche's
 * generated page imports and {{ROUTES}} with the niche's route list
 * derived from the niche sitemap.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/case-types/:slug" element={<CaseTypeLandingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
