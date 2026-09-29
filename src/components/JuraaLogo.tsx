import React from 'react';

export type JuraaLogoVariant =
  | 'primary'      // Symbol + Arabic + English + Tagline (Vertical)
  | 'secondary'    // Symbol + Arabic + English (Compact)
  | 'horizontal'   // Symbol + Lockup side-by-side
  | 'reversed'     // Light version on dark teal/ink ground
  | 'symbol'       // Standalone interlocking heart-and-capsule mark
  | 'icon';        // App Icon inside squircle

interface JuraaLogoProps {
  variant?: JuraaLogoVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  theme?: 'teal' | 'white' | 'dark' | 'mint';
}

export const JuraaLogo: React.FC<JuraaLogoProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  theme = 'teal',
}) => {
  // Color specifications from official JURAA identity
  const colors = {
    deepTeal: '#0F6663',
    aquaTeal: '#55B6AE',
    softMint: '#DCECEA',
    darkInk: '#173635',
    white: '#FFFFFF',
    coral: '#E88B6B',
  };

  const isReversed = variant === 'reversed' || theme === 'white';
  const primaryFill = isReversed ? colors.white : colors.deepTeal;
  const secondaryStroke = isReversed ? colors.aquaTeal : colors.aquaTeal;
  const darkText = isReversed ? colors.white : colors.darkInk;
  const taglineText = isReversed ? colors.aquaTeal : colors.deepTeal;

  // Standalone Symbol SVG Mark (The Heart and Capsule)
  const renderSymbol = (dim: number = 72) => (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300"
    >
      <g>
        {/* Left angled capsule half (Deep Teal solid fill) */}
        <path
          d="M34.5 25C43 16.5 57 16.5 65.5 25L84.5 44C88 47.5 88 53 84.5 56.5L62 79C53.5 87.5 39.5 87.5 31 79L23 71C14.5 62.5 14.5 48.5 23 40L34.5 25Z"
          fill={primaryFill}
        />
        {/* White pill division stripe */}
        <path
          d="M48 29.5L69 50.5"
          stroke={isReversed ? colors.darkInk : colors.white}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Right angled capsule intersecting loop (Aqua/Teal contour & fill) */}
        <path
          d="M85.5 25C77 16.5 63 16.5 54.5 25L42 37.5C38.5 41 38.5 46.5 42 50L64.5 72.5C73 81 87 81 95.5 72.5L97 71C105.5 62.5 105.5 48.5 97 40L85.5 25Z"
          stroke={primaryFill}
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Capsule inner core pill connection */}
        <path
          d="M58 92C59 93.5 60.5 94.5 62 95C64 96 66.5 95.5 68 94C75 87 82 80 89 73C93 69 93 63 89 59L77 47"
          stroke={secondaryStroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Central interlocking capsule joint */}
        <circle cx="60" cy="58" r="5" fill={isReversed ? colors.aquaTeal : colors.deepTeal} />
      </g>
    </svg>
  );

  // App Icon Squircle Variant
  if (variant === 'icon') {
    const iconDim = size === 'sm' ? 44 : size === 'lg' ? 96 : size === 'xl' ? 128 : 64;
    return (
      <div
        style={{ width: iconDim, height: iconDim }}
        className={`rounded-2xl sm:rounded-3xl flex items-center justify-center p-2.5 shadow-lg border border-white/20 bg-gradient-to-br from-[#0F6663] to-[#173635] ${className}`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White capsule base */}
          <path
            d="M34.5 25C43 16.5 57 16.5 65.5 25L84.5 44C88 47.5 88 53 84.5 56.5L62 79C53.5 87.5 39.5 87.5 31 79L23 71C14.5 62.5 14.5 48.5 23 40L34.5 25Z"
            fill="#FFFFFF"
          />
          <path
            d="M48 29.5L69 50.5"
            stroke="#0F6663"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M85.5 25C77 16.5 63 16.5 54.5 25L42 37.5C38.5 41 38.5 46.5 42 50L64.5 72.5C73 81 87 81 95.5 72.5L97 71C105.5 62.5 105.5 48.5 97 40L85.5 25Z"
            stroke="#55B6AE"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="60" cy="58" r="5" fill="#55B6AE" />
        </svg>
      </div>
    );
  }

  // Standalone Symbol Mark
  if (variant === 'symbol') {
    const dim = size === 'xs' ? 24 : size === 'sm' ? 36 : size === 'lg' ? 84 : size === 'xl' ? 120 : size === '2xl' ? 160 : 54;
    return <div className={`inline-flex items-center justify-center ${className}`}>{renderSymbol(dim)}</div>;
  }

  // Horizontal Configuration
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {renderSymbol(size === 'sm' ? 38 : size === 'lg' ? 64 : 48)}
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-2">
            <span
              style={{ fontFamily: '"Cairo", sans-serif', color: primaryFill }}
              className="text-2xl sm:text-3xl font-bold tracking-tight leading-none"
              dir="rtl"
            >
              جُرعة
            </span>
            <span
              style={{ fontFamily: '"Cairo", sans-serif', color: darkText }}
              className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase leading-none"
            >
              J U R A A
            </span>
          </div>
          <span
            style={{ fontFamily: '"Cairo", sans-serif', color: taglineText }}
            className="text-[10px] sm:text-xs font-medium tracking-wide mt-1"
            dir="rtl"
          >
            جرعتك في وقتها
          </span>
        </div>
      </div>
    );
  }

  // Primary Vertical Lockup & Secondary Compact
  const symbolDim = size === 'sm' ? 44 : size === 'lg' ? 88 : size === 'xl' ? 116 : size === '2xl' ? 150 : 64;
  const arabicTextSize =
    size === 'sm'
      ? 'text-3xl'
      : size === 'lg'
      ? 'text-5xl sm:text-6xl'
      : size === 'xl'
      ? 'text-6xl sm:text-7xl'
      : size === '2xl'
      ? 'text-7xl sm:text-8xl'
      : 'text-4xl sm:text-5xl';

  const englishTracking =
    size === 'sm' ? 'tracking-[0.2em] text-[10px]' : size === 'lg' ? 'tracking-[0.32em] text-sm' : 'tracking-[0.28em] text-xs';

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {renderSymbol(symbolDim)}

      {/* Arabic Wordmark (جُرعة) with approved Cairo font & natural damma mark */}
      <div
        style={{ fontFamily: '"Cairo", sans-serif', color: primaryFill }}
        className={`${arabicTextSize} font-bold tracking-tight mt-3 leading-none`}
        dir="rtl"
      >
        جُرعة
      </div>

      {/* English Lettering (J U R A A) */}
      <div
        style={{ fontFamily: '"Cairo", sans-serif', color: darkText }}
        className={`${englishTracking} font-bold uppercase mt-2 leading-none`}
      >
        J U R A A
      </div>

      {/* Approved Brand Tagline (جرعتك في وقتها) */}
      {variant === 'primary' && (
        <div
          style={{ fontFamily: '"Cairo", sans-serif', color: taglineText }}
          className="text-xs sm:text-sm font-semibold tracking-wide mt-2 leading-tight"
          dir="rtl"
        >
          جرعتك في وقتها
        </div>
      )}
    </div>
  );
};
