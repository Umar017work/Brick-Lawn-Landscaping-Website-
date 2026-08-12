import React from 'react';
import { Calendar, Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/companyData';

interface ProcessTimelineProps {
  onOpenQuoteModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-surface px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <Calendar className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Predictable 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            How We Build Your Landscape.
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            From the moment you request a quote to final project inspection, our process is designed for clarity, transparency, and high workmanship.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-brand-surface border border-brand-border rounded-2xl p-6 relative space-y-4 hover:border-brand-emerald/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-display text-brand-sandstone group-hover:text-brand-emerald transition-colors">
                    {step.number}
                  </span>
                  {idx === 0 && (
                    <span className="text-[10px] font-extrabold uppercase bg-brand-emerald/20 text-brand-emerald px-2.5 py-1 rounded-full border border-brand-emerald/30">
                      Quote in 3 Days
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-1">
                  {step.title}
                </h3>
                <span className="block text-xs font-semibold text-brand-sandstone mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-brand-mutedText leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx === 2 && (
                <div className="pt-2 border-t border-brand-border/50 text-[11px] text-brand-stone space-y-1">
                  <span className="block font-bold text-white">Construction steps:</span>
                  <span>Excavation • Aggregate Base • Compaction • Grading • Drainage • Pavers • Polymeric Sand</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Bottom Bar */}
        <div className="mt-12 text-center bg-brand-surface border border-brand-border rounded-2xl p-8 max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">
            Ready to Start Step 01?
          </h3>
          <p className="text-sm text-brand-mutedText">
            Walk the property with us. Evaluate your site and receive a clear quote delivered within 3 days.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2 border border-white/10"
            >
              <span>Book Your On-Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
