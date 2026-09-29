import React from 'react';

interface MonogramNProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  interactive?: boolean;
  slashColor?: string;
  inkColor?: string;
  onClick?: () => void;
}

export const MonogramN: React.FC<MonogramNProps> = ({
  className = '',
  size = 'md',
  interactive = true,
  slashColor = '#315BFF',
  inkColor = '#171717',
  onClick,
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24',
    giant: 'w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center relative select-none ${sizeMap[size]} ${
        interactive ? 'cursor-pointer group' : ''
      } ${className}`}
      role={onClick ? 'button' : 'img'}
      aria-label="Nouri Hazem N/ Monogram"
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
      >
        {/* Background framing container if needed */}
        <rect width="100" height="100" rx="20" fill="transparent" />

        {/* The Bold Letter N */}
        <path
          d="M26 74V26H35L61 59.5V26H70V74H61L35 40.5V74H26Z"
          fill={inkColor}
          className="transition-colors duration-200"
        />

        {/* The Signature Electric Cobalt Slash / */}
        <line
          x1="68"
          y1="76"
          x2="78"
          y2="24"
          stroke={slashColor}
          strokeWidth="7"
          strokeLinecap="round"
          className="transition-transform duration-300 origin-center group-hover:rotate-6 group-hover:stroke-[#315BFF]"
        />

        {/* Subtle dot at base */}
        <circle
          cx="86"
          cy="74"
          r="3"
          fill={slashColor}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </svg>
    </div>
  );
};
