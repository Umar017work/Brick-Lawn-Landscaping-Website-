import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuoteFormModal } from './components/common/QuoteFormModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HardscapesPage } from './pages/HardscapesPage';
import { ArtificialTurfPage } from './pages/ArtificialTurfPage';
import { PaverRepairPage } from './pages/PaverRepairPage';
import { QuickCurbPage } from './pages/QuickCurbPage';
import { LandscapeDesignPage } from './pages/LandscapeDesignPage';
import { OutdoorLivingPage } from './pages/OutdoorLivingPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('Hardscaping Patio');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedQuoteService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-offwhite">
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/hardscapes" element={<HardscapesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/artificial-turf" element={<ArtificialTurfPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/paver-repair" element={<PaverRepairPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/quick-curb" element={<QuickCurbPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/landscape-design" element={<LandscapeDesignPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services/outdoor-living" element={<OutdoorLivingPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/our-work" element={<OurWorkPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

        <QuoteFormModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          defaultService={selectedQuoteService}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
