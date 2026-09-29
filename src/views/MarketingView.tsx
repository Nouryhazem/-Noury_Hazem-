import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { soundEngine } from '../utils/soundEngine';
import { ArrowUpRight, ArrowRight, CheckCircle2, Filter, Layers } from 'lucide-react';
import { MonogramN } from '../components/MonogramN';
import { DisciplineTabs } from '../components/DisciplineTabs';

interface MarketingViewProps {
  onSelectProject: (slug: string) => void;
  onNavigateContact: () => void;
  onNavigate?: (page: string) => void;
}

export const MarketingView: React.FC<MarketingViewProps> = ({
  onSelectProject,
  onNavigateContact,
  onNavigate,
}) => {
  // Only the two dedicated strategic marketing flagship accounts
  const strategicMarketingProjects = PROJECTS.filter(
    (p) => p.id === 'juraa' || p.id === 'cloudx'
  );

  // Filter states
  const [filter, setFilter] = useState<'all' | 'juraa' | 'cloudx'>('all');
  
  // Hovered project state for the desktop interactive preview area
  const [hoveredProjectId, setHoveredProjectId] = useState<string>('juraa');

  const handleFilterClick = (newFilter: 'all' | 'juraa' | 'cloudx') => {
    soundEngine.playEditorialClick();
    setFilter(newFilter);
  };

  const handleProjectClick = (slug: string) => {
    soundEngine.playAirySweep();
    onSelectProject(slug);
  };

  const filteredProjects = strategicMarketingProjects.filter((p) => {
    if (filter === 'juraa') return p.id === 'juraa';
    if (filter === 'cloudx') return p.id === 'cloudx';
    return true;
  });

  const activeHoveredProject =
    strategicMarketingProjects.find((p) => p.id === hoveredProjectId) ||
    strategicMarketingProjects[0];

  const statusLabel = {
    'Completed Client Work': 'Completed Client Work',
    'Ongoing Work': 'Ongoing Work',
    'Proposed Campaign Concept': 'Proposed Launch Strategy',
    'Independent Speculative Project': 'Independent Prototype',
  };

  const statusBadgeClass = {
    'Completed Client Work': 'text-emerald-800 bg-emerald-100/70 border-emerald-300',
    'Ongoing Work': 'text-blue-800 bg-blue-100/70 border-blue-300',
    'Proposed Campaign Concept': 'text-amber-800 bg-amber-100/70 border-amber-300',
    'Independent Speculative Project': 'text-purple-800 bg-purple-100/70 border-purple-300',
  };

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      {/* Editorial Header & Capabilities Navigation */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        {onNavigate && (
          <DisciplineTabs activeDiscipline="marketing" onNavigate={onNavigate} />
        )}

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Primary Discipline · Strategic Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#171717] leading-[1.05]">
            Good marketing begins <br className="hidden sm:inline" />
            <span className="font-editorial italic">long before</span> the first post.
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            I develop the strategy, shape the creative direction, manage execution and use data to understand what happens next.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#171717]/50 mr-2">Focus account:</span>
            <div className="flex items-center gap-1 p-1 bg-[#E8E4DA] border border-[#171717]/10">
              <button
                onClick={() => handleFilterClick('all')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'all' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                }`}
              >
                All Strategic Marketing ({strategicMarketingProjects.length})
              </button>
              <button
                onClick={() => handleFilterClick('juraa')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'juraa' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                }`}
              >
                JURAA · Digital Health
              </button>
              <button
                onClick={() => handleFilterClick('cloudx')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'cloudx' ? 'bg-[#171717] text-white' : 'text-[#171717]/70 hover:text-[#171717]'
                }`}
              >
                CloudX · B2B Infrastructure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Index Experience */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Desktop Split View: Hover-responsive preview that does NOT block text */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project List */}
          <div className="col-span-7 divide-y divide-[#171717]/10 border-t border-b border-[#171717]/10">
            {filteredProjects.map((project, idx) => {
              const isHovered = hoveredProjectId === project.id;
              const isCloudX = project.id === 'cloudx';

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onClick={() => handleProjectClick(project.slug)}
                  className={`py-6 px-4 transition-all duration-200 cursor-pointer group flex flex-col justify-between ${
                    isHovered ? 'bg-[#EFECE3]' : 'hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="space-y-1 flex-1">
                      {/* CloudX Signature Line Device */}
                      {isCloudX && (
                        <div className="flex items-center gap-2 font-mono text-[10px] text-[#171717]/60 mb-2">
                          <span className="px-1.5 py-0.5 border border-[#171717]/20 bg-[#E8E4DA] text-[#171717] font-semibold uppercase text-[9px]">
                            LAUNCH
                          </span>
                          <span className="h-0.5 w-8 bg-[#315BFF] transition-all group-hover:w-16" />
                          <span className="h-0.5 flex-1 bg-[#315BFF]/30 border-dashed" />
                          <span className="text-[#315BFF] text-[9px] uppercase tracking-wider">
                            THE SECOND LAUNCH →
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-3 text-xs font-mono text-[#171717]/60">
                        <span>0{idx + 1}</span>
                        <span>·</span>
                        <span className="uppercase">{project.industry}</span>
                        <span>·</span>
                        <span>{project.market}</span>
                      </div>
                      <h3 className="text-2xl font-light tracking-tight text-[#171717] group-hover:text-[#315BFF] transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-[#315BFF]" />
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${statusBadgeClass[project.status]} shrink-0`}>
                      {statusLabel[project.status]}
                    </span>
                  </div>

                  <p className="text-xs text-[#171717]/70 line-clamp-2 max-w-xl font-light">
                    {project.summary}
                  </p>

                  {/* CloudX Dual Strategic Systems Descriptors */}
                  {isCloudX && (
                    <div className="mt-3 pt-2.5 border-t border-[#171717]/10 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80 group-hover:border-[#315BFF]/50 transition-colors">
                        <span className="text-[#315BFF] font-semibold mr-1">01 /</span>
                        <span>GO-TO-MARKET STRATEGY</span>
                      </div>
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80 group-hover:border-[#315BFF]/50 transition-colors">
                        <span className="text-[#315BFF] font-semibold mr-1">02 /</span>
                        <span>CLIENT-LED GROWTH</span>
                      </div>
                    </div>
                  )}

                  {/* JURAA Dual Strategic Systems Descriptors */}
                  {project.id === 'juraa' && (
                    <div className="mt-3 pt-2.5 border-t border-[#171717]/10 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80 group-hover:border-[#315BFF]/50 transition-colors">
                        <span className="text-[#315BFF] font-semibold mr-1">01 /</span>
                        <span>30-DAY LAUNCH PLAN</span>
                      </div>
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80 group-hover:border-[#315BFF]/50 transition-colors">
                        <span className="text-[#315BFF] font-semibold mr-1">02 /</span>
                        <span>CONTENT ARCHITECTURE</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#171717]/50 pt-2 border-t border-[#171717]/5">
                    <span>Role: {project.role}</span>
                    <span className="text-[#315BFF] font-medium group-hover:underline">
                      Explore Case Study →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dedicated Fixed/Sticky Preview Display Area */}
          <div className="col-span-5 sticky top-24 space-y-4">
            <div className="bg-[#EFECE3] border border-[#171717]/10 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#171717]/60 pb-3 border-b border-[#171717]/10">
                <span className="uppercase tracking-widest">Active Project Inspection</span>
                <span>ID: {activeHoveredProject.id}</span>
              </div>

              {/* Preview image */}
              <div className="aspect-4/3 w-full bg-[#171717] overflow-hidden relative border border-[#171717]/10">
                <img
                  src={activeHoveredProject.heroImage}
                  alt={activeHoveredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-editorial italic text-lg leading-tight">{activeHoveredProject.tagline}</div>
                </div>
              </div>

              {/* Metadata rundown */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#171717]/40 font-mono uppercase block text-[10px]">Core Challenge:</span>
                  <p className="text-[#171717]/80 line-clamp-3 leading-relaxed mt-0.5">
                    {activeHoveredProject.challenge.coreProblem}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#171717]/10 font-mono text-[11px]">
                  <div>
                    <span className="text-[#171717]/40 block text-[10px] uppercase">Market:</span>
                    <span className="text-[#171717]">{activeHoveredProject.market}</span>
                  </div>
                  <div>
                    <span className="text-[#171717]/40 block text-[10px] uppercase">Timeline:</span>
                    <span className="text-[#171717]">{activeHoveredProject.timeline}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleProjectClick(activeHoveredProject.slug)}
                  className="w-full py-3 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-center font-medium text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Open Full Strategic Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet View: Tap-friendly Card Deck */}
        <div className="lg:hidden space-y-6">
          {filteredProjects.map((project, idx) => {
            const isCloudX = project.id === 'cloudx';
            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.slug)}
                className="bg-white border border-[#171717]/10 p-5 space-y-4 cursor-pointer hover:border-[#315BFF] transition-colors"
              >
                <div className="aspect-16/9 bg-[#171717] overflow-hidden relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${statusBadgeClass[project.status]}`}>
                      {statusLabel[project.status]}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* CloudX Line Device on Mobile */}
                  {isCloudX && (
                    <div className="flex items-center gap-2 font-mono text-[9px] text-[#171717]/60 pb-1">
                      <span className="px-1.5 py-0.5 border border-[#171717]/20 bg-[#E8E4DA] text-[#171717] font-semibold uppercase">
                        LAUNCH
                      </span>
                      <span className="h-0.5 w-6 bg-[#315BFF]" />
                      <span className="h-0.5 flex-1 bg-[#315BFF]/30 border-dashed" />
                      <span className="text-[#315BFF] uppercase tracking-wider">
                        THE SECOND LAUNCH →
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#171717]/60">
                    <span>0{idx + 1}</span>
                    <span>·</span>
                    <span>{project.industry}</span>
                    <span>·</span>
                    <span>{project.market}</span>
                  </div>

                  <h3 className="text-xl font-light text-[#171717]">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#171717]/70 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* CloudX Dual Descriptors on Mobile */}
                  {isCloudX && (
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[9px] font-mono">
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80">
                        <span className="text-[#315BFF] font-semibold mr-1">01 /</span>
                        <span>GTM STRATEGY</span>
                      </div>
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80">
                        <span className="text-[#315BFF] font-semibold mr-1">02 /</span>
                        <span>CLIENT-LED GROWTH</span>
                      </div>
                    </div>
                  )}

                  {/* JURAA Dual Descriptors on Mobile */}
                  {project.id === 'juraa' && (
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[9px] font-mono">
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80">
                        <span className="text-[#315BFF] font-semibold mr-1">01 /</span>
                        <span>30-DAY LAUNCH PLAN</span>
                      </div>
                      <div className="p-1.5 bg-[#F4F1E9] border border-[#171717]/10 text-[#171717]/80">
                        <span className="text-[#315BFF] font-semibold mr-1">02 /</span>
                        <span>CONTENT ARCHITECTURE</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#171717]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#171717]/60">Role: {project.role}</span>
                  <span className="text-[#315BFF] font-medium flex items-center gap-1">
                    Explore Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Strategic Call to Action Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
        <div className="bg-[#171717] text-[#F4F1E9] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              Commercial Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl font-light leading-tight">
              Need a unified marketing strategy for Egypt or the GCC?
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F1E9]/70 leading-relaxed font-light">
              From competitive market research and positioning to campaign production and weekly CAC reporting, let&apos;s build campaigns that move your bottom line.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onNavigateContact();
            }}
            className="px-6 py-3.5 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all font-medium text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Start Account Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
