import React, { useState } from 'react';
import { MonogramN } from '../components/MonogramN';
import { DisciplineTabs } from '../components/DisciplineTabs';
import { Smartphone, Tablet, Monitor, Code2, Cpu, Sparkles, CheckCircle2, ArrowUpRight, Zap, RefreshCw } from 'lucide-react';

interface DigitalViewProps {
  onNavigateContact: () => void;
  onNavigate?: (page: string) => void;
}

export const DigitalView: React.FC<DigitalViewProps> = ({ onNavigateContact, onNavigate }) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [calcDistance, setCalcDistance] = useState<number>(35); // km per day
  const [fuelType, setFuelType] = useState<'92' | '95'>('95');

  // Interactive EV Calculator simulation (demonstrating interactive React craft)
  const petrolPrice = fuelType === '95' ? 17.0 : 15.25; // EGP per liter
  const petrolLitersPer100Km = 8.5;
  const evKwPer100Km = 15;
  const electricityKwhCost = 2.2; // EGP residential tier 5/commercial

  const monthlyKm = calcDistance * 30;
  const monthlyPetrolCost = Math.round((monthlyKm / 100) * petrolLitersPer100Km * petrolPrice);
  const monthlyEvCost = Math.round((monthlyKm / 100) * evKwPer100Km * electricityKwhCost);
  const monthlySavings = monthlyPetrolCost - monthlyEvCost;
  const annualSavings = monthlySavings * 12;

  const stack = [
    { title: 'React & TypeScript', desc: 'Type-safe component architecture, custom hooks, predictable state management, and strict zero-leak cleanup.' },
    { title: 'Tailwind CSS & Styling', desc: 'Utility-first layout mathematics, zero-pill typography, fluid responsiveness, and strict 60-30-10 palette distribution.' },
    { title: 'Figma to Production', desc: 'Translating design tokens, variable styles, auto-layouts, and component variants directly into pristine DOM markup.' },
    { title: 'Web Vitals & Performance', desc: 'Compositor-only animations, sub-100ms interaction latency, zero layout shifts (CLS < 0.05), and accessible contrast.' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        {onNavigate && (
          <DisciplineTabs activeDiscipline="digital" onNavigate={onNavigate} />
        )}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Engineering Discipline · Interactive Web Experiences</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.05]">
            Digital should <br className="hidden sm:inline" />
            <span className="font-editorial italic">feel alive</span> under your fingers.
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            As a strategist who codes, I bridge the gap between abstract brand promises and tangible interactive reality using React, TypeScript, and modern frontend architecture.
          </p>
        </div>
      </section>

      {/* Interactive Responsive Viewport Simulator */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="bg-[#171717] text-[#F4F1E9] p-6 sm:p-8 border border-[#171717] space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4F1E9]/15">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
                Interactive Engineering Showcase
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#F4F1E9]">
                Live Responsive Prototype: Volt Egypt Mobility Calculator
              </h2>
            </div>

            {/* Breakpoint Switcher Controls */}
            <div className="flex items-center gap-1 bg-white/10 p-1 border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  viewportMode === 'desktop' ? 'bg-[#315BFF] text-white' : 'text-[#F4F1E9]/70 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop (1440px)</span>
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  viewportMode === 'tablet' ? 'bg-[#315BFF] text-white' : 'text-[#F4F1E9]/70 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet (768px)</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  viewportMode === 'mobile' ? 'bg-[#315BFF] text-white' : 'text-[#F4F1E9]/70 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile (375px)</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-[#F4F1E9]/70 font-light">
            Toggle the viewport controls above to inspect how this interactive financial calculator component fluidly reorganizes its spatial math across breakpoints without layout jitter.
          </p>

          {/* Viewport Frame Container */}
          <div className="bg-[#0D0D0D] p-4 sm:p-8 flex justify-center items-center overflow-x-auto min-h-[460px] border border-white/5">
            <div
              className={`transition-all duration-500 ease-out bg-[#F4F1E9] text-[#171717] p-6 shadow-2xl border border-white/20 ${
                viewportMode === 'desktop'
                  ? 'w-full max-w-4xl'
                  : viewportMode === 'tablet'
                  ? 'w-[640px]'
                  : 'w-[340px]'
              }`}
            >
              {/* Mini App Inside Simulator */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#315BFF] rounded-full animate-pulse" />
                    <span className="font-bold text-xs tracking-tight">VOLT EGYPT · SAVINGS ENGINE</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#171717]/50">Cairo Grid v2.4</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="flex items-center justify-between text-xs font-mono mb-1">
                      <span>Daily Commute Distance:</span>
                      <span className="font-bold text-[#315BFF] text-sm">{calcDistance} km / day</span>
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={120}
                      step={5}
                      value={calcDistance}
                      onChange={(e) => setCalcDistance(Number(e.target.value))}
                      className="w-full accent-[#315BFF] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#171717]/40 mt-0.5">
                      <span>10 km (Local)</span>
                      <span>60 km (Ring Road)</span>
                      <span>120 km (Regional)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-mono text-[#171717]/60 text-[11px]">Compare with:</span>
                    <button
                      onClick={() => setFuelType('92')}
                      className={`px-2.5 py-1 text-xs font-mono cursor-pointer border ${
                        fuelType === '92' ? 'bg-[#171717] text-white border-[#171717]' : 'bg-white text-[#171717] border-[#171717]/20'
                      }`}
                    >
                      92 Octane (15.25 EGP)
                    </button>
                    <button
                      onClick={() => setFuelType('95')}
                      className={`px-2.5 py-1 text-xs font-mono cursor-pointer border ${
                        fuelType === '95' ? 'bg-[#171717] text-white border-[#171717]' : 'bg-white text-[#171717] border-[#171717]/20'
                      }`}
                    >
                      95 Octane (17.00 EGP)
                    </button>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3 border border-[#171717]/10">
                    <span className="text-[10px] font-mono text-[#171717]/50 block">Monthly Petrol</span>
                    <div className="text-xl font-bold font-mono-data text-[#171717] mt-0.5">
                      {monthlyPetrolCost.toLocaleString()} <span className="text-xs font-normal">EGP</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 border border-[#171717]/10">
                    <span className="text-[10px] font-mono text-[#171717]/50 block">Monthly EV Charging</span>
                    <div className="text-xl font-bold font-mono-data text-[#315BFF] mt-0.5">
                      {monthlyEvCost.toLocaleString()} <span className="text-xs font-normal">EGP</span>
                    </div>
                  </div>
                  <div className="bg-[#171717] text-[#F4F1E9] p-3">
                    <span className="text-[10px] font-mono text-emerald-400 block">Annual Saved Capital</span>
                    <div className="text-xl font-bold font-mono-data text-emerald-400 mt-0.5">
                      +{annualSavings.toLocaleString()} <span className="text-xs font-normal text-white">EGP</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#171717]/60 italic flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#315BFF]" />
                  <span>Calculated with 2024 Egyptian residential Tier 5 tariffs and standard 8.5L/100km ICE average.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[#F4F1E9]/50 pt-2">
            <span>Stack: React 19 + TypeScript + Custom Sliders</span>
            <span>Zero external styling libraries</span>
          </div>

        </div>
      </section>

      {/* Technical Approach & UX Principles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 space-y-12">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block mb-2">
            Development Doctrine
          </span>
          <h2 className="text-3xl font-light text-[#171717]">
            How I architect interactive web software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((item, idx) => (
            <div key={idx} className="bg-white/70 p-6 border border-[#171717]/10 space-y-2">
              <span className="text-xs font-mono text-[#315BFF] block">Module 0{idx + 1}</span>
              <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F4F1E9] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
              Digital Experience Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-light">
              Need an interactive product that converts visitors into believers?
            </h3>
            <p className="text-xs text-[#F4F1E9]/70 leading-relaxed font-light">
              From bespoke landing page micro-interactions to complex data calculators, let&apos;s build an experience that outshines competitors.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all text-xs uppercase font-mono tracking-wider cursor-pointer whitespace-nowrap"
          >
            Start Digital Brief
          </button>
        </div>
      </section>
    </div>
  );
};
