'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from '@/src/components/ui/Preloader';
import { Navbar } from '@/src/components/sections/Navbar';
import { Footer } from '@/src/components/sections/Footer';
import { BookingModal } from '@/src/components/sections/BookingModal';
import { FloatingCTA } from '@/src/components/ui/FloatingCTA';

import { DemoProvider } from '@/src/lib/contexts/DemoContext';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-demo-modal', handleOpenModal);
    return () => window.removeEventListener('open-demo-modal', handleOpenModal);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <DemoProvider>
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
            <Navbar onBookDemo={() => setIsModalOpen(true)} />
            {children}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      <FloatingCTA />
    </DemoProvider>
  );
}
