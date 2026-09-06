'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { curatedProjectsContent } from '@/content/loaders';

export default function ProjectsSection() {
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');

  const displayedProjects = useMemo(() => {
    if (viewMode === 'featured') {
      return curatedProjectsContent.filter((p) => p.featured);
    }
    return curatedProjectsContent;
  }, [viewMode]);

  return (
    <section className="min-w-0" aria-label="Projects Showcase">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe flex flex-col justify-between h-full">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />

        <div>
          {/* Header with Interactive Tabs (Matching ExperienceSection) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10 w-fit mb-3">
                <button
                  type="button"
                  onClick={() => setViewMode('featured')}
                  className={`relative px-3.5 py-1 rounded-full font-mono text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'featured'
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {viewMode === 'featured' && (
                    <motion.div
                      layoutId="proj-active-tab-pill"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Sparkles className="w-3.5 h-3.5 relative z-10 text-amber-300" />
                  <span className="relative z-10">Featured (5)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className={`relative px-3.5 py-1 rounded-full font-mono text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'all'
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {viewMode === 'all' && (
                    <motion.div
                      layoutId="proj-active-tab-pill"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <FolderGit2 className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">All Systems (8)</span>
                </button>
              </div>

              <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                projects
              </h2>
            </div>

            <span className="font-mono text-[0.64rem] sm:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
              Open Source &amp; Systems
            </span>
          </div>

          {/* Compact Project Telemetry Rows */}
          <motion.div layout className="space-y-3">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="group work-card p-4 sm:p-4.5 transition-all hover:bg-black/60"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      {/* Serial Number */}
                      <span className="font-doto text-[1.05rem] sm:text-[1.15rem] font-black leading-none text-white/35 shrink-0 select-none pt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Title, 1-Line Description & Badges */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="min-w-0 break-words font-doto text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <p className="font-mono text-xs sm:text-[0.82rem] text-white/75 leading-relaxed line-clamp-2 mb-2">
                          {project.summary}
                        </p>

                        {/* Top Tech Badges */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tech.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white/75 border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-[10px] font-mono text-white/40">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Direct External Action Icons */}
                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 pt-0.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live application`}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-sm"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* GitHub Full Archive Footer Link */}
        <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between font-mono text-[0.66rem] sm:text-xs text-white/50">
          <span>Complete archives on GitHub</span>
          <a
            href="https://github.com/anmolsharma152?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="group-hover:underline">github.com/anmolsharma152</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
