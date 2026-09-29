import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { getAssetUrl } from '../utils/assetUrl';

export const JURAA_ORIGINAL_LOGO = getAssetUrl('/assets/creative/juraa/logo.png');
export const JURAA_HERO_MOCKUP = getAssetUrl('/assets/creative/juraa/juraa_hero.png');

export const JURAA_AUTHENTIC_APP_SCREENS = [
  {
    id: 'j3',
    src: getAssetUrl('/assets/creative/juraa/j3.PNG'),
    title: 'Intelligent Dose Scheduling',
    titleArabic: 'الجدولة الذكية للجرعات',
    description: 'Customizable routine schedules adapting medication timings around meals, prayer times, and personal rhythms.',
    badge: 'SCREEN 01 · SCHEDULING',
  },
  {
    id: 'j4',
    src: getAssetUrl('/assets/creative/juraa/j4.PNG'),
    title: 'Family Care & Shared Monitoring',
    titleArabic: 'رعاية العائلة والمشاركة',
    description: 'Caretaker circle sync allowing elderly parents and family members to share confirmation of completed daily doses.',
    badge: 'SCREEN 02 · FAMILY SYNC',
  },
  {
    id: 'j5',
    src: getAssetUrl('/assets/creative/juraa/j5.PNG'),
    title: 'Health Insights & Habit Progression',
    titleArabic: 'تقارير الصحة ومؤشرات التعافي',
    description: 'Empathetic habit tracking celebrating positive consistency and providing clear, actionable health summaries.',
    badge: 'SCREEN 03 · HEALTH METRICS',
  },
  {
    id: 'j6',
    src: getAssetUrl('/assets/creative/juraa/j6.PNG'),
    title: 'Empathetic Onboarding & Brand System',
    titleArabic: 'واجهة الترحيب والهوية البصرية',
    description: 'Welcoming onboarding narrative establishing trust, reassuring language, and effortless first-time profile setup.',
    badge: 'SCREEN 04 · ONBOARDING',
  },
  {
    id: 'j7',
    src: getAssetUrl('/assets/creative/juraa/j7.PNG'),
    title: 'Caregiver Verification & Sync Confirmation',
    titleArabic: 'تأكيد دائرة الرعاية ومزامنة الجرعات',
    description: 'Confirmation state showing synchronous caretaker acknowledgment when family members complete their schedule.',
    badge: 'SCREEN 05 · CARE VERIFICATION',
  },
  {
    id: 'j8',
    src: getAssetUrl('/assets/creative/juraa/j8.PNG'),
    title: 'Full Product Design System & Brand Asset Suite',
    titleArabic: 'منظومة التصميم المتكاملة وهوية التطبيق',
    description: 'Comprehensive mobile interface composition highlighting typography balance, component states, and empathetic art direction.',
    badge: 'SCREEN 06 · DESIGN SYSTEM',
  },
];

interface JuraaLogoImageProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  theme?: 'light' | 'dark' | 'glass' | 'transparent';
  bordered?: boolean;
}

