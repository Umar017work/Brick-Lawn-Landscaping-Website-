import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/companyData';
import { Filter, Maximize2, X, ArrowRight } from 'lucide-react';

interface GalleryGridProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Patios', 'Driveways', 'Turf', 'Curb Edging', 'Outdoor Living', 'Landscape Design', 'Paver Repair'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="our-work" className="py-24 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-card px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-sandstone">
            <Filter className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Recent Outdoor Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Built Right. Built to Last.
          </h2>
          <p className="text-base text-brand-mutedText leading-relaxed">
            Explore our hardscaping, artificial turf, and landscape construction work in Edmonton and surrounding Alberta areas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-emerald text-white shadow-glow-emerald'
                  : 'bg-brand-card text-brand-stone hover:text-white border border-brand-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-brand-border bg-brand-dark cursor-pointer shadow-xl hover:border-brand-emerald transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-brand-emerald/30 text-brand-emerald border border-brand-emerald/40 px-2.5 py-0.5 rounded-md">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white font-display line-clamp-1 group-hover:text-brand-sandstone transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-dark/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-dark/80 text-white flex items-center justify-center hover:bg-brand-emerald transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-[60vh] overflow-hidden">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-brand-card border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sandstone">
                  {lightboxImage.category} • Edmonton Installation
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {lightboxImage.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  const service = lightboxImage.category;
                  setLightboxImage(null);
                  onOpenQuoteModal(service);
                }}
                className="bg-brand-emerald hover:bg-brand-emeraldHover text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-glow-emerald transition-all flex items-center space-x-2"
              >
                <span>Request Similar Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
