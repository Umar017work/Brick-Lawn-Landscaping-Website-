import React from 'react';
import { GalleryGrid } from '../components/home/GalleryGrid';

interface OurWorkPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      <div className="py-12 bg-brand-surface border-b border-brand-border text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl mt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display mb-3">
          Our Outdoor Project Portfolio
        </h1>
        <p className="text-sm text-brand-mutedText max-w-xl mx-auto">
          Explore our recent hardscape, artificial turf, curb edging, and outdoor living projects across Edmonton and surrounding areas.
        </p>
      </div>

      <GalleryGrid onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
