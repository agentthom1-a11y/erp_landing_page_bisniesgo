'use client';

import { useDemo } from '@/src/lib/contexts/DemoContext';
import { Hero } from '@/src/components/sections/Hero';
import { ProductEcosystem } from '@/src/components/sections/ProductEcosystem';
import { Features, WhyBisniesgo } from '@/src/components/sections/Features';
import { ServicesAndSteps } from '@/src/components/sections/Services';
import { TrustSection, FAQ, BlogPreview } from '@/src/components/sections/TrustAndFaq';
import { FinalCTA } from '@/src/components/sections/Footer';

export function HomePageClient() {
  const { openDemoModal } = useDemo();

  return (
    <>
      <Hero onBookDemo={openDemoModal} />
      <TrustSection />
      <ProductEcosystem />
      <Features />
      <WhyBisniesgo />
      <ServicesAndSteps onBookDemo={openDemoModal} />
      <FAQ />
      <BlogPreview />
      <FinalCTA onBookDemo={openDemoModal} />
    </>
  );
}
