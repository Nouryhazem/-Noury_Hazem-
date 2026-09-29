import React, { useState } from 'react';
import { MonogramN } from '../components/MonogramN';
import { GraduationCap, Briefcase, Award, CheckCircle2, Download, ArrowUpRight, Compass, Code2, LineChart, Palette } from 'lucide-react';

interface AboutViewProps {
  onNavigateContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateContact }) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'cv'>('narrative');

  const experience = [
    {
      role: 'Digital Marketing Strategist & Creative Account Manager',
      company: 'Dipdux Analytica',
      period: 'Approx. 6 Months · Current Role',
      location: 'Egypt & Regional Accounts',
      description:
        'Managing client marketing and creative accounts across Egypt and the GCC. Developing cross-channel marketing strategies, aligning creative concept development with client objectives, and delivering weekly performance reporting, KPI scorecards, and custom dashboard development.',
      deliverables: [
        'Marketing strategy, audience research, and multi-channel campaign planning',
        'Conversion-focused content calendars, graphic design, and brand identity systems',
        'Performance reporting and dashboard development using Power BI, Google Sheets, and Python',
        'Direct client stakeholder communication and account management across Egypt and GCC markets'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      status: 'Degree In Progress',
      focus: 'Algorithms, Software Systems, Web Development & Computational Thinking'
    },
    {
      degree: 'Bachelor of Science in STEM Education (Mathematics)',
      institution: 'Minya University',
      status: 'Completed',
      focus: 'Mathematical Modeling, Analytical Systems, Pedagogical Architecture'
    },
    {
      degree: 'STEM Education Diploma',
      institution: 'Higher Educational Institute (Egypt)',
      status: 'Currently Pursuing in Egypt',
      focus: 'Advanced Curriculum Design, Quantitative Problem Solving & Learning Systems'
    }
  ];

  const skillMatrix = [
    {
      category: 'Marketing Strategy & Accounts',
      skills: ['Marketing Strategy', 'Audience Research', 'Content Calendars', 'Client Account Management', 'Campaign Planning', 'Market Positioning']
    },
    {
      category: 'Creative Direction & Design',
      skills: ['Creative Concept Development', 'Graphic Design', 'Brand Identity Systems', 'Art Direction', 'Typography Hierarchy', 'Bilingual (Arabic/English) Systems']
    },
    {
      category: 'Data & Analytics',
      skills: ['Power BI Dashboards', 'Python (Data Analysis with Pandas)', 'Google Sheets Reporting', 'KPI Scorecards & Tracking', 'Campaign Performance Analysis', 'Actionable Insights']
    },
    {
      category: 'Interactive Web Development',
      skills: ['React & JavaScript', 'Responsive Prototyping', 'TypeScript', 'Tailwind CSS', 'Web Performance & Accessibility', 'Component Architecture']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Profile & Professional Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.05]">
            One person. <br className="hidden sm:inline" />
            <span className="font-editorial italic">Multiple connected disciplines.</span> <br />
            One coherent way of thinking.
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            I am Nouri Hazem—a Digital Marketing Strategist and Creative Account Manager based in Egypt, operating across Egypt and GCC markets including Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Main Profile Grid: Portrait Placeholder + Biography */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#171717] aspect-4/5 w-full relative overflow-hidden border border-[#171717]/10 flex flex-col justify-between p-8 text-[#F4F1E9]">
              <div className="flex items-center justify-between">
                <MonogramN size="md" slashColor="#315BFF" inkColor="#F4F1E9" interactive={false} />
                <span className="text-[11px] font-mono text-[#F4F1E9]/60 uppercase tracking-widest">
                  Egypt · GCC Markets
                </span>
              </div>

              {/* Artistic Typographic Portrait Representation */}
              <div className="space-y-3 my-auto py-8">
                <div className="text-xs font-mono text-[#315BFF] uppercase tracking-wider">
                  Professional Identity
                </div>
                <div className="text-3xl font-light tracking-tight font-editorial italic">
                  Nouri Hazem
                </div>
                <p className="text-xs text-[#F4F1E9]/70 font-light leading-relaxed max-w-xs">
                  Connecting analytical rigor with artistic intuition. Translating business complexity into memorable brand experiences.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4F1E9]/20 flex items-center justify-between text-[11px] font-mono text-[#F4F1E9]/60">
                <span>Dipdux Analytica</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active in GCC/Egypt
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-2">
              <a
                href="#cv"
                onClick={() => setActiveTab('cv')}
                className="w-full py-3 px-4 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Complete Curriculum Vitae</span>
              </a>
              <button
                onClick={onNavigateContact}
                className="w-full py-3 px-4 bg-white border border-[#171717]/15 text-[#171717] hover:border-[#315BFF] transition-colors flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider cursor-pointer"
              >
                <span>Initiate Direct Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: In-depth Biography & Operating Philosophy */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block">
                The Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#171717]">
                How business challenges become brand momentum
              </h2>
              <div className="space-y-4 text-sm text-[#171717]/80 leading-relaxed font-light">
                <p>
                  Most organizations suffer from a structural disconnect: analytical minds look at spreadsheets and fail to understand what stirs the human heart; creative minds produce stunning visuals that fail to generate pipeline or pay for themselves.
                </p>
                <p>
                  My work lives at the exact intersection of these two worlds. With a background that spans <strong>Computer Science at University of the People</strong>, <strong>Mathematics & STEM Education at Minya University</strong>, and approximately six months managing multi-channel client accounts at <strong>Dipdux Analytica</strong>, I approach marketing as both an empirical science and a high-order craft.
                </p>
                <p>
                  Whether defining the go-to-market positioning for a digital healthcare provider like Juraa, architecting sovereign cloud narratives for enterprise B2B leaders like CloudX, or orchestrating culturally resonant national campaigns across Saudi Arabia, my principle remains constant: <em>Every creative decision must have a strategic hypothesis, and every result must be honestly measured.</em>
                </p>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="space-y-4 pt-6 border-t border-[#171717]/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block">
                Working Approach
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/70 border border-[#171717]/10 space-y-1.5">
                  <span className="font-mono text-xs text-[#315BFF] font-bold">01. Question First</span>
                  <h4 className="text-sm font-semibold text-[#171717]">Listen Before Creating</h4>
                  <p className="text-xs text-[#171717]/70 font-light leading-relaxed">
                    Uncover the actual commercial friction, not merely what the client thought they needed to post.
                  </p>
                </div>
                <div className="p-4 bg-white/70 border border-[#171717]/10 space-y-1.5">
                  <span className="font-mono text-xs text-[#315BFF] font-bold">02. Form with Intent</span>
                  <h4 className="text-sm font-semibold text-[#171717]">Visual Clarity</h4>
                  <p className="text-xs text-[#171717]/70 font-light leading-relaxed">
                    Aesthetics are not superficial; they are the immediate non-verbal proof of a brand&apos;s caliber.
                  </p>
                </div>
                <div className="p-4 bg-white/70 border border-[#171717]/10 space-y-1.5">
                  <span className="font-mono text-xs text-[#315BFF] font-bold">03. Measurement Rigor</span>
                  <h4 className="text-sm font-semibold text-[#171717]">Zero Vanity Metrics</h4>
                  <p className="text-xs text-[#171717]/70 font-light leading-relaxed">
                    Likes don&apos;t pay payroll. Clear KPIs, audience retention, and actionable business insights do.
                  </p>
                </div>
                <div className="p-4 bg-white/70 border border-[#171717]/10 space-y-1.5">
                  <span className="font-mono text-xs text-[#315BFF] font-bold">04. Empathic Delivery</span>
                  <h4 className="text-sm font-semibold text-[#171717]">Seamless Operations</h4>
                  <p className="text-xs text-[#171717]/70 font-light leading-relaxed">
                    Calm, transparent communication keeps both creative teams and executive boards aligned.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Professional Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#171717]/10">
              <Briefcase className="w-4 h-4 text-[#315BFF]" />
              <h3 className="text-lg font-light text-[#171717]">Professional Agency Experience</h3>
            </div>

            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white p-6 border border-[#171717]/10 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base font-semibold text-[#171717]">{exp.role}</h4>
                    <div className="text-xs font-mono text-[#315BFF] mt-0.5">{exp.company} · {exp.location}</div>
                  </div>
                  <span className="text-[11px] font-mono text-[#171717]/50 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                  {exp.description}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-[#171717]/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/40 block">Key Scope Items:</span>
                  {exp.deliverables.map((d, i) => (
                    <div key={i} className="text-xs text-[#171717]/70 flex items-start gap-2">
                      <span className="text-[#315BFF] font-bold">·</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Background */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#171717]/10">
              <GraduationCap className="w-4 h-4 text-[#315BFF]" />
              <h3 className="text-lg font-light text-[#171717]">Academic Foundations & Credentials</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white/70 p-5 border border-[#171717]/10 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#171717]">{edu.degree}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E8E4DA] text-[#171717] shrink-0">
                      {edu.status}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#171717]/60">{edu.institution}</div>
                  <p className="text-xs text-[#171717]/70 font-light pt-1">{edu.focus}</p>
                </div>
              ))}
            </div>
            
            <p className="text-[11px] font-mono text-[#171717]/50 italic">
              Note: Rigorously documented based on verified academic enrollments in Egypt and accredited online institutions.
            </p>
          </div>

        </div>
      </section>

      {/* Skills Matrix */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 space-y-8">
        <div className="border-b border-[#171717]/10 pb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block mb-1">
            Skill Taxonomy
          </span>
          <h2 className="text-2xl font-light text-[#171717]">Core Competencies Across Disciplines</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillMatrix.map((item, idx) => (
            <div key={idx} className="bg-white/60 p-5 border border-[#171717]/10 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#315BFF]">
                {item.category}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#171717]/80 font-light">
                {item.skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#171717]/40 rounded-full" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Viewable CV Modal / Section Anchor */}
      <section id="cv" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F4F1E9] space-y-6 border border-[#171717]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F4F1E9]/15">
            <div>
              <span className="text-xs font-mono text-[#315BFF] uppercase tracking-widest">
                Official Curriculum Vitae
              </span>
              <h3 className="text-2xl font-light text-[#F4F1E9] mt-1">
                Nouri Hazem · Professional Dossier
              </h3>
            </div>
            <button
              onClick={() => {
                // Trigger print dialog or export clean formatted PDF view
                window.print();
              }}
              className="px-4 py-2 bg-white text-[#171717] hover:bg-[#315BFF] hover:text-white transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer flex items-center gap-2 self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save Dossier</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#F4F1E9]/80 font-light leading-relaxed">
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#315BFF] uppercase block">Positioning</span>
              <p>Digital Marketing Strategist & Creative Account Manager connecting marketing strategy, creative execution, client communication, and performance reporting across Egypt and GCC markets.</p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#315BFF] uppercase block">Regional Markets</span>
              <p>Active project experience handling multi-brand client accounts across Egypt and GCC markets with bilingual fluency (Arabic / English).</p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#315BFF] uppercase block">Direct Inquiries</span>
              <p>Open for full-time Digital Marketing Strategist and Creative Account Manager roles and high-impact project opportunities.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
