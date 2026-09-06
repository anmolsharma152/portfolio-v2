'use client';

import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { curatedProjectsContent } from '@/content/loaders';

export default function ProjectsSection() {
  return (
    <section className="min-w-0" aria-label="Projects Showcase">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.03),transparent_42%)]"
        />
        <div className="flex items-end justify-between gap-3 mb-6">
          <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
            projects
          </h2>
          <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Build Log ({curatedProjectsContent.length})
          </span>
        </div>

        <div className="space-y-4">
          {curatedProjectsContent.map((project, idx) => (
            <article
              key={project.id}
              className="group work-card p-5 sm:p-6 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center gap-4"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.07),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(255,255,255,.02),transparent_42%)]"
              />
              {/* Left Serial Number */}
              <div className="hidden sm:block font-doto text-[1.45rem] font-black leading-none text-white/40 pr-2 select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Middle Content */}
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="sm:hidden font-doto text-[1.2rem] font-black leading-none text-white/40 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="min-w-0 break-words font-doto text-[1.05rem] sm:text-[1.2rem] font-black uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="font-mono text-[0.74rem] sm:text-[0.8rem] text-white/70 leading-relaxed mb-2.5">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white/75 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Action Icons */}
              <div className="flex items-center gap-2 pt-3 sm:pt-0 sm:self-center shrink-0 justify-end text-white/80">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="p-2 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="p-2 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
