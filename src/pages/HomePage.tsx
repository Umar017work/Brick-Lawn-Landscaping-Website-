import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { FoundationDifference } from '../components/home/FoundationDifference';
import { AlbertaClimateSection } from '../components/home/AlbertaClimateSection';
import { HardscapingShowcase } from '../components/home/HardscapingShowcase';
import { Design3DSection } from '../components/home/Design3DSection';
import { InstallersSection } from '../components/home/InstallersSection';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { PricingGuarantee } from '../components/home/PricingGuarantee';
import { MaterialPartners } from '../components/home/MaterialPartners';
import { GalleryGrid } from '../components/home/GalleryGrid';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <main>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <TrustStrip />
      <ServicesGrid onOpenQuoteModal={onOpenQuoteModal} />
      <FoundationDifference onOpenQuoteModal={onOpenQuoteModal} />
      <AlbertaClimateSection />
      <HardscapingShowcase onOpenQuoteModal={onOpenQuoteModal} />
      <Design3DSection onOpenQuoteModal={onOpenQuoteModal} />
      <InstallersSection />
      <ProcessTimeline onOpenQuoteModal={onOpenQuoteModal} />
      <PricingGuarantee onOpenQuoteModal={onOpenQuoteModal} />
      <MaterialPartners />
      <GalleryGrid onOpenQuoteModal={onOpenQuoteModal} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA onOpenQuoteModal={onOpenQuoteModal} />
    </main>
  );
};
