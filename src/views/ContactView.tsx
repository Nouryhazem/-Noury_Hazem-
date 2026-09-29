import React, { useState } from 'react';
import { MonogramN } from '../components/MonogramN';
import { Mail, Linkedin, Globe, FileText, Copy, Check, ArrowUpRight, Send, MapPin, Clock } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'Marketing Strategy',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'nouryhazem731@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Construct real mailto URL so user's client is launched directly with no fake backend
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.interest} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\nOrganization: ${formData.organization}\nArea of Interest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F1E9] text-[#171717] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Statement */}
        <section className="max-w-4xl space-y-6 mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#315BFF]">
            <MonogramN size="sm" slashColor="#315BFF" inkColor="#171717" interactive={false} />
            <span>Initiate Collaboration</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] leading-[1.04]">
            Have a challenge? <br />
            <span className="font-editorial italic">Let&apos;s connect the dots.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-light max-w-2xl">
            Whether you represent an enterprise scaling in the GCC, a high-growth startup needing strategic direction, or an agency seeking senior creative account leadership—I am ready to talk.
          </p>
        </section>

        {/* Main Grid: Direct Contact Channels + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="bg-[#171717] text-[#F4F1E9] p-8 space-y-6 border border-[#171717]">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
                  Direct Electronic Mail
                </span>
                <div className="text-xl sm:text-2xl font-light text-[#F4F1E9] break-all">
                  {emailAddress}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-4 py-2 bg-[#315BFF] text-white hover:bg-white hover:text-[#171717] transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-[#F4F1E9] transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-[#F4F1E9]/15 flex items-center justify-between text-xs text-[#F4F1E9]/60 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#315BFF]" />
                  <span>Typical response &lt; 24h</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cairo (UTC+2)</span>
                </span>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="bg-white/70 p-6 border border-[#171717]/10 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40 block">
                Professional Networks & Archives
              </span>
              
              <div className="space-y-3 text-xs">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#171717]/10 hover:border-[#315BFF] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#315BFF]" />
                    <span className="font-medium text-[#171717]">LinkedIn Professional Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#171717]/40 group-hover:text-[#315BFF] group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#171717]/10 hover:border-[#315BFF] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#315BFF]" />
                    <span className="font-medium text-[#171717]">Behance Design Portfolio</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#171717]/40 group-hover:text-[#315BFF] group-hover:translate-x-0.5 transition-all" />
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-between p-3 bg-white border border-[#171717]/10 hover:border-[#315BFF] transition-all group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#315BFF]" />
                    <span className="font-medium text-[#171717]">Download Official CV Dossier</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#171717]/40 group-hover:text-[#315BFF] group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* Regional Availability */}
            <div className="p-6 bg-[#EFECE3] border border-[#171717]/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF] block">
                Regional Availability
              </span>
              <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                Available for high-impact account leadership and strategic marketing engagements across Egypt and GCC nations (Kingdom of Saudi Arabia, United Arab Emirates, Qatar).
              </p>
            </div>

          </div>

          {/* Right Column: Pre-Draft Brief / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#171717]/10 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#315BFF]">
                Draft Collaboration Brief
              </span>
              <h2 className="text-2xl font-light text-[#171717]">
                Send a Structured Brief
              </h2>
              <p className="text-xs text-[#171717]/60 font-light">
                This form prepares a direct structured dispatch that connects straight to my mailbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#EFECE3] border border-[#171717]/10 text-center space-y-3">
                <Check className="w-8 h-8 text-[#315BFF] mx-auto" />
                <h3 className="text-lg font-medium text-[#171717]">Email Client Triggered</h3>
                <p className="text-xs text-[#171717]/70 max-w-md mx-auto">
                  Your structured inquiry was loaded into your default mail application. You can also write directly to <span className="font-mono text-[#315BFF]">{emailAddress}</span> anytime.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#315BFF] underline pt-2 cursor-pointer"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/60">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Ghamdi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F1E9]/50 border border-[#171717]/15 focus:border-[#315BFF] focus:bg-white outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/60">
                      Organization / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fintech Venture or Agency"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F1E9]/50 border border-[#171717]/15 focus:border-[#315BFF] focus:bg-white outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/60">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F1E9]/50 border border-[#171717]/15 focus:border-[#315BFF] focus:bg-white outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/60">
                      Primary Area of Need
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F1E9]/50 border border-[#171717]/15 focus:border-[#315BFF] focus:bg-white outline-hidden transition-colors"
                    >
                      <option value="Marketing Strategy">Full Marketing Strategy & Go-To-Market</option>
                      <option value="Creative Account Leadership">Creative Account Management</option>
                      <option value="Brand Identity System">Brand Architecture & Identity</option>
                      <option value="Marketing Analytics">Power BI & Marketing Analytics</option>
                      <option value="Interactive Web Experience">Interactive Web Development</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/60">
                    Brief Summary of Challenge *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your market, timeline, current friction points, and what outcomes you aim to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F4F1E9]/50 border border-[#171717]/15 focus:border-[#315BFF] focus:bg-white outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#171717] text-white hover:bg-[#315BFF] transition-colors text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Collaboration Brief</span>
                </button>

                <p className="text-[10px] font-mono text-[#171717]/50 text-center">
                  All inquiries treated with strict commercial confidentiality.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
