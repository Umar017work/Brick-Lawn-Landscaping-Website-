import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'Artificial Turf',
    projectSize: 'Medium (500 - 1,000 sq ft)',
    timeline: 'Within 1-2 Months',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="relative py-16 bg-brand-surface border-b border-brand-border overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
            <span>No-Surprise Pricing Guarantee</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Claim Your Free Quote
          </h1>
          <p className="text-base text-brand-mutedText max-w-xl mx-auto">
            No strings attached. Get an idea of what your project could cost. Quote delivered within 3 days.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white font-display">
                Brick Lawn Landscaping
              </h2>
              <p className="text-xs text-brand-sandstone font-bold uppercase tracking-widest">
                {COMPANY_INFO.tagline}
              </p>

              <div className="space-y-4 text-sm text-brand-offwhite">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-sandstone flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Service Area</span>
                    <span className="text-xs text-brand-stone">{COMPANY_INFO.location} & Surrounding Alberta Areas</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Quote Delivery Guarantee</span>
                    <span className="text-xs text-brand-stone">Detailed itemized quote delivered within 3 days of consultation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border space-y-2 text-xs text-brand-stone">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                  <span>On-site property walk-through</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                  <span>No-Surprise Pricing Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                  <span>Workmanship Warranty</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-sandstone">
                Client Service Commitment
              </span>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                "We don't build landscapes that look good for one season. We build outdoor spaces properly so they continue looking great for years."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 shadow-2xl space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white font-display">
                  Project Request Form
                </h2>
                <p className="text-xs text-brand-stone mt-1">
                  Fill out the fields below and our team will get in touch to arrange your on-site property evaluation.
                </p>
              </div>

              {submitted ? (
                <div className="bg-brand-card p-8 rounded-2xl border border-brand-emerald/40 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-brand-emerald mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-xs text-brand-mutedText max-w-md mx-auto">
                    Thank you <span className="text-white font-semibold">{formData.name}</span>. We will review your project for your address in <span className="text-brand-sandstone">{formData.address}</span> and send your quote within 3 days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(780) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Edmonton Property Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="Street Address, Edmonton"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-emerald"
                      >
                        <option value="Artificial Turf">Artificial Turf</option>
                        <option value="Patio">Patio</option>
                        <option value="Driveway">Driveway</option>
                        <option value="Walkway">Walkway</option>
                        <option value="Retaining Wall">Retaining Wall</option>
                        <option value="Outdoor Living">Outdoor Living</option>
                        <option value="Paver Repair">Paver Repair</option>
                        <option value="Curb Edging">Curb Edging</option>
                        <option value="Fence">Fence</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Approx Size</label>
                      <select
                        value={formData.projectSize}
                        onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-emerald"
                      >
                        <option value="Small (< 500 sq ft)">Small (&lt; 500 sq ft)</option>
                        <option value="Medium (500 - 1,000 sq ft)">Medium (500 - 1,000 sq ft)</option>
                        <option value="Large (1,000 - 2,500 sq ft)">Large (1,000 - 2,500 sq ft)</option>
                        <option value="Estate (2,500+ sq ft)">Estate (2,500+ sq ft)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-emerald"
                      >
                        <option value="ASAP">ASAP</option>
                        <option value="Within 1-2 Months">Within 1-2 Months</option>
                        <option value="This Season">This Season</option>
                        <option value="Next Season">Next Season</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Message / Project Details</label>
                    <textarea
                      rows={4}
                      placeholder="Please tell us about your goals, yard layout, or existing conditions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request My Free Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
