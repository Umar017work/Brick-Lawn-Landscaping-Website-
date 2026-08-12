import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HardscapingShowcaseProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HardscapingShowcase: React.FC<HardscapingShowcaseProps> = ({ onOpenQuoteModal }) => {
  const categories = [
    { title: "Paver Driveways", image: "/images/driveway.png", desc: "Heavy-load paver driveways built to handle vehicle weight without rutting or shifting." },
    { title: "Patios & Courtyards", image: "/images/patio.png", desc: "Custom outdoor dining & entertainment patios with clean stone borders." },
    { title: "Walkways & Steps", image: "/images/foundation.png", desc: "Safe, durable stone walkways and natural landing steps tailored to site grade." },
    { title: "Retaining & Garden Walls", image: "/images/outdoor_living.png", desc: "Engineered retaining walls for grade management, raised beds, and structural support." },
    { title: "Firepit Areas & Outdoor Kitchens", image: "/images/outdoor_living.png", desc: "Dedicated outdoor living environments with stone firepits and seating walls." }
  ];

  return (
    <section className="py-24 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sandstone block mb-2">
              Dedicated Hardscaping Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Stone Construction Built for Decades.
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-emerald">
              <ShieldCheck className="w-4 h-4" />
              <span>Aligned • Compacted • Locked in Place</span>
            </div>
            <p className="text-xs text-brand-mutedText max-w-md">
              Every paver is installed over deep compacted aggregate with edge restraints and high-grade polymeric sand.
            </p>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-sandstone/60 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-brand-sandstone transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(`Hardscaping - ${cat.title}`)}
                  className="w-full bg-brand-dark hover:bg-brand-emerald text-white text-xs font-bold py-2.5 rounded-lg border border-brand-border hover:border-brand-emerald transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Quote for {cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-brand-emerald/20 to-brand-card border border-brand-emerald/40 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <img
                src="/logo.jpg"
                alt="Brick Lawn Logo"
                className="h-10 w-auto rounded-lg object-contain border border-brand-sandstone/40 shadow-glow-sandstone"
              />
              <h3 className="text-2xl font-bold text-white font-display">
                Need a Custom Hardscape Solution?
              </h3>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                Whether you need a multi-level patio, paver driveway relay, or structural retaining wall, our trained crew delivers transparent pricing and professional installation.
              </p>
            </div>
            <div>
              <RouterLink
                to="/services/hardscapes"
                className="w-full bg-brand-sandstone hover:bg-brand-sandstoneHover text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-glow-sandstone"
              >
                <span>Explore Hardscapes Landing Page</span>
                <ArrowRight className="w-4 h-4" />
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
