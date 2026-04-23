'use client';

import { Hero } from '@/src/components/sections/Hero';
import { ProductEcosystem } from '@/src/components/sections/ProductEcosystem';
import { Features, WhyBisniesgo } from '@/src/components/sections/Features';
import { ServicesAndSteps } from '@/src/components/sections/Services';
import { TrustSection, FAQ, BlogPreview } from '@/src/components/sections/TrustAndFaq';
import { FinalCTA } from '@/src/components/sections/Footer';

export default function Home() {
  // We need a way to open the modal from child components
  // In Next.js, we can use a Context or just handle it in the layout
  // Since the layout already has the modal, we can pass down the toggle
  // Wait, layout children don't easily get props.
  // I'll use a simple window event or just define the modal in the page if needed.
  // For now, I'll just render the sections. 
  // I'll add the modal toggle logic back in a moment using a custom hook or context.

  const openModal = () => {
    // This is a bit hacky for now, but works for the migration
    window.dispatchEvent(new CustomEvent('open-demo-modal'));
  };

  return (
    <main>
      <Hero onBookDemo={openModal} />
      <TrustSection />
      <ProductEcosystem />
      <Features />
      <WhyBisniesgo />
      <ServicesAndSteps onBookDemo={openModal} />
      <FAQ />
      <BlogPreview />
      <FinalCTA onBookDemo={openModal} />
    </main>
  );
}
