import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, Sparkles, Sun } from 'lucide-react';

interface ServicePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ArtificialTurfPage: React.FC<ServicePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-emerald">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Edmonton Artificial Turf Installation</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Green Year-Round Without Mowing, Watering, or Mud.
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              Premium synthetic turf installations engineered for Edmonton's freeze-thaw cycles. Pet-safe, low-maintenance, and built over proper drainage aggregate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Artificial Turf')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Get Artificial Turf Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-white font-display">
              Designed For High Drainage & Alberta Winters
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              Cheap turf installed directly over dirt turns muddy and buckles during spring melt. At Brick Lawn Landscaping, we install artificial turf over an excavated, compacted crushed aggregate sub-base designed for maximum water permeability.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Pet-Safe & Easy Cleanup</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>No Watering, Fertilizing, or Muddy Paws</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Proper Drainage Base Layer</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>UV-Stabilized & Winter Tested</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
            <img src="/images/turf.png" alt="Artificial Turf Edmonton" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">Transform Your Lawn Today</h3>
          <p className="text-xs text-brand-mutedText">Quote delivered within 3 days • No-Surprise Pricing Guarantee</p>
          <button
            onClick={() => onOpenQuoteModal('Artificial Turf')}
            className="bg-brand-emerald hover:bg-brand-emeraldHover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-glow-emerald"
          >
            Claim Your Free Turf Quote
          </button>
        </div>
      </section>
    </div>
  );
};
