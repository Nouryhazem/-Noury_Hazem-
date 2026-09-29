import React, { useState } from 'react';
import { MonogramN } from '../components/MonogramN';
import { DisciplineTabs } from '../components/DisciplineTabs';
import { BarChart3, Database, FileSpreadsheet, Code2, LineChart, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

interface DataViewProps {
  onNavigateContact: () => void;
  onNavigate?: (page: string) => void;
}

export const DataView: React.FC<DataViewProps> = ({ onNavigateContact, onNavigate }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'attribution' | 'roas' | 'pipeline'>('attribution');

  const tools = [
    {
      name: 'Power BI',
      role: 'Enterprise Reporting & Executive Dashboards',
      description: 'Building automated semantic models, DAX measures, and drill-through KPI dashboards for executive stakeholders.',
      icon: BarChart3,
    },
    {
      name: 'Python (Pandas / NumPy)',
      role: 'Data Wrangling & Statistical Analysis',
      description: 'ETL pipelines, cleaning multi-touch attribution logs, anomaly detection in spend, and automated reporting scripts.',
      icon: Code2,
    },
    {
      name: 'Google Sheets & Looker Studio',
      role: 'Agile Marketing Portals',
      description: 'Real-time collaborative trackers, automated API connectors (Supermetrics/Funnel), and client weekly digest sheets.',
      icon: FileSpreadsheet,
    },
    {
      name: 'GA4 & Server-side Tagging',
      role: 'Behavioral Attribution & Event Modeling',
      description: 'Custom event schemas, conversion funnel mapping, BigQuery exports, and cookie-loss mitigation via CAPI.',
      icon: Database,
    },
  ];

  // Representative data for the interactive illustrative dashboard preview
  const attributionChannels = [
    { channel: 'Meta Paid Social (Riyadh & Cairo)', spend: '$14,200', leads: '1,120', cac: '$12.68', roas: '3.4x', sqlRate: '18.4%' },
    { channel: 'Google Search & PMax', spend: '$18,500', leads: '940', cac: '$19.68', roas: '4.1x', sqlRate: '27.2%' },
    { channel: 'LinkedIn ABM (C-Suite GCC)', spend: '$9,800', leads: '210', cac: '$46.67', roas: '5.2x', sqlRate: '41.0%' },
    { channel: 'Organic Direct & Referrals', spend: '$1,200', leads: '860', cac: '$1.40', roas: '11.8x', sqlRate: '32.5%' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        {onNavigate && (
          <DisciplineTabs activeDiscipline="data" onNavigate={onNavigate} />
        )}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Analytical Discipline · Marketing Intelligence & KPI Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#171717] leading-[1.05]">
            And results need <br className="hidden sm:inline" />
            <span className="font-editorial italic">honest measurement</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            I don’t look at vanity metrics. I build structured reporting systems that tie creative campaigns directly to customer acquisition cost, conversion velocity, and real revenue.
          </p>
        </div>
      </section>

      {/* Analytical Tool Stack */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div key={idx} className="bg-white/60 p-6 border border-[#171717]/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-[#171717] text-[#F4F1E9] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#315BFF]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#171717]/40">STACK 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#171717]">{t.name}</h3>
                  <span className="text-[11px] font-mono text-[#315BFF] block">{t.role}</span>
                  <p className="text-xs text-[#171717]/70 leading-relaxed font-light">{t.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEDICATED DASHBOARD CASE STUDY TEMPLATE (Mandatory Prompt Requirement) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="bg-[#171717] text-[#F4F1E9] p-8 sm:p-12 lg:p-14 border border-[#171717] space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F4F1E9]/15 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#315BFF]">
                Featured Dashboard Case Study Blueprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F4F1E9]">
                Enterprise Multi-Touch Attribution & CAC Normalization
              </h2>
              <p className="text-xs sm:text-sm text-[#F4F1E9]/70 font-light leading-relaxed">
                A standardized intelligence framework developed for regional B2B and consumer accounts to eliminate reporting discrepancies between ad channels and actual bank revenue.
              </p>
            </div>
            <div className="text-xs font-mono text-[#F4F1E9]/60 shrink-0">
              Environment: Power BI · Python ETL · BigQuery
            </div>
          </div>

          {/* Step 1: Business Questions & Data Sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>01</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Business Questions</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">What problem does the executive board need answered?</h3>
              <ul className="space-y-2 text-xs text-[#F4F1E9]/80 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span>Which paid marketing channel produces the highest Sales Qualified Lead (SQL) conversion rate, not just cheap clicks?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span>What is the true blended CAC when factoring in regional currency volatility between SAR, EGP, and USD?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span>How long is the actual lag from first touch on LinkedIn/Meta to signed contract in the CRM?</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>02</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Data Sources</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">Raw Ingestion Infrastructure</h3>
              <ul className="space-y-2 text-xs text-[#F4F1E9]/80 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span><strong>Ad Networks:</strong> Meta Marketing API, Google Ads API, LinkedIn Campaign Manager API.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span><strong>Behavioral:</strong> Google Analytics 4 BigQuery export table with full user pseudo-ID session chains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#315BFF] font-bold">·</span>
                  <span><strong>CRM / ERP:</strong> HubSpot Deals API and Stripe / Point of Sale transactional records.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Data Cleaning & KPI Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>03</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Data Cleaning & Transformation</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">Python / Pandas ETL Rules</h3>
              <div className="p-3 bg-black/60 font-mono text-[11px] text-[#F4F1E9]/80 space-y-1.5 overflow-x-auto">
                <div className="text-emerald-400"># 1. Normalize disparate UTM parameters</div>
                <div>df['utm_campaign'] = df['utm_campaign'].str.lower().str.strip()</div>
                <div className="text-emerald-400"># 2. De-duplicate multi-touch leads by phone/email hash</div>
                <div>df = df.drop_duplicates(subset=['contact_sha256'], keep='first')</div>
                <div className="text-emerald-400"># 3. Currency conversion to base USD at daily spot rate</div>
                <div>df['spend_usd'] = df.apply(lambda r: convert_currency(r.spend, r.currency, r.date), axis=1)</div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>04</span>
                <span>/</span>
                <span className="uppercase tracking-wider">KPI Selection</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">High-Signal Metric Definitions</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/5">
                  <div className="font-mono text-[#315BFF] text-[11px]">Blended CAC</div>
                  <div className="text-[#F4F1E9]/80 mt-1">Total ad spend + creative agency retainers ÷ Total paying customers.</div>
                </div>
                <div className="p-3 bg-white/5">
                  <div className="font-mono text-[#315BFF] text-[11px]">SQL Velocity</div>
                  <div className="text-[#F4F1E9]/80 mt-1">Average days elapsed from form fill to completed sales qualification call.</div>
                </div>
                <div className="p-3 bg-white/5">
                  <div className="font-mono text-[#315BFF] text-[11px]">Blended ROAS</div>
                  <div className="text-[#F4F1E9]/80 mt-1">Gross recognized customer lifetime margin ÷ Combined channel spend.</div>
                </div>
                <div className="p-3 bg-white/5">
                  <div className="font-mono text-[#315BFF] text-[11px]">Lead-to-SQL %</div>
                  <div className="text-[#F4F1E9]/80 mt-1">Ratio of raw leads that meet target buyer criteria (seniority + company size).</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Interactive Dashboard Design & Visualization */}
          <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#F4F1E9]/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>05</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Dashboard Design (Representative Demonstration)</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono">
                <button
                  onClick={() => setActiveMetricTab('attribution')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeMetricTab === 'attribution' ? 'bg-[#315BFF] text-white' : 'text-[#F4F1E9]/60 hover:text-white'
                  }`}
                >
                  Channel Attribution
                </button>
                <button
                  onClick={() => setActiveMetricTab('roas')}
                  className={`px-3 py-1 cursor-pointer transition-colors ${
                    activeMetricTab === 'roas' ? 'bg-[#315BFF] text-white' : 'text-[#F4F1E9]/60 hover:text-white'
                  }`}
                >
                  Spend vs ROAS
                </button>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#F4F1E9]/50">
              *Illustrative data model representative of multi-channel B2B and retail client reporting structures.
            </div>

            {/* Illustrative Tabular Dashboard View */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-data border-collapse">
                <thead>
                  <tr className="border-b border-[#F4F1E9]/20 text-[#F4F1E9]/50 font-mono text-[11px]">
                    <th className="py-2.5 px-3">Acquisition Channel</th>
                    <th className="py-2.5 px-3">Allocated Spend</th>
                    <th className="py-2.5 px-3">Raw Leads</th>
                    <th className="py-2.5 px-3">CAC (USD)</th>
                    <th className="py-2.5 px-3">Blended ROAS</th>
                    <th className="py-2.5 px-3">SQL Quality Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F1E9]/10">
                  {attributionChannels.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 font-medium text-white">{row.channel}</td>
                      <td className="py-3 px-3 text-[#F4F1E9]/80">{row.spend}</td>
                      <td className="py-3 px-3 text-[#F4F1E9]/80">{row.leads}</td>
                      <td className="py-3 px-3 text-[#F4F1E9]/80">{row.cac}</td>
                      <td className="py-3 px-3 text-emerald-400 font-bold">{row.roas}</td>
                      <td className="py-3 px-3 text-[#315BFF]">{row.sqlRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Step 4: Insights & Business Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>06</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Synthesized Insights</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">What the numbers revealed</h3>
              <p className="text-xs text-[#F4F1E9]/80 leading-relaxed font-light">
                While Meta delivered the lowest raw cost-per-lead ($12.68), its lead-to-SQL rate was only 18.4%. In contrast, LinkedIn ABM had a higher front-end CAC ($46.67) but closed deals with a 41.0% SQL velocity and an enterprise contract value 6x larger.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-[#F4F1E9]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF]">
                <span>07</span>
                <span>/</span>
                <span className="uppercase tracking-wider">Business Recommendations</span>
              </div>
              <h3 className="text-lg font-medium text-[#F4F1E9]">Actionable Capital Realignment</h3>
              <p className="text-xs text-[#F4F1E9]/80 leading-relaxed font-light">
                Reallocate 35% of low-intent generic Meta budget directly into high-intent Google Search and LinkedIn C-suite thought leadership. Instituted automated lead scoring in CRM to route high-value accounts within 15 minutes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Analytics Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#EFECE3] border border-[#171717]/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
              Executive Data Architecture
            </span>
            <h3 className="text-xl font-light text-[#171717]">
              Want clean, actionable marketing dashboards for your accounts?
            </h3>
            <p className="text-xs text-[#171717]/70 font-light">
              From configuring GA4 and Looker Studio to designing custom Power BI models, let&apos;s turn confusing ad numbers into business truth.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-xs uppercase font-mono tracking-wider cursor-pointer whitespace-nowrap"
          >
            Request Analytics Audit
          </button>
        </div>
      </section>
    </div>
  );
};
