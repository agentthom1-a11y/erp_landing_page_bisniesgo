'use client';

import { Inter, Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from '@/src/components/ui/Preloader';
import { Navbar } from '@/src/components/sections/Navbar';
import { Footer } from '@/src/components/sections/Footer';
import { BookingModal } from '@/src/components/sections/BookingModal';
import '@/src/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-demo-modal', handleOpenModal);
    return () => window.removeEventListener('open-demo-modal', handleOpenModal);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <title>SINAR ERP - Premium ERP for Indonesian Businesses</title>
        <meta name="description" content="Integrated, scalable, and meaningful ERP solutions for Indonesian SMEs and enterprises to grow with discipline and clarity." />
        <link rel="icon" type="image/png" href="/logo/sinar-erp-icon-mark-transparent.png" />
      </head>
      <body className="min-h-screen bg-bg-main font-sans selection:bg-brand-light selection:text-brand-dark antialiased">
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
              {children}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      </body>
    </html>
  );
}
