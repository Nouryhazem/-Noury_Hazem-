import React from 'react';
import { MonogramN } from './MonogramN';
import { SoundToggle } from './SoundToggle';
import { soundEngine } from '../utils/soundEngine';
import { ArrowUpRight, Mail, Linkedin, FileText, Globe, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleFooterNav = (page: string) => {
    soundEngine.playEditorialClick();
    onNavigate(page);
  };

  return (
    <footer className="bg-[#171717] text-[#F4F1E9] pt-20 pb-12 border-t border-[#F4F1E9]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top closing section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F4F1E9]/15">
          <div className="lg:col-span-6 space-y-6">
            <div
              onClick={() => soundEngine.playNouriTwoNoteMotif()}
              className="flex items-center gap-3 cursor-pointer group w-fit"
              title="Click for N/ signature sound motif"
            >
              <MonogramN size="md" slashColor="#315BFF" inkColor="#F4F1E9" interactive={true} />
              <span className="text-xl font-bold tracking-tight text-[#F4F1E9] group-hover:text-[#315BFF] transition-colors">
                NOURI HAZEM
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-light text-[#F4F1E9]/90 font-editorial italic max-w-lg leading-snug">
              &ldquo;I connect the dots between strategy, creativity, and data.&rdquo;
            </p>
            <p className="text-xs text-[#F4F1E9]/60 max-w-md leading-relaxed">
              Digital Marketing Strategist & Creative Account Manager. Connecting marketing strategy, creative execution, client communication, and performance reporting across Egypt and GCC markets.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#F4F1E9]/70 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for marketing strategy & creative account management opportunities (Egypt & GCC)</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4F1E9]/40">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4F1E9]/70">
              <li>
                <button
                  onClick={() => handleFooterNav('marketing')}
                  className="hover:text-[#315BFF] transition-colors cursor-pointer text-left"
                >
                  Marketing Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('creative')}
                  className="hover:text-[#315BFF] transition-colors cursor-pointer text-left"
                >
                  Creative Direction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('branding')}
                  className="hover:text-[#315BFF] transition-colors cursor-pointer text-left"
                >
                  Brand Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('data')}
                  className="hover:text-[#315BFF] transition-colors cursor-pointer text-left"
                >
                  Marketing Analytics & Dashboards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('digital')}
                  className="hover:text-[#315BFF] transition-colors cursor-pointer text-left"
                >
                  Interactive Web Development
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4F1E9]/40">
              Direct Channels
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="mailto:nouryhazem17@gmail.com"
                className="flex items-center gap-2 text-[#F4F1E9]/90 hover:text-[#315BFF] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#315BFF]" />
                <span>nouryhazem17@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://wa.me/201028265294"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F4F1E9]/80 hover:text-[#315BFF] transition-colors group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#315BFF]" />
                <span>WhatsApp: 01028265294</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/nouryhazem?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F4F1E9]/70 hover:text-[#315BFF] transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#315BFF]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.behance.net/nouryhazem"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F4F1E9]/70 hover:text-[#315BFF] transition-colors group"
              >
                <Globe className="w-3.5 h-3.5 text-[#315BFF]" />
                <span>Behance Portfolio</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button
                onClick={() => handleFooterNav('about')}
                className="flex items-center gap-2 text-[#F4F1E9]/70 hover:text-[#315BFF] transition-colors group cursor-pointer text-left"
              >
                <FileText className="w-3.5 h-3.5 text-[#315BFF]" />
                <span>Curriculum Vitae / Credentials</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#F4F1E9]/40 gap-4">
          <div className="font-mono-data">
            © {new Date().getFullYear()} Nouri Hazem · All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Egypt · GCC Markets</span>
            <span>·</span>
            <button
              onClick={() => handleFooterNav('contact')}
              className="text-[#315BFF] hover:underline cursor-pointer"
            >
              Start a Conversation
            </button>
            <span className="hidden sm:inline">·</span>
            <SoundToggle className="text-[10px] py-1 px-2.5 bg-[#171717] border-[#F4F1E9]/20 text-[#F4F1E9]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
