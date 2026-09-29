import React from 'react';

export const JURAA_LOGO_PATH = '/assets/creative/juraa/logo.png';

export type JuraaLogoVariant =
  | 'primary'
  | 'secondary'
  | 'horizontal'
  | 'reversed'
  | 'symbol'
  | 'icon';

interface JuraaLogoProps {
  variant?: JuraaLogoVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  className?: string;
  theme?: 'teal' | 'white' | 'dark' | 'mint' | 'transparent';
  bordered?: boolean;
}

/**
 * Authoritative JURAA Brand Logo Component
 * 
 * Uses the genuine original logo asset (/assets/creative/juraa/logo.png).
 * Preserves original proportions, colors, symbol, and authentic bilingual lettering.
 * Never reconstructs the logo via SVG approximations or HTML typography.
 */
export const JuraaLogo: React.FC<JuraaLogoProps> = ({
  size = 'md',
  className = '',
  theme = 'transparent',
  bordered = false,
}) => {
  const sizeClasses = {
    xs: 'h-8 max-w-[80px]',
    sm: 'h-12 max-w-[120px]',
    md: 'h-16 max-w-[160px]',
    lg: 'h-24 max-w-[220px]',
    xl: 'h-32 max-w-[280px]',
    '2xl': 'h-40 max-w-[340px]',
    hero: 'h-48 md:h-56 max-w-[380px]',
  }[size];

  const themeClasses = {
    teal: 'bg-[#0F6663]/10',
    white: 'bg-white shadow-sm',
    dark: 'bg-[#173635]',
    mint: 'bg-[#DCECEA]',
    transparent: 'bg-transparent',
  }[theme];

  return (
    <div
      className={`inline-flex items-center justify-center p-2 ${themeClasses} ${
        bordered ? 'border border-[#0F6663]/20 rounded-xl' : ''
      } ${className}`}
    >
      <img
        src={JURAA_LOGO_PATH}
        alt="JURAA Authoritative Brand Mark"
        className={`w-auto ${sizeClasses} object-contain`}
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
};
