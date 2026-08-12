import React from 'react';
import { Snowflake, ShieldCheck, ThermometerSnowflake, Droplets, Mountain } from 'lucide-react';

export const AlbertaClimateSection: React.FC = () => {
  const climatePillars = [
    {
      icon: ThermometerSnowflake,
      title: "Freeze-Thaw Resistance",
      description: "Edmonton's intense ground expansion and contraction can heave solid concrete. Our paver systems and sub-bases are engineered to flex without cracking."
    },
    {
      icon: Droplets,
      title: "Sub-Base Drainage Slope",
      description: "Water pooling beneath pavers or turf is the primary cause of ice heave. We precision-grade sub-bases to direct meltwater cleanly away."
    },
    {
      icon: Mountain,
      title: "Heavy-Compaction Aggregates",
      description: "We use crushed aggregate bases compacted under machine vibration to create a dense, immovable foundation that resists spring thaw settling."
    },
    {
      icon: ShieldCheck,
      title: "Climate-Tested Materials",
      description: "Every stone, paver, curb, and artificial turf fiber we install is selected specifically to withstand Alberta's UV exposure and temperature swings."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-surface px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <Snowflake className="w-3.5 h-3.5 text-blue-400" />
            <span>Alberta Construction Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Built for Alberta. <br />
            <span className="text-brand-stone">Not Just Built to Look Good.</span>
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            Edmonton's freeze-thaw cycles destroy poorly installed landscaping within a year or two. We construct outdoor spaces using methods and base standards specifically designed for Northern Alberta conditions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {climatePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border rounded-2xl p-6 hover:border-brand-emerald/50 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-brand-emerald group-hover:text-brand-sandstone group-hover:scale-110 transition-all border border-brand-border">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {pillar.title}
                </h3>
                <p className="text-xs text-brand-mutedText leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
