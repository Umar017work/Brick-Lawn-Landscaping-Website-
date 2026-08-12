import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <HelpCircle className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Clear Answers for Homeowners.
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            Everything you need to know about our paver installations, freeze-thaw durability, pricing guarantee, and turnaround timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center text-brand-sandstone transition-transform duration-300 flex-shrink-0 border border-brand-border ${
                      isOpen ? 'rotate-180 bg-brand-emerald text-white border-brand-emerald' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-brand-mutedText leading-relaxed border-t border-brand-border/40 mt-1 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
