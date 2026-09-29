import React, { useState, useEffect, useRef } from 'react';
import { MonogramN } from '../components/MonogramN';
import { Project, PROJECTS } from '../data/projectsData';
import { soundEngine } from '../utils/soundEngine';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Code2,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
  Sparkles,
  Zap,
  ShieldCheck,
  Compass,
  MoveDown,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HomeViewProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  // Opening animation stages
  const [openingStage, setOpeningStage] = useState<number>(0);

  // Chapter 01 Interactive Diagram node
  const [activeStrategyNode, setActiveStrategyNode] = useState<'business' | 'audience' | 'insight' | 'opportunity'>('business');

  // Chapter 05 Interactive Responsive Switcher
  const [demoViewport, setDemoViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Container refs for GSAP ScrollTrigger sequences
  const portalRef = useRef<HTMLDivElement>(null);
  const portalMonogramRef = useRef<HTMLDivElement>(null);
  const portalContentRef = useRef<HTMLDivElement>(null);
  const portalRingRef = useRef<HTMLDivElement>(null);
  const portalInnerRingRef = useRef<HTMLDivElement>(null);
  const portalBeamRef = useRef<HTMLDivElement>(null);

  const kineticTypoRef = useRef<HTMLDivElement>(null);
  const wordIdeasRef = useRef<HTMLSpanElement>(null);
  const wordNeedRef = useRef<HTMLSpanElement>(null);
  const wordFormRef = useRef<HTMLSpanElement>(null);

  const layeredRevealRef = useRef<HTMLDivElement>(null);
  const layerBgRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerForeRef = useRef<HTMLDivElement>(null);

  const chaosContainerRef = useRef<HTMLDivElement>(null);
  const clarityGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initial Opening Choreography
    const t1 = setTimeout(() => setOpeningStage(1), 100);
    const t2 = setTimeout(() => setOpeningStage(2), 350);
    const t3 = setTimeout(() => setOpeningStage(3), 600);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }

    // GSAP ScrollTrigger Context to ensure strict cleanup
    const ctx = gsap.context(() => {
      // =========================================================================
      // SIGNATURE TRANSITION 01: N/ STRATEGIC PORTAL
      // Precision Architectural Aperture: vector-sharp optics, zero overlap, crisp typography
      // =========================================================================
      if (portalRef.current) {
        const portalTl = gsap.timeline({
          scrollTrigger: {
            trigger: portalRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1,
            onEnter: () => soundEngine.playAirySweep(),
          },
        });

        // 1. Outer caliper dial rotates smoothly
        if (portalRingRef.current) {
          portalTl.fromTo(
            portalRingRef.current,
            { rotation: -60, opacity: 0.4 },
            { rotation: 0, opacity: 1, ease: 'none' },
            0
          );
        }

        // 2. Inner fine reticle counter-rotates
        if (portalInnerRingRef.current) {
          portalTl.fromTo(
            portalInnerRingRef.current,
            { rotation: 45 },
            { rotation: 0, ease: 'none' },
            0
          );
        }

        // 3. Monogram stays 100% crisp vector (subtle, restrained breathing without pixelation or text overlap)
        if (portalMonogramRef.current) {
          portalTl.fromTo(
            portalMonogramRef.current,
            { scale: 0.92, opacity: 0.7 },
            { scale: 1.04, opacity: 1, ease: 'power2.out' },
            0
          );
        }

        // 4. Cobalt Horizon Guide Beam sweeps open across
        if (portalBeamRef.current) {
          portalTl.fromTo(
            portalBeamRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, ease: 'power3.inOut' },
            0.05
          );
        }

        // 5. Strategic narrative chamber reveals gracefully with zero collision
        if (portalContentRef.current) {
          portalTl.fromTo(
            portalContentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, ease: 'power2.out' },
            0.15
          );
        }

        // 6. Strategic vectors reveal in a staggered sequence
        const portalNodeItems = portalRef.current.querySelectorAll('.portal-node-item');
        if (portalNodeItems.length > 0) {
          portalTl.fromTo(
            portalNodeItems,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' },
            0.25
          );
        }
      }

      // =========================================================================
      // SIGNATURE TRANSITION 02: KINETIC TYPOGRAPHY
      // Words "IDEAS" "NEED" "FORM" converge from opposite coordinates and lock
      // =========================================================================
      if (kineticTypoRef.current && wordIdeasRef.current && wordNeedRef.current && wordFormRef.current) {
        const typoTl = gsap.timeline({
          scrollTrigger: {
            trigger: kineticTypoRef.current,
            start: 'top 75%',
            end: 'center 45%',
            scrub: 0.8,
            onEnter: () => soundEngine.playAirySweep(),
          },
        });

        typoTl.fromTo(
          wordIdeasRef.current,
          { x: -120, opacity: 0.15, filter: 'blur(4px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', ease: 'power3.out' },
          0
        );

        typoTl.fromTo(
          wordNeedRef.current,
          { y: 80, opacity: 0.15, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, ease: 'power3.out' },
          0.1
        );

        typoTl.fromTo(
          wordFormRef.current,
          { x: 120, opacity: 0.15, filter: 'blur(4px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', ease: 'power3.out' },
          0.15
        );
      }

      // =========================================================================
      // SIGNATURE TRANSITION 03: LAYERED REVEAL
      // Campaign visuals enter at different depths with restrained parallax
      // =========================================================================
      if (layeredRevealRef.current) {
        if (layerBgRef.current) {
          gsap.fromTo(
            layerBgRef.current,
            { y: 60 },
            {
              y: -40,
              ease: 'none',
              scrollTrigger: {
                trigger: layeredRevealRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }

        if (layerMidRef.current) {
          gsap.fromTo(
            layerMidRef.current,
            { y: 40, opacity: 0.85 },
            {
              y: -20,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: layeredRevealRef.current,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: 1.2,
              },
            }
          );
        }

        if (layerForeRef.current) {
          gsap.fromTo(
            layerForeRef.current,
            { y: 80 },
            {
              y: -60,
              ease: 'none',
              scrollTrigger: {
                trigger: layeredRevealRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.8,
              },
            }
          );
        }
      }

      // =========================================================================
      // SIGNATURE TRANSITION 04: CHAOS TO CLARITY
      // Abstract numbers and metrics snap together into structured dashboard
      // =========================================================================
      if (chaosContainerRef.current && clarityGridRef.current) {
        const chaosItems = chaosContainerRef.current.querySelectorAll('.chaos-item');
        const clarityCards = clarityGridRef.current.querySelectorAll('.clarity-card');

        const chaosTl = gsap.timeline({
          scrollTrigger: {
            trigger: chaosContainerRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1,
            onEnter: () => soundEngine.playMechanicalTick(3),
          },
        });

        // Chaos items converge from random offsets to center, then dissolve
        chaosTl.to(chaosItems, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.inOut',
        });

        // Clarity cards reveal in tight aligned grid
        chaosTl.fromTo(
          clarityCards,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.1, ease: 'power3.out' },
          '-=0.2'
        );
      }
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      ctx.revert(); // clean up all GSAP timelines and ScrollTriggers
    };
  }, []);

  const featuredMarketingProjects = PROJECTS.filter(
    (p) => p.id === 'juraa' || p.id === 'cloudx'
  );

  const strategyNodes = {
    business: {
      title: 'BUSINESS CHALLENGE',
      summary: 'Before creating, we diagnose. What is the fundamental commercial barrier? Is it audience awareness, brand differentiation, or customer retention?',
      question: 'Where is audience engagement or interest falling off in the current journey?',
    },
    audience: {
      title: 'AUDIENCE RESEARCH',
      summary: 'Observing cultural habits, everyday routines, and communication preferences across Egypt and the GCC. Identifying what audiences truly value.',
      question: 'What message and reassurance does the audience need to build genuine trust?',
    },
    insight: {
      title: 'FOUNDATIONAL INSIGHT',
      summary: 'Distilling audience research and market context into a clear, compelling truth that gives the brand purpose.',
      question: 'What authentic angle differentiates this brand from competitors?',
    },
    opportunity: {
      title: 'STRATEGIC ROADMAP',
      summary: 'Translating the insight into content calendars, creative concept development, brand identity assets, and KPI reporting scorecards.',
      question: 'How do we align creative execution with actionable, honest performance reporting?',
    },
  };

  const handleActionClick = (page: string, slug?: string) => {
    soundEngine.playEditorialClick();
    onNavigate(page, slug);
  };

  return (
    <div className="bg-[#F4F1E9] text-[#171717] min-h-screen selection:bg-[#315BFF] selection:text-white">
      
      {/* ========================================================================= */}
      {/* FIRST FRAME: FULL-SCREEN EDITORIAL OPENING */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10">
        
        {/* Top Micro-label */}
        <div className={`transition-all duration-700 ${openingStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#171717]/60">
            <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
            <span>STRATEGY / CREATIVITY / DATA</span>
            <span className="text-[#171717]/30">·</span>
            <span>EGYPT & GCC</span>
          </div>
        </div>

        {/* Central Typographic Statement & Signature N/ Monogram */}
        <div className="my-auto py-12 space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              {/* Grand Typographic NOURI */}
              <div
                className={`transition-all duration-700 ${
                  openingStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#171717] leading-none select-none font-sans-primary">
                    NOURI
                  </span>
                  <span className="text-6xl sm:text-8xl md:text-9xl font-bold text-[#315BFF] leading-none select-none">
                    /
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] transition-all duration-700 delay-100 ${
                  openingStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                I connect the <span className="font-editorial italic font-normal text-[#171717]">dots</span>.
              </h1>
            </div>

            {/* Central Motif Visual Anchor */}
            <div
              className={`transition-all duration-700 delay-150 self-start lg:self-end ${
                openingStage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div
                onClick={() => soundEngine.playNouriTwoNoteMotif()}
                className="p-4 sm:p-6 bg-white/70 border border-[#171717]/10 flex items-center gap-4 cursor-pointer hover:border-[#315BFF] transition-colors group"
                title="Click for N/ signature sonic motif"
              >
                <MonogramN size="lg" slashColor="#315BFF" inkColor="#171717" interactive={true} />
                <div className="text-xs font-mono space-y-1">
                  <div className="font-semibold text-[#171717] group-hover:text-[#315BFF] transition-colors">NOURI HAZEM</div>
                  <div className="text-[#171717]/60">Digital Marketing Strategist</div>
                  <div className="text-[#315BFF]">Creative Account Manager</div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Text & Actions */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4 transition-all duration-700 delay-200 ${
              openingStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl md:text-2xl text-[#171717]/85 font-light leading-relaxed max-w-3xl">
                I connect the dots between marketing strategy, creative execution, client communication, and performance reporting. Bringing together audience research, brand identity, and actionable analytics across Egypt and GCC markets.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap items-center gap-3">
              <button
                onClick={() => handleActionClick('marketing')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#171717] text-white hover:bg-[#315BFF] transition-all duration-200 text-xs font-mono uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleActionClick('about')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#171717]/15 text-[#171717] hover:border-[#315BFF] transition-all duration-200 text-xs font-mono uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Meet Nouri</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Scroll Cue */}
        <div className="flex items-center justify-between text-xs font-mono text-[#171717]/40 pt-4 border-t border-[#171717]/5">
          <span>Dipdux Analytica · Digital Marketing Strategist & Creative Account Manager</span>
          <span className="flex items-center gap-1.5 animate-bounce">
            <span>Scroll to Experience Journey</span>
            <MoveDown className="w-3.5 h-3.5" />
          </span>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SCROLL CHAPTER 01: "IT STARTS WITH A QUESTION." */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10">
        <div className="space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              <span>Chapter 01</span>
              <span>/</span>
              <span>The Diagnostic Foundation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-tight">
              &ldquo;It starts with a question.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed">
              Every meaningful campaign or brand identity begins by unravelling business problems, dissecting consumer friction points, and uncovering unseen market opportunities.
            </p>
          </div>

          {/* Interactive Strategy Flow Diagram: BUSINESS -> AUDIENCE -> INSIGHT -> OPPORTUNITY */}
          <div className="bg-white border border-[#171717]/10 p-6 sm:p-10 space-y-8">
            <div className="flex items-center justify-between text-xs font-mono text-[#171717]/50 pb-4 border-b border-[#171717]/10">
              <span className="uppercase tracking-widest">Interactive Analytical Framework</span>
              <span>Select node to inspect diagnostic flow</span>
            </div>

            {/* 4 Connected Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
              {(['business', 'audience', 'insight', 'opportunity'] as const).map((nodeKey, idx) => {
                const isActive = activeStrategyNode === nodeKey;
                const nodeData = strategyNodes[nodeKey];
                return (
                  <button
                    key={nodeKey}
                    onClick={() => {
                      soundEngine.playEditorialClick();
                      setActiveStrategyNode(nodeKey);
                    }}
                    className={`p-5 text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between h-36 ${
                      isActive
                        ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-md'
                        : 'bg-[#F4F1E9]/60 hover:bg-white border-[#171717]/15 text-[#171717]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={isActive ? 'text-[#315BFF]' : 'text-[#171717]/40'}>0{idx + 1}</span>
                      <span className={isActive ? 'text-[#315BFF]' : 'text-transparent'}>●</span>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider font-semibold">
                        {nodeData.title}
                      </div>
                      <div className="text-[10px] opacity-60 font-mono mt-1">
                        Phase 0{idx + 1}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Node Explanation */}
            <div className="bg-[#EFECE3] p-6 sm:p-8 border border-[#171717]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#315BFF] uppercase tracking-wider font-semibold">
                  Diagnostic Deep Dive · {strategyNodes[activeStrategyNode].title}
                </span>
                <span className="text-xs font-mono text-[#171717]/50">Strategic Lens</span>
              </div>
              <p className="text-sm sm:text-base text-[#171717] font-normal leading-relaxed">
                {strategyNodes[activeStrategyNode].summary}
              </p>
              <div className="pt-2 text-xs font-mono text-[#171717]/70 italic flex items-center gap-2">
                <span className="text-[#315BFF] font-bold">Key Inquiry:</span>
                <span>&ldquo;{strategyNodes[activeStrategyNode].question}&rdquo;</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SIGNATURE TRANSITION 01: N/ STRATEGIC PORTAL */}
      {/* Vector-sharp architectural gateway transitioning Diagnosis to Architecture */}
      {/* ========================================================================= */}
      <section
        ref={portalRef}
        className="relative py-20 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden border-b border-[#171717]/10 bg-[#EFECE3]/60"
        aria-label="Signature Transition 01 · Strategic Portal"
      >
        {/* Background Architectural Grid Accent */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Portal Frame Header Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#171717]/10 text-xs font-mono uppercase tracking-wider text-[#171717]/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#315BFF] animate-pulse" />
            <span className="font-semibold text-[#171717]">Transition 01 // Strategic Portal</span>
            <span className="text-[#171717]/30">·</span>
            <span className="hidden sm:inline">Diagnostic Insight → Commercial Architecture</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#171717]/60">
            <span>LOCATION: EGYPT · MARKETS: EGYPT & GCC</span>
            <span className="px-2 py-0.5 border border-[#315BFF]/30 bg-[#315BFF]/10 text-[#315BFF] font-medium">
              PORTAL: ENGAGED
            </span>
          </div>
        </div>

        {/* Core Gateway Layout: Aperture Chamber + Strategic Manifest (Completely separated, zero collision) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Vector-Sharp Precision Aperture Reticle (Emblem stays crisp, never pixelates or collides) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Outer Rotating Technical Caliper Dial */}
              <div
                ref={portalRingRef}
                className="absolute inset-0 will-change-transform pointer-events-none"
              >
                <svg viewBox="0 0 320 320" className="w-full h-full text-[#171717]/25" fill="none">
                  {/* Outer circle */}
                  <circle cx="160" cy="160" r="156" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
                  
                  {/* Caliper Cardinal Brackets */}
                  <path d="M160 8 V20 M160 300 V312 M8 160 H20 M300 160 H312" stroke="#171717" strokeWidth="1.5" />
                  
                  {/* 45-degree angle tick marks */}
                  <line x1="52" y1="52" x2="62" y2="62" stroke="currentColor" strokeWidth="1" />
                  <line x1="268" y1="52" x2="258" y2="62" stroke="currentColor" strokeWidth="1" />
                  <line x1="52" y1="268" x2="62" y2="258" stroke="currentColor" strokeWidth="1" />
                  <line x1="268" y1="268" x2="258" y2="258" stroke="currentColor" strokeWidth="1" />
                  
                  {/* Degree Indices */}
                  <text x="160" y="32" textAnchor="middle" fill="#171717" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">000°</text>
                  <text x="290" y="163" textAnchor="middle" fill="#171717" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">090°</text>
                  <text x="160" y="296" textAnchor="middle" fill="#171717" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">180°</text>
                  <text x="30" y="163" textAnchor="middle" fill="#171717" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">270°</text>
                </svg>
              </div>

              {/* Inner Counter-Rotating Reticle */}
              <div
                ref={portalInnerRingRef}
                className="absolute inset-5 will-change-transform pointer-events-none"
              >
                <svg viewBox="0 0 280 280" className="w-full h-full text-[#315BFF]/35" fill="none">
                  <circle cx="140" cy="140" r="136" stroke="currentColor" strokeWidth="1" />
                  <circle cx="140" cy="140" r="114" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
                  {/* Precision Crosshair Ticks */}
                  <path d="M140 28 V48 M140 232 V252 M28 140 H48 M232 140 H252" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Dynamic Cobalt Horizon Laser Guide */}
              <div
                ref={portalBeamRef}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#315BFF] to-transparent pointer-events-none will-change-transform origin-center"
              />

              {/* Center Monogram: Vector Sharp, Pure Editorial Elegance */}
              <div
                ref={portalMonogramRef}
                className="relative z-10 p-5 sm:p-6 bg-[#F4F1E9] border border-[#171717]/15 shadow-sm will-change-transform transition-transform duration-300 hover:scale-105"
              >
                <MonogramN
                  size="xl"
                  slashColor="#315BFF"
                  inkColor="#171717"
                  interactive={true}
                  onClick={() => soundEngine.playMechanicalTick(2)}
                />
              </div>

            </div>

            {/* Aperture Status Caption */}
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#171717]/60 uppercase tracking-widest">
              <span>AXIS LOCK</span>
              <span className="text-[#315BFF]">/</span>
              <span>VECTOR CALIBRATED</span>
            </div>
          </div>

          {/* Right Column: Strategic Gateway Narrative Chamber (Dedicated space, clean typography) */}
          <div ref={portalContentRef} className="lg:col-span-7 space-y-6 will-change-transform">
            
            {/* Stage Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#F4F1E9] text-[11px] font-mono uppercase tracking-widest">
              <span className="text-[#315BFF] font-bold">N/</span>
              <span>PHASE DISCIPLINE 02</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#171717] leading-tight font-sans-primary">
                Entering the{' '}
                <span className="font-editorial italic font-normal text-[#315BFF]">
                  Marketing Discipline
                </span>
              </h3>
              <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed max-w-xl">
                Where deep diagnostic interrogation converts into brand architecture, campaign positioning, and multi-market commercial momentum.
              </p>
            </div>

            {/* 3 Strategic Bridge Vectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div
                onClick={() => handleActionClick('branding')}
                className="portal-node-item p-3.5 bg-[#F4F1E9] border border-[#171717]/10 space-y-1 cursor-pointer hover:border-[#B8924E] transition-all group"
              >
                <div className="text-[10px] font-mono text-[#B8924E] uppercase tracking-wider font-semibold">
                  Vector 01 · Discipline
                </div>
                <div className="text-xs font-semibold text-[#171717] font-mono flex items-center justify-between">
                  <span>Brand Architecture</span>
                  <span className="text-[#B8924E] group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="text-[11px] text-[#171717]/65 leading-snug">
                  Flagship Systems: Relax Café (The Seventh Perspective) & JURAA (The Shape of Care).
                </p>
              </div>

              <div className="portal-node-item p-3.5 bg-[#F4F1E9] border border-[#171717]/10 space-y-1">
                <div className="text-[10px] font-mono text-[#315BFF] uppercase tracking-wider font-semibold">
                  Vector 02
                </div>
                <div className="text-xs font-semibold text-[#171717] font-mono">
                  Regional Distribution
                </div>
                <p className="text-[11px] text-[#171717]/65 leading-snug">
                  Localized campaign orchestration across Egypt & the GCC.
                </p>
              </div>

              <div className="portal-node-item p-3.5 bg-[#F4F1E9] border border-[#171717]/10 space-y-1">
                <div className="text-[10px] font-mono text-[#315BFF] uppercase tracking-wider font-semibold">
                  Vector 03
                </div>
                <div className="text-xs font-semibold text-[#171717] font-mono">
                  Performance Reporting
                </div>
                <p className="text-[11px] text-[#171717]/65 leading-snug">
                  Structured KPI scorecards, dashboard reporting & data-informed iteration.
                </p>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleActionClick('marketing')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#171717] text-white hover:bg-[#315BFF] transition-colors cursor-pointer"
              >
                <span>Explore Marketing Index</span>
                <span className="text-[#315BFF] group-hover:text-white font-bold">→</span>
              </button>
              <span className="text-xs font-mono text-[#171717]/50 hidden sm:inline">
                Scroll to proceed into Chapter 02
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Technical Crosshairs & Horizon Boundary */}
        <div className="relative z-10 flex items-center justify-between pt-6 mt-8 border-t border-[#171717]/10 text-[10px] font-mono text-[#171717]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <span>+</span>
            <span>CH-01: PROBLEM DIAGNOSIS</span>
          </span>
          <span className="text-[#315BFF]">━━━ TRANSITION AXIS ━━━</span>
          <span className="flex items-center gap-1.5">
            <span>CH-02: STRATEGY & CAMPAIGNS</span>
            <span>+</span>
          </span>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SCROLL CHAPTER 02: "THEN, I BUILD THE STRATEGY." */}
      {/* Sticky editorial layout with featured accounts */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Left Rail: Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              <span>Chapter 02</span>
              <span>/</span>
              <span>Marketing Architecture</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight">
              &ldquo;Then, I build <br className="hidden sm:inline" />
              <span className="font-editorial italic">the strategy</span>.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed font-light">
              Strategy without creative execution is abstract; creativity without strategic positioning lacks purpose. I build structured roadmaps that connect audience research, content planning, brand identity, and client reporting.
            </p>

            <div className="pt-4 border-t border-[#171717]/10 space-y-3 text-xs font-mono text-[#171717]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
                <span>Featured Projects: JURAA (Proposed 30-Day Launch Plan) & CloudX (Ongoing B2B Growth Strategy)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
                <span>Distinguishing proposed strategy blueprints & creative concepts from active client roadmaps</span>
              </div>
            </div>

            <button
              onClick={() => handleActionClick('marketing')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer mt-2"
            >
              <span>View All Marketing Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Rail: Selected Marketing Projects */}
          <div className="lg:col-span-7 space-y-8">
            {featuredMarketingProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => handleActionClick('marketing', project.slug)}
                className="bg-white border border-[#171717]/10 p-6 sm:p-8 space-y-5 cursor-pointer hover:border-[#315BFF] transition-all duration-300 group"
              >
                <div className="aspect-16/9 bg-[#171717] overflow-hidden relative border border-[#171717]/10">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#171717]/90 text-white border border-white/20">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#315BFF] block">
                        {project.industry}
                      </span>
                      <span className="text-xl font-light">{project.title}</span>
                    </div>
                    <span className="text-xs font-mono">{project.market}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-editorial italic text-[#171717]/90">
                    &ldquo;{project.tagline}&rdquo;
                  </div>
                  <p className="text-xs text-[#171717]/70 leading-relaxed font-light">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#171717]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#171717]/50">Role: {project.role}</span>
                  <span className="text-[#315BFF] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Strategy <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SIGNATURE TRANSITION 02: KINETIC TYPOGRAPHY */}
      {/* Words separate, reposition and reform to introduce Creative */}
      {/* ========================================================================= */}
      <section
        ref={kineticTypoRef}
        className="py-28 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden border-b border-[#171717]/10"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
            <span>Signature Transition 02</span>
            <span>/</span>
            <span>Kinetic Typographic Reformation</span>
          </div>

          {/* Kinetic Typographic Lockup */}
          <div className="overflow-hidden py-8 border-y border-[#171717]/10 select-none">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-bold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#171717] leading-none">
              <span ref={wordIdeasRef} className="inline-block will-change-transform font-sans-primary">
                IDEAS
              </span>
              <span
                ref={wordNeedRef}
                className="inline-block will-change-transform font-editorial italic text-[#315BFF] font-normal"
              >
                need
              </span>
              <span ref={wordFormRef} className="inline-block will-change-transform font-sans-primary text-right">
                FORM<span className="text-[#315BFF]">.</span>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#171717]/75 font-light leading-relaxed max-w-2xl">
            Creative direction is not superficial decoration. It is the visual translation of strategic clarity into memorable human emotion, typography, and tactile craft.
          </p>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SIGNATURE TRANSITION 03: LAYERED REVEAL WITH RESTRAINED PARALLAX */}
      {/* ========================================================================= */}
      <section
        ref={layeredRevealRef}
        className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10"
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#171717]/50 pb-2 border-b border-[#171717]/10">
            <span className="uppercase tracking-widest text-[#315BFF]">
              Signature Transition 03 · Spatial Multi-Depth Reveal
            </span>
            <span>Background · Midground · Foreground</span>
          </div>

          <div className="relative min-h-[520px] sm:min-h-[580px] bg-[#171717] text-[#F4F1E9] p-8 sm:p-14 overflow-hidden border border-[#171717] flex flex-col justify-between">
            
            {/* Background Layer: Atmospheric Typography & Geometry */}
            <div
              ref={layerBgRef}
              className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center overflow-hidden"
            >
              <span className="text-[20vw] font-bold font-sans-primary tracking-tighter text-white select-none whitespace-nowrap">
                CREATIVE/
              </span>
            </div>

            {/* Midground Layer: Art-Directed Showcase */}
            <div ref={layerMidRef} className="relative z-10 space-y-4 max-w-xl">
              <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
                Art Direction & Campaign Craft
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light font-editorial italic text-white leading-tight">
                Harmonizing Arabic & Latin Typographic Systems
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F1E9]/75 font-light leading-relaxed">
                From Arabic medication UI and brand identity for JURAA to corporate editorial collateral for Dipdux, culinary brand assets for Reef Asia Kitchens, and multi-brand creative directions for Saudi National Day 96, every layout, type choice, and color is shaped with deliberate strategic intent.
              </p>
            </div>

            {/* Foreground Layer: Floating Depth Card & Controls */}
            <div
              ref={layerForeRef}
              className="relative z-20 self-end bg-white/95 text-[#171717] p-5 sm:p-6 border border-white/20 shadow-2xl max-w-sm space-y-3 mt-8"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#315BFF]">
                <span>CREATIVE CRAFT</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl font-light tracking-tight font-sans-primary font-medium text-[#171717]">
                Bilingual Design Systems
              </div>
              <p className="text-xs text-[#171717]/70 font-light leading-snug">
                Cohesive Arabic and Latin typography, custom art direction, and cultural resonance across 5 Saudi National Day brand concepts.
              </p>
              <button
                onClick={() => handleActionClick('creative')}
                className="w-full py-2 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Enter Creative View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SIGNATURE TRANSITION 04: CHAOS TO CLARITY */}
      {/* Abstract scattered numbers assemble into structured analytics */}
      {/* ========================================================================= */}
      <section
        ref={chaosContainerRef}
        className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10"
      >
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              <span>Signature Transition 04</span>
              <span>/</span>
              <span>Chaos to Clarity Analytics Transition</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-tight">
              &ldquo;And results need <br />
              <span className="font-editorial italic">honest measurement</span>.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed">
              Watch raw data organize into decision-ready clarity: I turn scattered marketing metrics and campaign data into structured Power BI dashboards, Python data analyses, and Google Sheets KPI trackers that provide actionable marketing insights.
            </p>
          </div>

          {/* Abstract Scattering Cloud (The "Chaos" State before scroll convergence) */}
          <div className="relative min-h-[120px] flex flex-wrap items-center justify-around gap-4 p-4 font-mono text-xs text-[#171717]/40 border-b border-[#171717]/10 overflow-hidden">
            <span className="chaos-item inline-block rotate-[-12deg] text-base text-[#315BFF]">
              RAW_CAMPAIGN_SPEND
            </span>
            <span className="chaos-item inline-block rotate-[8deg] text-lg font-bold text-[#171717]">
              COST_PER_LEAD_VAR
            </span>
            <span className="chaos-item inline-block rotate-[-6deg] text-sm text-[#171717]/60">
              AUDIENCE_ENGAGEMENT_RATES
            </span>
            <span className="chaos-item inline-block rotate-[14deg] text-xl font-light text-emerald-600">
              CONVERSION_FUNNEL_DATA
            </span>
            <span className="chaos-item inline-block rotate-[-18deg] text-sm text-[#315BFF]">
              WEEKLY_KPI_TRACKING
            </span>
          </div>

          {/* Structured Dashboard Grid (The "Clarity" State) */}
          <div
            ref={clarityGridRef}
            className="bg-[#171717] text-[#F4F1E9] p-6 sm:p-10 border border-[#171717] space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4F1E9]/15">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-[#315BFF]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#F4F1E9]">
                  Structured Intelligence Grid · Dipdux Analytica Model
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[#F4F1E9]/60">
                <span>Power BI</span>
                <span>·</span>
                <span>Python Data Analysis</span>
                <span>·</span>
                <span>Google Sheets & Looker</span>
              </div>
            </div>

            {/* Structured Clarity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="clarity-card p-5 bg-white/5 border border-[#F4F1E9]/10 space-y-1">
                <span className="text-[10px] font-mono text-[#F4F1E9]/50 uppercase">Business Intelligence</span>
                <div className="text-xl sm:text-2xl font-light font-mono-data text-white">Power BI</div>
                <span className="text-[11px] font-mono text-[#315BFF]">Interactive KPI Dashboards</span>
              </div>
              <div className="clarity-card p-5 bg-white/5 border border-[#F4F1E9]/10 space-y-1">
                <span className="text-[10px] font-mono text-[#F4F1E9]/50 uppercase">Data Analysis</span>
                <div className="text-xl sm:text-2xl font-light font-mono-data text-white">Python / Pandas</div>
                <span className="text-[11px] font-mono text-emerald-400">Cohort & Trend Analysis</span>
              </div>
              <div className="clarity-card p-5 bg-white/5 border border-[#F4F1E9]/10 space-y-1">
                <span className="text-[10px] font-mono text-[#F4F1E9]/50 uppercase">Reporting Tools</span>
                <div className="text-xl sm:text-2xl font-light font-mono-data text-white">Google Sheets</div>
                <span className="text-[11px] font-mono text-sky-400">Client Reporting & Scorecards</span>
              </div>
              <div className="clarity-card p-5 bg-white/5 border border-[#F4F1E9]/10 space-y-1">
                <span className="text-[10px] font-mono text-[#F4F1E9]/50 uppercase">Decision Support</span>
                <div className="text-xl sm:text-2xl font-light font-mono-data text-white">Actionable Insights</div>
                <span className="text-[11px] font-mono text-amber-400">Strategy & Budget Guidance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#F4F1E9]/10 text-xs">
              <p className="text-[#F4F1E9]/60 font-light max-w-xl">
                Hands-on analytics and reporting: extracting practical clarity from marketing data through custom Power BI visualizations, Python data exploration, and structured Google Sheets KPI models.
              </p>
              <button
                onClick={() => handleActionClick('data')}
                className="px-4 py-2 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all font-mono uppercase text-xs tracking-wider cursor-pointer whitespace-nowrap"
              >
                Inspect Dedicated Dashboard Blueprint →
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SIGNATURE TRANSITION 05: RESPONSIVE TRANSFORMATION */}
      {/* Demonstrating responsive interface reflow to introduce Digital Experiences */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#171717]/10">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              <span>Signature Transition 05</span>
              <span>/</span>
              <span>Responsive State Transformation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-tight">
              &ldquo;Digital should feel alive.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed">
              As a marketer who writes code, I don&apos;t just deliver static mockups in Figma. I build functional, responsive prototypes in React, JavaScript, and TypeScript that stakeholders can click, test, and feel.
            </p>
          </div>

          {/* Interactive Breakpoint Simulation Demo */}
          <div className="bg-white border border-[#171717]/10 p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#171717]/10">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                  Live Responsive Demonstrator
                </span>
                <div className="text-sm font-medium text-[#171717]">
                  Demonstrating interactive responsive adaptation across devices
                </div>
              </div>

              {/* Viewport controls with tactile clicks */}
              <div className="flex items-center gap-1 bg-[#E8E4DA] p-1 border border-[#171717]/10">
                <button
                  onClick={() => {
                    soundEngine.playEditorialClick();
                    setDemoViewport('desktop');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer transition-colors ${
                    demoViewport === 'desktop' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => {
                    soundEngine.playEditorialClick();
                    setDemoViewport('tablet');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer transition-colors ${
                    demoViewport === 'tablet' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => {
                    soundEngine.playEditorialClick();
                    setDemoViewport('mobile');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer transition-colors ${
                    demoViewport === 'mobile' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Interactive container that shifts width */}
            <div className="p-6 sm:p-10 bg-[#EFECE3] border border-[#171717]/10 flex justify-center items-center overflow-hidden">
              <div
                className={`transition-all duration-500 ease-out bg-white p-6 border border-[#171717]/20 shadow-md ${
                  demoViewport === 'desktop' ? 'w-full' : demoViewport === 'tablet' ? 'w-[520px]' : 'w-[300px]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
                    <span className="text-xs font-bold font-mono text-[#315BFF]">NOURI LABS</span>
                    <span className="text-[10px] font-mono text-[#171717]/50">
                      {demoViewport === 'desktop' ? '1440px Baseline' : demoViewport === 'tablet' ? '768px Fluid' : '375px Touch'}
                    </span>
                  </div>
                  <h4 className="text-lg font-light text-[#171717]">
                    Responsive Spatial Discipline
                  </h4>
                  <p className="text-xs text-[#171717]/70 leading-relaxed font-light">
                    Clean typographic hierarchy, fluid component architecture, and responsive layouts designed with care.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#171717]/60 border-t border-[#171717]/10">
                    <span>React & TypeScript</span>
                    <span className="text-[#315BFF]">Interactive Component</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#171717]/50">
              <span>Stack: React, TypeScript, Tailwind CSS, Motion</span>
              <button
                onClick={() => handleActionClick('digital')}
                className="text-[#315BFF] hover:underline cursor-pointer"
              >
                Explore Digital View & Calculator →
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SCROLL CHAPTER 06: "LET'S CONNECT THE DOTS." */}
      {/* Grand Closing Composition with Signature N/ Monogram and Contact */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171717] text-[#F4F1E9] p-8 sm:p-14 lg:p-20 relative overflow-hidden border border-[#171717] space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-widest">
                <span>Chapter 06</span>
                <span>/</span>
                <span>The Collaboration Threshold</span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F4F1E9] leading-[1.04]">
                &ldquo;Let&apos;s connect <br />
                <span className="font-editorial italic">the dots</span>.&rdquo;
              </h2>

              <p className="text-sm sm:text-base text-[#F4F1E9]/80 font-light leading-relaxed max-w-lg">
                One marketer connecting strategy, creative execution, client communication, and performance reporting. Let&apos;s discuss how focused strategy and multidisciplinary execution can move your brand forward.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleActionClick('contact')}
                  className="px-8 py-4 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all text-xs font-mono uppercase tracking-wider cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <span>Initiate Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleActionClick('about')}
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-[#F4F1E9] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
                >
                  Inspect Full Background
                </button>
              </div>
            </div>

            {/* Large Signature N/ Symbol */}
            <div className="self-center lg:self-auto">
              <div
                onClick={() => soundEngine.playNouriTwoNoteMotif()}
                className="p-8 bg-white/5 border border-[#F4F1E9]/10 cursor-pointer hover:border-[#315BFF] transition-colors"
                title="Click for N/ signature sound motif"
              >
                <MonogramN size="giant" slashColor="#315BFF" inkColor="#F4F1E9" interactive={true} />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#F4F1E9]/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#F4F1E9]/60 gap-4">
            <div>Direct Mail: <span className="text-[#F4F1E9]">nouryhazem17@gmail.com</span></div>
            <div>Markets: Egypt · GCC Markets</div>
          </div>

        </div>
      </section>

    </div>
  );
};
