import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, Upload } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'Patio & Hardscapes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/10 via-transparent to-brand-sandstone/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Closing Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-surface px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Claim Your Free Quote</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display leading-tight">
              Ready to Build Something That Lasts?
            </h2>

            <p className="text-lg text-brand-mutedText leading-relaxed">
              Tell us what you're planning. We'll help you figure out the right way to build it—engineered for Alberta's climate with no-surprise pricing.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>On-site property evaluation & site assessment</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Itemized proposal delivered within 3 days</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0" />
                <span>Workmanship Warranty upon project completion</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold text-base px-8 py-4 rounded-xl shadow-glow-emerald transition-all flex items-center justify-center space-x-2 border border-white/10"
              >
                <span>Claim Your Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sandstone block mb-1">
                  Free Quote Form
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Get An Idea Of What Your Project Costs
                </h3>
                <p className="text-xs text-brand-stone mt-1">
                  No strings attached. Delivered within 3 days.
                </p>
              </div>

              {submitted ? (
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-emerald/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-brand-emerald mx-auto" />
                  <h4 className="text-xl font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-brand-mutedText">
                    We received your quote request and will contact you to confirm your site evaluation address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Edmonton Project Address *"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                    />
                  </div>

                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                  >
                    <option value="Artificial Turf">Artificial Turf</option>
                    <option value="Patio & Hardscapes">Patio & Hardscapes</option>
                    <option value="Paver Driveway">Paver Driveway</option>
                    <option value="Walkway or Steps">Walkway or Steps</option>
                    <option value="Retaining Wall">Retaining Wall</option>
                    <option value="Outdoor Living / Firepit">Outdoor Living / Firepit</option>
                    <option value="Paver Repair & Relay">Paver Repair & Relay</option>
                    <option value="Quick Curb Edging">Quick Curb Edging</option>
                    <option value="Fence & Custom Landscape">Fence & Custom Landscape</option>
                  </select>

                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request My Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-brand-stone">
                    Quote delivered within 3 days • No obligation
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
