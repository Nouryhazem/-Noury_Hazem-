import React from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { MonogramN } from '../components/MonogramN';
import { DisciplineTabs } from '../components/DisciplineTabs';
import { RelaxLogo } from '../components/RelaxLogo';
import { JuraaLogo } from '../components/JuraaLogo';
import { JuraaMockupImage, JuraaLogoImage } from '../components/JuraaAssetDisplay';
import { ArrowUpRight, ArrowRight, Grid, Type, Compass, Box, Coffee, Heart } from 'lucide-react';

interface BrandingViewProps {
  onSelectProject: (slug: string) => void;
  onNavigateContact: () => void;
  onNavigate?: (page: string) => void;
}

export const BrandingView: React.FC<BrandingViewProps> = ({
  onSelectProject,
  onNavigateContact,
  onNavigate,
}) => {
  const relaxProject = PROJECTS.find((p) => p.id === 'relax-cafe');
  const juraaProject = PROJECTS.find((p) => p.id === 'juraa-branding');

  const brandingFramework = [
    {
      step: '01',
      title: 'Strategic Positioning',
      desc: 'Defining where the brand plays and how it wins. Translating consumer friction into an unassailable value proposition.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Typographic & Grid Systems',
      desc: 'Architecting rigid Swiss editorial grids, bespoke font pairings, and bilingual Arabic/English typographic balance.',
      icon: Type,
    },
    {
      step: '03',
      title: 'Chromatics & Textures',
      desc: 'Formulating disciplined color systems with strict 60-30-10 distribution, tactile paper textures, and high-intent focal accents.',
      icon: Grid,
    },
    {
      step: '04',
      title: 'Physical & Digital Applications',
      desc: 'Rolling out systems across packaging, signage, retail interiors, stationery, social design systems, and responsive websites.',
      icon: Box,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        {onNavigate && (
          <DisciplineTabs activeDiscipline="branding" onNavigate={onNavigate} />
        )}

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Brand Architecture & Identity Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.05]">
            A brand is a promise <br className="hidden sm:inline" />
            kept through <span className="font-editorial italic">every touchpoint</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            From the initial positioning workshop to the tactile grain of physical packaging, I build cohesive identity systems designed to endure market shifts.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED CASE STUDY: RELAX CAFÉ (THE SEVENTH PERSPECTIVE) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div
          onClick={() => onSelectProject('relax-cafe-hospitality')}
          className="bg-[#1B0F0A] text-[#F3E9DA] border border-[#B8924E]/30 p-8 sm:p-12 lg:p-16 transition-all hover:border-[#B8924E] cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle Vertical Elevation Line (01 to 07) */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B8924E] animate-pulse" />
              <span className="uppercase tracking-widest text-[#B8924E] font-semibold">
                FEATURED BRAND ARCHITECTURE
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/50 text-[11px]">
              <span className="uppercase tracking-wider">LEVEL SEVEN METAPHOR:</span>
              <span className="font-bold text-[#B8924E]">01 ────────► 07</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Project Details & Authentic Identity Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h2
                    style={{ fontFamily: '"Pinyon Script", cursive' }}
                    className="text-6xl sm:text-7xl md:text-8xl text-white leading-none tracking-normal"
                  >
                    Relax
                  </h2>
                  <span
                    style={{ fontFamily: '"El Messiri", sans-serif' }}
                    className="text-2xl sm:text-4xl text-[#B8924E] font-semibold"
                    dir="rtl"
                  >
                    فوق الزحمة
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-[#B8924E]">
                  Brand Strategy & Visual Identity · Minya, Egypt
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                  &ldquo;A familiar café, seen from a new perspective.&rdquo;
                </p>
              </div>

              {/* Exact Metadata & Role as requested */}
              <div className="py-4 border-y border-white/10 space-y-2 text-xs font-mono">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <div>
                    <span className="text-white/40 uppercase mr-1">ROLE:</span>
                    <span className="text-white font-medium">
                      Brand Strategy, Visual Identity & Creative Direction
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-white/40 uppercase block text-[10px] mb-1">
                    PROJECT DISCIPLINES:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="px-2 py-0.5 bg-[#3B1F14] border border-[#B8924E]/40 text-[#F3E9DA]">
                      Strategic Positioning
                    </span>
                    <span className="px-2 py-0.5 bg-[#3B1F14] border border-[#B8924E]/40 text-[#F3E9DA]">
                      Identity Architecture
                    </span>
                    <span className="px-2 py-0.5 bg-[#3B1F14] border border-[#B8924E]/40 text-[#F3E9DA]">
                      Visual Language
                    </span>
                    <span className="px-2 py-0.5 bg-[#3B1F14] border border-[#B8924E]/40 text-[#F3E9DA]">
                      Brand Applications
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-xl">
                Transforming the physical seventh-floor location of an established local café into the foundational brand metaphor: a sanctuary destination above everyday velocity.
              </p>

              {/* Clear Action Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('relax-cafe-hospitality');
                  }}
                  className="px-6 py-3.5 bg-[#B8924E] text-[#1B0F0A] hover:bg-white transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 group-hover:bg-white"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Authentic Relax Logo on Espresso Background */}
            <div className="lg:col-span-5">
              <div className="p-10 sm:p-12 bg-[#3B1F14]/70 border border-[#B8924E]/30 flex flex-col items-center justify-center text-center space-y-6 transition-transform duration-500 group-hover:-translate-y-1">
                <RelaxLogo variant="vertical" size="xl" color="#B8924E" />

                <div className="pt-4 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>Minya, Egypt</span>
                  <span className="text-[#B8924E] flex items-center gap-1 font-semibold">
                    <span>Level 07</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED CASE STUDY: JURAA / جرعة (THE SHAPE OF CARE) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div
          onClick={() => onSelectProject('juraa-brand-identity')}
          className="bg-white text-[#173635] border border-[#0F6663]/30 p-8 sm:p-12 lg:p-16 transition-all hover:border-[#0F6663] hover:shadow-xl cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle Top Metadata Line */}
          <div className="flex items-center justify-between pb-6 border-b border-[#173635]/10 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F6663] animate-pulse" />
              <span className="uppercase tracking-widest text-[#0F6663] font-semibold">
                FEATURED BRAND ARCHITECTURE
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#173635]/60 text-[11px]">
              <span className="uppercase tracking-wider">CREATIVE TERRITORY:</span>
              <span className="font-bold text-[#0F6663]">THE SHAPE OF CARE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Project Details & Authentic Cairo Identity Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h2
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0F6663] leading-none tracking-tight"
                    dir="rtl"
                  >
                    جُرعة
                  </h2>
                  <span
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-2xl sm:text-3xl md:text-4xl text-[#173635] font-bold tracking-[0.25em] uppercase"
                  >
                    J U R A A
                  </span>
                  <span
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-sm sm:text-base font-semibold text-[#55B6AE] px-3 py-1 bg-[#DCECEA] border border-[#0F6663]/20"
                    dir="rtl"
                  >
                    جرعتك في وقتها
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
                  Brand Strategy & Visual Identity · Digital Health · Egypt
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#173635] tracking-tight leading-snug">
                  &ldquo;Care, made part of everyday life.&rdquo;
                </p>
              </div>

              {/* Exact Metadata & Disciplines as requested in brief */}
              <div className="py-4 border-y border-[#173635]/10 space-y-2 text-xs font-mono">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <div>
                    <span className="text-[#173635]/50 uppercase mr-1">ROLE:</span>
                    <span className="text-[#0F6663] font-medium">
                      Brand Strategy, Visual Identity & Creative Direction
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[#173635]/50 uppercase block text-[10px] mb-1">
                    PROJECT DISCIPLINES:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="px-2.5 py-1 bg-[#DCECEA] border border-[#0F6663]/20 text-[#0F6663]">
                      Brand Foundation
                    </span>
                    <span className="px-2.5 py-1 bg-[#DCECEA] border border-[#0F6663]/20 text-[#0F6663]">
                      Logo Architecture
                    </span>
                    <span className="px-2.5 py-1 bg-[#DCECEA] border border-[#0F6663]/20 text-[#0F6663]">
                      Typography & Visual Language
                    </span>
                    <span className="px-2.5 py-1 bg-[#DCECEA] border border-[#0F6663]/20 text-[#0F6663]">
                      Digital & Physical Applications
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#173635]/80 leading-relaxed font-light max-w-xl">
                Developing an Arabic-first medication companion identity that unites the emotional warmth of a heart with the functional precision of a capsule: anchoring Care, Trust, and Simplicity across app screens and tactile stationery.
              </p>

              {/* Clear Action Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('juraa-brand-identity');
                  }}
                  className="px-6 py-3.5 bg-[#0F6663] text-white hover:bg-[#173635] transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 group-hover:bg-[#173635]"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Authentic JURAA Brand Mockup & Logo Presentation */}
            <div className="lg:col-span-5 space-y-4">
              {/* Tactile Mockup Preview */}
              <div className="border border-[#0F6663]/25 shadow-sm overflow-hidden bg-white group/mockup">
                <JuraaMockupImage aspectRatio="16/9" showOverlay={false} className="h-44 sm:h-52" />
                <div className="px-4 py-2 bg-[#173635] text-white flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#55B6AE] uppercase tracking-wider">Brand Application Mockup</span>
                  <span className="opacity-70">Physical & Digital System</span>
                </div>
              </div>

              {/* Logo Lockup Card */}
              <div className="p-6 bg-[#F5F3EF] border border-[#0F6663]/20 flex flex-col items-center justify-center text-center space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
                <JuraaLogoImage size="lg" variant="primary" />

                <div className="pt-3 border-t border-[#173635]/10 w-full flex items-center justify-between text-[11px] font-mono text-[#173635]/60">
                  <span>Egypt · Digital Health</span>
                  <span className="text-[#0F6663] flex items-center gap-1 font-semibold">
                    <span>The Shape of Care</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Framework */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="border-t border-b border-[#171717]/10 py-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block mb-6">
            The Brand Systemization Framework
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingFramework.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#315BFF]">
                    <span>Phase {f.step}</span>
                    <Icon className="w-4 h-4 text-[#171717]/40" />
                  </div>
                  <h3 className="text-base font-semibold text-[#171717]">{f.title}</h3>
                  <p className="text-xs text-[#171717]/70 leading-relaxed font-light">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Identity Consultation CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F4F1E9] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              Identity System Consultation
            </span>
            <h2 className="text-3xl font-light leading-tight">
              Ready to define an unassailable brand voice?
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F1E9]/70 leading-relaxed font-light">
              Whether refreshing an established enterprise or building a new regional venture from zero, let&apos;s architect a visual identity that commands respect.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all text-xs uppercase font-mono tracking-wider cursor-pointer whitespace-nowrap"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
