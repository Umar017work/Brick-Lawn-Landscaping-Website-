import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

interface PricingGuaranteeProps {
  onOpenQuoteModal: () => void;
}

export const PricingGuarantee: React.FC<PricingGuaranteeProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-brand-card via-brand-surface to-brand-card border border-brand-sandstone/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Glow Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-sandstone/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-dark px-3.5 py-1.5 rounded-full border border-brand-sandstone/40 text-xs font-bold uppercase tracking-widest text-brand-sandstone">
                <DollarSign className="w-3.5 h-3.5 text-brand-sandstone" />
                <span>Financial Transparency</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                The Price We Quote Is The Price <br className="hidden sm:inline" />
                <span className="gradient-text-sandstone">You Can Plan Around.</span>
              </h2>

              <p className="text-base text-brand-mutedText leading-relaxed max-w-2xl">
                We believe trust is built through clarity. Our <strong className="text-white">No-Surprise Pricing Guarantee</strong> ensures clear scope, detailed line items, and predictable project budgeting without unexpected mid-project charges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-brand-dark/70 p-4 rounded-xl border border-brand-border space-y-1">
                  <span className="block text-xs font-bold text-white">Clear Scope</span>
                  <span className="block text-[11px] text-brand-stone">Itemized excavation, material, and labor breakdown.</span>
                </div>
                <div className="bg-brand-dark/70 p-4 rounded-xl border border-brand-border space-y-1">
                  <span className="block text-xs font-bold text-white">3-Day Turnaround</span>
                  <span className="block text-[11px] text-brand-stone">Receive your proposal within 3 days of consultation.</span>
                </div>
                <div className="bg-brand-dark/70 p-4 rounded-xl border border-brand-border space-y-1">
                  <span className="block text-xs font-bold text-white">No Hidden Add-Ons</span>
                  <span className="block text-[11px] text-brand-stone">No mid-project surprises or unexplained costs.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-4">
              <div className="bg-brand-dark/90 p-6 rounded-2xl border border-brand-border space-y-3 inline-block text-left w-full">
                <div className="flex items-center space-x-2 text-brand-emerald text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>No-Surprise Guarantee</span>
                </div>
                <div className="text-xl font-bold text-white font-display">
                  Plan Your Outdoor Space With Confidence
                </div>
                <p className="text-xs text-brand-stone">
                  No strings attached quote delivered within 3 days.
                </p>
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-brand-sandstone hover:bg-brand-sandstoneHover text-white text-xs font-bold py-3 rounded-xl transition-all shadow-glow-sandstone flex items-center justify-center space-x-2"
                >
                  <span>Claim Your Free Quote</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
