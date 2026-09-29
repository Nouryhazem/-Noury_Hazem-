import React, { useState, useEffect, useRef } from 'react';
import {
  CreativeChapterData,
  CreativeSlide,
  getProjectSlides,
} from '../../data/creativeData';
import { soundEngine } from '../../utils/soundEngine';
import { MonogramN } from '../../components/MonogramN';
import { getAssetUrl } from '../../utils/assetUrl';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Layers,
} from 'lucide-react';

interface CreativeCaseStudyViewProps {
  data: CreativeChapterData;
  slug?: string;
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export const CreativeCaseStudyView: React.FC<CreativeCaseStudyViewProps> = ({
  data,
  slug,
  onBack,
  onNavigateToProject,
  onNavigateContact,
  nextProjectSlug,
  nextProjectTitle,
}) => {
  const c0 = data.chapter00;

  // Derive project slug from name to retrieve full original designs
  const projectNameUpper = c0.projectName.toUpperCase();
  const derivedSlug = projectNameUpper.includes('JURAA')
    ? 'juraa-creative-campaign'
    : projectNameUpper.includes('DIPDUX')
    ? 'dipdux-analytica'
    : projectNameUpper.includes('ROOM')
    ? 'the-room-snd96'
    : projectNameUpper.includes('AE CREATIVE')
    ? 'ae-creative-snd96'
    : projectNameUpper.includes('RATIO')
    ? 'ratio-snd96'
    : projectNameUpper.includes('BÉARU') || projectNameUpper.includes('BEARU')
    ? 'bearu-snd96'
    : projectNameUpper.includes('REEF ASIA')
    ? 'reef-asia-kitchens'
    : '';

  const projectSlug = slug || derivedSlug;

  const slides: CreativeSlide[] = getProjectSlides(projectSlug, data);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top and reset slide on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
    setCurrentSlideIndex(0);
  }, [c0.projectName]);

  // Keep thumbnail in view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentSlideIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [currentSlideIndex]);

  const handlePrevSlide = () => {
    soundEngine.playMechanicalTick(1);
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    soundEngine.playMechanicalTick(1);
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSelectSlide = (index: number) => {
    if (index !== currentSlideIndex) {
      soundEngine.playMechanicalTick(1);
      setCurrentSlideIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isZoomOpen) {
        if (e.key === 'Escape') setIsZoomOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomOpen, slides.length]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    setTouchStartX(null);
  };

  const activeSlide = slides[currentSlideIndex] || slides[0];

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#315BFF] selection:text-white pt-24 pb-28">
      {/* ========================================================================= */}
      {/* PERSISTENT TOP BREADCRUMB & RETURN LINK                                    */}
      {/* ========================================================================= */}
      <div className="sticky top-14 z-30 bg-[#F4F1E9]/95 backdrop-blur-md border-b border-[#171717]/10 py-3 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#315BFF] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>
              {c0.parentCollection
                ? `Return to ${c0.parentCollection}`
                : 'Return to Creative Direction'}
            </span>
          </button>

          <div className="flex items-center gap-3 text-xs font-mono text-[#171717]/50">
            <span className="hidden sm:inline">CREATIVE DIRECTION</span>
            {c0.parentCollection && (
              <>
                <span className="hidden sm:inline">/</span>
                <span className="hidden md:inline">{c0.parentCollection}</span>
              </>
            )}
            <span>/</span>
            <span className="text-[#171717] font-semibold">{c0.projectName}</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PROJECT HEADER: TITLE, SHORT DESCRIPTION & CREATIVE ROLE                   */}
      {/* ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-8">
        <div className="max-w-4xl space-y-4">
          {/* Metadata Badges */}
          <div className="flex items-center gap-3 flex-wrap text-xs font-mono">
            {c0.parentCollection ? (
              <span className="px-2.5 py-1 bg-[#165B33] text-white uppercase tracking-widest text-[11px] font-semibold">
                {c0.parentCollection}
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-[#171717] text-white uppercase tracking-widest text-[11px] font-semibold">
                Creative Direction
              </span>
            )}

            <span className="text-[#171717]/60 uppercase tracking-wider">
              {c0.industry} · {c0.market}
            </span>

            {c0.taglineArabic && (
              <span className="text-[#315BFF] font-semibold text-xs" dir="rtl">
                {c0.taglineArabic}
              </span>
            )}
          </div>

          {/* Large Project Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] leading-[1.02]">
              {c0.projectName}
            </h1>
            {c0.tagline && (
              <p className="text-xl sm:text-2xl font-editorial italic text-[#171717]/80">
                &ldquo;{c0.tagline}&rdquo;
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-[#171717]/75 font-light leading-relaxed max-w-3xl">
            {c0.introduction}
          </p>

          {/* Creative Role & Disciplines Bar */}
          <div className="pt-3 border-t border-[#171717]/10 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-mono">
            <div>
              <span className="text-[#171717]/40 uppercase mr-1.5">CREATIVE ROLE:</span>
              <span className="text-[#171717] font-semibold bg-[#171717]/5 px-2 py-0.5 border border-[#171717]/10">
                {c0.role}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/40 uppercase mr-1.5">GALLERY:</span>
              <span className="text-[#315BFF] font-semibold">
                {slides.length} Original Supplied Designs
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* PREMIUM IMAGE-FIRST SLIDESHOW                                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-2 space-y-6">
        {/* Main Presentation Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[52vh] sm:h-[64vh] md:h-[72vh] max-h-[760px] min-h-[420px] bg-[#141414] border border-[#171717]/20 shadow-2xl overflow-hidden flex items-center justify-center select-none group"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none" />

          {/* Active Image (object-contain ensures zero cropping for all aspect ratios) */}
          {activeSlide && (
            <img
              key={activeSlide.id}
              src={getAssetUrl(activeSlide.image)}
              alt={activeSlide.title}
              className="max-h-full max-w-full w-auto h-auto object-contain p-4 sm:p-8 drop-shadow-2xl transition-all duration-300 ease-out"
              style={{ imageRendering: 'auto' }}
            />
          )}

          {/* Bottom Progress Bar: visually indicates scroll progress through gallery */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 pointer-events-none">
            <div
              className="h-full bg-[#315BFF] transition-all duration-300 ease-out"
              style={{
                width: `${slides.length > 0 ? ((currentSlideIndex + 1) / slides.length) * 100 : 0}%`,
              }}
            />
          </div>

          {/* Top Left: Slide Counter Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#171717]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 text-white font-mono text-xs">
            <span className="text-[#315BFF] font-bold">
              {String(currentSlideIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-white/40">/</span>
            <span className="text-white/70">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Top Right: Fullscreen Zoom Inspection Button */}
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              setIsZoomOpen(true);
            }}
            className="absolute top-4 right-4 z-20 p-2.5 bg-[#171717]/85 backdrop-blur-md border border-white/15 text-white hover:text-[#315BFF] hover:border-[#315BFF] transition-all cursor-pointer shadow-lg"
            title="Inspect artwork in full resolution"
            aria-label="Inspect artwork in full resolution"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Navigation Controls: Previous Slide */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-[#171717]/80 hover:bg-[#171717] text-white/90 hover:text-white border border-white/20 hover:border-[#315BFF] backdrop-blur-md transition-all cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Controls: Next Slide */}
          <button
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-[#171717]/80 hover:bg-[#171717] text-white/90 hover:text-white border border-white/20 hover:border-[#315BFF] backdrop-blur-md transition-all cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Mobile Swipe Hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white/40 pointer-events-none sm:hidden">
            Swipe left or right
          </div>
        </div>

        {/* Slide Caption & Context Bar */}
        {activeSlide && (
          <div className="p-6 bg-white border border-[#171717]/15 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#171717]/10">
              <div className="flex items-center gap-3 flex-wrap">
                {activeSlide.category && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#171717] text-white font-semibold">
                    {activeSlide.category}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-medium text-[#171717] tracking-tight">
                  {activeSlide.title}
                </h3>
              </div>

              {activeSlide.titleArabic && (
                <span className="text-sm font-semibold text-[#171717]/60 font-mono" dir="rtl">
                  {activeSlide.titleArabic}
                </span>
              )}
            </div>

            {activeSlide.caption && (
              <p className="text-xs sm:text-sm text-[#171717]/75 font-light leading-relaxed">
                {activeSlide.caption}
              </p>
            )}
          </div>
        )}

        {/* Interactive Thumbnail Filmstrip */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#171717]/60">
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              ORIGINAL GALLERY STRIP ({slides.length} DESIGNS)
            </span>
            <span className="hidden sm:inline text-[11px]">
              Click any thumbnail or use keyboard arrows ← →
            </span>
          </div>

          <div
            ref={thumbnailContainerRef}
            className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar"
          >
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`relative shrink-0 w-24 sm:w-28 md:w-32 aspect-square bg-[#1B1B1B] border transition-all duration-300 cursor-pointer overflow-hidden group/thumb ${
                    isActive
                      ? 'border-[#315BFF] ring-2 ring-[#315BFF]/50 scale-[1.02] shadow-md opacity-100'
                      : 'border-[#171717]/20 opacity-60 hover:opacity-95 hover:border-[#171717]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                >
                  <img
                    src={getAssetUrl(slide.image)}
                    alt={slide.title}
                    className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover/thumb:scale-105"
                  />
                  <div className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-[#171717]/90 text-[9px] font-mono text-white">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEXT PROJECT / COLLECTION NAVIGATION                                      */}
      {/* ========================================================================= */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 pt-8 border-t border-[#171717]/15">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onBack();
            }}
            className="text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#315BFF] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {c0.parentCollection
                ? `Back to ${c0.parentCollection}`
                : 'Back to Creative Archive'}
            </span>
          </button>

          {nextProjectSlug && (
            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateToProject(nextProjectSlug);
              }}
              className="px-6 py-3.5 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span>Next Project{nextProjectTitle ? `: ${nextProjectTitle}` : ''}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* FULLSCREEN ARTWORK INSPECTION MODAL                                        */}
      {/* ========================================================================= */}
      {isZoomOpen && activeSlide && (
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 border border-white/20 rounded-full hover:border-white transition-colors cursor-pointer"
            aria-label="Close zoom inspection"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[94vw] flex flex-col items-center cursor-default space-y-4"
          >
            <img
              src={getAssetUrl(activeSlide.image)}
              alt={activeSlide.title}
              className="max-h-[80vh] max-w-[92vw] object-contain drop-shadow-2xl"
            />
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-[#315BFF] uppercase tracking-wider block">
                {activeSlide.category || 'ORIGINAL DESIGN'} · {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <h4 className="text-white text-base sm:text-lg font-light">
                {activeSlide.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
