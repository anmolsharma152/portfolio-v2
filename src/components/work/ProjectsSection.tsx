'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { curatedProjectsContent } from '@/content/loaders';

export default function ProjectsSection() {
  const featuredProjects = curatedProjectsContent.filter((p) => p.featured);

  return (
    <section className="min-w-0" aria-label="Projects Showcase">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe flex flex-col justify-between h-full">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
        />

        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-mono text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] text-white/90 font-semibold">
                  Featured Systems ({featuredProjects.length})
                </span>
              </div>

              <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                projects
              </h2>
            </div>

            <span className="font-mono text-[0.64rem] sm:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
              Flagship Architectures
            </span>
          </div>

          {/* Compact Project Telemetry Rows */}
          <div className="space-y-3">
            {featuredProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="group work-card p-4 sm:p-4.5 transition-all"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(255,255,255,.03),transparent_42%)]"
                  />

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
          </div>
        </div>

        {/* GitHub Full Archive Footer Link */}
        <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between font-mono text-[0.66rem] sm:text-xs text-white/50">
          <span>42+ complete repositories on GitHub</span>
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
