import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface CreativeImageProps {
  src: string;
  candidates?: string[];
  alt: string;
  className?: string;
  aspectRatio?: '1/1' | '4/5' | '16/9' | '9/16' | '4/3' | 'auto';
  caption?: string;
  captionArabic?: string;
  showCaption?: boolean;
  allowZoom?: boolean;
  priority?: boolean;
  badge?: string;
}

export const CreativeImage: React.FC<CreativeImageProps> = ({
  src,
  candidates = [],
  alt,
  className = '',
  aspectRatio = 'auto',
  caption,
  captionArabic,
  showCaption = false,
  allowZoom = true,
  badge,
}) => {
  const allCandidates = [src, ...candidates.filter((c) => c !== src)];
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentSrc = allCandidates[candidateIndex] || src;

  const handleImageError = () => {
    if (candidateIndex < allCandidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleOpenZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasError && allowZoom) {
      soundEngine.playEditorialClick();
      setIsModalOpen(true);
    }
  };

  const handleCloseZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playMechanicalTick(1);
    setIsModalOpen(false);
  };

  const aspectClass =
    aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '4/5'
      ? 'aspect-4/5'
      : aspectRatio === '16/9'
      ? 'aspect-16/9'
      : aspectRatio === '9/16'
      ? 'aspect-9/16'
      : aspectRatio === '4/3'
      ? 'aspect-4/3'
      : '';

  return (
    <>
      <figure className="group relative flex flex-col space-y-2">
        <div
          onClick={handleOpenZoom}
          className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE6DC] border border-[#171717]/10 ${
            allowZoom && !hasError ? 'cursor-zoom-in' : ''
          } ${className}`}
        >
          {!hasError ? (
            <>
              <img
                src={currentSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                onError={handleImageError}
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#EFECE3] animate-pulse">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/40">
                    Loading Artwork...
                  </span>
                </div>
              )}

              {/* Hover Zoom Visual Cue */}
              {allowZoom && isLoaded && (
                <div className="absolute top-3 right-3 p-2 bg-[#171717]/70 text-[#F4F1E9] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              )}

              {badge && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#171717]/85 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider">
                  {badge}
                </div>
              )}
            </>
          ) : (
            /* Editorial Minimalist Placeholder if asset is pending */
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EAE6DC] to-[#D8D4CB] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#171717]/10 flex items-center justify-center text-[#171717]/60">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1 max-w-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#315BFF] block">
                  Original Creative Asset
                </span>
                <p className="text-xs text-[#171717]/80 font-medium line-clamp-2">{alt}</p>
                <code className="text-[9px] font-mono text-[#171717]/50 block break-all pt-1">
                  {src.split('/').pop()}
                </code>
              </div>
            </div>
          )}
        </div>

        {showCaption && (caption || captionArabic) && (
          <figcaption className="pt-2 text-xs font-light text-[#171717]/75 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-[#171717]/10">
            {caption && <span>{caption}</span>}
            {captionArabic && (
              <span className="font-mono text-[11px] text-[#171717]/60" dir="rtl">
                {captionArabic}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          onClick={handleCloseZoom}
          className="fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <button
            onClick={handleCloseZoom}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl max-h-[90vh] flex flex-col items-center justify-center space-y-4"
          >
            <img
              src={currentSrc}
              alt={alt}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
            />
            {caption && (
              <p className="text-sm font-light text-white/90 text-center max-w-2xl px-4">
                {caption} {captionArabic && <span className="opacity-70 mr-2">({captionArabic})</span>}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
