import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Upload, ArrowRight, Clock, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Hardscaping Patio'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: defaultService,
    projectSize: 'Medium (500 - 1,000 sq ft)',
    timeline: 'Within 1-2 Months',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Artificial Turf',
    'Patio',
    'Driveway',
    'Walkway',
    'Retaining Wall',
    'Outdoor Living',
    'Paver Repair',
    'Curb Edging',
    'Fence',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-card to-brand-surface p-6 border-b border-brand-border flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src="/logo.jpg"
              alt="Brick Lawn Logo"
              className="h-12 w-auto rounded-lg object-contain border border-brand-sandstone/40 shadow-glow-sandstone flex-shrink-0"
            />
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-sandstone mb-1">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                <span>No-Surprise Pricing Guarantee</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-display">
                Claim Your Free Quote
              </h2>
              <p className="text-xs text-brand-mutedText mt-1">
                No strings attached. Quote delivered within 3 days.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-brand-stone hover:text-white p-2 rounded-lg hover:bg-brand-dark/50 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald text-brand-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Quote Request Received!
              </h3>
              <p className="text-sm text-brand-mutedText max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name || 'Valued Client'}</span>. We have received your project details for your <span className="text-brand-sandstone font-medium">{formData.projectType}</span> project in Edmonton.
              </p>
              <div className="bg-brand-card p-4 rounded-xl border border-brand-border inline-block text-left text-xs space-y-1">
                <div className="text-brand-sandstone font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Next Steps:
                </div>
                <div className="text-white">• Our estimator will review your project requirements</div>
                <div className="text-white">• We will contact you to schedule an on-site property evaluation</div>
                <div className="text-white">• Detailed itemized quote delivered within 3 days</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-brand-emerald hover:bg-brand-emeraldHover text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-glow-emerald transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Project Type Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-stone mb-2">
                  Select Project Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`text-xs font-semibold p-2.5 rounded-lg border transition-all text-left truncate ${
                        formData.projectType === type
                          ? 'bg-brand-emerald/20 border-brand-emerald text-white shadow-glow-emerald'
                          : 'bg-brand-card/50 border-brand-border text-brand-mutedText hover:border-brand-stone hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (780) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Project Address (Edmonton & Area) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street Address, City"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Approximate Project Size
                  </label>
                  <select
                    value={formData.projectSize}
                    onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  >
                    <option value="Small (< 500 sq ft)">Small (&lt; 500 sq ft)</option>
                    <option value="Medium (500 - 1,000 sq ft)">Medium (500 - 1,000 sq ft)</option>
                    <option value="Large (1,000 - 2,500 sq ft)">Large (1,000 - 2,500 sq ft)</option>
                    <option value="Estate / Full Yard (2,500+ sq ft)">Estate / Full Yard (2,500+ sq ft)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
                  >
                    <option value="As Soon As Possible">As Soon As Possible</option>
                    <option value="Within 1-2 Months">Within 1-2 Months</option>
                    <option value="This Season">This Season</option>
                    <option value="Planning for Next Season">Planning for Next Season</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Project Details / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what you are looking to build (e.g., backyard paver patio with firepit area, turf installation, front paver walkway)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors resize-none"
                ></textarea>
              </div>

              {/* Photo Upload Simulation */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Upload Site Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-brand-border hover:border-brand-emerald rounded-lg p-3 text-center bg-brand-dark/40 cursor-pointer transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    id="modal-file-upload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, fileName: e.target.files[0].name });
                      }
                    }}
                  />
                  <label htmlFor="modal-file-upload" className="cursor-pointer flex items-center justify-center space-x-2 text-xs text-brand-mutedText">
                    <Upload className="w-4 h-4 text-brand-sandstone" />
                    <span>{formData.fileName ? formData.fileName : 'Click to attach property photos or hand sketches'}</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-emerald to-brand-emeraldHover hover:from-brand-emeraldHover hover:to-brand-emerald text-white text-base font-bold py-3.5 px-6 rounded-xl shadow-glow-emerald transition-all duration-200 flex items-center justify-center space-x-2 border border-white/10"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <span>Request My Free Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-between text-[11px] text-brand-stone mt-3 px-1">
                  <span>• Quote delivered within 3 days</span>
                  <span>• No obligation</span>
                  <span>• Edmonton & Area</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
