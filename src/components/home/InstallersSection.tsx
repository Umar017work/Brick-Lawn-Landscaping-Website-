import React from 'react';
import { Award, Video, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const InstallersSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <Award className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Installation Rigor & Training</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Your Landscape Is Only As Good As <br />
            <span className="gradient-text-sandstone">The Crew Building It.</span>
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            High-grade materials fail when installed by untrained labor. We invest continuously in trade education, machine operation courses, and rigorous sub-base preparation standards.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 flex items-center justify-center text-brand-emerald border border-brand-emerald/30">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              250+ Professional Hardscape Videos
            </h3>
            <p className="text-xs text-brand-mutedText leading-relaxed">
              Our installers review extensive technical hardscape training video modules covering aggregate grading, slope mechanics, edge restraint installation, and polymeric sand locking.
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-sandstone/20 flex items-center justify-center text-brand-sandstone border border-brand-sandstone/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Trade School Construction Modules
            </h3>
            <p className="text-xs text-brand-mutedText leading-relaxed">
              Crew leads complete formal trade modules in excavation depths, soil density evaluation, retain wall gravity calculations, and surface water management.
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-emerald/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 flex items-center justify-center text-brand-emerald border border-brand-emerald/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Manufacturer & Machine Courses
            </h3>
            <p className="text-xs text-brand-mutedText leading-relaxed">
              Equipped with manufacturer installation certifications and machine operation refreshers to run excavation equipment safely and precisely.
            </p>
          </div>

        </div>

        {/* Standards Banner */}
        <div className="mt-12 bg-brand-dark/80 border border-brand-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.jpg"
              alt="Brick Lawn Logo"
              className="h-12 w-auto rounded-lg object-contain border border-brand-sandstone/40 shadow-glow-sandstone flex-shrink-0"
            />
            <div>
              <span className="block text-sm font-bold text-white">Yearly Crew Refreshers & Base Inspections</span>
              <span className="block text-xs text-brand-stone">Every project is managed under strict base compaction & drainage protocols.</span>
            </div>
          </div>
          <div className="text-xs font-semibold text-brand-sandstone bg-brand-surface px-4 py-2 rounded-lg border border-brand-border">
            Trained Construction Crew
          </div>
        </div>

      </div>
    </section>
  );
};
