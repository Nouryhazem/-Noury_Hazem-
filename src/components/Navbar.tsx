import React, { useState, useEffect, useRef } from 'react';
import { MonogramN } from './MonogramN';
import { soundEngine } from '../utils/soundEngine';
import { Menu, X, ArrowUpRight, ChevronDown, Compass, Palette, Type, BarChart3, Code2 } from 'lucide-react';

export type NavPage = 'home' | 'marketing' | 'creative' | 'branding' | 'data' | 'digital' | 'about' | 'contact' | string;

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [disciplinesOpen, setDisciplinesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDisciplinesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    soundEngine.playEditorialClick();
    onNavigate(id);
    setMobileMenuOpen(false);
    setDisciplinesOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDisciplinesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDisciplinesOpen(false);
    }, 150);
  };

  const disciplines = [
    {
      id: 'creative',
      title: 'Creative Direction',
      subtitle: 'Art Direction, Motion & Storytelling',
      num: '02',
      icon: Palette,
    },
    {
      id: 'branding',
      title: 'Brand Architecture',
      subtitle: 'Identity Systems, Grids & Typography',
      num: '03',
      icon: Type,
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      subtitle: 'Attribution Modeling, Looker & BI',
      num: '04',
      icon: BarChart3,
    },
    {
      id: 'digital',
      title: 'Digital Systems',
      subtitle: 'Interactive Tech, React & Architecture',
      num: '05',
      icon: Code2,
    },
  ];

  const isDisciplineActive = ['creative', 'branding', 'data', 'digital'].includes(currentPage);
  const isMarketingActive = currentPage === 'marketing' || currentPage === 'case';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F4F1E9]/92 backdrop-blur-md border-b border-[#171717]/10 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Wordmark + Monogram signature */}
          <button
            onClick={() => {
              soundEngine.playNouriTwoNoteMotif();
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-hidden"
            aria-label="Nouri Hazem Portfolio Homepage"
          >
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span className="text-lg font-bold tracking-tight text-[#171717] group-hover:text-[#315BFF] transition-colors">
              NOURI<span className="text-[#315BFF]">/</span>
            </span>
          </button>

          {/* Zone 2: Streamlined Executive Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-medium tracking-wider uppercase text-[#171717]/80">
            {/* 01 Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`relative py-1 cursor-pointer transition-colors duration-150 hover:text-[#171717] ${
                currentPage === 'home' ? 'text-[#171717] font-semibold' : 'text-[#171717]/60'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#315BFF] transition-all" />
              )}
            </button>

            {/* 02 Strategic Marketing */}
            <button
              onClick={() => handleNavClick('marketing')}
              className={`relative py-1 cursor-pointer transition-colors duration-150 hover:text-[#171717] ${
                isMarketingActive ? 'text-[#171717] font-semibold' : 'text-[#171717]/60'
              }`}
            >
              Marketing
              {isMarketingActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#315BFF] transition-all" />
              )}
            </button>

            {/* 03 Disciplines Dropdown */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative py-1"
            >
              <button
                onClick={() => setDisciplinesOpen(!disciplinesOpen)}
                className={`flex items-center gap-1.5 cursor-pointer transition-colors duration-150 hover:text-[#171717] ${
                  isDisciplineActive ? 'text-[#171717] font-semibold' : 'text-[#171717]/60'
                }`}
                aria-expanded={disciplinesOpen}
                aria-haspopup="true"
              >
                <span>Disciplines</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    disciplinesOpen ? 'rotate-180 text-[#315BFF]' : 'text-[#171717]/40'
                  }`}
                />
                {isDisciplineActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#315BFF] transition-all" />
                )}
              </button>

              {/* Architectural Dropdown Flyout */}
              {disciplinesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#F4F1E9] border border-[#171717]/15 shadow-xl p-2 z-50 text-left animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                >
                  <div className="px-3 py-1.5 border-b border-[#171717]/10 mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#171717]/50 uppercase">
                      Strategic Matrix
                    </span>
                    <span className="text-[9px] font-mono text-[#315BFF]">4 SPECIALIZATIONS</span>
                  </div>

                  <div className="space-y-0.5">
                    {disciplines.map((item) => {
                      const isActive = currentPage === item.id;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full text-left p-2.5 flex items-start gap-3 transition-colors cursor-pointer group ${
                            isActive
                              ? 'bg-[#171717] text-[#F4F1E9]'
                              : 'hover:bg-[#E8E4DA] text-[#171717]'
                          }`}
                          role="menuitem"
                        >
                          <div
                            className={`p-1.5 border mt-0.5 transition-colors ${
                              isActive
                                ? 'border-[#315BFF] bg-[#171717] text-[#315BFF]'
                                : 'border-[#171717]/15 bg-[#F4F1E9] text-[#171717]/60 group-hover:text-[#315BFF] group-hover:border-[#315BFF]'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-medium tracking-tight ${
                                  isActive ? 'text-[#F4F1E9]' : 'text-[#171717]'
                                }`}
                              >
                                {item.title}
                              </span>
                              <span
                                className={`text-[10px] font-mono ${
                                  isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'
                                }`}
                              >
                                {item.num}
                              </span>
                            </div>
                            <p
                              className={`text-[11px] leading-tight line-clamp-1 mt-0.5 ${
                                isActive ? 'text-[#F4F1E9]/70' : 'text-[#171717]/60'
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Quick link back to Strategic Marketing */}
                  <div className="mt-1 pt-1.5 border-t border-[#171717]/10 px-2 flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick('marketing')}
                      className="text-[10px] font-mono uppercase tracking-wider text-[#315BFF] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Compass className="w-3 h-3" />
                      <span>01 Strategic Marketing Hub →</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 04 About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`relative py-1 cursor-pointer transition-colors duration-150 hover:text-[#171717] ${
                currentPage === 'about' ? 'text-[#171717] font-semibold' : 'text-[#171717]/60'
              }`}
            >
              About
              {currentPage === 'about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#315BFF] transition-all" />
              )}
            </button>

            {/* 05 Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`relative py-1 cursor-pointer transition-colors duration-150 hover:text-[#171717] ${
                currentPage === 'contact' ? 'text-[#171717] font-semibold' : 'text-[#171717]/60'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#315BFF] transition-all" />
              )}
            </button>
          </nav>

          {/* Zone 3: Connect CTA & Mobile menu toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-[#171717] rounded-none hover:bg-[#315BFF] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-[#171717] hover:text-[#315BFF] focus-visible:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Clear Strategic Hierarchy */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F1E9] pt-20 px-6 sm:px-8 pb-10 flex flex-col justify-between lg:hidden border-b border-[#171717]/10 animate-in fade-in duration-200 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 pb-2 border-b border-[#171717]/10">
              <span>Executive Navigation</span>
              <span>Nouri Hazem</span>
            </div>

            {/* 01 Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left text-2xl font-light py-1.5 transition-colors ${
                currentPage === 'home' ? 'text-[#315BFF] font-medium' : 'text-[#171717] hover:text-[#315BFF]'
              }`}
            >
              <span className="font-mono text-xs text-[#171717]/40 mr-3">01</span>
              Home
            </button>

            {/* 02 Marketing */}
            <button
              onClick={() => handleNavClick('marketing')}
              className={`block w-full text-left text-2xl font-light py-1.5 transition-colors ${
                isMarketingActive ? 'text-[#315BFF] font-medium' : 'text-[#171717] hover:text-[#315BFF]'
              }`}
            >
              <span className="font-mono text-xs text-[#171717]/40 mr-3">02</span>
              Strategic Marketing
            </button>

            {/* 03 Disciplines Section */}
            <div className="py-2 pl-3 border-l-2 border-[#171717]/15 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/50 mb-1">
                Strategic Disciplines
              </div>
              {disciplines.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left text-base py-1 transition-colors ${
                      isActive ? 'text-[#315BFF] font-medium' : 'text-[#171717]/70 hover:text-[#171717]'
                    }`}
                  >
                    <span className="font-mono text-[11px] text-[#171717]/40 mr-2">{item.num}</span>
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* 04 About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left text-2xl font-light py-1.5 transition-colors ${
                currentPage === 'about' ? 'text-[#315BFF] font-medium' : 'text-[#171717] hover:text-[#315BFF]'
              }`}
            >
              <span className="font-mono text-xs text-[#171717]/40 mr-3">04</span>
              About Nouri
            </button>

            {/* 05 Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left text-2xl font-light py-1.5 transition-colors ${
                currentPage === 'contact' ? 'text-[#315BFF] font-medium' : 'text-[#171717] hover:text-[#315BFF]'
              }`}
            >
              <span className="font-mono text-xs text-[#171717]/40 mr-3">05</span>
              Contact
            </button>
          </div>

          <div className="pt-6 border-t border-[#171717]/10 space-y-3">
            <div className="text-xs text-[#171717]/60 font-mono">
              Strategy / Creativity / Data / Digital
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 text-center text-sm font-medium bg-[#171717] text-white hover:bg-[#315BFF] transition-colors"
            >
              Initiate Collaboration
            </button>
          </div>
        </div>
      )}
    </>
  );
};

