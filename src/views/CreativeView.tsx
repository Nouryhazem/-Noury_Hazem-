import React, { useState } from 'react';
import { CREATIVE_PROJECTS, SAUDI_NATIONAL_DAY_DATA } from '../data/creativeData';
import { CreativeImage } from '../components/creative/CreativeImage';
import { MonogramN } from '../components/MonogramN';
import { DisciplineTabs } from '../components/DisciplineTabs';
import { soundEngine } from '../utils/soundEngine';
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Sparkles,
  Compass,
  Palette,
  Eye,
  Film,
  Camera,
  Coffee,
  Heart,
} from 'lucide-react';

interface CreativeViewProps {
  onSelectProject: (slug: string) => void;
  onNavigateContact: () => void;
  onNavigate?: (page: string) => void;
}

export const CreativeView: React.FC<CreativeViewProps> = ({
  onSelectProject,
  onNavigateContact,
  onNavigate,
}) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const creativeDisciplines = [
    {
      step: '01',
      title: 'Campaign Concepts & Platform Strategy',
      desc: 'Formulating the central visual and verbal hooks that elevate campaigns into culturally resonant human conversations.',
      icon: LightbulbIcon,
    },
    {
      step: '02',
      title: 'Art Direction & Photographic Tone',
      desc: 'Developing cohesive camera angles, lighting direction, texture contrast, and spatial composition for high-impact resonance.',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Graphic Design & Packaging Architecture',
      desc: 'Crafting bespoke physical packaging, collector boxes, and bilingual typographic hierarchies across Arabic and English.',
      icon: Layers,
    },
    {
      step: '04',
      title: 'Visual Storytelling & Cultural Narratives',
      desc: 'Honoring national occasions, generational continuity, and community identity through authentic cinematic framing.',
      icon: Film,
    },
  ];

  function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] selection:bg-[#315BFF] selection:text-white pt-28 pb-28">
      {/* ========================================================================= */}
      {/* SECTION HEADER & CENTRAL CREATIVE CONCEPT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        {onNavigate && (
          <div className="mb-10">
            <DisciplineTabs activeDiscipline="creative" onNavigate={onNavigate} />
          </div>
        )}

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>CREATIVE DIRECTION · THE INTERACTIVE CREATIVE ARCHIVE</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#171717] leading-[0.98]">
              Ideas, <span className="font-editorial italic text-[#315BFF]">Made Visible.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-light text-[#171717]/85 leading-relaxed max-w-3xl pt-2">
              A curated collection of creative work exploring how ideas become distinctive visual experiences. From campaign concepts and visual storytelling to art direction and finished graphic design, each project presents a different creative challenge and a deliberate visual response.
            </p>
          </div>

          {/* Archive Metadata Bar */}
          <div className="pt-6 border-t border-[#171717]/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-[#171717]/60">
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">ROLE:</span>
              <span className="text-[#171717] font-medium">Creative Direction & Art Direction</span>
            </div>
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">TERRITORY:</span>
              <span className="text-[#315BFF] font-semibold">The Interactive Creative Archive</span>
            </div>
            <div>
              <span className="text-[#171717]/40 uppercase mr-1">ARCHIVE ENTRIES:</span>
              <span className="text-[#171717] font-medium">3 Curated Entries (7 Documented Projects)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 FEATURED ENTRIES — THE INTERACTIVE EDITORIAL ARCHIVE                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24 mb-28">
        <div className="flex items-baseline justify-between border-b border-[#171717]/10 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            [ FEATURED CREATIVE ARCHIVE ENTRIES ]
          </span>
          <span className="text-xs font-mono text-[#171717]/50 hidden sm:inline">
            Image-First Editorial Showcases
          </span>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* ENTRY 01: JURAA */}
        {/* ----------------------------------------------------------------------- */}
        <div
          onClick={() => {
            soundEngine.playEditorialClick();
            onSelectProject('juraa-creative-campaign');
          }}
          onMouseEnter={() => setHoveredProjectId('juraa')}
          onMouseLeave={() => setHoveredProjectId(null)}
          className="group cursor-pointer bg-white border border-[#171717]/15 p-6 sm:p-12 lg:p-16 transition-all hover:border-[#0F6663] hover:shadow-2xl relative overflow-hidden"
        >
          {/* Card Top Metadata Line */}
          <div className="flex items-center justify-between pb-6 border-b border-[#171717]/10 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#0F6663]">01</span>
              <span className="text-[#171717]/30">/</span>
              <span className="uppercase tracking-widest text-[#171717]/70 font-medium">
                Campaign Concepts & Art Direction
              </span>
            </div>
            <span className="text-xs font-mono text-[#171717]/50">Digital Health · Egypt</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Hook (Asymmetric Scale) */}
            <div className="lg:col-span-7">
              <CreativeImage
                src={CREATIVE_PROJECTS[0].heroImage}
                candidates={CREATIVE_PROJECTS[0].heroImageCandidates}
                alt="JURAA Campaign Visual"
                aspectRatio="16/9"
                allowZoom={false}
                className="shadow-sm"
                badge="01 / JURAA"
              />
            </div>

            {/* Narrative & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight">
                    JURAA
                  </h2>
                  <span
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-2xl sm:text-3xl text-[#0F6663] font-bold"
                    dir="rtl"
                  >
                    جُرعة
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-[#0F6663]">
                  The Shape of Care · Visual Storytelling
                </div>

                <p className="text-base sm:text-lg text-[#171717]/80 font-light leading-relaxed">
                  Translating everyday medication adherence into reassuring, human visual storytelling across Arabic-first digital touchpoints and multi-channel campaigns.
                </p>
              </div>

              {/* Scope & Role */}
              <div className="py-4 border-y border-[#171717]/10 text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#171717]/40 uppercase">Role</span>
                  <span className="text-[#171717] font-medium">Creative Director & Campaign Art Director</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#171717]/40 uppercase">Scope</span>
                  <span className="text-[#0F6663]">Campaign Concepts · Social Media · Art Direction</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEngine.playEditorialClick();
                    onSelectProject('juraa-creative-campaign');
                  }}
                  className="px-6 py-3.5 bg-[#171717] text-[#F4F1E9] group-hover:bg-[#0F6663] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Image Slideshow</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* ENTRY 02: DIPDUX ANALYTICA */}
        {/* ----------------------------------------------------------------------- */}
        <div
          onClick={() => {
            soundEngine.playEditorialClick();
            onSelectProject('dipdux-analytica');
          }}
          onMouseEnter={() => setHoveredProjectId('dipdux')}
          onMouseLeave={() => setHoveredProjectId(null)}
          className="group cursor-pointer bg-[#171717] text-[#F4F1E9] border border-[#171717] p-6 sm:p-12 lg:p-16 transition-all hover:shadow-2xl relative overflow-hidden"
        >
          {/* Card Top Metadata Line */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#315BFF]">02</span>
              <span className="text-white/30">/</span>
              <span className="uppercase tracking-widest text-white/70 font-medium">
                Corporate Art Direction & Editorial Design
              </span>
            </div>
            <span className="text-xs font-mono text-white/50">Technology / Corporate · Regional</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Hook (Left Column in Reverse Order) */}
            <div className="lg:col-span-7 lg:order-2">
              <CreativeImage
                src={CREATIVE_PROJECTS[1].heroImage}
                candidates={CREATIVE_PROJECTS[1].heroImageCandidates}
                alt="Dipdux Analytica Corporate Design"
                aspectRatio="16/9"
                allowZoom={false}
                className="shadow-sm"
                badge="02 / DIPDUX"
              />
            </div>

            {/* Narrative & Action */}
            <div className="lg:col-span-5 lg:order-1 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                  DIPDUX ANALYTICA
                </h2>

                <div className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                  Intelligence, Precisely Rendered · Swiss Precision
                </div>

                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                  Distilling enterprise technology and complex data intelligence into an authoritative, restrained editorial visual language with zero clichés.
                </p>
              </div>

              {/* Scope & Role */}
              <div className="py-4 border-y border-white/10 text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase">Role</span>
                  <span className="text-white font-medium">Creative Director & Editorial Designer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase">Focus</span>
                  <span className="text-[#315BFF]">Brand Architecture · Publications · Executive Decks</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEngine.playEditorialClick();
                    onSelectProject('dipdux-analytica');
                  }}
                  className="px-6 py-3.5 bg-white text-[#171717] group-hover:bg-[#315BFF] group-hover:text-white transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Image Slideshow</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* ENTRY 03: SAUDI NATIONAL DAY 96 (MULTI-BRAND COLLECTION)                */}
        {/* ----------------------------------------------------------------------- */}
        <div
          onClick={() => {
            soundEngine.playEditorialClick();
            onSelectProject('saudi-national-day-96');
          }}
          onMouseEnter={() => setHoveredProjectId('snd96')}
          onMouseLeave={() => setHoveredProjectId(null)}
          className="group cursor-pointer bg-[#F5F3EF] border-2 border-[#165B33]/40 p-6 sm:p-12 lg:p-16 transition-all hover:border-[#165B33] hover:shadow-2xl relative overflow-hidden"
        >
          {/* Card Top Metadata Line */}
          <div className="flex items-center justify-between pb-6 border-b border-[#171717]/10 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#165B33]">03</span>
              <span className="text-[#171717]/30">/</span>
              <span className="uppercase tracking-widest text-[#165B33] font-bold">
                FLAGSHIP MULTI-BRAND CREATIVE COLLECTION
              </span>
            </div>
            <span className="px-2.5 py-0.5 bg-[#165B33] text-white text-[11px] font-mono">
              2026 Collection · 5 Brands
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Showcase (Preview of the 5 Brands) */}
            <div className="lg:col-span-7 space-y-4">
              <CreativeImage
                src={CREATIVE_PROJECTS[2].heroImage}
                candidates={CREATIVE_PROJECTS[2].heroImageCandidates}
                alt="Saudi National Day 96 Collection"
                aspectRatio="16/9"
                allowZoom={false}
                className="shadow-md"
                badge="03 / SAUDI NATIONAL DAY 96"
              />

              {/* 5 Mini Brand Image Thumbnails Grid */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {SAUDI_NATIONAL_DAY_DATA.featuredBrands.map((b) => (
                  <div
                    key={b.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEngine.playEditorialClick();
                      onSelectProject(b.slug);
                    }}
                    className="border border-[#171717]/15 bg-white p-1.5 text-center space-y-1 hover:border-[#165B33] transition-colors cursor-pointer group/thumb"
                  >
                    <div className="aspect-square w-full overflow-hidden bg-[#EAE6DC] relative">
                      <img
                        src={b.heroImage}
                        alt={b.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[9px] font-mono text-[#165B33] font-semibold block">{b.number}</span>
                    <span className="text-[10px] font-semibold text-[#171717] block truncate">
                      {b.title.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight">
                    SAUDI NATIONAL DAY 96
                  </h2>
                  <span
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                    className="text-xl sm:text-2xl text-[#165B33] font-bold"
                    dir="rtl"
                  >
                    اليوم الوطني 96
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-editorial italic text-[#171717]/90 leading-snug">
                  Five Brands. Five Creative Directions.
                </p>

                <p className="text-sm sm:text-base text-[#171717]/80 font-light leading-relaxed">
                  A multi-brand campaign collection developed for Saudi National Day 96 in 2026. Exploring how one historic occasion inspires distinct art directions across five individual client brands:
                </p>

                {/* The 5 Sub-brands listed */}
                <ul className="space-y-1.5 text-xs font-mono text-[#171717]/90 pt-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#165B33] font-bold">04A · THE ROOM:</span>
                    <span>Espresso Rings Numeral 96</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#165B33] font-bold">04B · AE CREATIVE:</span>
                    <span>Cinematic Framing of Riyadh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#165B33] font-bold">04C · RATIO:</span>
                    <span>Intergenerational Regional Collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#165B33] font-bold">04D · BÉARU:</span>
                    <span>Child-Centered Diriyah Celebration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#165B33] font-bold">04E · REEF ASIA:</span>
                    <span>The Asian Gathering Feast</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEngine.playEditorialClick();
                    onSelectProject('saudi-national-day-96');
                  }}
                  className="px-6 py-3.5 bg-[#165B33] text-white hover:bg-[#171717] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Enter National Day 96 Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4-STEP CREATIVE FRAMEWORK                                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="border-t border-b border-[#171717]/10 py-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block mb-6">
            The Creative Direction Discipline Architecture
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeDisciplines.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#315BFF]">
                    <span>Phase {d.step}</span>
                    <Icon className="w-4 h-4 text-[#171717]/40" />
                  </div>
                  <h3 className="text-base font-semibold text-[#171717]">{d.title}</h3>
                  <p className="text-xs text-[#171717]/70 leading-relaxed font-light">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONSULTATION CTA                                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F4F1E9] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              Creative Direction Commission
            </span>
            <h2 className="text-3xl font-light leading-tight">
              Ready to transform strategic ideas into unforgettable imagery?
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F1E9]/70 leading-relaxed font-light">
              Whether directing high-impact national cultural milestones, conceptualizing multi-channel brand campaigns, or architecting packaging ecosystems, let&apos;s build an enduring visual legacy.
            </p>
          </div>
          <button
            onClick={() => {
              soundEngine.playEditorialClick();
              onNavigateContact();
            }}
            className="px-6 py-3.5 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all text-xs uppercase font-mono tracking-wider cursor-pointer whitespace-nowrap"
          >
            Schedule Creative Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
