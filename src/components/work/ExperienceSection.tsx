'use client';

import React from 'react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { workExperienceContent } from '@/content/loaders';

export default function ExperienceSection() {
  return (
    <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(211,23,10,.18),transparent_42%)]"
        />
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
            experience
          </h2>
          <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200/80 font-semibold">
            Timeline
          </span>
        </div>

        <div className="space-y-4">
          {workExperienceContent.map((exp) => (
            <article
              key={exp.id}
              className="work-card p-5 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.07),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(211,23,10,.16),transparent_42%)]"
              />
              <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/50">
                <span className="text-rose-300 font-bold">{exp.period}</span>
                <span>{exp.location}</span>
              </div>

              <h3 className="font-mono text-[0.94rem] sm:text-[1rem] font-bold text-white mb-0.5 tracking-tight">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-white/80 mb-3 font-semibold">
                {exp.company}
              </p>

              <ul className="space-y-1.5 mb-3.5">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="font-mono text-[0.74rem] sm:text-xs text-white/70 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-rose-300 mt-0.5 select-none font-bold">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/8">
                {exp.techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white/80 border border-white/12"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
