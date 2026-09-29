import React, { useState, useEffect } from 'react';
import { RELAX_CASE_STUDY } from '../data/relaxData';
import { PROJECTS } from '../data/projectsData';
import { RelaxLogo } from '../components/RelaxLogo';
import { soundEngine } from '../utils/soundEngine';
import { MonogramN } from '../components/MonogramN';
import { getAssetUrl } from '../utils/assetUrl';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Compass,
  Type,
  Grid,
  Box,
  Palette,
  Eye,
  Coffee,
  Sparkles,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface RelaxCaseStudyViewProps {
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const RelaxCaseStudyView: React.FC<RelaxCaseStudyViewProps> = ({
  onBack,
  onNavigateToProject,
  onNavigateContact,
}) => {
  const data = RELAX_CASE_STUDY;

  // Chapter 00 Interactive: Level Ascent (01 to 07)
  const [currentLevel, setCurrentLevel] = useState<number>(7);

  // Chapter 02 Interactive: Active Logo Configuration
  const [activeLogoId, setActiveLogoId] = useState<string>('vertical');

  // Chapter 03 Interactive: Active Color Swatch
  const [activeColorHex, setActiveColorHex] = useState<string>('#1B0F0A');

  // Chapter 04 Interactive: Active Application Touchpoint
  const [activeTouchpointIndex, setActiveTouchpointIndex] = useState<number>(0);

  // Next Project
  const nextProject = PROJECTS.find((p) => p.id === 'reef-asia') || PROJECTS[2];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, []);

  const handleLevelSelect = (level: number) => {
    soundEngine.playEditorialClick();
    setCurrentLevel(level);
  };

  const handleLogoSelect = (id: string) => {
    soundEngine.playEditorialClick();
    setActiveLogoId(id);
  };

  const handleTouchpointSelect = (idx: number) => {
    soundEngine.playEditorialClick();
    setActiveTouchpointIndex(idx);
  };

  const scrollToSection = (id: string) => {
    soundEngine.playEditorialClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeLogoConfig =
    data.identityArchitecture.logoConfigurations.find((l) => l.id === activeLogoId) ||
    data.identityArchitecture.logoConfigurations[1];

  const activeColor =
    data.visualLanguage.colorSystem.find((c) => c.hex === activeColorHex) ||
    data.visualLanguage.colorSystem[0];

  const activeTouchpoint = data.applications.touchpoints[activeTouchpointIndex];

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#B8924E] selection:text-white pt-24 pb-28">
      {/* ========================================================================= */}
      {/* TOP PERSISTENT BREADCRUMB & METADATA BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-14 z-30 bg-[#F4F1E9]/95 backdrop-blur-md border-b border-[#171717]/10 py-3 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#B8924E] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Brand Architecture</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#171717]/50">
            <span>BRAND ARCHITECTURE</span>
            <span>/</span>
            <span className="text-[#3B1F14] font-medium font-serif italic">RELAX CAFÉ</span>
            <span>·</span>
            <span className="text-[#B8924E]">فوق الزحمة</span>
            <span>·</span>
            <span className="text-[#171717]/40">LEVEL SEVEN</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono px-2 py-0.5 border border-[#B8924E]/40 bg-[#B8924E]/10 text-[#3B1F14] font-medium">
              IDENTITY ARCHITECTURE
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHAPTER 00 — PROJECT HERO */}
      {/* ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16 border-b border-[#171717]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Title & Editorial Headline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B8924E]">
              <MonogramN size="sm" slashColor="#B8924E" inkColor="#171717" interactive={false} />
              <span>{data.meta.category} · {data.meta.location}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1
                  style={{ fontFamily: '"Pinyon Script", cursive' }}
                  className="text-6xl sm:text-8xl md:text-9xl text-[#1B0F0A] leading-none"
                >
                  Relax
                </h1>
                <span
                  style={{ fontFamily: '"El Messiri", sans-serif' }}
                  className="text-3xl sm:text-5xl text-[#B8924E] font-semibold"
                  dir="rtl"
                >
                  فوق الزحمة
                </span>
              </div>

              {/* The Seventh Floor Ascent Device */}
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#171717]/60">
                  <span className="px-2 py-0.5 border border-[#171717]/20 bg-[#E8E4DA] text-[#171717] font-semibold uppercase">
                    ELEVATION AXIS
                  </span>
                  <div className="flex-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => handleLevelSelect(lvl)}
                        className={`px-2 py-0.5 text-[10px] font-mono border transition-all cursor-pointer ${
                          currentLevel === lvl
                            ? 'bg-[#1B0F0A] text-[#F3E9DA] border-[#1B0F0A] font-bold'
                            : 'bg-white/40 text-[#171717]/50 border-transparent hover:border-[#171717]/20'
                        }`}
                      >
                        0{lvl}
                      </button>
                    ))}
                    <span className="text-[10px] text-[#B8924E] px-2 font-mono uppercase hidden sm:inline">
                      LEVEL 07 · THE DESTINATION
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#171717] tracking-tight leading-[1.12]">
                &ldquo;{data.meta.mainStatement}&rdquo;
              </p>
            </div>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4 max-w-3xl">
              <p>{data.meta.supportingStatement}</p>
              <div className="border-l-2 border-[#B8924E] pl-4 py-1 text-sm sm:text-base font-serif italic text-[#3B1F14]">
                &ldquo;{data.meta.brandIdeaEnglish}&rdquo; — {data.meta.brandIdeaArabic}
              </div>
            </div>

            {/* Scope Tags */}
            <div className="pt-4 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/40">
                Discipline Architecture:
              </div>
              <div className="flex flex-wrap gap-2">
                {data.meta.projectDisciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 bg-[#E8E4DA] border border-[#171717]/10 text-[#171717]/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Brief Specifications Card */}
          <div className="lg:col-span-4 bg-[#1B0F0A] text-[#F3E9DA] border border-[#B8924E]/30 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#B8924E]">
              <span>Brand Architecture Dossier</span>
              <span>RLX-07</span>
            </div>

            {/* Featured Authentic Monogram Mark on Espresso Ground */}
            <div className="py-6 flex flex-col items-center justify-center border-y border-white/10 bg-[#3B1F14]/40">
              <RelaxLogo variant="vertical" size="lg" color="#B8924E" />
              <div
                style={{ fontFamily: '"El Messiri", sans-serif' }}
                className="text-xs text-[#B8924E] mt-3"
              >
                ريلاكس كافيه · المنيا
              </div>
            </div>

            <dl className="space-y-3.5 text-xs font-mono">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-white/40 uppercase">Location</dt>
                <dd className="font-medium text-white">{data.meta.location}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-white/40 uppercase">Floor Elevation</dt>
                <dd className="font-medium text-[#B8924E]">Level Seven (فوق الزحمة)</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-white/40 uppercase">Discipline</dt>
                <dd className="font-medium text-white">{data.meta.discipline}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <dt className="text-white/40 uppercase">Role</dt>
                <dd className="font-medium text-[#B8924E]">{data.meta.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/40 uppercase">Status</dt>
                <dd className="font-medium text-white">{data.meta.status}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Quick Chapter Navigation Bar */}
        <div className="mt-8 pt-4 border-t border-[#171717]/10 hidden md:flex items-center justify-between text-[11px] font-mono text-[#171717]/60">
          <span className="uppercase text-[#171717]/40 tracking-wider">Chapter Navigation:</span>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollToSection('chapter-01')} className="hover:text-[#B8924E] cursor-pointer">
              01 Positioning
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-02')} className="hover:text-[#B8924E] cursor-pointer font-semibold text-[#171717]">
              02 Logo System
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-03')} className="hover:text-[#B8924E] cursor-pointer">
              03 Visual Language
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-04')} className="hover:text-[#B8924E] cursor-pointer font-semibold text-[#B8924E]">
              04 Touchpoints
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-05')} className="hover:text-[#B8924E] cursor-pointer">
              05 System
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-06')} className="hover:text-[#B8924E] cursor-pointer">
              06 Contribution
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 01 — STRATEGIC POSITIONING */}
      {/* ========================================================================= */}
      <section id="chapter-01" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.positioning.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.positioning.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4">
              <p>{data.positioning.body[0]}</p>
              <p>{data.positioning.body[1]}</p>
            </div>
          </div>

          {/* Strategic Expression Lockup */}
          <div className="p-8 sm:p-12 bg-[#1B0F0A] text-[#F3E9DA] border border-[#B8924E]/30 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono text-[#B8924E]">
              <span className="uppercase tracking-widest">FOUNDATIONAL STRATEGIC METAPHOR</span>
              <span>MINYA · LEVEL SEVEN</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
                  The Core Arabic Expression:
                </span>
                <div
                  style={{ fontFamily: '"El Messiri", sans-serif' }}
                  className="text-4xl sm:text-6xl font-semibold text-[#B8924E] tracking-tight leading-tight"
                  dir="rtl"
                >
                  {data.positioning.strategicExpressionArabic}
                </div>
                <div className="text-lg font-serif italic text-[#F3E9DA]/80 pt-1">
                  &ldquo;{data.positioning.supportingEnglishExpression}&rdquo;
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 text-xs sm:text-sm font-light text-white/80 leading-relaxed space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8924E] block">
                  Strategic Logic:
                </span>
                <p>{data.positioning.metaphorExplanation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02 — IDENTITY ARCHITECTURE (INTERACTIVE LOGO SYSTEM) */}
      {/* ========================================================================= */}
      <section id="chapter-02" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/30">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.identityArchitecture.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.identityArchitecture.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-2">
              <p>{data.identityArchitecture.body[0]}</p>
              <p>{data.identityArchitecture.body[1]}</p>
            </div>

            {/* Conceptual Roles: R7 and Pause */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-[#EFECE3] border border-[#171717]/10 space-y-1">
                <span className="text-xs font-mono uppercase text-[#B8924E] font-semibold">
                  Conceptual Role: R7
                </span>
                <p className="text-xs text-[#171717]/80 leading-relaxed">
                  {data.identityArchitecture.conceptualRoles.roleR7}
                </p>
              </div>

              <div className="p-5 bg-[#EFECE3] border border-[#171717]/10 space-y-1">
                <span className="text-xs font-mono uppercase text-[#B8924E] font-semibold">
                  Conceptual Role: Pause
                </span>
                <p className="text-xs text-[#171717]/80 leading-relaxed">
                  {data.identityArchitecture.conceptualRoles.rolePause}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive 4-Tier Logo System Showcase */}
          <div className="bg-[#1B0F0A] text-[#F3E9DA] border border-[#B8924E]/30 p-6 sm:p-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
              <span className="uppercase text-[#B8924E]">
                [ 04 DOCUMENTED LOGO SYSTEM CONFIGURATIONS ]
              </span>
              <span className="text-white/50">SELECT TIER TO INSPECT MARK</span>
            </div>

            {/* Configuration Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {data.identityArchitecture.logoConfigurations.map((cfg) => {
                const isActive = activeLogoId === cfg.id;
                return (
                  <button
                    key={cfg.id}
                    onClick={() => handleLogoSelect(cfg.id)}
                    className={`p-4 text-left border transition-all cursor-pointer relative ${
                      isActive
                        ? 'bg-[#3B1F14] text-[#F3E9DA] border-[#B8924E] shadow-sm'
                        : 'bg-white/5 text-white/70 border-white/10 hover:border-[#B8924E]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono ${isActive ? 'text-[#B8924E]' : 'text-white/40'}`}>
                        TIER {cfg.num}
                      </span>
                      <span className="text-[10px] font-mono text-white/30">
                        {cfg.aspect}
                      </span>
                    </div>
                    <div className="font-semibold text-xs tracking-tight text-white">
                      {cfg.title}
                    </div>
                    <div className="text-[11px] text-white/60 font-mono mt-0.5 line-clamp-1">
                      {cfg.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Logo Stage Presentation */}
            <div className="bg-[#140A07] border border-white/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Rendered Vector Mark */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-[#1B0F0A] border border-white/5 rounded-xs min-h-[220px]">
                {activeLogoId === 'symbol' && (
                  <RelaxLogo variant="monogram" size="xl" color="#B8924E" />
                )}
                {activeLogoId === 'vertical' && (
                  <RelaxLogo variant="vertical" size="lg" color="#B8924E" />
                )}
                {activeLogoId === 'bilingual' && (
                  <RelaxLogo variant="bilingual" size="lg" color="#B8924E" />
                )}
                {activeLogoId === 'ivory' && (
                  <div className="p-6 bg-[#3B1F14] border border-[#B8924E]/20 flex items-center justify-center w-full">
                    <RelaxLogo variant="vertical" size="lg" color="#F3E9DA" />
                  </div>
                )}
              </div>

              {/* Right: Technical Explanation */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8924E]">
                    Configuration {activeLogoConfig.num} · {activeLogoConfig.subtitle}
                  </span>
                  <h3 className="text-2xl font-light text-white mt-1">
                    {activeLogoConfig.title}
                  </h3>
                </div>

                <p className="text-sm font-light text-white/80 leading-relaxed font-mono">
                  {activeLogoConfig.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-white/50">
                  <span>Ground: Espresso Shadow (#1B0F0A)</span>
                  <span>·</span>
                  <span>Ink: Aged Brass (#B8924E)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03 — THE VISUAL LANGUAGE (COLOR, TYPE, MATERIALS) */}
      {/* ========================================================================= */}
      <section id="chapter-03" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-16">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.visualLanguage.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.visualLanguage.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-2">
              <p>{data.visualLanguage.body[0]}</p>
              <p>{data.visualLanguage.body[1]}</p>
            </div>
          </div>

          {/* Color System Breakdown */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#171717]/10 text-xs font-mono">
              <span className="text-[#3B1F14] uppercase tracking-widest font-semibold">
                [ 05-COLOR ARCHITECTURAL PALETTE & SYSTEM PROPORTIONS ]
              </span>
              <span className="text-[#171717]/50">CLICK SWATCH TO INSPECT ALLOCATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {data.visualLanguage.colorSystem.map((c) => {
                const isSelected = activeColorHex === c.hex;
                return (
                  <div
                    key={c.hex}
                    onClick={() => {
                      soundEngine.playEditorialClick();
                      setActiveColorHex(c.hex);
                    }}
                    style={{ backgroundColor: c.hex, color: c.textColor }}
                    className={`p-6 border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                      isSelected ? 'ring-2 ring-[#B8924E] shadow-lg scale-[1.02]' : 'border-transparent'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono opacity-70">
                        <span>{c.allocation}</span>
                        <span>{c.hex}</span>
                      </div>
                      <div className="text-lg font-semibold tracking-tight mt-2">
                        {c.name}
                      </div>
                    </div>
                    <div className="text-[10px] font-mono opacity-80 pt-4 border-t border-current/15 leading-tight">
                      {c.role}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sage Usage Rule Mandatory Notice */}
            <div className="p-4 bg-[#EFECE3] border-l-4 border-[#5C6650] text-xs font-mono text-[#171717]/80 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#5C6650] block">
                GOVERNANCE MANDATE · SAGE RESERVE USAGE RULE:
              </span>
              <p>{data.visualLanguage.sageRule}</p>
            </div>
          </div>

          {/* Typography System */}
          <div className="space-y-6 pt-6 border-t border-[#171717]/10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ DOCUMENTED TYPOGRAPHY SPECIMEN SYSTEM ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.visualLanguage.typography.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#EFECE3] border border-[#171717]/15 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#B8924E]">
                    <span>{t.role}</span>
                    <span className="text-[#171717]/40">{t.font}</span>
                  </div>

                  <div
                    style={{
                      fontFamily:
                        t.font.includes('Pinyon')
                          ? '"Pinyon Script", cursive'
                          : t.font.includes('Messiri')
                          ? '"El Messiri", sans-serif'
                          : '"Cormorant Garamond", serif',
                    }}
                    className={`text-[#1B0F0A] py-2 border-y border-[#171717]/10 ${
                      t.font.includes('Pinyon')
                        ? 'text-4xl'
                        : t.font.includes('Messiri')
                        ? 'text-2xl font-semibold'
                        : 'text-2xl font-normal'
                    }`}
                    dir={t.font.includes('Messiri') ? 'rtl' : 'ltr'}
                  >
                    {t.sample}
                  </div>

                  <p className="text-xs font-mono text-[#171717]/70 leading-relaxed">
                    {t.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Monogram Pattern Directions */}
          <div className="space-y-6 pt-6 border-t border-[#171717]/10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ MATERIAL TREATMENTS & PATTERN DIRECTIONS ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.visualLanguage.materials.map((mat, i) => (
                <div key={i} className="p-6 bg-[#1B0F0A] text-[#F3E9DA] border border-[#B8924E]/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#B8924E]">
                    <span>TREATMENT 0{i + 1}</span>
                    <RelaxLogo variant="monogram" size="sm" color="#B8924E" />
                  </div>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    {mat.name}
                  </h4>
                  <p className="text-xs text-white/70 font-mono leading-relaxed">
                    {mat.treatment}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
                    Application: {mat.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04 — BRAND APPLICATIONS (PHYSICAL TOUCHPOINTS) */}
      {/* ========================================================================= */}
      <section id="chapter-04" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.applications.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.applications.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-2">
              <p>{data.applications.body[0]}</p>
              <p>{data.applications.body[1]}</p>
            </div>
          </div>

          {/* Touchpoint Showcase Inspector */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#171717]/10 text-xs font-mono">
              <span className="text-[#3B1F14] uppercase tracking-widest font-semibold">
                [ 05 DOCUMENTED TOUCHPOINT APPLICATIONS ]
              </span>
              <span className="text-[#171717]/50">INSPECT TOUCHPOINT ARCHITECTURE</span>
            </div>

            {/* Tabs for Applications */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {data.applications.touchpoints.map((tp, idx) => {
                const isActive = activeTouchpointIndex === idx;
                return (
                  <button
                    key={tp.num}
                    onClick={() => handleTouchpointSelect(idx)}
                    className={`p-4 text-left border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1B0F0A] text-[#F3E9DA] border-[#B8924E] shadow-sm'
                        : 'bg-[#F4F1E9] text-[#171717] border-[#171717]/15 hover:border-[#B8924E]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono ${isActive ? 'text-[#B8924E]' : 'text-[#171717]/40'}`}>
                        TOUCHPOINT {tp.num}
                      </span>
                    </div>
                    <div className="font-semibold text-xs tracking-tight line-clamp-1">
                      {tp.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Touchpoint Detailed Presentation */}
            <div className="bg-[#F4F1E9] border border-[#171717]/15 p-8 sm:p-12 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#171717]/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B8924E]">
                    TOUCHPOINT {activeTouchpoint.num} · {activeTouchpoint.caption}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#1B0F0A] mt-1">
                    {activeTouchpoint.title}
                  </h3>
                </div>

                <div className="px-3 py-1.5 bg-[#EFECE3] border border-[#171717]/10 font-mono text-xs text-[#3B1F14]">
                  {activeTouchpoint.material}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview Tile */}
                <div className="lg:col-span-5 bg-[#1B0F0A] border border-[#B8924E]/20 overflow-hidden relative min-h-[260px] flex items-center justify-center group">
                  {activeTouchpoint.image ? (
                    <div className="w-full h-full relative">
                      <img
                        src={getAssetUrl(activeTouchpoint.image)}
                        alt={activeTouchpoint.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[260px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B0F0A]/90 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                        <span className="truncate max-w-[200px]">{activeTouchpoint.caption}</span>
                        <span className="text-[#B8924E] px-1.5 py-0.5 border border-[#B8924E]/40 bg-[#1B0F0A]/80 text-[9px] uppercase tracking-wider">
                          Physical Artifact
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 flex flex-col items-center justify-center text-center space-y-4">
                      <RelaxLogo variant="vertical" size="lg" color="#B8924E" />
                      <div className="text-xs font-mono text-white/50 tracking-wider">
                        {activeTouchpoint.caption}
                      </div>
                    </div>
                  )}
                </div>

                {/* Narrative Details */}
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base sm:text-lg font-light text-[#171717] leading-relaxed">
                    {activeTouchpoint.detail}
                  </p>

                  <div className="pt-4 border-t border-[#171717]/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/40 block">
                      Production & Material Specification:
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#3B1F14]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8924E]" />
                      <span>{activeTouchpoint.material}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Curated Brand Artifact Mockup Showcase */}
            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#171717]/10 text-xs font-mono">
                <span className="text-[#3B1F14] uppercase tracking-widest font-semibold">
                  [ PHYSICAL ARTIFACTS & TACTILE PROTOTYPES ]
                </span>
                <span className="text-[#171717]/50">DOCUMENTED BRAND APPLICATIONS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mockup 1: Elevator & Arrival */}
                <div
                  onClick={() => handleTouchpointSelect(3)}
                  className="bg-[#1B0F0A] border border-[#B8924E]/20 overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[#B8924E] hover:shadow-lg"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={getAssetUrl('/assets/images/relax_mockup_elevator.png')}
                      alt="Relax Café Level Seven Architectural Elevator Signage"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B0F0A]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#1B0F0A]/90 border border-[#B8924E]/40 text-[#B8924E] text-[10px] font-mono uppercase tracking-wider">
                      Touchpoint 04
                    </span>
                  </div>
                  <div className="p-5 space-y-2 text-[#F3E9DA]">
                    <h4 className="text-base font-medium tracking-tight text-white group-hover:text-[#B8924E] transition-colors">
                      Architectural Elevator Wayfinding Plate
                    </h4>
                    <p className="text-xs font-mono text-white/70 leading-relaxed">
                      Solid brushed brass with chemically etched infill mounted at the 7th-floor arrival portal.
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-[#B8924E] uppercase tracking-wider flex items-center gap-1">
                      <span>Click to inspect specification</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

                {/* Mockup 2: Drinkware & Packaging */}
                <div
                  onClick={() => handleTouchpointSelect(2)}
                  className="bg-[#1B0F0A] border border-[#B8924E]/20 overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[#B8924E] hover:shadow-lg"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={getAssetUrl('/assets/images/relax_mockup_takeaway_cup.png')}
                      alt="Relax Café Takeaway Drinkware System"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B0F0A]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#1B0F0A]/90 border border-[#B8924E]/40 text-[#B8924E] text-[10px] font-mono uppercase tracking-wider">
                      Touchpoint 03
                    </span>
                  </div>
                  <div className="p-5 space-y-2 text-[#F3E9DA]">
                    <h4 className="text-base font-medium tracking-tight text-white group-hover:text-[#B8924E] transition-colors">
                      Ceramic & Takeaway Packaging Ecosystem
                    </h4>
                    <p className="text-xs font-mono text-white/70 leading-relaxed">
                      Matte deep espresso paper cup with hot-stamped gold foil monogram and warm ivory textured sleeve.
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-[#B8924E] uppercase tracking-wider flex items-center gap-1">
                      <span>Click to inspect specification</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

                {/* Mockup 3: Menu Folio & Reservation Suite */}
                <div
                  onClick={() => handleTouchpointSelect(0)}
                  className="bg-[#1B0F0A] border border-[#B8924E]/20 overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[#B8924E] hover:shadow-lg"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={getAssetUrl('/assets/images/relax_mockup_table_setting.png')}
                      alt="Relax Café Embossed Leather Menu Folio"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B0F0A]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#1B0F0A]/90 border border-[#B8924E]/40 text-[#B8924E] text-[10px] font-mono uppercase tracking-wider">
                      Touchpoint 01 & 02
                    </span>
                  </div>
                  <div className="p-5 space-y-2 text-[#F3E9DA]">
                    <h4 className="text-base font-medium tracking-tight text-white group-hover:text-[#B8924E] transition-colors">
                      Embossed Leather Menu & Reservation Cards
                    </h4>
                    <p className="text-xs font-mono text-white/70 leading-relaxed">
                      Treated chestnut leather hot-stamped with gold foil and heavyweight duplexed cotton reservation cards.
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-[#B8924E] uppercase tracking-wider flex items-center gap-1">
                      <span>Click to inspect specification</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05 — THE COMPLETE BRAND SYSTEM */}
      {/* ========================================================================= */}
      <section id="chapter-05" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.completeSystem.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.completeSystem.headline}
            </h2>
          </div>

          {/* 4 Tiers of Brand Synthesis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.completeSystem.fourTiers.map((tier) => (
              <div
                key={tier.num}
                className="p-6 bg-[#EFECE3] border border-[#171717]/15 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#B8924E]">
                    <span>TIER {tier.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8924E]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#171717] tracking-tight">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-[#171717]/70 font-mono leading-relaxed">
                    {tier.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#171717]/10 text-[10px] font-mono text-[#171717]/40 uppercase">
                  Relax Identity Component
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 06 — STRATEGIC CONTRIBUTION */}
      {/* ========================================================================= */}
      <section id="chapter-06" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#1B0F0A] text-[#F3E9DA]">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8924E]">
              {data.contribution.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.08]">
              &ldquo;{data.contribution.headline}&rdquo;
            </h2>

            <div className="pt-2 text-base sm:text-lg text-white/80 leading-relaxed font-light space-y-4">
              <p>{data.contribution.body[0]}</p>
              <p>{data.contribution.body[1]}</p>
              <p>{data.contribution.body[2]}</p>
            </div>
          </div>

          {/* Key Deliverables Manifest */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white/40">
              [ 08 DOCUMENTED BRAND ARCHITECTURE AREAS ]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.contribution.keyProjectAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-white flex items-start gap-2"
                >
                  <span className="text-[#B8924E]">0{idx + 1}</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Authentic Closing Lockup */}
          <div className="p-8 sm:p-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <RelaxLogo variant="vertical" size="xl" color="#B8924E" />

            <div className="text-center md:text-right space-y-2">
              <div
                style={{ fontFamily: '"El Messiri", sans-serif' }}
                className="text-4xl sm:text-5xl font-semibold text-[#B8924E]"
                dir="rtl"
              >
                {data.contribution.closingArabic}
              </div>
              <div className="text-lg font-serif italic text-white/80">
                &ldquo;{data.contribution.closingEnglish}&rdquo;
              </div>
              <div className="text-xs font-mono text-white/40 pt-1">
                Minya, Egypt · Level Seven
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROJECT CLOSING & NAVIGATION */}
      {/* ========================================================================= */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-8 pt-16">
        <div className="bg-[#171717] text-[#F4F1E9] p-8 sm:p-12 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <MonogramN size="sm" slashColor="#B8924E" inkColor="#F4F1E9" interactive={false} />
                <span className="text-xl font-bold tracking-tight text-white">
                  NOURI HAZEM
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/50">
                CREATIVE DIRECTOR & BRAND STRATEGIST
              </p>
            </div>

            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateContact();
              }}
              className="px-6 py-3 bg-[#B8924E] text-[#1B0F0A] hover:bg-white transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
            >
              <span>Connect with Nouri</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onBack();
              }}
              className="p-6 border border-white/10 hover:border-[#B8924E] hover:bg-white/5 transition-all text-left cursor-pointer group"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                ← Return
              </div>
              <div className="text-lg font-light text-white group-hover:text-[#B8924E] transition-colors">
                Back to Brand Architecture
              </div>
              <div className="text-xs text-white/50 font-mono mt-1">
                Explore identity systems, grids & typographic frameworks
              </div>
            </button>

            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateToProject(nextProject.slug);
              }}
              className="p-6 border border-white/10 hover:border-[#B8924E] hover:bg-white/5 transition-all text-left cursor-pointer group"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                Next Brand Case Study →
              </div>
              <div className="text-lg font-light text-white group-hover:text-[#B8924E] transition-colors">
                {nextProject.title}
              </div>
              <div className="text-xs text-white/50 font-mono mt-1">
                {nextProject.industry} · {nextProject.market}
              </div>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};
