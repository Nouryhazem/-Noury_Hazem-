import React from 'react';
import { soundEngine } from '../utils/soundEngine';
import { Compass, Palette, Type, BarChart3, Code2 } from 'lucide-react';

interface DisciplineTabsProps {
  activeDiscipline: 'marketing' | 'creative' | 'branding' | 'data' | 'digital';
  onNavigate: (page: string) => void;
}

export const DisciplineTabs: React.FC<DisciplineTabsProps> = ({
  activeDiscipline,
  onNavigate,
}) => {
  const tabs = [
    {
      id: 'marketing',
      num: '01',
      label: 'Strategic Marketing',
      shortLabel: 'Strategy',
      icon: Compass,
      tag: 'Core Discipline',
    },
    {
      id: 'creative',
      num: '02',
      label: 'Creative Direction',
      shortLabel: 'Creative',
      icon: Palette,
      tag: 'Art & Motion',
    },
    {
      id: 'branding',
      num: '03',
      label: 'Brand Architecture',
      shortLabel: 'Branding',
      icon: Type,
      tag: 'Identity & Voice',
    },
    {
      id: 'data',
      num: '04',
      label: 'Data & Analytics',
      shortLabel: 'Data',
      icon: BarChart3,
      tag: 'Attribution & BI',
    },
    {
      id: 'digital',
      num: '05',
      label: 'Digital Systems',
      shortLabel: 'Digital',
      icon: Code2,
      tag: 'Interactive Tech',
    },
  ];

  const handleTabClick = (id: string) => {
    soundEngine.playEditorialClick();
    onNavigate(id);
  };

  return (
    <div className="w-full mb-10 border-b border-[#171717]/15 pb-6">
      <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase text-[#171717]/50">
        <span>[ STRATEGIC CAPABILITIES MATRIX ]</span>
        <span className="hidden sm:inline">SWITCH DISCIPLINE · 05 PILLARS</span>
      </div>

      <nav
        aria-label="Disciplines Switcher"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
      >
        {tabs.map((tab) => {
          const isActive = activeDiscipline === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`group text-left p-3 border transition-all duration-150 cursor-pointer relative ${
                isActive
                  ? 'bg-[#171717] text-[#F4F1E9] border-[#171717] shadow-xs'
                  : 'bg-[#F4F1E9] text-[#171717] border-[#171717]/15 hover:border-[#315BFF] hover:bg-[#E8E4DA]/60'
              }`}
            >
              {/* Active top line */}
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#315BFF]" />
              )}

              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[10px] font-mono tracking-wider ${
                    isActive ? 'text-[#315BFF]' : 'text-[#171717]/40 group-hover:text-[#315BFF]'
                  }`}
                >
                  {tab.num}
                </span>
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive ? 'text-[#315BFF]' : 'text-[#171717]/40 group-hover:text-[#171717]'
                  }`}
                />
              </div>

              <div className="font-medium text-xs tracking-tight line-clamp-1">
                {tab.label}
              </div>

              <div
                className={`text-[10px] font-mono tracking-wider mt-0.5 ${
                  isActive ? 'text-[#F4F1E9]/60' : 'text-[#171717]/50'
                }`}
              >
                {tab.tag}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
