import React from 'react';
import { ArrowRight, ShieldCheck, Award, Wrench, Video, BookOpen } from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS, FAQS } from '../data/companyData';
import { FAQSection } from '../components/home/FAQSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Quality Hardscaping & Artificial Turf</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Turf & Stone. Built to Last.
            </h1>
            <p className="text-lg text-brand-mutedText leading-relaxed">
              "{COMPANY_INFO.philosophy}"
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-glow-emerald transition-all inline-flex items-center space-x-2"
              >
                <span>Claim Your Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Standards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              Quality-First Philosophy
            </span>
            <h2 className="text-3xl font-bold text-white font-display">
              Why We Focus Heavily On Base Preparation
            </h2>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              In Edmonton, severe winter freeze-thaw cycles exert immense lateral and vertical pressure on hardscaping. A beautiful surface layer means nothing if the excavation, aggregate compaction, and drainage slope underneath were rushed.
            </p>
            <p className="text-sm text-brand-mutedText leading-relaxed">
              Brick Lawn Landscaping was founded on a simple principle: build outdoor construction projects properly the first time, so homeowners never have to suffer from sinking driveways, ponding water, or failing retaining walls.
            </p>
          </div>

          <div className="lg:col-span-6 bg-brand-surface border border-brand-border rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-display">Our Crew Standards</h3>
            <div className="space-y-4 text-xs text-brand-mutedText">
              {COMPANY_INFO.trainingStats.map((stat, i) => (
                <div key={i} className="flex items-center space-x-3 bg-brand-card p-3 rounded-xl border border-brand-border">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald flex-shrink-0"></span>
                  <span className="text-white font-semibold">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TestimonialsSection />
        <FAQSection />
      </section>
    </div>
  );
};
