import React from 'react';
import { Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface Design3DSectionProps {
  onOpenQuoteModal: () => void;
}

export const Design3DSection: React.FC<Design3DSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-surface px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <Eye className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Full 3D Landscape Visualization</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              See Your Project Before We Build It.
            </h2>

            <p className="text-base text-brand-mutedText leading-relaxed">
              Larger outdoor construction projects can receive full 3D visual designs showing exact elevations, wall heights, paver color choices, patio dimensions, and traffic flow before excavation begins.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white block">Less Guessing & Better Planning</span>
                  <span className="text-xs text-brand-stone">Visualize patio borders, step heights, and turf placement in realistic scale.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white block">Fewer Mid-Project Surprises</span>
                  <span className="text-xs text-brand-stone">Confirm material patterns, color tones, and layout before ground is broken.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white block">Clear Scope Alignment</span>
                  <span className="text-xs text-brand-stone">Translates your vision into exact construction blueprints for our installation crew.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2 border border-white/10"
              >
                <span>Request 3D Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image / Mockup Presentation */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border bg-brand-surface p-3 shadow-2xl">
              <img
                src="/images/design_3d.png"
                alt="3D CAD landscape architecture plan on digital tablet"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-white">3D Project Rendering</span>
                  <span className="block text-[11px] text-brand-sandstone">Elevations • Wall Heights • Color Choices</span>
                </div>
                <span className="text-[11px] font-bold bg-brand-emerald text-white px-2.5 py-1 rounded-md">
                  Preview Ready
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
