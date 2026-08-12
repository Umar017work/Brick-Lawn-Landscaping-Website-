import React from 'react';
import { ArrowRight, CheckCircle2, Eye, Compass } from 'lucide-react';

interface ServicePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const LandscapeDesignPage: React.FC<ServicePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Landscape Construction</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Landscape Design & Construction.
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              Fences, patios, retaining walls, garden spaces, and complete outdoor transformations. Optional 3D renderings allow you to preview layout, elevations, and material selections before construction.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Landscape Design')}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Get Design & Construction Quote</span>
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
              Complete Outdoor Transformations
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              From site grading and fence installation to paver patios, turf layouts, and garden features, we handle the full scope of outdoor construction under one roof.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Custom Wooden & Privacy Fence Construction</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Full Property Layout & Grade Management</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>3D Visual Landscape CAD Design Plans</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
            <img src="/images/design_3d.png" alt="Landscape Design Edmonton" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};
