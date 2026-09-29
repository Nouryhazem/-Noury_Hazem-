import React from 'react';

interface RelaxLogoProps {
  variant?: 'monogram' | 'vertical' | 'horizontal' | 'bilingual' | 'ivory';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string; // default Aged Brass #B8924E or Warm Ivory #F3E9DA
  className?: string;
}

export const RelaxLogo: React.FC<RelaxLogoProps> = ({
  variant = 'vertical',
  size = 'md',
  color = '#B8924E',
  className = '',
}) => {
  // Dimensions
  const sizes = {
    sm: { width: 36, height: 42, iconSize: 22, textScale: 'text-lg', subScale: 'text-[9px]' },
    md: { width: 56, height: 68, iconSize: 32, textScale: 'text-2xl', subScale: 'text-[11px]' },
    lg: { width: 84, height: 104, iconSize: 48, textScale: 'text-4xl', subScale: 'text-xs' },
    xl: { width: 120, height: 150, iconSize: 64, textScale: 'text-6xl', subScale: 'text-sm' },
  };

  const currentSize = sizes[size];
  const activeColor = variant === 'ivory' ? '#F3E9DA' : color;

  // The authentic geometric octagonal monogram
  const renderMonogram = (w: number, h: number) => (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300"
    >
      {/* Beveled Octagon Outer Frame */}
      <polygon
        points="12,2 28,2 38,12 38,38 28,48 12,48 2,38 2,12"
        stroke={activeColor}
        strokeWidth="2.2"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Left Vertical Pillar */}
      <line
        x1="16.5"
        y1="14"
        x2="16.5"
        y2="36"
        stroke={activeColor}
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      {/* Right Vertical Pillar */}
      <line
        x1="23.5"
        y1="14"
        x2="23.5"
        y2="36"
        stroke={activeColor}
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderMonogram(currentSize.iconSize * 1.1, currentSize.iconSize * 1.35)}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {renderMonogram(currentSize.iconSize * 0.9, currentSize.iconSize * 1.15)}
        <div className="flex flex-col">
          <span
            style={{ fontFamily: '"Pinyon Script", cursive', color: activeColor }}
            className={`${currentSize.textScale} leading-none tracking-normal`}
          >
            Relax
          </span>
          <span
            style={{ fontFamily: '"Cormorant Garamond", serif', color: activeColor }}
            className={`${currentSize.subScale} tracking-[0.25em] uppercase font-light leading-tight pl-0.5`}
          >
            CAFÉ
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'bilingual') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {renderMonogram(currentSize.iconSize, currentSize.iconSize * 1.25)}
        <div
          style={{ fontFamily: '"Pinyon Script", cursive', color: activeColor }}
          className={`${currentSize.textScale} leading-tight`}
        >
          Relax
        </div>
        <div className="flex items-center justify-center gap-3 pt-1 border-t border-inherit/20 w-full">
          <span
            style={{ fontFamily: '"El Messiri", sans-serif', color: activeColor }}
            className="text-sm font-semibold tracking-wide"
            dir="rtl"
          >
            فوق الزحمة
          </span>
          <span className="text-[10px] opacity-40 font-mono">·</span>
          <span
            style={{ fontFamily: '"Cormorant Garamond", serif', color: activeColor }}
            className="text-[11px] uppercase tracking-[0.2em] font-light"
          >
            Level Seven
          </span>
        </div>
      </div>
    );
  }

  // Default: Primary Vertical Logo (Monogram + Relax + CAFÉ)
  return (
    <div className={`flex flex-col items-center text-center gap-1.5 ${className}`}>
      {renderMonogram(currentSize.iconSize, currentSize.iconSize * 1.25)}
      <div
        style={{ fontFamily: '"Pinyon Script", cursive', color: activeColor }}
        className={`${currentSize.textScale} leading-[0.95] tracking-normal pt-1`}
      >
        Relax
      </div>
      <div
        style={{ fontFamily: '"Cormorant Garamond", serif', color: activeColor }}
        className={`${currentSize.subScale} tracking-[0.3em] uppercase font-light leading-none`}
      >
        CAFÉ
      </div>
    </div>
  );
};
