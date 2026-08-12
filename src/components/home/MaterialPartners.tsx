import React from 'react';
import { Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const MaterialPartners: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs font-bold uppercase tracking-widest text-brand-stone mb-8 flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-brand-sandstone" />
          <span>Trusted Materials & Hardscape Suppliers</span>
        </p>

        {/* Partner Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {COMPANY_INFO.partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-brand-surface/60 border border-brand-border/60 hover:border-brand-sandstone/50 p-6 rounded-2xl transition-all duration-300 group flex flex-col items-center justify-center space-y-2"
            >
              <span className="font-display font-extrabold text-lg sm:text-xl text-brand-stone group-hover:text-white transition-colors tracking-widest">
                {partner.logoText}
              </span>
              <span className="text-[10px] uppercase font-semibold text-brand-stone/70">
                Authorized Material Partner
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-brand-stone mt-6">
          High-grade interlocking pavers, retaining wall systems, aggregate stone, and artificial turf built for Canadian winters.
        </p>

      </div>
    </section>
  );
};
