import React, { useState } from 'react';
import { JuraaLogo } from './JuraaLogo';
import { Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface JuraaMockupImageProps {
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  showOverlay?: boolean;
  priority?: boolean;
}

const MOCKUP_CANDIDATES = [
  '/src/assets/images/juraa_mockup.png',
  '/src/assets/images/0DBB20B2-8170-4520-BED2-4F6343639EDB.png',
  '/src/assets/images/6566488C-687E-41B0-B504-4BD967C33ED7.png',
];

const LOGO_CANDIDATES = [
  '/src/assets/creative/juraa/logo.png',
  '/src/assets/images/6566488C-687E-41B0-B504-4BD967C33ED7.png',
  '/src/assets/images/0DBB20B2-8170-4520-BED2-4F6343639EDB.png',
];

export const JuraaMockupImage: React.FC<JuraaMockupImageProps> = ({
  className = '',
  aspectRatio = '16/9',
  showOverlay = true,
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentSrc = MOCKUP_CANDIDATES[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex < MOCKUP_CANDIDATES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-16/9'
      : aspectRatio === '4/3'
      ? 'aspect-4/3'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : '';

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE6DC] border border-[#0F6663]/20 group ${className}`}
    >
      {!hasError ? (
        <>
          <img
            src={currentSrc}
            alt="JURAA Brand Identity & Digital/Physical Mockup"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F5F3EF]">
              <JuraaLogo variant="symbol" size="md" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F6663] mt-3">
                Loading JURAA Mockup...
              </span>
            </div>
          )}
        </>
      ) : (
        /* Fallback Visual Identity Container */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F5F3EF] via-[#EAE6DC] to-[#DCECEA]/60 space-y-4">
          <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#0F6663]/20 rounded-2xl shadow-sm">
            <JuraaLogo variant="primary" size="lg" />
          </div>

          <div className="space-y-1.5 max-w-sm">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0F6663]/10 text-[#0F6663] text-[11px] font-mono uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Authentic Client Asset Slot</span>
            </div>
            <p className="text-xs text-[#173635]/80 font-light">
              Place your mockup in <code className="px-1 py-0.5 bg-white/70 font-mono text-[10px]">src/assets/images/juraa_mockup.png</code>
            </p>
          </div>
        </div>
      )}

      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#173635]/80 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#55B6AE] bg-[#173635]/90 px-2 py-0.5 border border-[#55B6AE]/40 inline-block mb-1">
                JURAA · BRAND SYSTEM
              </span>
              <p className="text-sm sm:text-base font-light text-white/95">
                The Shape of Care · Identity & Applications
              </p>
            </div>
            <span className="text-xs font-mono text-[#DCECEA]" dir="rtl">
              جرعتك في وقتها
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

interface JuraaLogoImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'symbol' | 'horizontal';
}

export const JuraaLogoImage: React.FC<JuraaLogoImageProps> = ({
  className = '',
  size = 'lg',
  variant = 'primary',
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentSrc = LOGO_CANDIDATES[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex < LOGO_CANDIDATES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const dimClass =
    size === 'sm'
      ? 'max-h-12 max-w-[120px]'
      : size === 'md'
      ? 'max-h-20 max-w-[180px]'
      : size === 'lg'
      ? 'max-h-28 max-w-[240px]'
      : 'max-h-36 max-w-[300px]';

  if (hasError) {
    return <JuraaLogo variant={variant} size={size} className={className} />;
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={currentSrc}
        alt="JURAA Official Brand Logo"
        referrerPolicy="no-referrer"
        onError={handleImageError}
        onLoad={() => setIsLoaded(true)}
        className={`object-contain ${dimClass} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <JuraaLogo variant={variant} size={size} />
        </div>
      )}
    </div>
  );
};
