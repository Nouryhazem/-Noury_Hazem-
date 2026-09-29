import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { JuraaCaseStudyView } from './JuraaCaseStudyView';
import { JuraaBrandCaseStudyView } from './JuraaBrandCaseStudyView';
import { CloudXCaseStudyView } from './CloudXCaseStudyView';
import { RelaxCaseStudyView } from './RelaxCaseStudyView';
import { SaudiNationalDayCollection } from './creative/SaudiNationalDayCollection';
import { CreativeCaseStudyView } from './creative/CreativeCaseStudyView';
import { ALL_INDIVIDUAL_CREATIVE_PROJECTS } from '../data/creativeData';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, ChevronRight, Layers, BarChart3, Lightbulb, Compass, Palette, Rocket, BookOpen, AlertCircle } from 'lucide-react';
import { MonogramN } from '../components/MonogramN';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onNavigateToProject,
  onNavigateContact,
}) => {
  // Dedicated custom case study experience for JURAA Strategic Marketing
  if (project.id === 'juraa') {
    return (
      <JuraaCaseStudyView
        onBack={onBack}
        onNavigateToProject={onNavigateToProject}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  // Dedicated custom case study experience for JURAA Brand Architecture
  if (project.id === 'juraa-branding' || project.slug === 'juraa-brand-identity') {
    return (
      <JuraaBrandCaseStudyView
        onBack={onBack}
        onNavigateToProject={onNavigateToProject}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  // Dedicated custom case study experience for CloudX
  if (project.id === 'cloudx') {
    return (
      <CloudXCaseStudyView
        onBack={onBack}
        onNavigateToProject={onNavigateToProject}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  // Dedicated custom case study experience for Relax Café
  if (project.id === 'relax-cafe') {
    return (
      <RelaxCaseStudyView
        onBack={onBack}
        onNavigateToProject={onNavigateToProject}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  // Dedicated custom collection view for Saudi National Day 96
  if (
    project.id === 'saudi-national-day-96' ||
    project.slug === 'saudi-national-day-96' ||
    project.id === 'saudi-national-day' ||
    project.slug === 'saudi-national-day-campaigns'
  ) {
    return (
      <SaudiNationalDayCollection
        onBack={() => {
          window.location.hash = 'creative';
        }}
        onSelectProject={(slug) => onNavigateToProject(slug)}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  // Dedicated custom case study experience for Creative Direction projects
  const creativeCaseData =
    ALL_INDIVIDUAL_CREATIVE_PROJECTS[project.slug] ||
    ALL_INDIVIDUAL_CREATIVE_PROJECTS[project.id];

  if (creativeCaseData) {
    const isSNDChild = [
      'the-room-snd96',
      'ae-creative-snd96',
      'ratio-snd96',
      'bearu-snd96',
    ].includes(project.slug || project.id);

    // Determine next project in sequence
    const sndOrder = [
      { slug: 'the-room-snd96', title: 'The Room Espresso Bar' },
      { slug: 'ae-creative-snd96', title: 'AE Creative Media Production' },
      { slug: 'ratio-snd96', title: 'Ratio Specialty Coffee' },
      { slug: 'bearu-snd96', title: 'Béaru Café' },
    ];
    const currentSNDIndex = sndOrder.findIndex(
      (s) => s.slug === project.slug || s.slug === project.id
    );
    const nextSND =
      currentSNDIndex !== -1 ? sndOrder[(currentSNDIndex + 1) % sndOrder.length] : undefined;

    return (
      <CreativeCaseStudyView
        data={creativeCaseData}
        onBack={() => {
          if (isSNDChild) {
            onNavigateToProject('saudi-national-day-96');
          } else {
            window.location.hash = 'creative';
          }
        }}
        onNavigateToProject={onNavigateToProject}
        onNavigateContact={onNavigateContact}
        nextProjectSlug={nextSND?.slug}
        nextProjectTitle={nextSND?.title}
      />
    );
  }

  const [activeTab, setActiveTab] = useState<'strategy' | 'creative' | 'measurement'>('strategy');

  // Find next project in the sequence
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const statusColors = {
    'Completed Client Work': 'text-emerald-700 bg-emerald-50 border-emerald-200',
    'Ongoing Work': 'text-blue-700 bg-blue-50 border-blue-200',
    'Proposed Campaign Concept': 'text-amber-800 bg-amber-50 border-amber-200',
    'Independent Speculative Project': 'text-purple-700 bg-purple-50 border-purple-200',
  };

  return (
    <article className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-24 pb-24">
      {/* Top Breadcrumb & Persistent Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center justify-between py-4 border-b border-[#171717]/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717]/70 hover:text-[#315BFF] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Projects Index</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#171717]/50">
            <span>Case Study</span>
            <span>/</span>
            <span className="text-[#171717] font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className={`px-2.5 py-1 text-[11px] font-mono border rounded-xs ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <span className="text-[#171717]/40">·</span>
              <span className="font-mono text-[#171717]/60 uppercase tracking-wider">{project.industry}</span>
              <span className="text-[#171717]/40">·</span>
              <span className="font-mono text-[#171717]/60">{project.market}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl font-editorial italic text-[#171717]/80 max-w-3xl leading-snug">
              &ldquo;{project.tagline}&rdquo;
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-2 text-xs text-[#171717]/70 font-mono-data border-t lg:border-t-0 pt-4 lg:pt-0 border-[#171717]/10">
            <div><span className="text-[#171717]/40 uppercase">Role:</span> {project.role}</div>
            <div><span className="text-[#171717]/40 uppercase">Timeline:</span> {project.timeline}</div>
            <div><span className="text-[#171717]/40 uppercase">Client:</span> {project.client}</div>
          </div>
        </div>
      </header>

      {/* Featured Visual Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="relative aspect-16/9 w-full overflow-hidden bg-[#171717] border border-[#171717]/10 group">
          <img
            src={project.heroImage}
            alt={`${project.title} case study visual direction`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            onError={(e) => {
              // Graceful fallback container if image load errors
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('flex', 'items-center', 'justify-center', 'p-12', 'bg-[#171717]');
                parent.innerHTML = `
                  <div class="text-center text-[#F4F1E9] space-y-3">
                    <div class="font-editorial italic text-3xl">${project.title}</div>
                    <div class="text-xs font-mono text-[#F4F1E9]/60 uppercase tracking-widest">${project.industry} · Visual Identity Asset</div>
                  </div>
                `;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#F4F1E9] text-xs">
            <div className="font-mono uppercase tracking-widest">
              Art Direction & Strategy Archive
            </div>
            <div className="flex items-center gap-2">
              <MonogramN size="sm" slashColor="#315BFF" inkColor="#F4F1E9" interactive={false} />
              <span>Nouri Hazem Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 8-Stage Narrative Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Rail: Project Metadata & Navigation Index */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8 bg-[#EFECE3] p-6 border border-[#171717]/10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/50 block mb-3">
                  Scope of Engagement
                </span>
                <ul className="space-y-1.5 text-xs text-[#171717]/80">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#315BFF] font-bold">/</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/50 block mb-3">
                  Narrative Index
                </span>
                <nav className="space-y-1 text-xs">
                  <a href="#overview" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    01. Project Overview
                  </a>
                  <a href="#challenge" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    02. The Challenge
                  </a>
                  <a href="#insight" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    03. The Core Insight
                  </a>
                  <a href="#strategy" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    04. The Strategy
                  </a>
                  <a href="#creative" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    05. The Creative Response
                  </a>
                  <a href="#execution" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    06. Execution & Rollout
                  </a>
                  <a href="#measurement" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    07. Measurement & Metrics
                  </a>
                  <a href="#learnings" className="block py-1 text-[#171717]/70 hover:text-[#315BFF] transition-colors">
                    08. Strategic Learnings
                  </a>
                </nav>
              </div>

              <div className="pt-6 border-t border-[#171717]/10">
                <button
                  onClick={onNavigateContact}
                  className="w-full py-2.5 px-4 text-xs font-medium text-white bg-[#171717] hover:bg-[#315BFF] transition-colors text-center cursor-pointer"
                >
                  Discuss a Similar Challenge
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed 8-Stage Story */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* 01 / PROJECT OVERVIEW */}
            <section id="overview" className="scroll-mt-28 space-y-4 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">01</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">Project Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                Setting the Strategic Benchmark
              </h2>
              <p className="text-base text-[#171717]/80 leading-relaxed font-normal">
                {project.overview.statement}
              </p>
              
              <div className="bg-[#EFECE3]/70 p-6 border-l-2 border-[#315BFF] space-y-3 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/60 block">
                  Primary Objectives
                </span>
                <div className="space-y-2">
                  {project.overview.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#171717]/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 02 / THE CHALLENGE */}
            <section id="challenge" className="scroll-mt-28 space-y-4 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">02</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">The Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                The Obstacle Before the Solution
              </h2>
              <p className="text-base text-[#171717]/80 leading-relaxed">
                {project.challenge.coreProblem}
              </p>
              <p className="text-sm text-[#171717]/70 leading-relaxed">
                {project.challenge.marketContext}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/50 block mb-3">
                  Critical Friction Points Addressed:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.challenge.frictionPoints.map((point, idx) => (
                    <div key={idx} className="bg-white/60 p-4 border border-[#171717]/10 text-xs text-[#171717]/80 space-y-2">
                      <span className="font-mono text-[#315BFF] text-[11px]">0{idx + 1}.</span>
                      <p className="leading-snug">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03 / THE INSIGHT */}
            <section id="insight" className="scroll-mt-28 space-y-4 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">03</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">The Insight</span>
              </div>
              <div className="bg-[#171717] text-[#F4F1E9] p-8 space-y-4">
                <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
                  Foundational Consumer Truth
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial italic text-[#F4F1E9] leading-snug">
                  &ldquo;{project.insight.headline}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#F4F1E9]/80 leading-relaxed max-w-2xl font-light">
                  {project.insight.narrative}
                </p>
                <div className="pt-4 border-t border-[#F4F1E9]/15 flex items-center gap-2 text-xs text-[#315BFF] font-mono">
                  <span>Takeaway:</span>
                  <span className="text-[#F4F1E9]">{project.insight.keyTakeaway}</span>
                </div>
              </div>
            </section>

            {/* 04 / THE STRATEGY */}
            <section id="strategy" className="scroll-mt-28 space-y-6 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">04</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">The Strategy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                Architecting the Market Position
              </h2>

              <div className="p-4 bg-white/70 border border-[#171717]/10">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/50 mb-1">
                  Strategic Positioning Lockup
                </div>
                <div className="text-lg font-medium text-[#171717]">
                  {project.strategy.positioning}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/60 block">
                  Core Strategic Pillars:
                </span>
                <div className="space-y-3">
                  {project.strategy.pillars.map((pillar, i) => (
                    <div key={i} className="p-4 bg-[#EFECE3]/60 border border-[#171717]/10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="text-xs font-mono font-bold text-[#315BFF] shrink-0">Pillar 0{i + 1}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-[#171717]">{pillar.title}</h4>
                        <p className="text-xs text-[#171717]/70 leading-relaxed mt-1">{pillar.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/50 mr-2">Channels Deployed:</span>
                {project.strategy.channels.map((ch, i) => (
                  <span key={i} className="text-xs text-[#171717]/80 font-mono-data bg-white px-2.5 py-1 border border-[#171717]/10">
                    {ch}
                  </span>
                ))}
              </div>
            </section>

            {/* 05 / THE CREATIVE RESPONSE */}
            <section id="creative" className="scroll-mt-28 space-y-6 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">05</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">The Creative Response</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                Form Follows Strategic Intent
              </h2>
              <p className="text-sm text-[#171717]/80 leading-relaxed">
                {project.creativeResponse.artDirectionNote}
              </p>

              <div className="p-4 bg-white border border-[#171717]/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block mb-1">
                  Visual Concept Metaphor
                </span>
                <p className="text-sm font-medium text-[#171717]">
                  {project.creativeResponse.visualConcept}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717]/50 block">
                  Selected Creative Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.creativeResponse.deliverables.map((del, idx) => (
                    <div key={idx} className="bg-white/80 p-5 border border-[#171717]/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#315BFF] uppercase tracking-wider block mb-2">
                          {del.category}
                        </span>
                        <h4 className="text-sm font-semibold text-[#171717] mb-2">{del.title}</h4>
                        <p className="text-xs text-[#171717]/70 leading-relaxed">{del.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 06 / EXECUTION */}
            <section id="execution" className="scroll-mt-28 space-y-4 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">06</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">Execution & Rollout</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                Translating Blueprint into Motion
              </h2>
              <div className="space-y-4">
                {project.execution.phases.map((ph, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/50 border border-[#171717]/10">
                    <span className="font-mono text-sm font-bold text-[#171717] w-6 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#171717]">{ph.name}</h4>
                      <p className="text-xs text-[#171717]/70 mt-1 leading-relaxed">{ph.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#171717]/60 italic font-mono pt-2">
                Operational note: {project.execution.coordinationDetails}
              </p>
            </section>

            {/* 07 / MEASUREMENT & METRICS */}
            <section id="measurement" className="scroll-mt-28 space-y-6 pb-12 border-b border-[#171717]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">07</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">Measurement & Outcomes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                Verified Commercial Signals
              </h2>
              <p className="text-xs text-[#171717]/70 leading-relaxed font-mono">
                Framework: {project.measurement.framework}
              </p>

              {project.measurement.disclaimer && (
                <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>{project.measurement.disclaimer}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.measurement.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white p-5 border border-[#171717]/10 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/50 block">
                      {metric.label}
                    </span>
                    <div className="text-3xl font-light tracking-tight font-mono-data text-[#171717]">
                      {metric.value}
                    </div>
                    <p className="text-xs text-[#171717]/70 leading-snug">
                      {metric.context}
                    </p>
                    {metric.verified && (
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-mono pt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified outcome</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-xs text-[#171717]/60 font-mono">
                Reporting cadence: {project.measurement.reportingMethod}
              </div>
            </section>

            {/* 08 / STRATEGIC REFLECTION & LEARNINGS */}
            <section id="learnings" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#315BFF] font-semibold">08</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]/50">Strategic Learnings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                What this Project Demonstrates
              </h2>
              <div className="p-6 bg-[#171717] text-[#F4F1E9] space-y-3">
                <p className="text-sm sm:text-base text-[#F4F1E9]/90 leading-relaxed font-light">
                  {project.learnings.strategicReflection}
                </p>
                <div className="pt-3 border-t border-[#F4F1E9]/15 text-xs text-[#315BFF] font-mono">
                  <span>Core Discipline: </span>
                  <span className="text-[#F4F1E9]">{project.learnings.keySkillDemonstrated}</span>
                </div>
              </div>
            </section>

            {/* Next Project Teaser */}
            <div className="pt-12 border-t border-[#171717]/15">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block mb-2">
                Continue the Narrative
              </span>
              <button
                onClick={() => onNavigateToProject(nextProject.slug)}
                className="w-full text-left p-6 bg-white hover:bg-[#315BFF] group transition-all duration-300 border border-[#171717]/10 flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#171717]/60 group-hover:text-white/70 transition-colors uppercase">
                    Next Case Study · {nextProject.industry}
                  </div>
                  <div className="text-2xl font-light text-[#171717] group-hover:text-white transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#171717]/20 group-hover:border-white/40 flex items-center justify-center text-[#171717] group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </div>

          </main>
        </div>
      </section>
    </article>
  );
};
