/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProductEcosystem } from './components/sections/ProductEcosystem';
import { Features, WhyBisniesgo } from './components/sections/Features';
import { ServicesAndSteps } from './components/sections/Services';
import { TrustSection, FAQ, BlogPreview } from './components/sections/TrustAndFaq';
import { FinalCTA, Footer } from './components/sections/Footer';
import { BookingModal } from './components/sections/BookingModal';
import { BlogPostPage } from './pages/BlogPostPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <main>
    <Helmet>
      <title>SINAR ERP - Premium ERP for Indonesian Businesses | Bisniesgo</title>
      <meta name="description" content="Integrated, scalable, and meaningful ERP solutions for Indonesian SMEs and enterprises to grow with discipline and clarity." />
    </Helmet>
    <Hero onBookDemo={onBookDemo} />
    <TrustSection />
    <ProductEcosystem />
    <Features />
    <WhyBisniesgo />
    <ServicesAndSteps onBookDemo={onBookDemo} />
    <FAQ />
    <BlogPreview />
    <FinalCTA onBookDemo={onBookDemo} />
  </main>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bg-main font-sans selection:bg-brand-light selection:text-brand-dark">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showPreloader ? (
          <Preloader key="preloader" onComplete={() => setShowPreloader(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar onBookDemo={openModal} />
            
            <Routes>
              <Route path="/" element={<HomePage onBookDemo={openModal} />} />
              <Route path="/blog/:slug" element={<BlogPostPage onBookDemo={openModal} />} />
            </Routes>

            <Footer />
            
            {/* Floating Contact/WhatsApp Button */}
            <div className="fixed bottom-8 right-8 z-40">
               <a 
                 href="https://wa.me/6281234567890?text=Halo%20Bisniesgo,%20saya%20tertarik%20dengan%20SINAR%20ERP" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2x-strong flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
               >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                     <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.758.459 3.411 1.264 4.846L2 22l5.303-1.391c1.391.758 2.966 1.187 4.709 1.187 5.507 0 9.987-4.479 9.987-9.987 0-5.509-4.48-9.988-9.987-9.988zm5.174 14.195c-.215.605-1.229 1.157-1.688 1.233-.459.076-.902.138-2.617-.551-2.05-.826-3.376-2.91-3.479-3.047-.101-.137-.826-.994-.826-1.913 0-.918.479-1.371.65-1.562s.138-.28.258-.459c.121-.18.18-.382.121-.502-.061-.121-.479-1.157-.655-1.58-.172-.413-.346-.356-.479-.364-.121-.008-.258-.008-.396-.008s-.361.053-.551.258c-.19.206-.723.707-.723 1.724s.743 2.004.846 2.141c.103.137 1.463 2.235 3.544 3.132.495.214.881.341 1.181.437.498.158.951.135 1.309.083.399-.059 1.229-.502 1.401-1.02a1.76 1.76 0 00.123-.974c-.059-.101-.215-.164-.459-.286z" />
                  </svg>
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

