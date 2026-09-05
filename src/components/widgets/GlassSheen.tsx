import React from 'react';

interface GlassSheenProps {
  className?: string;
}

export const GlassSheen: React.FC<GlassSheenProps> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen bg-white/[0.04] dark:bg-white/[0.03] ${className}`}
    />
  );
};

export default GlassSheen;
