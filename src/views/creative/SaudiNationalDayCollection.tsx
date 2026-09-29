import React, { useEffect } from 'react';
import { SAUDI_NATIONAL_DAY_DATA } from '../../data/creativeData';
import { CreativeImage } from '../../components/creative/CreativeImage';
import { soundEngine } from '../../utils/soundEngine';
import { MonogramN } from '../../components/MonogramN';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Sparkles,
  Calendar,
  Compass,
  Palette,
  Coffee,
  Film,
  Smile,
} from 'lucide-react';

interface SaudiNationalDayCollectionProps {
  onBack: () => void;
  onSelectProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const SaudiNationalDayCollection: React.FC<SaudiNationalDayCollectionProps> = ({
  onBack,
  onSelectProject,
  onNavigateContact,
}) => {
  const data = SAUDI_NATIONAL_DAY_DATA;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, []);

  const getBrandIcon = (id: string) => {
    if (id === 'snd-the-room') return Coffee;
    if (id === 'snd-ae-creative') return Film;
    if (id === 'snd-ratio') return Palette;
    return Smile;
  };

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#165B33] selection:text-white pt-24 pb-28">
      {/* Top Persistent Breadcrumb */}
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
            <span>Return to Creative Direction Archive</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#171717]/50">
            <span className="hidden sm:inline">CREATIVE ARCHIVE</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#165B33] font-semibold">SAUDI NATIONAL DAY 96</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16 border-b border-[#171717]/15">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#165B33]">
            <MonogramN size="sm" slashColor="#165B33" inkColor="#171717" interactive={false} />
            <span>National Occasion · Multi-Brand Creative Collection · 2026</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] leading-[1.05]">
                {data.title}
              </h1>
              <span
                style={{ fontFamily: '"Cairo", sans-serif' }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#165B33]"
                dir="rtl"
              >
                {data.titleArabic}
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#171717]/90 leading-snug">
              {data.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-3xl">
            {data.introduction}
          </p>

          {/* Curated Principles */}
          <div className="pt-4 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-[#171717]/60 border-t border-[#171717]/10">
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">OCCASION:</span>
              <span className="text-[#171717] font-medium">96th Saudi National Day</span>
            </div>
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">TOTAL BRANDS:</span>
              <span className="text-[#165B33] font-semibold">4 Distinct Case Studies</span>
            </div>
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">CREATIVE APPROACH:</span>
              <span className="text-[#171717] font-medium">Original Brand Identities Preserved</span>
            </div>
          </div>
        </div>
      </header>

      {/* Flagship Collection Master Artwork */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-10">
        <div className="relative border border-[#171717]/15 bg-[#171717] overflow-hidden">
          <CreativeImage
            src="/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg"
            candidates={[
              '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
              '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
              data.featuredBrands[0].heroImage,
            ]}
            alt="Saudi National Day 96 Master Artwork"
            aspectRatio="16/9"
            badge="COLLECTION MASTER KEY VISUAL"
            allowZoom={true}
          />
        </div>
      </section>

      {/* The 4 Independent Brand Showcase Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-16">
        <div className="flex items-baseline justify-between border-b border-[#171717]/10 pb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#165B33] block">
              Curated Brand Index
            </span>
            <h2 className="text-2xl font-light text-[#171717] mt-1">Four Autonomous Creative Responses</h2>
          </div>
          <span className="text-xs font-mono text-[#171717]/50 hidden sm:inline">
            Each links to a dedicated 6-Chapter Case Study
          </span>
        </div>

        <div className="space-y-12">
          {data.featuredBrands.map((brand, index) => {
            const Icon = getBrandIcon(brand.id);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={brand.id}
                onClick={() => {
                  soundEngine.playEditorialClick();
                  onSelectProject(brand.slug);
                }}
                className="group cursor-pointer bg-white border border-[#171717]/15 p-6 sm:p-10 transition-all hover:border-[#171717] hover:shadow-xl relative overflow-hidden"
              >
                {/* Brand Top Line */}
                <div className="flex items-center justify-between pb-6 border-b border-[#171717]/10 mb-8 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#165B33]">{brand.number}</span>
                    <span className="text-[#171717]/40">/</span>
                    <span className="uppercase tracking-widest text-[#171717]/70 font-medium">
                      {brand.discipline}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 border border-[#165B33]/25 bg-[#165B33]/5 text-[#165B33] text-[11px]">
                    {brand.status}
                  </span>
                </div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Showcase */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <CreativeImage
                      src={brand.heroImage}
                      candidates={brand.heroCandidates}
                      alt={brand.title}
                      aspectRatio="4/5"
                      allowZoom={false}
                      className="shadow-sm"
                      badge={brand.number}
                    />
                  </div>

                  {/* Brand Content */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#171717] tracking-tight">
                          {brand.title}
                        </h3>
                        {brand.titleArabic && (
                          <span
                            style={{ fontFamily: '"Cairo", sans-serif' }}
                            className="text-lg sm:text-xl text-[#171717]/50 font-bold"
                            dir="rtl"
                          >
                            {brand.titleArabic}
                          </span>
                        )}
                      </div>

                      <div className="p-3 bg-[#F4F1E9] border-l-2 border-[#165B33] text-sm sm:text-base font-editorial italic text-[#171717]/90">
                        &ldquo;{brand.concept}&rdquo;
                      </div>

                      <p className="text-sm sm:text-base text-[#171717]/75 font-light leading-relaxed pt-2">
                        {brand.description}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-[#171717]/10">
                      <span className="text-xs font-mono text-[#171717]/50">
                        Comprehensive 6-Chapter Case Study
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          soundEngine.playEditorialClick();
                          onSelectProject(brand.slug);
                        }}
                        className="px-6 py-3 bg-[#171717] text-[#F4F1E9] hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 group-hover:bg-[#165B33]"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collection Strategic Summary CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-12">
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F4F1E9] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#165B33] uppercase tracking-widest">
              Saudi Cultural Campaign Direction
            </span>
            <h3 className="text-2xl sm:text-3xl font-light leading-tight">
              Looking to architect an authentic national milestone campaign?
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F1E9]/70 leading-relaxed font-light">
              From high-concept espresso minimalism to full-scale cinematic film production and joyful family activations, let&apos;s build an enduring creative presence.
            </p>
          </div>
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onNavigateContact();
            }}
            className="px-6 py-3.5 bg-[#165B33] text-white hover:bg-white hover:text-[#171717] transition-all text-xs uppercase font-mono tracking-wider cursor-pointer whitespace-nowrap"
          >
            Contact Nouri Hazem
          </button>
        </div>
      </section>
    </article>
  );
};
