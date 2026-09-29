import React, { useState, useEffect } from 'react';
import { JURAA_BRAND_DATA } from '../data/juraaBrandData';
import { soundEngine } from '../utils/soundEngine';
import { MonogramN } from '../components/MonogramN';
import {
  JuraaLogoImage,
  JuraaMockupImage,
  JuraaAppScreens,
  JURAA_ORIGINAL_LOGO,
} from '../components/JuraaAssetDisplay';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Heart,
  Shield,
  Sparkles,
  Smartphone,
  Box,
  Palette,
  Type,
  Clock,
  Calendar,
  Camera,
  Mic,
  BarChart3,
  Bell,
  Check,
} from 'lucide-react';

interface JuraaBrandCaseStudyViewProps {
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const JuraaBrandCaseStudyView: React.FC<JuraaBrandCaseStudyViewProps> = ({
  onBack,
  onNavigateToProject,
  onNavigateContact,
}) => {
  const data = JURAA_BRAND_DATA;

  // Chapter 01: Active Brand Value
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);

  // Chapter 03: Selected Color Swatch
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);

  // Auto-scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, []);

  const scrollToSection = (id: string) => {
    soundEngine.playEditorialClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeColor = data.visualLanguage.colors[activeColorIndex];

  return (
    <article className="min-h-screen bg-[#F5F3EF] text-[#173635] selection:bg-[#0F6663] selection:text-white pt-24 pb-28 font-sans">
      {/* ========================================================================= */}
      {/* PERSISTENT TOP BREADCRUMB & METADATA BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-14 z-30 bg-[#F5F3EF]/95 backdrop-blur-md border-b border-[#173635]/10 py-3 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#173635]/70 hover:text-[#0F6663] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Brand Architecture</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono text-[#173635]/50">
            <span className="hidden sm:inline">NOURI / BRAND ARCHITECTURE</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#0F6663] font-semibold">JURAA · THE SHAPE OF CARE</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHAPTER 00 — PROJECT HERO */}
      {/* ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16 border-b border-[#173635]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Project Headline & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#0F6663] text-white">
                  Brand Architecture
                </span>
                <span className="text-xs font-mono text-[#173635]/60 uppercase">
                  Digital Health · Egypt
                </span>
                <span className="text-xs font-mono text-[#55B6AE] font-semibold" dir="rtl">
                  جرعتك في وقتها
                </span>
              </div>

              {/* The Authoritative Original Brand Logo in Hero */}
              <div className="pt-2">
                <JuraaLogoImage size="hero" className="p-0" />
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#173635] tracking-tight leading-[1.12]">
                &ldquo;{data.meta.mainStatement}&rdquo;
              </p>
            </div>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-4 max-w-3xl">
              <p>{data.meta.supportingStatement}</p>
              <div className="border-l-2 border-[#55B6AE] pl-4 py-1 text-sm sm:text-base font-serif italic text-[#0F6663]">
                &ldquo;The Shape of Care&rdquo; — جرعتك في وقتها، بدون قلق
              </div>
            </div>

            {/* Scope Tags */}
            <div className="pt-4 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#173635]/40">
                Brand Identity Disciplines:
              </div>
              <div className="flex flex-wrap gap-2">
                {data.meta.projectDisciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 bg-[#DCECEA] border border-[#0F6663]/15 text-[#0F6663]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Project Brief Dossier Card with Authoritative JURAA Logo */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#0F6663]/20 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#173635]/10 text-[10px] font-mono uppercase tracking-widest text-[#0F6663]">
              <span>Authoritative Brand Identity</span>
              <span>ORIGINAL ASSET</span>
            </div>

            {/* Featured Original Logo on Crisp Ground */}
            <div className="py-6 flex flex-col items-center justify-center border-y border-[#173635]/10 bg-[#F5F3EF]">
              <JuraaLogoImage size="lg" theme="transparent" />
            </div>

            <dl className="space-y-3.5 text-xs font-mono">
              <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                <dt className="text-[#173635]/50 uppercase">Territory</dt>
                <dd className="font-semibold text-[#0F6663]">{data.meta.territory}</dd>
              </div>
              <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                <dt className="text-[#173635]/50 uppercase">Market</dt>
                <dd className="font-medium text-[#173635]">{data.meta.market}</dd>
              </div>
              <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                <dt className="text-[#173635]/50 uppercase">Typeface</dt>
                <dd className="font-medium text-[#0F6663]">Cairo (Approved Communication Font)</dd>
              </div>
              <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                <dt className="text-[#173635]/50 uppercase">Role</dt>
                <dd className="font-medium text-[#0F6663]">{data.meta.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#173635]/50 uppercase">Status</dt>
                <dd className="font-medium text-[#173635]">{data.meta.status}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Quick Chapter Navigation Bar */}
        <div className="mt-12 pt-4 border-t border-[#173635]/10 hidden md:flex items-center justify-between text-[11px] font-mono text-[#173635]/60">
          <span className="uppercase text-[#173635]/40 tracking-wider">Chapter Navigation:</span>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollToSection('chapter-01')} className="hover:text-[#0F6663] cursor-pointer">
              01 Foundation
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-02')} className="hover:text-[#0F6663] cursor-pointer font-semibold text-[#0F6663]">
              02 Brand Mark
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-03')} className="hover:text-[#0F6663] cursor-pointer">
              03 Typography & Color
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-04')} className="hover:text-[#0F6663] cursor-pointer">
              04 Digital App UI
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-05')} className="hover:text-[#0F6663] cursor-pointer">
              05 Physical Collateral
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-06')} className="hover:text-[#0F6663] cursor-pointer">
              06 System
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-gtm')} className="hover:text-[#315BFF] cursor-pointer font-bold text-[#315BFF]">
              GTM Strategy →
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 01 — BRAND FOUNDATION & POSITIONING */}
      {/* ========================================================================= */}
      <section id="chapter-01" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.foundation.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.foundation.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-4">
              <p>{data.foundation.body[0]}</p>
              <p>{data.foundation.body[1]}</p>
            </div>
          </div>

          {/* Interactive Brand Values Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {data.foundation.brandValues.map((val, idx) => {
              const isSelected = activeValueIndex === idx;
              return (
                <div
                  key={val.num}
                  onClick={() => {
                    soundEngine.playMechanicalTick(1);
                    setActiveValueIndex(idx);
                  }}
                  className={`p-8 border transition-all cursor-pointer space-y-4 relative ${
                    isSelected
                      ? 'bg-[#FFFFFF] border-[#0F6663] shadow-md -translate-y-1'
                      : 'bg-[#F5F3EF] border-[#173635]/15 hover:border-[#55B6AE]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0F6663] font-bold">VALUE {val.num}</span>
                    <span className="text-[#173635]/40">{val.englishConcept}</span>
                  </div>

                  <h3
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-2xl font-bold text-[#0F6663] tracking-tight"
                  >
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#173635]/80 leading-relaxed font-light">
                    {val.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#55B6AE]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Embedded in Brand Architecture</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Arabic Expression Lockup */}
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#0F6663] to-[#173635] text-white space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono text-[#55B6AE]">
              <span className="uppercase tracking-widest">FOUNDATIONAL STRATEGIC PROMISE</span>
              <span>ARABIC-FIRST COMPANION</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
                  The Core Brand Promise:
                </span>
                <div
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                  className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight"
                  dir="rtl"
                >
                  {data.foundation.brandLineArabic}
                </div>
                <div className="text-lg font-serif italic text-[#DCECEA] pt-1">
                  &ldquo;{data.foundation.brandLineEnglish}&rdquo;
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 text-xs sm:text-sm font-light text-white/90 leading-relaxed space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#55B6AE] block">
                  Strategic Logic:
                </span>
                <p>{data.foundation.promiseSummary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02 — AUTHORITATIVE BRAND MARK ARCHITECTURE */}
      {/* ========================================================================= */}
      <section id="chapter-02" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15 bg-[#EAE6DC]/30">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.logoArchitecture.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.logoArchitecture.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-2">
              <p>{data.logoArchitecture.body[0]}</p>
              <p>{data.logoArchitecture.body[1]}</p>
            </div>
          </div>

          {/* Master Logo Presentation: Full uncompressed authoritative artwork with clearspace */}
          <div className="bg-white border border-[#0F6663]/20 shadow-md p-8 sm:p-12 lg:p-16">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#173635]/10 text-xs font-mono">
              <span className="text-[#0F6663] uppercase tracking-widest font-semibold">
                [ AUTHORITATIVE MASTER LOGO · ORIGINAL ARTWORK ]
              </span>
              <span className="text-[#173635]/50">ORIGINAL PROPORTIONS · SYMBOL · ARABIC & ENGLISH WORDMARK</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
              {/* Logo Frame: generous clear space, un-distorted object-contain */}
              <div className="lg:col-span-6 bg-[#F5F3EF] border border-[#0F6663]/15 p-10 sm:p-14 flex items-center justify-center min-h-[320px]">
                <img
                  src={JURAA_ORIGINAL_LOGO}
                  alt="Official JURAA Brand Mark"
                  className="max-h-56 max-w-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Design Anatomy & Geometry breakdown */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
                    The Shape of Care · Interlocking Geometry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#173635] mt-1">
                    Empathy Meets Medicinal Precision
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-[#F5F3EF] border border-[#0F6663]/15 space-y-1">
                    <span className="text-xs font-mono uppercase text-[#0F6663] font-semibold block">
                      01 / The Heart
                    </span>
                    <p className="text-xs text-[#173635]/80 leading-relaxed font-light">
                      {data.logoArchitecture.symbolConcept.heart}
                    </p>
                  </div>
                  <div className="p-4 bg-[#F5F3EF] border border-[#0F6663]/15 space-y-1">
                    <span className="text-xs font-mono uppercase text-[#0F6663] font-semibold block">
                      02 / The Capsule
                    </span>
                    <p className="text-xs text-[#173635]/80 leading-relaxed font-light">
                      {data.logoArchitecture.symbolConcept.capsule}
                    </p>
                  </div>
                  <div className="p-4 bg-[#DCECEA] border border-[#0F6663]/25 space-y-1">
                    <span className="text-xs font-mono uppercase text-[#0F6663] font-semibold block">
                      03 / The Synthesis
                    </span>
                    <p className="text-xs text-[#0F6663] leading-relaxed font-medium">
                      {data.logoArchitecture.symbolConcept.synthesis}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#173635]/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                    <span className="text-[#173635]/50">Authentic Asset Source:</span>
                    <span className="font-semibold text-[#0F6663]">Original JURAA Vector Archive</span>
                  </div>
                  <div className="flex justify-between border-b border-[#173635]/5 pb-2">
                    <span className="text-[#173635]/50">Communication Font:</span>
                    <span className="text-[#173635]">Cairo (700 Bold / 600 SemiBold)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#173635]/50">Clear Space Rule:</span>
                    <span className="text-[#0F6663]">Minimum 0.5X symbol width surrounding mark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03 — TYPOGRAPHY & VISUAL LANGUAGE */}
      {/* ========================================================================= */}
      <section id="chapter-03" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15">
        <div className="space-y-16">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.visualLanguage.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.visualLanguage.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-2">
              <p>{data.visualLanguage.body[0]}</p>
              <p>{data.visualLanguage.body[1]}</p>
            </div>
          </div>

          {/* Color Palette System */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#173635]/10 text-xs font-mono">
              <span className="text-[#0F6663] uppercase tracking-widest font-semibold">
                [ 07 DOCUMENTED BRAND CHROMATIC SPECIFICATIONS ]
              </span>
              <span className="text-[#173635]/50">CLICK SWATCH TO INSPECT ALLOCATION</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {data.visualLanguage.colors.map((c, idx) => {
                const isSelected = activeColorIndex === idx;
                return (
                  <div
                    key={c.name}
                    onClick={() => {
                      soundEngine.playMechanicalTick(1);
                      setActiveColorIndex(idx);
                    }}
                    style={{ backgroundColor: c.hex, color: c.textColor }}
                    className={`p-5 border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                      isSelected ? 'ring-3 ring-[#0F6663] shadow-lg scale-[1.03]' : 'border-black/10'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] font-mono opacity-80">{c.hex}</div>
                      <div className="text-sm font-bold tracking-tight mt-1">{c.name}</div>
                    </div>
                    <div className="text-[10px] font-mono opacity-90 pt-3 border-t border-current/15 leading-tight">
                      {c.allocation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Color Detail */}
            <div className="p-6 bg-white border border-[#173635]/10 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0F6663] uppercase">
                  ACTIVE SWATCH: {activeColor.name} ({activeColor.hex})
                </span>
                <span className="text-[#173635]/60">{activeColor.allocation}</span>
              </div>
              <p className="text-xs text-[#173635]/80 font-sans">{activeColor.role}</p>
            </div>
          </div>

          {/* Cairo Typography Specimen Hierarchy */}
          <div className="space-y-6 pt-6 border-t border-[#173635]/10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
              [ CAIRO TYPOGRAPHY SPECIMEN SYSTEM · ARABIC & ENGLISH ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.visualLanguage.typography.map((t, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#173635]/15 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#0F6663]">
                    <span>{t.role}</span>
                    <span className="text-[#173635]/40">{t.weight}</span>
                  </div>

                  <div
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-2xl sm:text-3xl font-bold text-[#0F6663] leading-snug py-2 border-y border-[#173635]/10"
                    dir="rtl"
                  >
                    {t.sampleArabic}
                  </div>

                  <div
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-sm sm:text-base font-semibold text-[#173635] tracking-tight"
                  >
                    {t.sampleEnglish}
                  </div>

                  <p className="text-xs font-mono text-[#173635]/70 leading-relaxed">
                    {t.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Iconography & Brand Voice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#173635]/10">
            {/* Iconography */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
                [ 08 CORE MONOLINE UI ICONS ]
              </div>
              <p className="text-xs text-[#173635]/70 leading-relaxed">
                {data.visualLanguage.iconography.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {data.visualLanguage.iconography.items.map((icon, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#173635]/10 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#DCECEA] flex items-center justify-center text-[#0F6663]">
                      {idx === 0 && <Box className="w-4 h-4" />}
                      {idx === 1 && <Clock className="w-4 h-4" />}
                      {idx === 2 && <Camera className="w-4 h-4" />}
                      {idx === 3 && <Mic className="w-4 h-4" />}
                      {idx === 4 && <Heart className="w-4 h-4" />}
                      {idx === 5 && <BarChart3 className="w-4 h-4" />}
                      {idx === 6 && <Bell className="w-4 h-4" />}
                      {idx === 7 && <Shield className="w-4 h-4" />}
                    </div>
                    <div className="text-xs font-semibold text-[#173635]">{icon.name}</div>
                    <div className="text-[10px] font-mono text-[#0F6663]" dir="rtl">
                      {icon.labelArabic}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Voice */}
            <div className="lg:col-span-5 p-6 bg-[#DCECEA]/60 border border-[#0F6663]/20 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
                [ BRAND VOICE MANIFESTO ]
              </div>
              <div className="flex flex-wrap gap-2">
                {data.visualLanguage.brandVoice.traits.map((tr) => (
                  <span
                    key={tr}
                    className="px-2.5 py-1 bg-white border border-[#0F6663]/20 text-[#0F6663] text-xs font-semibold"
                  >
                    {tr}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#173635]/80 leading-relaxed font-light">
                {data.visualLanguage.brandVoice.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04 — DIGITAL APPLICATIONS (AUTHENTIC APP SCREENSHOTS) */}
      {/* ========================================================================= */}
      <section id="chapter-04" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.digitalApplications.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.digitalApplications.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-2">
              <p>{data.digitalApplications.body[0]}</p>
              <p>{data.digitalApplications.body[1]}</p>
            </div>
          </div>

          {/* Product Hero Ecosystem */}
          <div className="border border-[#0F6663]/20 overflow-hidden bg-white shadow-md">
            <JuraaMockupImage aspectRatio="16/9" allowZoom={true} />
          </div>

          {/* Authentic App Screen Gallery */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#173635]/10 text-xs font-mono">
              <span className="text-[#0F6663] uppercase tracking-widest font-semibold">
                [ AUTHENTIC APPLICATION SCREENSHOTS · ARABIC UI FLOW ]
              </span>
              <span className="text-[#173635]/50">CLICK ANY SCREEN TO EXPAND</span>
            </div>

            <JuraaAppScreens />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05 — PHYSICAL APPLICATIONS (STATIONERY & COLLATERAL) */}
      {/* ========================================================================= */}
      <section id="chapter-05" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.physicalApplications.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.physicalApplications.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-2">
              <p>{data.physicalApplications.body[0]}</p>
              <p>{data.physicalApplications.body[1]}</p>
            </div>
          </div>

          {/* Full-Bleed Tactile Brand Mockup Presentation */}
          <div className="border border-[#0F6663]/20 overflow-hidden bg-white shadow-md">
            <JuraaMockupImage aspectRatio="16/9" allowZoom={true} />
          </div>

          {/* Physical Application Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {data.physicalApplications.collateral.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#173635]/15 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#0F6663]">
                    <span>APPLICATION 0{idx + 1}</span>
                    <span className="text-[10px] text-[#55B6AE] font-semibold uppercase">Tactile</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#173635] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#173635]/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#173635]/10 text-[10px] font-mono text-[#0F6663] uppercase tracking-wider">
                  Material: {item.material}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 06 — THE COMPLETE BRAND SYSTEM */}
      {/* ========================================================================= */}
      <section id="chapter-06" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15 bg-[#EAE6DC]/30">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.completeSystem.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.completeSystem.headline}
            </h2>
          </div>

          {/* 4 Tiers Synthesis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.completeSystem.tiers.map((tier) => (
              <div
                key={tier.num}
                className="p-6 bg-white border border-[#173635]/15 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#0F6663]">
                    <span>TIER {tier.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55B6AE]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#173635] tracking-tight">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-[#173635]/70 font-light leading-relaxed">
                    {tier.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 07 — STRATEGIC CONTRIBUTION */}
      {/* ========================================================================= */}
      <section id="chapter-07" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#173635]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0F6663]">
              {data.contribution.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#173635] leading-[1.08]">
              {data.contribution.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#173635]/80 leading-relaxed font-light space-y-4">
              <p>{data.contribution.body[0]}</p>
              <p>{data.contribution.body[1]}</p>
            </div>
          </div>

          {/* Disciplines Documented */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#173635]/50 block">
              Documented Design & Architecture Disciplines:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {data.contribution.disciplines.map((d, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-[#173635]/15 text-[#173635] text-xs font-mono"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Closing Brand Lockup Banner with Authentic Logo */}
          <div className="p-8 sm:p-12 bg-[#0F6663] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="flex items-center gap-6">
              <div className="p-3 bg-white/10 rounded-xl">
                <JuraaLogoImage size="md" theme="transparent" />
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-bold tracking-wider uppercase text-white">
                  JURAA · THE SHAPE OF CARE
                </div>
                <div className="text-xs font-mono text-[#DCECEA]">
                  Digital Health Brand Architecture · Cairo Typography & Reassuring Palette
                </div>
              </div>
            </div>

            <div className="text-center md:text-right space-y-1">
              <div
                style={{ fontFamily: '"Cairo", sans-serif' }}
                className="text-3xl sm:text-4xl font-bold text-white"
                dir="rtl"
              >
                {data.contribution.closingArabic}
              </div>
              <div className="text-sm font-serif italic text-[#DCECEA]">
                &ldquo;{data.contribution.closingEnglish}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 13 — CROSS-LINK TO STRATEGIC MARKETING */}
      {/* ========================================================================= */}
      <section id="chapter-gtm" className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-b border-[#173635]/15 bg-[#EAE6DC]/50">
        <div className="bg-[#173635] text-white p-8 sm:p-12 lg:p-16 border border-[#55B6AE]/30 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#55B6AE] border-b border-white/10 pb-4">
            <span className="uppercase tracking-widest font-semibold">
              COMPLEMENTARY PORTFOLIO CASE STUDY
            </span>
            <span>STRATEGIC MARKETING SECTION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#55B6AE]">
                EXPLORE THE STRATEGY
              </span>
              <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
                JURAA — 30-Day Go-to-Market Strategy
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light max-w-2xl">
                Explore the complete commercial launch strategy for JURAA: audience profiling, 4-phase rollout calendar, 5-pillar content architecture, and customer habit formation framework.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => {
                  soundEngine.playAirySweep();
                  onNavigateToProject('juraa-healthcare');
                }}
                className="px-6 py-4 bg-[#55B6AE] text-[#173635] hover:bg-white transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Explore GTM Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
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
                <MonogramN size="sm" slashColor="#55B6AE" inkColor="#F4F1E9" interactive={false} />
                <span className="text-xl font-bold tracking-tight text-white">
                  NOURI HAZEM
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/50">
                CREATIVE DIRECTOR & BRAND STRATEGIST
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundEngine.playAirySweep();
                  onNavigateToProject('relax-cafe-hospitality');
                }}
                className="px-5 py-2.5 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Next: Relax Café</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onNavigateContact}
                className="px-5 py-2.5 bg-[#315BFF] hover:bg-white hover:text-[#171717] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Initiate Project
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/40">
            <div>JURAA Digital Health · Brand Architecture Case Study</div>
            <div>Authored by Nouri Hazem · All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </article>
  );
};
