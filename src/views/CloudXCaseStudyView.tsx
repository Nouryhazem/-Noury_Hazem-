import React, { useState, useEffect } from 'react';
import { CLOUDX_CASE_STUDY } from '../data/cloudxData';
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
  Layers,
  BarChart3,
  Server,
  ShieldCheck,
  Cpu,
  Share2,
  Users,
  Target,
  FileText,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface CloudXCaseStudyViewProps {
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const CloudXCaseStudyView: React.FC<CloudXCaseStudyViewProps> = ({
  onBack,
  onNavigateToProject,
  onNavigateContact,
}) => {
  const data = CLOUDX_CASE_STUDY;

  // Chapter 02 Interactive: Milestone line progression
  const [lineExtended, setLineExtended] = useState(true);

  // Chapter 04 Interactive: Active Campaign Stage
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Chapter 06 Interactive: Active Step in Product Health Check Journey
  const [activeHealthCheckStep, setActiveHealthCheckStep] = useState<number>(0);

  // Chapter 08 Interactive: Client-Led Growth Matrix Selected Quadrant
  const [selectedQuadrantId, setSelectedQuadrantId] = useState<string>('high-high');

  // Next Project
  const nextProject = PROJECTS.find((p) => p.id === 'reef-asia') || PROJECTS[3];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playAirySweep(true);
  }, []);

  const handleStageSelect = (idx: number) => {
    soundEngine.playEditorialClick();
    setActiveStageIndex(idx);
  };

  const handleQuadrantSelect = (id: string) => {
    soundEngine.playMechanicalTick(1);
    setSelectedQuadrantId(id);
  };

  const scrollToSection = (id: string) => {
    soundEngine.playEditorialClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeQuadrant =
    data.clientGrowth.matrixQuadrants.find((q) => q.id === selectedQuadrantId) ||
    data.clientGrowth.matrixQuadrants[0];

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#315BFF] selection:text-white pt-24 pb-28">
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
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#315BFF] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Strategic Marketing</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#171717]/50">
            <span>STRATEGIC MARKETING</span>
            <span>/</span>
            <span className="text-[#315BFF] font-medium">CLOUDX</span>
            <span>·</span>
            <span className="text-[#171717]/40">GROWTH ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono px-2 py-0.5 border border-[#315BFF]/30 bg-[#315BFF]/5 text-[#315BFF]">
              B2B STRATEGY BLUEPRINT
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
              <span>{data.meta.industry} · {data.meta.engagement}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#171717]">
                CLOUDX
              </h1>

              {/* Continuous Line Device: Launch Marker & Beyond */}
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#171717]/60">
                  <span className="px-2 py-0.5 border border-[#171717]/20 bg-[#E8E4DA] text-[#171717] font-semibold uppercase">
                    LAUNCH MILESTONE
                  </span>
                  <div className="flex-1 flex items-center">
                    <span className="h-0.5 w-6 bg-[#315BFF]" />
                    <span className="h-0.5 flex-1 bg-[#315BFF]/30 border-dashed" />
                    <span className="text-[10px] text-[#315BFF] px-2 font-mono uppercase">
                      THE SECOND LAUNCH →
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#171717] tracking-tight leading-[1.12]">
                Building a growth system for the{' '}
                <span className="font-editorial italic text-[#315BFF]">
                  work that happens after launch
                </span>.
              </p>
            </div>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4 max-w-3xl">
              <p>{data.meta.introduction}</p>
            </div>

            {/* Scope Tags */}
            <div className="pt-4 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/40">
                Strategic Scope & Engagement Modules:
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

          {/* Project Brief Specifications Card */}
          <div className="lg:col-span-4 bg-[#EFECE3] border border-[#171717]/15 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 text-[10px] font-mono uppercase tracking-widest text-[#171717]/50">
              <span>B2B Strategic Brief Specifications</span>
              <span>REF: CLX-2026</span>
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
                <dt className="text-[#171717]/50 uppercase">Target Markets</dt>
                <dd className="font-medium text-[#171717]">{data.meta.markets}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Client</dt>
                <dd className="font-medium text-[#171717]">{data.meta.client}</dd>
              </div>
              <div className="flex justify-between border-b border-[#171717]/5 pb-2">
                <dt className="text-[#171717]/50 uppercase">Role</dt>
                <dd className="font-medium text-[#315BFF]">{data.meta.role}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#171717]/50 uppercase">Status</dt>
                <dd className="font-medium text-[#171717]">{data.meta.projectStatus}</dd>
              </div>
            </dl>

            <div className="pt-2 border-t border-[#171717]/10">
              <div className="text-[11px] text-[#171717]/60 leading-relaxed font-light">
                Two connected systems: A go-to-market campaign engine and a client-led advocacy pipeline.
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Project Visual Display */}
        <div className="mt-12">
          <div className="aspect-16/9 md:aspect-21/9 w-full bg-[#171717] overflow-hidden relative border border-[#171717]/15 group">
            <img
              src={getAssetUrl(data.meta.heroImage)}
              alt="CloudX Web Services B2B Campaign Architecture"
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
                  B2B Infrastructure Asset
                </span>
                <p className="text-sm sm:text-base font-light text-white/90 max-w-xl">
                  CloudX Web Services · Strategic Growth Architecture
                </p>
              </div>
              <span className="text-xs font-mono text-white/60">
                Egypt / Saudi Arabia / UAE · Enterprise Regional Infrastructure
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
              03 Positioning
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-04')} className="hover:text-[#315BFF] cursor-pointer font-semibold text-[#171717]">
              04 Campaign Architecture
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-06')} className="hover:text-[#315BFF] cursor-pointer">
              06 Health Check
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-08')} className="hover:text-[#315BFF] cursor-pointer font-semibold text-[#315BFF]">
              08 Client Matrix
            </button>
            <span>/</span>
            <button onClick={() => scrollToSection('chapter-10')} className="hover:text-[#315BFF] cursor-pointer">
              10 Contribution
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 01 — THE CHALLENGE */}
      {/* ========================================================================= */}
      <section id="chapter-01" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.challenge.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.challenge.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4">
              <p>{data.challenge.body[0]}</p>
              <p>{data.challenge.body[1]}</p>
              <p>{data.challenge.body[2]}</p>
            </div>
          </div>

          {/* Two-Part Editorial Composition: The Dual Strategic Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-8 bg-[#EFECE3] border border-[#171717]/15 space-y-4 relative">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                STRATEGIC SYSTEM 01
              </span>
              <h3 className="text-2xl font-light tracking-tight text-[#171717]">
                {data.challenge.leftPerspective.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/70 font-mono leading-relaxed">
                {data.challenge.leftPerspective.description}
              </p>
              <div className="pt-4 border-t border-[#171717]/10 text-xs font-mono text-[#171717]/50">
                Pathway: Problem Recognition → Education → Diagnostic Health Check
              </div>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[#171717]/15 space-y-4 relative">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                STRATEGIC SYSTEM 02
              </span>
              <h3 className="text-2xl font-light tracking-tight text-[#171717]">
                {data.challenge.rightPerspective.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/70 font-mono leading-relaxed">
                {data.challenge.rightPerspective.description}
              </p>
              <div className="pt-4 border-t border-[#171717]/10 text-xs font-mono text-[#171717]/50">
                Pathway: Account Health Audit → Advocacy Readiness → Warm Introductions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02 — THE STRATEGIC INSIGHT */}
      {/* ========================================================================= */}
      <section id="chapter-02" className="max-w-7xl mx-auto px-6 sm:px-8 py-24 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="max-w-5xl space-y-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
            {data.insight.sectionLabel}
          </div>

          {/* Major Typographic Moment */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#315BFF] pl-6 sm:pl-8 py-2 space-y-2">
              <span className="text-2xl sm:text-4xl md:text-5xl font-light text-[#171717]/40 font-mono block">
                {data.insight.mainStatementLine1}
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] leading-[1.05]">
                Operating the product is the{' '}
                <span className="font-editorial italic text-[#315BFF]">
                  work that follows
                </span>.
              </h2>
            </div>

            {/* Continuous Line Visual Indicator */}
            <div className="bg-[#F4F1E9] border border-[#171717]/15 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#171717]/60 pb-2 border-b border-[#171717]/10">
                <span>LIFECYCLE AXIS</span>
                <span className="text-[#315BFF]">BEYOND THE RELEASE LINE</span>
              </div>
              <div className="relative py-4">
                <div className="h-1 w-full bg-[#171717]/10 rounded-full overflow-hidden flex">
                  <div className="w-1/3 bg-[#171717]" />
                  <div className="w-2/3 bg-[#315BFF]" />
                </div>
                <div className="flex justify-between text-[11px] font-mono mt-2 text-[#171717]/60">
                  <span>Development & Build</span>
                  <span className="font-bold text-[#171717]">[ LAUNCH MILESTONE ]</span>
                  <span className="font-bold text-[#315BFF]">THE SECOND LAUNCH (OPERATIONS & RESILIENCE) →</span>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light pt-2">
                {data.insight.body[0]} {data.insight.body[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03 — POSITIONING AND GO-TO-MARKET */}
      {/* ========================================================================= */}
      <section id="chapter-03" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.positioning.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.positioning.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.positioning.strategicApproach}
            </p>
          </div>

          {/* Proposed Category & Platform Central Composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#171717] text-[#F4F1E9] space-y-2 border-l-4 border-[#315BFF]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                PROPOSED MARKET CATEGORY
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                {data.positioning.proposedCategory}
              </div>
              <p className="text-xs font-mono text-white/60 pt-2 leading-relaxed">
                Framing ongoing infrastructure and support as an essential post-sale business discipline.
              </p>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[#171717]/15 space-y-2 border-l-4 border-[#171717]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/50">
                CAMPAIGN PLATFORM
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
                &ldquo;{data.positioning.campaignPlatform}&rdquo;
              </div>
              <p className="text-xs font-mono text-[#171717]/60 pt-2 leading-relaxed">
                Launch is a milestone. Operating the product is the second launch that never ends.
              </p>
            </div>
          </div>

          {/* 7 Priority Audiences Architecture */}
          <div className="space-y-4 pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ 07 PRIORITY AUDIENCE SEGMENTS & OPERATIONAL FRICTION ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {data.positioning.priorityAudiences.map((aud) => (
                <div
                  key={aud.num}
                  className="p-5 bg-[#F4F1E9] border border-[#171717]/15 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#315BFF]">
                    <span>{aud.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
                  </div>
                  <div className="font-medium text-sm text-[#171717]">
                    {aud.title}
                  </div>
                  <p className="text-xs text-[#171717]/70 font-mono leading-relaxed">
                    {aud.friction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Two Acquisition Routes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#171717]/10">
            {data.positioning.acquisitionRoutes.map((route, i) => (
              <div key={i} className="p-6 bg-[#EFECE3] border border-[#171717]/15 space-y-2 font-mono">
                <span className="text-[10px] text-[#315BFF] uppercase tracking-wider block">
                  ROUTE 0{i + 1}
                </span>
                <div className="font-semibold text-base text-[#171717]">
                  {route.name}
                </div>
                <div className="text-xs text-[#171717]/80">
                  <span className="text-[#171717]/40 uppercase mr-1">Focus:</span>
                  {route.focus}
                </div>
                <div className="text-xs text-[#171717]/60 pt-1">
                  <span className="text-[#171717]/40 uppercase mr-1">Motion:</span>
                  {route.motion}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04 — CAMPAIGN ARCHITECTURE (INTERACTIVE TIMELINE) */}
      {/* ========================================================================= */}
      <section id="chapter-04" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/30">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.campaignArchitecture.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.campaignArchitecture.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.campaignArchitecture.introduction}
            </p>
          </div>

          {/* Interactive 4-Stage Timeline Matrix */}
          <div className="bg-[#EFECE3] border border-[#171717]/15 p-6 sm:p-10 space-y-8">
            <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-[#171717]/10">
              <span className="uppercase text-[#171717]/50">
                [ 30-DAY SEQUENTIAL CAMPAIGN TIMELINE ]
              </span>
              <span className="text-[#315BFF] font-medium">
                STAGE 0{activeStageIndex + 1} OF 04
              </span>
            </div>

            {/* Stage Selector Tabs with Continuous Line */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {data.campaignArchitecture.stages.map((stg, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stg.stageNum}
                    onClick={() => handleStageSelect(idx)}
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
                      <span className={`text-[10px] font-mono ${isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'}`}>
                        {stg.week}
                      </span>
                      <span className="text-[10px] font-mono text-inherit/50">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="font-semibold text-xs tracking-tight uppercase">
                      STAGE {stg.stageNum}
                    </div>
                    <div className={`text-sm tracking-tight font-medium mt-0.5 line-clamp-1 ${isActive ? 'text-white' : 'text-[#171717]'}`}>
                      {stg.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Stage Presentation */}
            {(() => {
              const current = data.campaignArchitecture.stages[activeStageIndex];
              return (
                <div className="bg-[#F4F1E9] border border-[#171717]/15 p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#171717]/10">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                        STAGE {current.stageNum} · {current.week}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717] mt-1">
                        {current.title}
                      </h3>
                    </div>

                    <div className="bg-[#EFECE3] border border-[#171717]/10 px-4 py-2 font-mono text-xs">
                      <span className="text-[#171717]/40 uppercase mr-2">Campaign Hook:</span>
                      <span className="font-bold text-[#315BFF]">
                        {current.campaignDirection}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8 space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#171717]/50">
                        Strategic Purpose:
                      </div>
                      <p className="text-base sm:text-xl font-light text-[#171717] leading-relaxed">
                        {current.strategicPurpose}
                      </p>
                    </div>

                    <div className="md:col-span-4 bg-[#EFECE3] border border-[#171717]/10 p-5 space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#315BFF]">
                        Execution Mandate:
                      </div>
                      <p className="text-xs text-[#171717]/80 font-mono leading-relaxed">
                        {current.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Additional Campaign Planning Artifacts */}
            <div className="pt-4 border-t border-[#171717]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#171717]/50 uppercase">Supporting Planning Modules:</span>
              <div className="flex flex-wrap gap-2">
                {data.campaignArchitecture.additionalPlanning.map((p, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05 — DEMAND GENERATION & CONTENT */}
      {/* ========================================================================= */}
      <section id="chapter-05" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.demandGeneration.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.demandGeneration.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.demandGeneration.body}
            </p>
          </div>

          {/* Content Systems Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.demandGeneration.contentSystems.map((item) => (
              <div
                key={item.num}
                className="p-6 bg-[#EFECE3] border border-[#171717]/15 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#315BFF]">{item.num}</span>
                    <span className="text-[10px] font-mono text-[#171717]/40 uppercase px-1.5 py-0.5 border border-[#171717]/10">
                      {item.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-[#171717]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#171717]/70 font-mono leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#171717]/10 text-[10px] font-mono text-[#171717]/40 uppercase">
                  Connected to Campaign Funnel
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 06 — THE PRODUCT HEALTH CHECK */}
      {/* ========================================================================= */}
      <section id="chapter-06" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.healthCheck.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.healthCheck.headline}
            </h2>

            <div className="p-4 bg-[#171717] text-white border-l-4 border-[#315BFF] inline-block font-mono text-xs">
              PRIMARY PROPOSED CONVERSION MECHANISM: {data.healthCheck.concept}
            </div>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.healthCheck.body}
            </p>
          </div>

          {/* 6-Step Interactive Conversion Flow */}
          <div className="bg-[#F4F1E9] border border-[#171717]/15 p-6 sm:p-10 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ PROPOSED CONVERSION JOURNEY FROM CONTENT TO SALES HANDOFF ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {data.healthCheck.proposedJourney.map((step, idx) => {
                const isActive = activeHealthCheckStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => {
                      soundEngine.playEditorialClick();
                      setActiveHealthCheckStep(idx);
                    }}
                    className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-sm'
                        : 'bg-[#EFECE3] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'}>
                          STEP {step.step}
                        </span>
                        {idx < 5 && <span className="text-[#171717]/30 hidden lg:inline">→</span>}
                      </div>
                      <div className="font-medium text-xs tracking-tight">
                        {step.name}
                      </div>
                      <p className={`text-[11px] leading-tight font-light ${isActive ? 'text-white/80' : 'text-[#171717]/70'}`}>
                        {step.detail}
                      </p>
                    </div>

                    <div className={`pt-2 mt-3 border-t text-[9px] font-mono ${isActive ? 'border-white/10 text-white/40' : 'border-[#171717]/10 text-[#171717]/40'}`}>
                      Stage 0{idx + 1} Flow
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 07 — SALES ENABLEMENT */}
      {/* ========================================================================= */}
      <section id="chapter-07" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.salesEnablement.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.salesEnablement.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.salesEnablement.introduction}
            </p>
          </div>

          {/* 4 Planned Sales Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.salesEnablement.tools.map((tool) => (
              <div
                key={tool.num}
                className="p-6 bg-[#EFECE3] border border-[#171717]/15 space-y-3"
              >
                <span className="text-xs font-mono text-[#315BFF]">TOOL {tool.num}</span>
                <h3 className="text-lg font-medium text-[#171717] tracking-tight">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#171717]/70 font-mono leading-relaxed">
                  {tool.purpose}
                </p>
              </div>
            ))}
          </div>

          {/* Operating Model & Testing Areas */}
          <div className="p-8 bg-[#171717] text-white space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                Operating Rhythm & Performance Review Model
              </span>
              <span className="text-xs font-mono text-white/50">
                5 TESTING DOMAINS
              </span>
            </div>
            <p className="text-sm font-light text-white/80 leading-relaxed max-w-3xl">
              {data.salesEnablement.operatingModelSummary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {data.salesEnablement.testingAreas.map((area, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 bg-white/10 border border-white/20 text-white">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 08 — CLIENT-LED GROWTH (INTERACTIVE MATRIX CENTERPIECE) */}
      {/* ========================================================================= */}
      <section id="chapter-08" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.clientGrowth.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.clientGrowth.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.clientGrowth.introduction}
            </p>
          </div>

          {/* Interactive Two-Dimensional Decision Matrix Stage */}
          <div className="bg-[#F4F1E9] border border-[#171717]/15 p-6 sm:p-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#171717]/10 text-xs font-mono">
              <span className="uppercase text-[#171717]/50">
                [ TWO-DIMENSIONAL ACCOUNT EVALUATION MATRIX ]
              </span>
              <span className="text-[#315BFF]">
                SELECT QUADRANT TO INSPECT STRATEGIC ACTION
              </span>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.clientGrowth.matrixQuadrants.map((q) => {
                const isSelected = selectedQuadrantId === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => handleQuadrantSelect(q.id)}
                    className={`p-6 text-left border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-md'
                        : 'bg-[#EFECE3] text-[#171717] border-[#171717]/15 hover:border-[#315BFF]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-[#315BFF]' : 'text-[#171717]/50'}`}>
                        {q.readiness} Readiness · {q.growthValue} Value
                      </span>
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#315BFF]' : 'bg-[#171717]/20'}`} />
                    </div>

                    <div className="text-xl font-medium tracking-tight mb-2">
                      {q.action}
                    </div>

                    <p className={`text-xs font-mono leading-relaxed ${isSelected ? 'text-white/80' : 'text-[#171717]/70'}`}>
                      {q.strategicRationale}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Note on commercial context */}
            <div className="p-4 bg-[#EFECE3] border border-[#171717]/10 text-xs font-mono text-[#171717]/60 leading-relaxed">
              * Note: Account-level advocacy decisions depend on authentic relationship context, customer consent and commercial suitability. The matrix is a strategic governance tool, not an automated referral extraction script.
            </div>

            {/* Strategic Components & 5-8 Client Pilot */}
            <div className="pt-6 border-t border-[#171717]/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                Strategic Governance Safeguards:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.clientGrowth.strategicComponents.map((comp, idx) => (
                  <div key={idx} className="p-3 bg-[#EFECE3] border border-[#171717]/10 text-xs font-mono text-[#171717]/80 flex items-start gap-2">
                    <span className="text-[#315BFF]">✓</span>
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 09 — MEASUREMENT FRAMEWORK */}
      {/* ========================================================================= */}
      <section id="chapter-09" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.measurement.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.measurement.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light">
              {data.measurement.introduction}
            </p>

            {/* MANDATORY PROMINENT DISCLAIMER BADGE */}
            <div className="bg-[#171717] text-[#F4F1E9] p-4 sm:p-5 border-l-4 border-[#315BFF] space-y-1 mt-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                <ShieldCheck className="w-4 h-4" />
                <span>{data.measurement.disclaimerLabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F4F1E9]/80 font-mono leading-relaxed">
                {data.measurement.disclaimerText}
              </p>
            </div>
          </div>

          {/* Dual Measurement Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* System 01: Go-to-Market */}
            <div className="p-8 bg-[#EFECE3] border border-[#171717]/15 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                {data.measurement.system1.name}
              </span>
              <div className="space-y-4">
                {data.measurement.system1.stages.map((stg) => (
                  <div key={stg.stage} className="p-4 bg-[#F4F1E9] border border-[#171717]/10 font-mono">
                    <span className="text-xs text-[#171717]/50 uppercase block mb-1">{stg.stage}</span>
                    <ul className="text-xs text-[#171717] space-y-1">
                      {stg.metrics.map((m) => (
                        <li key={m} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* System 02: Client-Led Growth */}
            <div className="p-8 bg-[#EFECE3] border border-[#171717]/15 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#315BFF] block">
                  {data.measurement.system2.name}
                </span>

                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#171717]/50">
                    Three Headline Measures:
                  </div>
                  {data.measurement.system2.headlineMeasures.map((measure, i) => (
                    <div key={i} className="p-4 bg-[#F4F1E9] border border-[#171717]/10 font-mono text-sm font-medium text-[#171717] flex items-center justify-between">
                      <span>{measure}</span>
                      <span className="text-xs text-[#315BFF]">0{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#F4F1E9] border border-[#171717]/10 text-xs font-mono text-[#171717]/70 leading-relaxed">
                  {data.measurement.system2.supportingDetail}
                </div>
              </div>

              <div className="pt-4 border-t border-[#171717]/10 text-[10px] font-mono uppercase text-[#171717]/40">
                Connected to Unified Growth Objective
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 10 — STRATEGIC CONTRIBUTION */}
      {/* ========================================================================= */}
      <section id="chapter-10" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-b border-[#171717]/15 bg-[#EAE6DC]/40">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              {data.contribution.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {data.contribution.headline}
            </h2>

            <div className="pt-2 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light space-y-4">
              <p>{data.contribution.body[0]}</p>
              <p>{data.contribution.body[1]}</p>
            </div>
          </div>

          {/* Dual Convergence Diagram: From Positioning to Pipeline */}
          <div className="bg-[#171717] text-white p-8 sm:p-12 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
              <span className="text-[#315BFF] uppercase tracking-widest">
                [ TWO GROWTH PATHWAYS CONVERGING ]
              </span>
              <span className="text-white/50">{data.contribution.projectStatusNote}</span>
            </div>

            {/* Pathway 1: Go-to-Market */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                PATHWAY 01: GO-TO-MARKET CAMPAIGN
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {data.contribution.system1Flow.map((step, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 text-white">
                    <span className="text-[10px] text-[#315BFF] block mb-1">0{idx + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Pathway 2: Client-Led Growth */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                PATHWAY 02: CLIENT-LED ADVOCACY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {data.contribution.system2Flow.map((step, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 text-white">
                    <span className="text-[10px] text-[#315BFF] block mb-1">0{idx + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Final Statement */}
            <div className="pt-6 border-t border-white/10 text-center sm:text-left">
              <div className="text-2xl sm:text-4xl md:text-5xl font-editorial italic text-white">
                &ldquo;{data.contribution.finalStatement}&rdquo;
              </div>
            </div>
          </div>

          {/* Key Strategic Deliverables Checklist */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">
              [ 12 DOCUMENTED STRATEGIC DELIVERABLES ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
      {/* CHAPTER 11 — PROJECT CLOSING & NAVIGATION */}
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
