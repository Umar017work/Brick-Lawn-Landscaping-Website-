import React from 'react';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ServicePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const QuickCurbPage: React.FC<ServicePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Layers className="w-3.5 h-3.5" />
              <span>Extruded Concrete Landscape Edging</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Quick Curb Edging. <br />
              <span className="gradient-text-sandstone">Clean, Permanent Separation.</span>
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              Smooth poured-in-place concrete curbing with customizable colours and profiles. Create permanent borders between garden beds, lawn, turf, and walkways.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Quick Curb Edging')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Get Quick Curb Quote</span>
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
              Custom Profiles & Color Options
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              Plastic and wooden lawn edging breaks down and shifts under winter frost. Poured-in-place concrete curb edging provides a rigid, maintenance-free root and lawn barrier that enhances curb appeal.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Continuous Poured-in-Place Concrete</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Customizable Shapes, Profiles & Integral Shades</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Durable Separation for Mulch, Turf & Stone</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
            <img src="/images/curb.png" alt="Quick Curb Edging Edmonton" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};
