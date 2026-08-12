import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Brick Lawn Landscaping Turf and Stone Patio Edmonton"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-emerald/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sandstone/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-display leading-[1.08]">
            TURF & STONE. <br className="hidden sm:inline" />
            <span className="gradient-text-sandstone">BUILT TO LAST.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed">
            Premium artificial turf and paver installations in Edmonton, built for Alberta's freeze-thaw climate.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-emerald to-brand-emeraldHover hover:from-brand-emeraldHover hover:to-brand-emerald text-white font-bold text-base px-8 py-4 rounded-xl shadow-glow-emerald transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 border border-white/10"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#our-work"
              className="w-full sm:w-auto bg-brand-surface/90 hover:bg-brand-card text-white font-bold text-base px-8 py-4 rounded-xl border border-brand-border hover:border-brand-stone transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Work</span>
            </a>
          </div>

          {/* Trust / Value Statement */}
          <div className="pt-4 flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold text-brand-sandstone">
            <ShieldCheck className="w-4 h-4 text-brand-emerald" />
            <span>Built to drain. Built to last. Built right.</span>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block text-brand-stone animate-bounce">
        <ChevronDown className="w-6 h-6 opacity-70" />
      </div>
    </section>
  );
};
