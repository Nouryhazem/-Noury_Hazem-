import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SoundToggle } from './components/SoundToggle';
import { HomeView } from './views/HomeView';
import { MarketingView } from './views/MarketingView';
import { CreativeView } from './views/CreativeView';
import { BrandingView } from './views/BrandingView';
import { DataView } from './views/DataView';
import { DigitalView } from './views/DigitalView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { CaseStudyView } from './views/CaseStudyView';
import { PROJECTS, Project } from './data/projectsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string | null>(null);

  // Sync hash routing for deep linking and back/forward browser support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        setCurrentProjectSlug(null);
        return;
      }

      if (hash.startsWith('case/')) {
        const slug = hash.replace('case/', '');
        setCurrentPage('case');
        setCurrentProjectSlug(slug);
      } else {
        setCurrentPage(hash);
        setCurrentProjectSlug(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, projectSlug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'case' || projectSlug) {
      const slug = projectSlug || (page.startsWith('case-') ? page.replace('case-', '') : '');
      setCurrentPage('case');
      setCurrentProjectSlug(slug);
      window.location.hash = `case/${slug}`;
    } else {
      setCurrentPage(page);
      setCurrentProjectSlug(null);
      window.location.hash = page === 'home' ? '' : page;
    }
  };

  // Resolve current active case study if on case view
  const activeCaseStudy: Project =
    (currentProjectSlug && PROJECTS.find((p) => p.slug === currentProjectSlug || p.id === currentProjectSlug)) ||
    PROJECTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1E9] text-[#171717] font-sans-primary selection:bg-[#315BFF] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage === 'case' ? 'marketing' : currentPage} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentPage === 'marketing' && (
          <MarketingView
            onSelectProject={(slug) => handleNavigate('case', slug)}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'creative' && (
          <CreativeView
            onSelectProject={(slug) => handleNavigate('case', slug)}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'branding' && (
          <BrandingView
            onSelectProject={(slug) => handleNavigate('case', slug)}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'data' && (
          <DataView onNavigateContact={() => handleNavigate('contact')} onNavigate={handleNavigate} />
        )}
        {currentPage === 'digital' && (
          <DigitalView onNavigateContact={() => handleNavigate('contact')} onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutView onNavigateContact={() => handleNavigate('contact')} />
        )}
        {currentPage === 'contact' && <ContactView />}
        {currentPage === 'case' && (
          <CaseStudyView
            project={activeCaseStudy}
            onBack={() => handleNavigate('marketing')}
            onNavigateToProject={(slug) => handleNavigate('case', slug)}
            onNavigateContact={() => handleNavigate('contact')}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom Sound Controller (Auto ON by default, positioned at bottom corner) */}
      <SoundToggle variant="floating" />
    </div>
  );
}
