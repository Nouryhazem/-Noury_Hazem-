import React, { useState, useEffect } from 'react';
import { CreativeChapterData, CreativeExecutionItem } from '../../data/creativeData';
import { CreativeImage } from '../../components/creative/CreativeImage';
import { soundEngine } from '../../utils/soundEngine';
import { MonogramN } from '../../components/MonogramN';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Maximize2,
  Calendar,
  Compass,
  Palette,
  Eye,
  Type,
  Lightbulb,
} from 'lucide-react';

interface CreativeCaseStudyViewProps {
  data: CreativeChapterData;
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export const CreativeCaseStudyView: React.FC<CreativeCaseStudyViewProps> = ({
  data,
  onBack,
  onNavigateToProject,
  onNavigateContact,
  nextProjectSlug,
  nextProjectTitle,
}) => {
  const [activeExecutionIndex, setActiveExecutionIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, [data.chapter00.projectName]);

  const scrollToSection = (id: string) => {
    soundEngine.playEditorialClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const c0 = data.chapter00;
  const c1 = data.chapter01;
  const c2 = data.chapter02;
  const c3 = data.chapter03;
  const c4 = data.chapter04;
  const c5 = data.chapter05;

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#315BFF] selection:text-white pt-24 pb-28">
      {/* ========================================================================= */}
      {/* PERSISTENT TOP BREADCRUMB & METADATA BAR */}
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
              {c0.parentCollection ? `Return to ${c0.parentCollection}` : 'Return to Creative Direction'}
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
      {/* CHAPTER 00: PROJECT INTRODUCTION */}
      {/* ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16 border-b border-[#171717]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Project Headline & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
              <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
              <span>
                {c0.parentCollection ? `${c0.parentCollection} · ` : ''}
                {c0.industry} · {c0.market}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] leading-[1.05]">
                  {c0.projectName}
                </h1>
                {c0.taglineArabic && (
                  <span
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-xl sm:text-3xl text-[#171717]/60 font-bold"
                    dir="rtl"
                  >
                    {c0.taglineArabic}
                  </span>
                )}
              </div>

              <p className="text-2xl sm:text-3xl font-editorial italic text-[#171717]/90 leading-snug">
                &ldquo;{c0.tagline}&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-3xl">
              {c0.introduction}
            </p>

            {/* Scope Tags */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/40 block">
                Creative Disciplines:
              </span>
              <div className="flex flex-wrap gap-2">
                {c0.disciplines.map((d, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 bg-white border border-[#171717]/10 text-[#171717]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Project Dossier Card */}
          <div className="lg:col-span-4 bg-white border border-[#171717]/15 p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 text-[10px] font-mono uppercase tracking-widest text-[#315BFF]">
              <span>Project Archive Dossier</span>
              <span>{c0.year || '2026'}</span>
            </div>

            <dl className="space-y-3 text-xs font-mono">
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Industry</dt>
                <dd className="font-medium text-[#171717]">{c0.industry}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Market</dt>
                <dd className="font-medium text-[#171717]">{c0.market}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Role</dt>
                <dd className="font-medium text-[#171717]">{c0.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#171717]/50 uppercase">Status</dt>
                <dd className="font-semibold text-[#315BFF]">{c0.projectStatus}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Outstanding Hero Visual */}
        <div className="mt-12">
          <CreativeImage
            src={c0.heroImage}
            candidates={c0.heroImageCandidates}
            alt={`${c0.projectName} Hero Artwork`}
            aspectRatio="16/9"
            showCaption={true}
            caption={`${c0.projectName} — ${c0.tagline}`}
            className="shadow-md"
          />
        </div>

        {/* Quick Chapter Navigation Bar */}
        <div className="mt-10 pt-4 border-t border-[#171717]/10 hidden md:flex items-center justify-between text-[11px] font-mono text-[#171717]/60">
          <span className="uppercase text-[#171717]/40 tracking-wider">Chapter Navigation:</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('chapter-01')}
              className="hover:text-[#315BFF] cursor-pointer"
            >
              01 The Challenge
            </button>
            <span>/</span>
            <button
              onClick={() => scrollToSection('chapter-02')}
              className="hover:text-[#315BFF] cursor-pointer"
            >
              02 The Big Idea
            </button>
            <span>/</span>
            <button
              onClick={() => scrollToSection('chapter-03')}
              className="hover:text-[#315BFF] cursor-pointer"
            >
              03 Art Direction
            </button>
            <span>/</span>
            <button
              onClick={() => scrollToSection('chapter-04')}
              className="hover:text-[#315BFF] cursor-pointer font-semibold text-[#315BFF]"
            >
              04 Executions
            </button>
            <span>/</span>
            <button
              onClick={() => scrollToSection('chapter-05')}
              className="hover:text-[#315BFF] cursor-pointer"
            >
              05 Contribution
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 01: THE CREATIVE CHALLENGE */}
      {/* ========================================================================= */}
      <section
        id="chapter-01"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
              CHAPTER 01 / THE CREATIVE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717] leading-tight">
              {c1.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg text-[#171717]/85 font-light leading-relaxed">
              {c1.challengeBrief}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#171717]/10">
              {/* Objectives */}
              <div className="p-6 bg-white border border-[#171717]/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                  Communication Objectives
                </span>
                <ul className="space-y-2 text-xs sm:text-sm font-light text-[#171717]/80">
                  {c1.communicationObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF] mt-1.5 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Constraints */}
              <div className="p-6 bg-white border border-[#171717]/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/60 block">
                  Brand & Cultural Constraints
                </span>
                <ul className="space-y-2 text-xs sm:text-sm font-light text-[#171717]/80">
                  {c1.brandConstraints.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]/40 mt-1.5 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-xs font-mono text-[#171717]/60 pt-2">
              <span className="text-[#171717]/40 uppercase mr-1">TARGET AUDIENCE:</span>
              <span>{c1.intendedAudience}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02: THE BIG IDEA */}
      {/* ========================================================================= */}
      <section
        id="chapter-02"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40"
      >
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
              CHAPTER 02 / THE BIG IDEA
            </span>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
                {c2.conceptName}
              </h2>
              {c2.conceptNameArabic && (
                <span
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                  className="text-2xl sm:text-3xl font-bold text-[#171717]/50"
                  dir="rtl"
                >
                  {c2.conceptNameArabic}
                </span>
              )}
            </div>
            <p className="text-lg sm:text-xl font-editorial italic text-[#171717]/90 leading-snug">
              &ldquo;{c2.headline}&rdquo;
            </p>
          </div>

          {/* Featured Idea Artwork Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <CreativeImage
                src={c2.featuredVisual}
                candidates={c2.featuredVisualCandidates}
                alt={`${c2.conceptName} Visual Hook`}
                aspectRatio="1/1"
                className="shadow-lg"
                badge="Central Creative Hook"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white border border-[#171717]/15 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#315BFF]">
                  The Visual Hook
                </span>
                <p className="text-sm sm:text-base font-light text-[#171717] leading-relaxed">
                  {c2.visualHook}
                </p>
              </div>

              {c2.verbalHook && (
                <div className="p-6 bg-white border border-[#171717]/15 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/60">
                    The Verbal Hook
                  </span>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <p className="text-base sm:text-lg font-editorial italic text-[#171717]">
                      &ldquo;{c2.verbalHook}&rdquo;
                    </p>
                    {c2.verbalHookArabic && (
                      <span className="text-sm font-mono text-[#315BFF]" dir="rtl">
                        {c2.verbalHookArabic}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/40 block">
                  Strategic Rationale:
                </span>
                <p className="text-xs sm:text-sm text-[#171717]/80 font-light leading-relaxed">
                  {c2.strategicRationale}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03: ART DIRECTION */}
      {/* ========================================================================= */}
      <section
        id="chapter-03"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15"
      >
        <div className="space-y-12">
          <div className="max-w-4xl space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
              CHAPTER 03 / ART DIRECTION & CRAFT
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
              {c3.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed pt-2">
              {c3.artDirectionOverview}
            </p>
          </div>

          {/* Techniques Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c3.techniques.map((tech, idx) => (
              <div key={idx} className="p-6 bg-white border border-[#171717]/10 space-y-2">
                <span className="text-[10px] font-mono text-[#315BFF] block">
                  Technique 0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-[#171717]">{tech.title}</h3>
                <p className="text-xs text-[#171717]/70 font-light leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          {/* Palette & Typography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-[#171717]/10">
            {/* Color Swatches */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50 block">
                Color Direction & Allocation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {c3.palette.map((color, idx) => (
                  <div key={idx} className="p-3 bg-white border border-[#171717]/10 space-y-2">
                    <div
                      style={{ backgroundColor: color.hex }}
                      className="w-full h-12 border border-[#171717]/10 shadow-inner"
                    />
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-[#171717]">{color.name}</div>
                      <div className="text-[10px] font-mono text-[#171717]/50">{color.hex}</div>
                      <div className="text-[10px] text-[#171717]/70 font-light">{color.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Notes */}
            <div className="lg:col-span-5 p-6 bg-white border border-[#171717]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315BFF]">
                <Type className="w-3.5 h-3.5" />
                <span>Typographic Integration</span>
              </div>
              <p className="text-xs sm:text-sm text-[#171717]/80 font-light leading-relaxed">
                {c3.typographyNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04: CREATIVE EXECUTIONS (PRIMARY GALLERY) */}
      {/* ========================================================================= */}
      <section
        id="chapter-04"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-white"
      >
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#171717]/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
                CHAPTER 04 / CREATIVE EXECUTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
                {c4.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#171717]/70 font-light">{c4.overview}</p>
            </div>

            <span className="text-xs font-mono text-[#171717]/50 whitespace-nowrap">
              {c4.executions.length} Documented Workpieces · Click image for fullscreen
            </span>
          </div>

          {/* Editorial Asymmetric Artwork Showcase */}
          <div className="space-y-16">
            {c4.executions.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-10 bg-[#F4F1E9] border border-[#171717]/10 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#171717]/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#315BFF] font-semibold">EXECUTION 0{idx + 1}</span>
                      <span className="text-[#171717]/30">/</span>
                      <span className="uppercase text-[#171717]/70">{item.category}</span>
                    </div>

                    {item.titleArabic && (
                      <span className="text-[#171717]/50 font-mono" dir="rtl">
                        {item.titleArabic}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Media */}
                    <div className={isEven ? 'lg:col-span-8' : 'lg:col-span-8 lg:order-2'}>
                      <CreativeImage
                        src={item.primaryImage}
                        candidates={item.candidateImages}
                        alt={item.title}
                        aspectRatio={item.aspectRatio}
                        allowZoom={true}
                        className="shadow-sm"
                      />
                    </div>

                    {/* Metadata & Analysis */}
                    <div className={isEven ? 'lg:col-span-4 space-y-4' : 'lg:col-span-4 lg:order-1 space-y-4'}>
                      <h3 className="text-xl sm:text-2xl font-light text-[#171717] tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#171717]/80 font-light leading-relaxed">
                        {item.caption}
                      </p>

                      {item.captionArabic && (
                        <p
                          style={{ fontFamily: '"Cairo", sans-serif' }}
                          className="text-xs text-[#171717]/60 leading-relaxed pt-2 border-t border-[#171717]/10"
                          dir="rtl"
                        >
                          {item.captionArabic}
                        </p>
                      )}

                      <div className="pt-2 text-[10px] font-mono text-[#315BFF] flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3" />
                        <span>Click visual to view high-resolution fullscreen</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05: CREATIVE CONTRIBUTION */}
      {/* ========================================================================= */}
      <section
        id="chapter-05"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
              CHAPTER 05 / CREATIVE CONTRIBUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
              {c5.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg text-[#171717]/85 font-light leading-relaxed">
              {c5.summary}
            </p>

            {/* Verified Responsibilities */}
            <div className="p-6 bg-white border border-[#171717]/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                Verified Author Responsibilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c5.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-light text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Statement */}
            <div className="p-6 bg-[#EAE6DC]/60 border-l-2 border-[#315BFF] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/60 block">
                Creative Director&apos;s Conclusion:
              </span>
              <p className="text-sm sm:text-base font-editorial italic text-[#171717]/90 leading-relaxed">
                &ldquo;{c5.creativeApproachStatement}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL PROJECT NAVIGATION & CALL TO ACTION */}
      {/* ========================================================================= */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-8 pt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#171717]/10 pb-12">
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onBack();
            }}
            className="text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#315BFF] transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {c0.parentCollection ? `Back to ${c0.parentCollection}` : 'Back to Creative Direction'}
            </span>
          </button>

          {nextProjectSlug && (
            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateToProject(nextProjectSlug);
              }}
              className="px-6 py-3.5 bg-[#171717] text-[#F4F1E9] hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
            >
              <span>Next Creative Project: {nextProjectTitle || 'Explore Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Contact Strip */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              Available for Commission
            </span>
            <p className="text-sm font-light text-[#171717]/80">
              Ready to architect an ambitious creative campaign or visual identity?
            </p>
          </div>
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onNavigateContact();
            }}
            className="px-6 py-3 bg-[#315BFF] text-white hover:bg-[#171717] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer whitespace-nowrap"
          >
            Contact Nouri Hazem
          </button>
        </div>
      </footer>
    </article>
  );
};
