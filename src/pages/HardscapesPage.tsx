import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Layers, Award, Eye, Wrench, Snowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HardscapesPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HardscapesPage: React.FC<HardscapesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      {/* Hero Sub-header */}
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Layers className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Edmonton Hardscaping Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Paver Patios, Driveways & Retaining Walls. <br />
              <span className="gradient-text-sandstone">Engineered for Alberta.</span>
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              We specialize in heavy-load paver driveways, custom patios, stone walkways, landing steps, retaining walls, and custom outdoor living environments. Built over deep aggregate sub-bases to withstand Edmonton freeze-thaw cycles.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuoteModal('Hardscaping Project')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all flex items-center space-x-2 border border-white/10"
              >
                <span>Get Your Hardscape Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Features Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Category Breakdown Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white font-display">
              Our Hardscape Construction Offerings
            </h2>
            <p className="text-sm text-brand-mutedText">
              Every paver stone is aligned, compacted, locked in place, and supported by a Workmanship Warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/50 transition-colors">
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img src="/images/driveway.png" alt="Paver Driveway Edmonton" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Paver Driveways</h3>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                Engineered for heavy vehicle loads. Deep excavated sub-base compacted under heavy mechanical plate vibration to prevent tire rutting, sinking, and shifting.
              </p>
              <button
                onClick={() => onOpenQuoteModal('Paver Driveway')}
                className="text-xs font-bold text-brand-sandstone hover:text-white flex items-center space-x-1"
              >
                <span>Request Driveway Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/50 transition-colors">
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img src="/images/patio.png" alt="Paver Patio Edmonton" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Patios & Courtyards</h3>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                Custom outdoor dining and lounge patios featuring clean slate, charcoal, or sandstone paver borders, positive drainage slopes, and polymer joint sand.
              </p>
              <button
                onClick={() => onOpenQuoteModal('Paver Patio')}
                className="text-xs font-bold text-brand-sandstone hover:text-white flex items-center space-x-1"
              >
                <span>Request Patio Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/50 transition-colors">
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img src="/images/outdoor_living.png" alt="Retaining Walls Edmonton" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Retaining & Garden Walls</h3>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                Engineered retaining wall systems built to handle lateral earth pressure, grade transitions, raised garden beds, and custom patio seating walls.
              </p>
              <button
                onClick={() => onOpenQuoteModal('Retaining Wall')}
                className="text-xs font-bold text-brand-sandstone hover:text-white flex items-center space-x-1"
              >
                <span>Request Retaining Wall Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Major Conversion Section: Why Brick Lawn Hardscapes Last */}
        <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              The Foundation Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Why Brick Lawn Hardscapes Don't Shift or Sink
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              Most hardscape failures happen because contractors skimp on subgrade excavation or skip mechanical base compaction. Here is our exact construction standard:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-dark/80 p-5 rounded-2xl border border-brand-border space-y-2">
              <div className="text-sm font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>1. Deep Subgrade Excavation</span>
              </div>
              <p className="text-xs text-brand-stone leading-relaxed">
                We excavate past soft surface topsoil down to stable native sub-base, removing all organic matter that causes settling.
              </p>
            </div>

            <div className="bg-brand-dark/80 p-5 rounded-2xl border border-brand-border space-y-2">
              <div className="text-sm font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>2. Compacted Aggregate Base</span>
              </div>
              <p className="text-xs text-brand-stone leading-relaxed">
                Engineered crushed stone aggregate installed in layered lifts and mechanically compacted for heavy structural load capability.
              </p>
            </div>

            <div className="bg-brand-dark/80 p-5 rounded-2xl border border-brand-border space-y-2">
              <div className="text-sm font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>3. Drainage Slope & Grading</span>
              </div>
              <p className="text-xs text-brand-stone leading-relaxed">
                Precision laser grading ensures meltwater and rainfall flow away from home foundations, preventing sub-base ice heaving.
              </p>
            </div>

            <div className="bg-brand-dark/80 p-5 rounded-2xl border border-brand-border space-y-2">
              <div className="text-sm font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>4. Edge Restraints & Polymeric Sand</span>
              </div>
              <p className="text-xs text-brand-stone leading-relaxed">
                Anchored heavy-duty edge restraints lock perimeter stones, and polymeric joint sand prevents weed growth and washouts.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border/60">
            <div className="text-xs text-brand-stone">
              • Barkman • Belgard • Expocrete • Techo-Bloc Partnered Installer
            </div>
            <button
              onClick={() => onOpenQuoteModal('Hardscaping Proposal')}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold text-sm px-6 py-3 rounded-xl shadow-glow-emerald"
            >
              Claim Your Free Hardscape Quote
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
