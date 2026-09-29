import React, { useState, useEffect, useRef } from 'react';
import { JURAA_CASE_STUDY } from '../data/juraaData';
import { PROJECTS } from '../data/projectsData';
import { soundEngine } from '../utils/soundEngine';
import { MonogramN } from '../components/MonogramN';
import { getAssetUrl } from '../utils/assetUrl';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  Lightbulb,
  Heart,
  Repeat,
  Users,
  Smartphone,
  ShieldAlert,
  Sparkles,
  Share2,
} from 'lucide-react';

interface JuraaCaseStudyViewProps {
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const JuraaCaseStudyView: React.FC<JuraaCaseStudyViewProps> = ({
  onBack,
  onNavigateToProject,
  onNavigateContact,
}) => {
  const data = JURAA_CASE_STUDY;

  // Chapter 01 Interactive: Question state transition
  const [challengeRevealed, setChallengeRevealed] = useState(false);

  // Chapter 02 Interactive: Habit & Care concept fusion
  const [insightFused, setInsightFused] = useState(false);

  // Chapter 03 Interactive: Active strategic dimension
  const [activeDimension, setActiveDimension] = useState<number>(0);

  // Chapter 04 Interactive: Active content pillar
  const [activePillar, setActivePillar] = useState<number>(0);

  // Chapter 05 Interactive: Active Rollout Week
  const [activeWeekIndex, setActiveWeekIndex] = useState<number>(0);

  // Chapter 06 Interactive: Active Measurement Stage
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Next Project
  const nextProject = PROJECTS.find((p) => p.id === 'relax-cafe') || PROJECTS[1];

  // Auto-scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, []);

  const handleWeekSelect = (index: number) => {
    soundEngine.playEditorialClick();
    setActiveWeekIndex(index);
  };

  const handleStageSelect = (index: number) => {
    soundEngine.playMechanicalTick(1);
    setActiveStageIndex(index);
  };

  const scrollToSection = (id: string) => {
    soundEngine.playEditorialClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            <span>Return to Strategic Marketing</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#171717]/50">
            <span>STRATEGIC MARKETING</span>
            <span>/</span>
            <span className="text-[#315BFF] font-medium">JURAA / جرعة</span>
            <span>·</span>
            <span className="text-[#171717]/40">30-DAY LAUNCH PLAN</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono px-2 py-0.5 border border-[#315BFF]/30 bg-[#315BFF]/5 text-[#315BFF]">
              STRATEGIC BLUEPRINT
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHAPTER 00 — PROJECT INTRODUCTION */}
      {/* ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16 border-b border-[#171717]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Title & Headline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
              <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
              <span>Digital Health · 30-Day Go-to-Market Strategy</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#171717]">
                  JURAA
                </h1>
                <span className="text-3xl sm:text-5xl md:text-6xl font-light text-[#171717]/40 font-editorial italic">
                  جرعة
                </span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#171717] tracking-tight leading-[1.12]">
                Turning everyday care into a{' '}
                <span className="font-editorial italic text-[#315BFF]">
                  30-day go-to-market
                </span>{' '}
                strategy.
              </p>
            </div>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4 max-w-3xl">
              <p>{data.meta.introduction}</p>
              <p className="text-[#171717] font-medium border-l-2 border-[#315BFF] pl-4 py-1 text-sm sm:text-base">
                {data.meta.objective}
              </p>
            </div>

            {/* Scope Tags */}
            <div className="pt-4 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/40">
                Strategic Scope & Architecture:
              </div>
              <div className="flex flex-wrap gap-2">
                {data.meta.scope.map((item, idx) => (
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

          {/* Metadata Card & Editorial Spec */}
          <div className="lg:col-span-4 bg-[#EFECE3] border border-[#171717]/15 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 text-[10px] font-mono uppercase tracking-widest text-[#171717]/50">
              <span>Project Brief Specifications</span>
              <span>REF: JUR-2026</span>
            </div>

            <dl className="space-y-3.5 text-xs font-mono">
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Category</dt>
                <dd className="font-medium text-[#171717]">{data.meta.category}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Industry</dt>
                <dd className="font-medium text-[#171717]">{data.meta.industry}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Market Target</dt>
                <dd className="font-medium text-[#171717]">{data.meta.market}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Project Scope</dt>
                <dd className="font-medium text-[#171717]">{data.meta.project}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Strategic Role</dt>
                <dd className="font-medium text-[#315BFF]">{data.meta.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#171717]/50 uppercase">Status</dt>
                <dd className="font-medium text-[#171717]">{data.meta.status}</dd>
              </div>
            </dl>

            <div className="pt-2 border-t border-[#171717]/10">
              <div className="text-[11px] text-[#171717]/60 leading-relaxed font-light">
                Designed as a reusable go-to-market system connecting human friction to commercial momentum.
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Project Visual Display */}
        <div className="mt-12">
          <div className="aspect-16/9 md:aspect-21/9 w-full bg-[#171717] overflow-hidden relative border border-[#171717]/15 group">
            <img
              src={getAssetUrl(data.meta.heroImage)}
              alt="JURAA Digital Health Go-to-Market Strategy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#315BFF] bg-[#171717]/90 px-2 py-1 border border-[#315BFF]/40 mb-2 inline-block">
                  Primary Visual Asset
                </span>
                <p className="text-sm sm:text-base font-light text-white/90 max-w-xl">
                  JURAA Brand Architecture & Go-to-Market Narrative
                </p>
              </div>
              <span className="text-xs font-mono text-white/60">
                Cairo, Egypt · Arabic-First Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Quick Chapter Navigation Bar */}
        <div className="mt-8 pt-4 border-t border-[#171717]/10 hidden md:flex items-center justify-between text-[11px] font-mono text-[#171717]/60">
          <span className="uppercase text-[#171717]/40 tracking-wider">Chapter Navigation:</span>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollToSection('chapter-01')} className="hover:text-[#315BFF] cursor-pointer">
              01 Challenge
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-02')} className="hover:text-[#315BFF] cursor-pointer">
              02 Insight
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-03')} className="hover:text-[#315BFF] cursor-pointer">
              03 Strategy
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-04')} className="hover:text-[#315BFF] cursor-pointer">
              04 Content
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-05')} className="hover:text-[#315BFF] cursor-pointer font-semibold text-[#171717]">
              05 30-Day Rollout
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-06')} className="hover:text-[#315BFF] cursor-pointer">
              06 KPIs
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-07')} className="hover:text-[#315BFF] cursor-pointer">
              07 Contribution
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 01 — THE PROJECT CHALLENGE */}
      {/* ========================================================================= */}
      <section id="chapter-01" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="max-w-4xl space-y-8">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
            {data.challenge.sectionLabel}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
            {data.challenge.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
            <p>{data.challenge.body[0]}</p>
            <p>{data.challenge.body[1]}</p>
          </div>

          {/* Interactive Scroll Transformation Box */}
          <div className="mt-8 pt-8 border-t border-[#171717]/10">
            <div
              onClick={() => {
                soundEngine.playEditorialClick();
                setChallengeRevealed(!challengeRevealed);
              }}
              className="bg-[#EFECE3] border border-[#171717]/15 p-6 sm:p-8 cursor-pointer hover:border-[#315BFF] transition-all group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#171717]/50 mb-3">
                <span className="uppercase tracking-widest">
                  [ STRATEGIC QUESTION CONVERGENCE · CLICK TO TOGGLE PERSPECTIVE ]
                </span>
                <span className="text-[#315BFF] group-hover:underline">
                  {challengeRevealed ? 'Show Problem Context' : 'Reveal Core Strategic Question'}
                </span>
              </div>

              {!challengeRevealed ? (
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#171717]/40 block uppercase">The Conventional Trap:</span>
                  <div className="text-xl sm:text-2xl font-light text-[#171717]/60">
                    &ldquo;Explaining how the reminder system works, how many doses you can set, and listing technical features.&rdquo;
                  </div>
                </div>
              ) : (
                <div className="space-y-2 animate-in fade-in duration-300">
                  <span className="text-xs font-mono text-[#315BFF] block uppercase tracking-wider">
                    The Pivotal Strategic Transformation:
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-editorial italic text-[#171717] leading-snug">
                    &ldquo;{data.challenge.strategicQuestion}&rdquo;
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02 — THE CORE INSIGHT */}
      {/* ========================================================================= */}
      <section id="chapter-02" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.insight.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              Medication management is both a{' '}
              <span className="font-editorial italic text-[#315BFF]">habit</span> and an{' '}
              <span className="font-editorial italic text-[#315BFF]">act of care</span>.
            </h2>
          </div>

          {/* Interactive Concept Fusion: HABIT + CARE */}
          <div className="bg-[#F4F1E9] border border-[#171717]/15 p-8 sm:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#171717]/10 text-xs font-mono text-[#171717]/50">
              <span>DUAL-FORCE STRATEGIC SYNTHESIS</span>
              <button
                onClick={() => {
                  soundEngine.playAirySweep(true);
                  setInsightFused(!insightFused);
                }}
                className="text-[#315BFF] hover:underline cursor-pointer font-medium"
              >
                {insightFused ? 'Separate Vectors' : 'Synthesize Human Vectors →'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
              {/* Concept Left: HABIT */}
              <div
                className={`p-6 border transition-all duration-500 ${
                  insightFused
                    ? 'border-[#315BFF] bg-[#315BFF]/5 translate-x-0'
                    : 'border-[#171717]/15 bg-[#EFECE3]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#315BFF]">DIMENSION 01</span>
                  <Repeat className="w-5 h-5 text-[#315BFF]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717] mb-2">
                  {data.insight.conceptLeft}
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/70 font-mono">
                  {data.insight.conceptLeftSub}
                </p>
                <div className="mt-4 pt-4 border-t border-[#171717]/10 text-xs text-[#171717]/80 leading-relaxed font-light">
                  Daily friction occurs not from malice, but because modern life fragments attention. Habits need gentle structure.
                </div>
              </div>

              {/* Concept Right: CARE */}
              <div
                className={`p-6 border transition-all duration-500 ${
                  insightFused
                    ? 'border-[#315BFF] bg-[#315BFF]/5 translate-x-0'
                    : 'border-[#171717]/15 bg-[#EFECE3]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#315BFF]">DIMENSION 02</span>
                  <Heart className="w-5 h-5 text-[#315BFF]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717] mb-2">
                  {data.insight.conceptRight}
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/70 font-mono">
                  {data.insight.conceptRightSub}
                </p>
                <div className="mt-4 pt-4 border-t border-[#171717]/10 text-xs text-[#171717]/80 leading-relaxed font-light">
                  A daughter reminding her mother. A spouse checking on vitamins. Medication is an extension of love and mutual protection.
                </div>
              </div>
            </div>

            {/* Synthesized Resolution */}
            <div className="mt-8 pt-8 border-t border-[#171717]/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                Strategic Breakthrough:
              </div>
              <p className="text-base sm:text-xl font-light text-[#171717] leading-relaxed max-w-3xl">
                {data.insight.body[1]} {data.insight.body[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03 — THE STRATEGY */}
      {/* ========================================================================= */}
      <section id="chapter-03" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.strategy.sectionLabel}
            </div>

            <div className="border-l-4 border-[#315BFF] pl-6 py-2 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50 block">
                Campaign Platform:
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717]">
                &ldquo;Small Habits. <span className="font-editorial italic">Better Days.</span>&rdquo;
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light pt-2 max-w-2xl">
              <strong className="font-medium text-[#171717]">Positioning:</strong> {data.strategy.positioning}
            </p>
            <p className="text-xs sm:text-sm text-[#171717]/60 font-mono">
              {data.strategy.strategicApproach}
            </p>
          </div>

          {/* Four Strategic Dimensions Architectural Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.strategy.dimensions.map((dim, idx) => {
              const isSelected = activeDimension === idx;
              return (
                <div
                  key={dim.number}
                  onClick={() => {
                    soundEngine.playEditorialClick();
                    setActiveDimension(idx);
                  }}
                  className={`p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-md'
                      : 'bg-[#EFECE3] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono tracking-widest ${
                          isSelected ? 'text-[#315BFF]' : 'text-[#171717]/40'
                        }`}
                      >
                        DIMENSION {dim.number}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-[#315BFF]' : 'bg-[#171717]/20'
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-medium tracking-tight">
                      {dim.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed font-light ${
                        isSelected ? 'text-[#F4F1E9]/80' : 'text-[#171717]/70'
                      }`}
                    >
                      {dim.explanation}
                    </p>
                  </div>

                  <div
                    className={`pt-4 mt-6 border-t text-[10px] font-mono uppercase tracking-wider ${
                      isSelected
                        ? 'border-white/10 text-[#315BFF]'
                        : 'border-[#171717]/10 text-[#171717]/40'
                    }`}
                  >
                    Phase {idx + 1} Alignment
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04 — THE CONTENT ARCHITECTURE */}
      {/* ========================================================================= */}
      <section id="chapter-04" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/30">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.contentArchitecture.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.contentArchitecture.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
              {data.contentArchitecture.introduction}
            </p>
          </div>

          {/* 5 Content Pillars System */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50 mb-2">
              [ FIVE CAMPAIGN CONTENT PILLARS ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {data.contentArchitecture.pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <div
                    key={pillar.number}
                    onClick={() => {
                      soundEngine.playEditorialClick();
                      setActivePillar(idx);
                    }}
                    className={`p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717]'
                        : 'bg-[#F4F1E9] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className={isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'}>
                          PILLAR {pillar.number}
                        </span>
                        <span
                          className={`text-[9px] uppercase px-1.5 py-0.5 border ${
                            isActive
                              ? 'border-[#315BFF] text-[#315BFF]'
                              : 'border-[#171717]/10 text-[#171717]/50'
                          }`}
                        >
                          {pillar.focus}
                        </span>
                      </div>

                      <h4 className="text-lg font-medium tracking-tight">
                        {pillar.title}
                      </h4>

                      <p
                        className={`text-xs leading-relaxed font-light ${
                          isActive ? 'text-[#F4F1E9]/80' : 'text-[#171717]/70'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>

                    <div
                      className={`pt-3 mt-4 border-t text-[10px] font-mono ${
                        isActive ? 'border-white/10 text-white/50' : 'border-[#171717]/10 text-[#171717]/40'
                      }`}
                    >
                      Audience Journey Stage 0{idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Distribution Channels & Formats Ecosystem */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-[#171717]/10">
            <div className="md:col-span-6 bg-[#EFECE3] border border-[#171717]/15 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315BFF]">
                <Smartphone className="w-4 h-4" />
                <span>Multi-Tier Channel Architecture</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#171717]/50 block uppercase text-[10px] mb-1">
                    Primary Discovery Channels:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.contentArchitecture.channels.primary.map((ch) => (
                      <span
                        key={ch}
                        className="px-3 py-1 bg-[#171717] text-white text-xs font-medium"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#171717]/10">
                  <span className="text-[#171717]/50 block uppercase text-[10px] mb-1">
                    Supporting Retention & Community Channels:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.contentArchitecture.channels.supporting.map((ch) => (
                      <span
                        key={ch}
                        className="px-3 py-1 bg-[#F4F1E9] border border-[#171717]/20 text-[#171717] text-xs font-medium"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 bg-[#EFECE3] border border-[#171717]/15 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315BFF]">
                <Layers className="w-4 h-4" />
                <span>Content Production Formats</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#171717]/80">
                {data.contentArchitecture.contentFormats.map((fmt, i) => (
                  <li key={i} className="flex items-center gap-2 py-1 border-b border-[#171717]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
                    <span>{fmt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05 — THE 30-DAY ROLLOUT (MAIN INTERACTIVE CENTERPIECE) */}
      {/* ========================================================================= */}
      <section id="chapter-05" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{data.rollout.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.rollout.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
              {data.rollout.introduction}
            </p>
          </div>

          {/* Interactive Four-Week Timeline Stage */}
          <div className="bg-[#EFECE3] border border-[#171717]/15 p-6 sm:p-10">
            {/* Timeline Progress Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#171717]/10 text-xs font-mono">
              <span className="uppercase text-[#171717]/50 tracking-wider">
                [ 30-DAY OPERATIONAL PHASING MATRIX ]
              </span>
              <span className="text-[#315BFF] font-medium">
                ACTIVE PHASE: 0{activeWeekIndex + 1} OF 04
              </span>
            </div>

            {/* Persistent Week Index Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {data.rollout.phases.map((phase, idx) => {
                const isActive = activeWeekIndex === idx;
                return (
                  <button
                    key={phase.week}
                    onClick={() => handleWeekSelect(idx)}
                    className={`p-4 text-left border transition-all cursor-pointer relative ${
                      isActive
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-sm'
                        : 'bg-[#F4F1E9] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-0 left-0 right-0 h-1 bg-[#315BFF]" />
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-[10px] font-mono tracking-wider ${
                          isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'
                        }`}
                      >
                        {phase.days}
                      </span>
                      <span
                        className={`text-[10px] font-mono ${
                          isActive ? 'text-white/40' : 'text-[#171717]/40'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="font-semibold text-xs tracking-tight uppercase">
                      {phase.week}
                    </div>
                    <div
                      className={`text-sm tracking-tight font-medium mt-0.5 line-clamp-1 ${
                        isActive ? 'text-white' : 'text-[#171717]'
                      }`}
                    >
                      {phase.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Breakdown */}
            {(() => {
              const currentPhase = data.rollout.phases[activeWeekIndex];
              return (
                <div className="bg-[#F4F1E9] border border-[#171717]/15 p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#171717]/10">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                        {currentPhase.week} · {currentPhase.days}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717] mt-1">
                        {currentPhase.title}
                      </h3>
                    </div>

                    <div className="bg-[#EFECE3] border border-[#171717]/10 px-4 py-2 font-mono text-xs">
                      <span className="text-[#171717]/40 uppercase mr-2">Objective:</span>
                      <span className="font-semibold text-[#171717]">
                        {currentPhase.objective}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8 space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#171717]/50">
                        Strategic Role & Execution Mandate:
                      </div>
                      <p className="text-base sm:text-xl font-light text-[#171717] leading-relaxed">
                        {currentPhase.strategicRole}
                      </p>
                    </div>

                    <div className="md:col-span-4 bg-[#EFECE3] border border-[#171717]/10 p-5 space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#315BFF]">
                        Core Deliverable Focus:
                      </div>
                      <div className="text-xs text-[#171717]/80 font-mono leading-relaxed">
                        {currentPhase.deliverableHighlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Planned Deliverables Manifest */}
            <div className="mt-8 pt-6 border-t border-[#171717]/10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/50">
                  Documented Launch Package Deliverables:
                </span>
                <span className="text-[11px] font-mono text-[#315BFF]">
                  6 CORE ARTIFACTS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {data.rollout.plannedDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F4F1E9] border border-[#171717]/10 text-xs font-mono text-[#171717]/80 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#315BFF] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 06 — THE MEASUREMENT FRAMEWORK */}
      {/* ========================================================================= */}
      <section id="chapter-06" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{data.measurement.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.measurement.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
              {data.measurement.introduction}
            </p>

            {/* MANDATORY PROMINENT DISCLAIMER BADGE */}
            <div className="bg-[#171717] text-[#F4F1E9] p-4 sm:p-5 border-l-4 border-[#315BFF] space-y-1 mt-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                <ShieldAlert className="w-4 h-4" />
                <span>{data.measurement.disclaimerLabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F4F1E9]/80 font-mono leading-relaxed">
                {data.measurement.disclaimerText}
              </p>
            </div>
          </div>

          {/* 5-Stage Interactive KPI Pathway */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ FIVE AUDIENCE JOURNEY MEASUREMENT STAGES ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {data.measurement.stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={stage.number}
                    onClick={() => handleStageSelect(idx)}
                    className={`p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-md'
                        : 'bg-[#F4F1E9] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono tracking-widest ${
                            isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'
                          }`}
                        >
                          STAGE {stage.number}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isActive ? 'bg-[#315BFF]' : 'bg-[#171717]/20'
                          }`}
                        />
                      </div>

                      <h4 className="text-lg font-medium tracking-tight">
                        {stage.name}
                      </h4>

                      <div className="space-y-1.5 pt-2 border-t border-inherit/10">
                        <span
                          className={`text-[10px] font-mono uppercase block ${
                            isActive ? 'text-white/40' : 'text-[#171717]/40'
                          }`}
                        >
                          Key Tracked Metrics:
                        </span>
                        <ul className="space-y-1 text-xs font-mono">
                          {stage.metrics.map((m) => (
                            <li key={m} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-[#315BFF]" />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`pt-3 mt-4 border-t text-[10px] font-mono ${
                        isActive ? 'border-white/10 text-[#315BFF]' : 'border-[#171717]/10 text-[#171717]/50'
                      }`}
                    >
                      {stage.intent}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 07 — STRATEGIC CONTRIBUTION */}
      {/* ========================================================================= */}
      <section id="chapter-07" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.contribution.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.contribution.headline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light pt-2 max-w-3xl">
              <p>{data.contribution.body[0]}</p>
              <p>{data.contribution.body[1]}</p>
            </div>
          </div>

          {/* Strategic Journey Horizontal Flow */}
          <div className="bg-[#EFECE3] border border-[#171717]/15 p-8 sm:p-10 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ COHERENT AUDIENCE STRATEGIC JOURNEY ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {data.contribution.strategicJourney.map((step, idx) => (
                <div
                  key={step}
                  className="bg-[#F4F1E9] border border-[#171717]/10 p-5 space-y-2 relative"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#315BFF]">
                    <span>0{idx + 1}</span>
                    {idx < 4 && <span className="hidden sm:inline text-[#171717]/30">→</span>}
                  </div>
                  <div className="text-xl font-light tracking-tight text-[#171717]">
                    {step}
                  </div>
                  <div className="text-[10px] font-mono text-[#171717]/50">
                    Phase {idx + 1} Transformation
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Strategic Deliverables Checklist */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ COMPREHENSIVE STRATEGIC DELIVERABLES MANIFEST ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {data.contribution.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F4F1E9] border border-[#171717]/15 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-[#315BFF]">0{idx + 1}</span>
                  <span className="text-xs font-medium text-[#171717]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 08 — PROJECT CLOSING & NAVIGATION */}
      {/* ========================================================================= */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-8 pt-16">
        <div className="bg-[#171717] text-[#F4F1E9] p-8 sm:p-12 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <MonogramN size="sm" slashColor="#315BFF" inkColor="#F4F1E9" interactive={false} />
                <span className="text-xl font-bold tracking-tight text-white">
                  NOURI HAZEM
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/50">
                DIGITAL MARKETING STRATEGIST & ACCOUNT MANAGER
              </p>
            </div>

            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateContact();
              }}
              className="px-6 py-3 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
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
              className="p-6 border border-white/10 hover:border-[#315BFF] hover:bg-white/5 transition-all text-left cursor-pointer group"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                ← Return
              </div>
              <div className="text-lg font-light text-white group-hover:text-[#315BFF] transition-colors">
                Back to Strategic Marketing
              </div>
              <div className="text-xs text-white/50 font-mono mt-1">
                Explore all client accounts & analytical frameworks
              </div>
            </button>

            <button
              onClick={() => {
                soundEngine.playEditorialClick();
                onNavigateToProject(nextProject.slug);
              }}
              className="p-6 border border-white/10 hover:border-[#315BFF] hover:bg-white/5 transition-all text-left cursor-pointer group"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                Next Strategic Account →
              </div>
              <div className="text-lg font-light text-white group-hover:text-[#315BFF] transition-colors">
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
