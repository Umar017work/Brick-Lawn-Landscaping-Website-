import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Wrench, ShieldCheck } from 'lucide-react';

interface ServicePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const PaverRepairPage: React.FC<ServicePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Wrench className="w-3.5 h-3.5" />
              <span>Paver Restoration & Sub-Base Rebuild</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Don't Simply Reset Sinking Pavers. <br />
              <span className="gradient-text-sandstone">Rebuild The Base Properly.</span>
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              Quick surface patches fail because the underlying base is compromised. We lift failed pavers, excavate failed aggregate, rebuild and re-compact the base, re-level stones, and re-lock joints with polymeric sand.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Paver Repair & Relay')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Get Paver Repair Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-white font-display">
              Why Pavers Sink & How We Restore Them
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              When water gets trapped under pavers during freeze-thaw cycles, uncompacted base material washes out or shifts, causing sunken spots and dangerous tripping hazards on driveways, walkways, and patios.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Complete lift & salvage of reusable stones</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Excavation & mechanical re-compaction of sub-base</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Correction of drainage slope & grade</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Polymeric sand relocking & edge restraint install</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
            <img src="/images/paver_repair.png" alt="Paver Repair Edmonton" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">Restore Your Patio or Driveway</h3>
          <p className="text-xs text-brand-mutedText">Quote delivered within 3 days • Workmanship Warranty</p>
          <button
            onClick={() => onOpenQuoteModal('Paver Repair & Relay')}
            className="bg-brand-sandstone hover:bg-brand-sandstoneHover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-glow-sandstone"
          >
            Claim Free Repair Quote
          </button>
        </div>
      </section>
    </div>
  );
};
