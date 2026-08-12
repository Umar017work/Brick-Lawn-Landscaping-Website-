import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronDown, PhoneCall, ArrowRight, Layers, Trees, Shield } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border py-3 shadow-2xl'
          : 'bg-gradient-to-b from-brand-dark/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="group flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="Brick Lawn Landscaping Official Logo"
              className="h-11 w-auto rounded-lg object-contain border border-brand-sandstone/40 shadow-glow-sandstone transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block font-display font-extrabold text-xl tracking-tight text-white group-hover:text-brand-sandstone transition-colors">
                BRICK LAWN
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-stone">
                Landscaping • Edmonton
              </span>
            </div>
          </RouterLink>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <RouterLink
              to="/"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-brand-sandstone' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </RouterLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-semibold transition-colors py-2 ${
                  location.pathname.startsWith('/services')
                    ? 'text-brand-sandstone'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-sandstone' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-brand-surface/95 backdrop-blur-xl border border-brand-border rounded-xl shadow-2xl p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-brand-stone border-b border-brand-border/50 mb-1">
                    Core Installation Services
                  </div>
                  {SERVICES.map((service) => (
                    <RouterLink
                      key={service.id}
                      to={service.href}
                      className="group flex items-start space-x-3 p-2.5 rounded-lg hover:bg-brand-card transition-colors"
                    >
                      <div className="w-8 h-8 rounded-md bg-brand-dark/60 flex items-center justify-center text-brand-emerald group-hover:text-brand-sandstone transition-colors border border-brand-border">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-brand-sandstone transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-brand-mutedText line-clamp-1">
                          {service.shortDesc}
                        </div>
                      </div>
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>

            <RouterLink
              to="/services/hardscapes"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/services/hardscapes' ? 'text-brand-sandstone' : 'text-gray-300 hover:text-white'
              }`}
            >
              Hardscapes
            </RouterLink>

            <RouterLink
              to="/our-work"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/our-work' ? 'text-brand-sandstone' : 'text-gray-300 hover:text-white'
              }`}
            >
              Our Work
            </RouterLink>

            <RouterLink
              to="/about"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-brand-sandstone' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </RouterLink>

            <RouterLink
              to="/contact"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-brand-sandstone' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </RouterLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right hidden xl:block">
              <span className="block text-[11px] font-medium text-brand-mutedText">Edmonton, Alberta</span>
              <span className="block text-xs font-bold text-brand-sandstone flex items-center justify-end gap-1">
                <Shield className="w-3 h-3" /> Quote within 3 days
              </span>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-brand-emerald to-brand-emeraldHover hover:from-brand-emeraldHover hover:to-brand-emerald text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-glow-emerald transition-all duration-200 transform hover:-translate-y-0.5 flex items-center space-x-2 border border-white/10"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-brand-emerald text-white text-xs font-bold px-3 py-2 rounded-md border border-white/10"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-2xl border-b border-brand-border px-4 pt-4 pb-8 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            <RouterLink
              to="/"
              className="text-base font-bold text-white py-2 border-b border-brand-border/50"
            >
              Home
            </RouterLink>
            
            <div className="py-2 border-b border-brand-border/50">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-sandstone mb-2">
                Services
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SERVICES.map((s) => (
                  <RouterLink
                    key={s.id}
                    to={s.href}
                    className="text-sm font-medium text-gray-300 hover:text-white py-1 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                    <span>{s.title}</span>
                  </RouterLink>
                ))}
              </div>
            </div>

            <RouterLink
              to="/services/hardscapes"
              className="text-base font-bold text-white py-2 border-b border-brand-border/50"
            >
              Hardscapes
            </RouterLink>
            <RouterLink
              to="/our-work"
              className="text-base font-bold text-white py-2 border-b border-brand-border/50"
            >
              Our Work
            </RouterLink>
            <RouterLink
              to="/about"
              className="text-base font-bold text-white py-2 border-b border-brand-border/50"
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/contact"
              className="text-base font-bold text-white py-2 border-b border-brand-border/50"
            >
              Contact & Quote
            </RouterLink>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-gradient-to-r from-brand-emerald to-brand-emeraldHover text-white font-bold py-3 px-4 rounded-xl shadow-glow-emerald flex items-center justify-center space-x-2"
            >
              <span>Claim Your Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-brand-stone mt-2">
              Quote delivered within 3 days • No-Surprise Pricing
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
