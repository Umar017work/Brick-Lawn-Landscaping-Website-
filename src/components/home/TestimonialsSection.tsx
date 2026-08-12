import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-surface px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Homeowner Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            What Our Clients Say About Our Work.
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            Real feedback from homeowners in Edmonton who trusted Brick Lawn Landscaping with their fence, patio, and outdoor construction projects.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col justify-between hover:border-brand-emerald/50 transition-all duration-300 shadow-xl space-y-6"
            >
              <div className="space-y-4">
                {/* Highlight Tag */}
                <div className="bg-brand-card p-3 rounded-xl border border-brand-border text-xs font-bold text-brand-sandstone flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                  <span>"{t.highlight}"</span>
                </div>

                {/* Main Quote */}
                <p className="text-sm text-brand-offwhite leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {t.name}
                  </h3>
                  <span className="text-xs text-brand-stone block">
                    {t.projectType} • Edmonton, AB
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald text-xs font-bold border border-brand-emerald/30">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
