import React from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingRowProps {
  label: string;
  labelClassName?: string;
  title: string;
  titleClassName?: string;
}

export default function SectionHeadingRow({
  label,
  labelClassName,
  title,
  titleClassName,
}: SectionHeadingRowProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2
        className={cn(
          'font-doto text-[1.9rem] sm:text-[3.2rem] font-black uppercase leading-none text-white',
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'font-mono text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#D3170A] font-semibold',
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
}
