'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { workExperienceContent, educationContent } from '@/content/loaders';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section className="min-w-0 lg:sticky lg:top-24 lg:self-start" aria-label="Experience and Education">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />

        {/* Header with Interactive Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10 w-fit mb-3">
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`relative px-3.5 py-1 rounded-full font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'experience'
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeTab === 'experience' && (
                  <motion.div
                    layoutId="exp-edu-active-pill"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Briefcase className="w-3 h-3 relative z-10" />
                <span className="relative z-10">Experience</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`relative px-3.5 py-1 rounded-full font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'education'
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeTab === 'education' && (
                  <motion.div
                    layoutId="exp-edu-active-pill"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <GraduationCap className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Education</span>
              </button>
            </div>

            <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
              {activeTab === 'experience' ? 'experience' : 'education'}
            </h2>
          </div>

          <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-white/50 font-semibold">
            {activeTab === 'experience' ? 'Career Timeline' : 'Academic Credentials'}
          </span>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {workExperienceContent.map((exp) => (
                <article
                  key={exp.id}
                  className="work-card p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                  <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/50">
                    <span className="text-emerald-400 font-bold">{exp.period}</span>
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
                        <span className="text-white/40 mt-0.5 select-none font-bold">▹</span>
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
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {educationContent.map((edu) => (
                <article
                  key={edu.id}
                  className="work-card p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                  <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/50">
                    <span className="text-emerald-400 font-bold">{edu.period}</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/90 font-semibold text-[0.6rem]">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="font-mono text-[0.94rem] sm:text-[1rem] font-bold text-white mb-0.5 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs text-white/80 mb-3 font-semibold">
                    {edu.institution}
                  </p>

                  {edu.description && (
                    <p className="font-mono text-[0.74rem] sm:text-xs text-white/70 leading-relaxed mb-3">
                      {edu.description}
                    </p>
                  )}

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/8">
                      {edu.honors.map((honor) => (
                        <span
                          key={honor}
                          className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300/90 border border-emerald-500/25"
                        >
                          <Award className="w-2.5 h-2.5 text-emerald-400" />
                          <span>{honor}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
