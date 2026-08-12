import React, { useState } from 'react';
import { Layers, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface FoundationDifferenceProps {
  onOpenQuoteModal: () => void;
}

export const FoundationDifference: React.FC<FoundationDifferenceProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'finished'>('foundation');

  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <Layers className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Core Brand Differentiator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            The Difference Is Underneath.
          </h2>
          <p className="text-base sm:text-lg text-brand-mutedText leading-relaxed">
            What you see is the finished landscape. What makes it last through Edmonton's freeze-thaw cycles is everything underneath.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Visual Presentation Side */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Toggle Control Bar */}
            <div className="flex items-center space-x-2 bg-brand-dark/80 p-1.5 rounded-xl border border-brand-border">
              <button
                onClick={() => setActiveTab('foundation')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'foundation'
                    ? 'bg-brand-emerald text-white shadow-glow-emerald'
                    : 'text-brand-stone hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Foundation & Base Layer</span>
              </button>
              <button
                onClick={() => setActiveTab('finished')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'finished'
                    ? 'bg-brand-sandstone text-white shadow-glow-sandstone'
                    : 'text-brand-stone hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Finished Surface View</span>
              </button>
            </div>

            {/* Display Image Box */}
            <div className="relative h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-brand-border">
              <img
                src={activeTab === 'foundation' ? '/images/foundation.png' : '/images/patio.png'}
                alt={activeTab === 'foundation' ? 'Hardscape foundation cross section base layer' : 'Finished paver patio surface'}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeTab === 'foundation' ? 'bg-brand-emerald' : 'bg-brand-sandstone'}`}></span>
                <span>{activeTab === 'foundation' ? 'Underground Base & Compaction Spec' : 'Completed Outdoor Installation'}</span>
              </div>
            </div>

          </div>

          {/* Breakdown Explanation Side */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white font-display">
                {activeTab === 'foundation'
                  ? 'Why 90% of Landscaping Failures Happen Underground'
                  : 'Surface Elegance Supported By Structural Engineering'}
              </h3>
              <p className="text-sm text-brand-mutedText leading-relaxed">
                Many landscaping problems come from what homeowners never see: shallow excavation, uncompacted sub-base, poor slope grading, and cheap materials.
              </p>
            </div>

            {/* Comparison Highlights */}
            <div className="space-y-4">
              <div className="bg-brand-dark/60 p-4 rounded-xl border border-brand-border space-y-2">
                <div className="text-xs font-bold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>The Standard Contractor Shortcut:</span>
                </div>
                <p className="text-xs text-brand-stone leading-relaxed">
                  Rushed excavation, thin aggregate base, improper slope, and zero base compaction. Pavers begin sinking, shifting, and ponding water within 1-2 seasons.
                </p>
              </div>

              <div className="bg-brand-emerald/10 p-4 rounded-xl border border-brand-emerald/30 space-y-2">
                <div className="text-xs font-bold text-brand-emerald flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>The Brick Lawn Standard:</span>
                </div>
                <ul className="text-xs text-brand-offwhite space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                    <span>Deep excavation removing all organic soft subsoil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                    <span>Engineered aggregate base, heavily compacted in lifts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                    <span>Positive slope grading to channel water away from foundations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                    <span>Spike-anchored edge restraints & polymeric joint sand lock</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all flex items-center justify-center space-x-2"
              >
                <span>Build Your Yard Properly — Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
