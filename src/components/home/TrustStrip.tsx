import React from 'react';
import { ShieldCheck, Snowflake, Wrench, DollarSign, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    { icon: Snowflake, text: "Built for Alberta" },
    { icon: Wrench, text: "Professional Installation" },
    { icon: Award, text: "Quality Materials" },
    { icon: DollarSign, text: "No-Surprise Pricing" },
    { icon: ShieldCheck, text: "Workmanship Warranty" }
  ];

  return (
    <section className="bg-brand-surface border-y border-brand-border py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center justify-between">
          {trustPoints.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 p-3 rounded-xl bg-brand-card/40 border border-brand-border/60 justify-center text-center sm:text-left transition-transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/15 flex items-center justify-center text-brand-emerald flex-shrink-0 border border-brand-emerald/20">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  {pt.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
