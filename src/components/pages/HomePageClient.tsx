'use client';

import { useDemo } from '@/src/lib/contexts/DemoContext';
import { Hero } from '@/src/components/sections/Hero';
import { ProductEcosystem } from '@/src/components/sections/ProductEcosystem';
import { Features, WhyBisniesgo } from '@/src/components/sections/Features';
import { ServicesAndSteps } from '@/src/components/sections/Services';
import { TrustSection, FAQ, BlogPreview } from '@/src/components/sections/TrustAndFaq';
import { DemoApp } from '@/src/components/sections/DemoApp';
import { FinalCTA } from '@/src/components/sections/Footer';

export function HomePageClient({ posts = [] }: { posts?: any[] }) {
  const { openDemoModal } = useDemo();

  return (
    <>
      <Hero onBookDemo={openDemoModal} />
      <TrustSection />
      <ProductEcosystem />
      <Features />
      <WhyBisniesgo />
      <DemoApp />
      <ServicesAndSteps onBookDemo={openDemoModal} />
      <FAQ />
      <BlogPreview posts={posts} />
      <FinalCTA onBookDemo={openDemoModal} />
    </>
  );
}
