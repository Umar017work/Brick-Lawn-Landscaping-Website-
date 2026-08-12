import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/companyData';

interface ServicesGridProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sandstone block mb-2">
              Our Core Contracting Specialties
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Outdoor Spaces Built With Intention.
            </h2>
          </div>
          <p className="text-sm text-brand-mutedText max-w-md leading-relaxed">
            Every project begins with proper base engineering, high-grade aggregate compaction, and climate-specific materials.
          </p>
        </div>

        {/* 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-brand-surface border border-brand-border rounded-2xl overflow-hidden hover:border-brand-emerald/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-brand-dark/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                      Edmonton Service
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white font-display group-hover:text-brand-sandstone transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-mutedText leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 space-y-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-brand-offwhite">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-brand-border/50 mt-4">
                <RouterLink
                  to={service.href}
                  className="text-xs font-bold text-brand-sandstone hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </RouterLink>
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="text-xs font-bold bg-brand-emerald/15 hover:bg-brand-emerald text-brand-emerald hover:text-white px-3 py-1.5 rounded-lg border border-brand-emerald/30 transition-all"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