export const JuraaLogoImage: React.FC<JuraaLogoImageProps> = ({
  className = '',
  size = 'lg',
  theme = 'transparent',
  bordered = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Preserve original 1:1 aspect ratio with precise bounding sizes
  const sizeClasses = {
    xs: 'h-8 max-w-[80px]',
    sm: 'h-12 max-w-[120px]',
    md: 'h-16 max-w-[160px]',
    lg: 'h-24 max-w-[220px]',
    xl: 'h-32 max-w-[280px]',
    hero: 'h-40 sm:h-48 md:h-56 max-w-[360px]',
  }[size];

  const themeClasses = {
    light: 'bg-white shadow-sm',
    dark: 'bg-[#173635] shadow-md',
    glass: 'bg-white/80 backdrop-blur-sm shadow-sm',
    transparent: 'bg-transparent',
  }[theme];

  return (
    <div
      className={`relative inline-flex items-center justify-center p-3 ${themeClasses} ${
        bordered ? 'border border-[#0F6663]/20 rounded-xl' : ''
      } ${className}`}
    >
      {!hasError ? (
        <img
          src={JURAA_ORIGINAL_LOGO}
          alt="JURAA Official Brand Logo"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-auto ${sizeClasses} object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ imageRendering: 'auto' }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center border border-[#0F6663]/30 bg-white/60">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0F6663] font-semibold">
            JURAA / جُرعة
          </span>
          <span className="text-[10px] font-mono text-[#173635]/60 mt-1">
            Authoritative Brand Logo
          </span>
        </div>
      )}
    </div>
  );
};

interface JuraaMockupImageProps {
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  showOverlay?: boolean;
  allowZoom?: boolean;
}

export const JuraaMockupImage: React.FC<JuraaMockupImageProps> = ({
  className = '',
  aspectRatio = '16/9',
  showOverlay = true,
  allowZoom = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-16/9'
      : aspectRatio === '4/3'
      ? 'aspect-4/3'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : '';

  const handleOpen = () => {
    if (allowZoom) {
      soundEngine.playEditorialClick();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE6DC] border border-[#0F6663]/20 group ${
          allowZoom ? 'cursor-zoom-in' : ''
        } ${className}`}
      >
        <img
          src={JURAA_HERO_MOCKUP}
          alt="JURAA Brand Identity & Application Ecosystem"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F5F3EF]">
            <JuraaLogoImage size="sm" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F6663] mt-3">
              Loading JURAA Artwork...
            </span>
          </div>
        )}

        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#173635]/85 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#55B6AE] bg-[#173635]/90 px-2 py-0.5 border border-[#55B6AE]/40 inline-block mb-1">
                  JURAA · THE SHAPE OF CARE
                </span>
                <p className="text-sm sm:text-base font-light text-white/95">
                  Authentic Application Ecosystem & Mobile Product
                </p>
              </div>
              <span className="text-xs font-mono text-[#DCECEA]" dir="rtl">
                جرعتك في وقتها
              </span>
            </div>
          </div>
        )}

        {allowZoom && (
          <div className="absolute top-3 right-3 p-2 bg-[#173635]/80 text-white/90 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-[#173635]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 border border-white/20 rounded-full"
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={JURAA_HERO_MOCKUP}
            alt="JURAA Mockup Expanded"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export const JuraaAppScreens: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedScreen, setSelectedScreen] = useState<(typeof JURAA_AUTHENTIC_APP_SCREENS)[0] | null>(null);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {JURAA_AUTHENTIC_APP_SCREENS.map((screen) => (
          <div
            key={screen.id}
            onClick={() => {
              soundEngine.playEditorialClick();
              setSelectedScreen(screen);
            }}
            className="group cursor-pointer bg-white border border-[#0F6663]/20 overflow-hidden shadow-sm hover:border-[#0F6663] hover:shadow-xl transition-all flex flex-col"
          >
            {/* Screen Header Badge */}
            <div className="px-4 py-2.5 bg-[#F5F3EF] border-b border-[#0F6663]/15 flex items-center justify-between text-xs font-mono">
              <span className="text-[#0F6663] font-semibold">{screen.badge}</span>
              <span className="text-[#173635]/60" dir="rtl">{screen.titleArabic}</span>
            </div>

            {/* Screen Image Container with Object-Contain to avoid clipping */}
            <div className="relative p-4 sm:p-6 bg-gradient-to-b from-[#F5F3EF]/60 to-white flex items-center justify-center overflow-hidden aspect-[4/5] sm:aspect-square">
              <img
                src={screen.src}
                alt={screen.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
              />
              <div className="absolute bottom-3 right-3 p-1.5 bg-[#173635]/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Screen Caption */}
            <div className="p-5 border-t border-[#0F6663]/10 flex-1 flex flex-col justify-between space-y-2 bg-white">
              <div>
                <h4 className="text-base font-semibold text-[#173635] tracking-tight">
                  {screen.title}
                </h4>
                <p className="text-xs text-[#173635]/70 leading-relaxed font-light mt-1.5">
                  {screen.description}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-[#0F6663] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55B6AE]" />
                <span>Authentic Application UI Flow</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Zoom Modal */}
      {selectedScreen && (
        <div
          onClick={() => setSelectedScreen(null)}
          className="fixed inset-0 z-50 bg-[#173635]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setSelectedScreen(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 border border-white/20 rounded-full"
            aria-label="Close screen view"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-2xl bg-white border border-[#0F6663]/30 p-4 sm:p-6 shadow-2xl flex flex-col items-center space-y-4 cursor-default"
          >
            <div className="w-full flex items-center justify-between border-b border-[#0F6663]/15 pb-2 font-mono text-xs text-[#0F6663]">
              <span className="font-semibold">{selectedScreen.badge}</span>
              <span className="text-sm font-bold" dir="rtl">{selectedScreen.titleArabic}</span>
            </div>
            <img
              src={selectedScreen.src}
              alt={selectedScreen.title}
              className="max-h-[65vh] w-auto object-contain drop-shadow-xl"
            />
            <p className="text-xs text-[#173635]/80 text-center max-w-lg font-light">
              {selectedScreen.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
