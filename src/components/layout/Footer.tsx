import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ShieldCheck, MapPin, ArrowRight, Layers, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../data/companyData';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-brand-dark border-t border-brand-border text-brand-stone pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-sandstone/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-border">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <RouterLink to="/" className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Brick Lawn Landscaping Official Logo"
                className="h-12 w-auto rounded-lg object-contain border border-brand-sandstone/40 shadow-glow-sandstone"
              />
              <div>
                <span className="block font-display font-extrabold text-xl tracking-tight text-white">
                  BRICK LAWN
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-sandstone">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </RouterLink>

            <p className="text-sm text-brand-mutedText max-w-sm leading-relaxed">
              "{COMPANY_INFO.philosophy}"
            </p>

            <div className="flex items-center space-x-2 text-xs text-brand-offwhite">
              <MapPin className="w-4 h-4 text-brand-sandstone flex-shrink-0" />
              <span>{COMPANY_INFO.location}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-brand-card hover:bg-brand-surface text-white text-xs font-bold px-4 py-2.5 rounded-lg border border-brand-border hover:border-brand-emerald transition-all inline-flex items-center space-x-2 group"
              >
                <span>Claim Your Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-sandstone group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-sandstone" />
              <span>Services</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <RouterLink
                    to={s.href}
                    className="text-brand-mutedText hover:text-white transition-colors block py-0.5"
                  >
                    {s.title}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Positioning & Standards */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Our Standards</span>
            </h3>
            <ul className="space-y-2 text-xs text-brand-mutedText">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                <span>Base & Drainage Focus</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                <span>Alberta Freeze-Thaw Ready</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                <span>250+ Training Videos</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                <span>No-Surprise Pricing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                <span>Workmanship Warranty</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Suppliers */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand-sandstone" />
              <span>Material Partners</span>
            </h3>
            <ul className="space-y-2 text-xs text-brand-mutedText">
              {COMPANY_INFO.partners.map((p) => (
                <li key={p.name} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sandstone/60"></span>
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-stone space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Brick Lawn Landscaping. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-brand-mutedText">Edmonton, Alberta, Canada</span>
            <span>•</span>
            <span className="text-brand-sandstone font-medium">Turf & Stone. Built to Last.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
