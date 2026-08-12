import React from 'react';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';

interface ServicePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const OutdoorLivingPage: React.FC<ServicePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Flame className="w-3.5 h-3.5 text-brand-sandstone" />
              <span>Custom Backyard Environments</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Outdoor Living Spaces.
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              Firepits, outdoor kitchens, seating walls, poolside surrounds, and custom backyard entertaining areas built for Edmonton summers and cozy autumn evenings.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Outdoor Living')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Get Outdoor Living Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-white font-display">
              Built For Entertaining & Family Gatherings
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              Extend your home's living area into the outdoors with custom stonework, built-in masonry seating, fire feature enclosures, and integrated turf surrounds.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Custom Built-In Stone Firepit Structures</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Masonry Patio Seating Walls & Pillars</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Barbecue & Grill Station Enclosures</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
            <img src="/images/outdoor_living.png" alt="Outdoor Living Edmonton" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};
