import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface SoundToggleProps {
  className?: string;
  variant?: 'floating' | 'inline' | 'minimal';
}

export const SoundToggle: React.FC<SoundToggleProps> = ({
  className = '',
  variant = 'inline',
}) => {
  // Automatically defaults to whatever soundEngine holds (which is false = Sound ON)
  const [isMuted, setIsMuted] = useState<boolean>(() => soundEngine.getIsMuted());

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe((muted) => {
      setIsMuted(muted);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.toggleMute();
  };

  if (variant === 'floating') {
    return (
      <aside
        aria-label="Sound controller"
        className={`fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8 transition-all duration-300 ${className}`}
      >
        <button
          onClick={handleToggle}
          className={`group flex items-center gap-2.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md border focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#315BFF] select-none ${
            !isMuted
              ? 'bg-[#171717]/95 text-[#F4F1E9] border-[#315BFF]/50 hover:border-[#315BFF] hover:bg-[#171717]'
              : 'bg-[#F4F1E9]/90 text-[#171717]/70 border-[#171717]/20 hover:border-[#171717]/50 hover:bg-[#F4F1E9]'
          }`}
          aria-label={!isMuted ? 'Mute website sound (Sound is ON)' : 'Unmute website sound (Sound is OFF)'}
          title={!isMuted ? 'Sound is ON · Click to mute audio' : 'Sound is OFF · Click to enable audio'}
        >
          {/* Audio Indicator Graphic */}
          <span className="relative flex items-center justify-center w-4 h-4">
            {!isMuted ? (
              <span className="flex items-end justify-center gap-0.5 h-3.5 w-3.5">
                <span className="w-0.5 h-3 bg-[#315BFF] animate-pulse" style={{ animationDuration: '650ms' }} />
                <span className="w-0.5 h-2 bg-[#315BFF] animate-pulse" style={{ animationDuration: '450ms' }} />
                <span className="w-0.5 h-3.5 bg-[#315BFF] animate-pulse" style={{ animationDuration: '800ms' }} />
              </span>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#171717]/40" />
            )}
          </span>

          {/* Sound State Typography */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="text-[#315BFF] font-bold">N/</span>
            <span>{!isMuted ? 'SOUND: ON' : 'SOUND: OFF'}</span>
          </div>
        </button>
      </aside>
    );
  }

  // Inline / Minimal variant (used in footer or utility areas)
  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border select-none focus-visible:outline-hidden ${
        !isMuted
          ? 'bg-[#171717] text-[#F4F1E9] border-[#315BFF]/40 hover:border-[#315BFF]'
          : 'bg-[#F4F1E9]/80 hover:bg-[#EAE6DC] text-[#171717]/70 border-[#171717]/15'
      } ${className}`}
      aria-label={!isMuted ? 'Mute website audio' : 'Unmute website audio'}
      title={!isMuted ? 'Sound is ON · Click to mute' : 'Sound is OFF · Click to enable'}
    >
      <span className="relative flex items-center justify-center">
        {!isMuted ? (
          <Volume2 className="w-3.5 h-3.5 text-[#315BFF]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#171717]/40" />
        )}
      </span>
      <span className="text-[11px] whitespace-nowrap">
        {!isMuted ? 'Sound: On' : 'Sound: Off'}
      </span>
    </button>
  );
};
