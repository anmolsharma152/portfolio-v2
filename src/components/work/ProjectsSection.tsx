'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles, Star, GitBranch, Layers } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import GlassSheen from '@/components/widgets/GlassSheen';
import { curatedProjectsContent } from '@/content/loaders';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

const EXCLUDED_REPOS = [
  'anmolsharma152',
  'nextjs-portfolio',
  'anmolsharma152.github.io',
  'portfolio-v2',
];
const VERIFIED_LIVE_PROJECTS: Record<string, string> = {
  CodexEngine: 'https://codex-engine.vercel.app',
  codexengine: 'https://codex-engine.vercel.app',
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'flagships' | 'all'>('flagships');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  const featuredProjects = curatedProjectsContent.filter((p) => p.featured);

  useEffect(() => {
    let isMounted = true;
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/users/anmolsharma152/repos?sort=updated&per_page=30'
        );
        if (!res.ok) throw new Error('Failed to fetch repos');
        const data: GitHubRepo[] = await res.json();
        if (isMounted) {
          const filtered = data
            .filter((r) => !r.fork && !EXCLUDED_REPOS.includes(r.name.toLowerCase()))
            .slice(0, 10);
          setRepos(filtered);
        }
      } catch {
        // Graceful fallback to curated projects
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="min-w-0" aria-label="Projects Showcase">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe flex flex-col justify-between h-full">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />

        {/* 28px Mesh Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
        />

        <div>
          {/* Header with Interactive Tabs matching ExperienceSection */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10 w-fit mb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('flagships')}
                  className={`relative px-3.5 py-1 rounded-full font-mono text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'flagships'
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {activeTab === 'flagships' && (
                    <motion.div
                      layoutId="projects-active-pill"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Sparkles className="w-3.5 h-3.5 relative z-10 text-amber-300" />
                  <span className="relative z-10">Flagships ({featuredProjects.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`relative px-3.5 py-1 rounded-full font-mono text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'all'
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {activeTab === 'all' && (
                    <motion.div
                      layoutId="projects-active-pill"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Layers className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">All Systems</span>
                </button>
              </div>

              <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                {activeTab === 'flagships' ? 'projects' : 'repositories'}
              </h2>
            </div>

            <span className="font-mono text-[0.64rem] sm:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
              {activeTab === 'flagships' ? 'Flagship Architectures' : 'Open Source Ecosystem'}
            </span>
          </div>

          {/* Project Telemetry Rows */}
          <AnimatePresence mode="wait">
            {activeTab === 'flagships' ? (
              <motion.div
                key="flagships"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {featuredProjects.map((project, idx) => (
                  <motion.article
                    layout
                    key={project.id}
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
                            {project.subtitle && (
                              <span className="font-mono text-[10px] text-emerald-400 font-medium tracking-wide">
                                {`// ${project.subtitle}`}
                              </span>
                            )}
                          </div>

                          <p className="font-mono text-xs sm:text-[0.82rem] text-white/75 leading-relaxed line-clamp-2 mb-2">
                            {project.summary}
                          </p>

                          {/* Top Tech Badges */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white/75 border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
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
              </motion.div>
            ) : (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {repos.length > 0
                  ? repos.map((repo, idx) => {
                      const verifiedLive = VERIFIED_LIVE_PROJECTS[repo.name] || null;
                      return (
                        <motion.article
                          layout
                          key={repo.id}
                          className="group work-card p-3.5 sm:p-4 transition-all"
                        >
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(255,255,255,.03),transparent_42%)]"
                          />

                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="font-doto text-[0.95rem] sm:text-[1.05rem] font-black leading-none text-white/35 shrink-0 select-none pt-0.5">
                                {String(idx + 1).padStart(2, '0')}
                              </span>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <h3 className="min-w-0 break-words font-doto text-sm sm:text-[0.95rem] font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                                    {repo.name.replace(/[-_]/g, ' ')}
                                  </h3>
                                </div>

                                <p className="font-mono text-xs text-white/70 leading-relaxed line-clamp-2 mb-2">
                                  {repo.description ||
                                    'System architecture and codebase available on GitHub.'}
                                </p>

                                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-white/50">
                                  {repo.language && (
                                    <span className="text-white/80 font-medium">
                                      {repo.language}
                                    </span>
                                  )}
                                  <span className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-amber-300" />
                                    {repo.stargazers_count}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <GitBranch className="w-3 h-3 text-white/40" />
                                    {repo.forks_count}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                              {verifiedLive && (
                                <a
                                  href={verifiedLive}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-sm"
                                >
                                  <span>Demo</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </a>
                              )}
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })
                  : curatedProjectsContent.map((project, idx) => (
                      <motion.article
                        layout
                        key={project.id}
                        className="group work-card p-3.5 sm:p-4 transition-all"
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 min-w-0">
                            <span className="font-doto text-[0.95rem] font-black text-white/35 shrink-0 pt-0.5">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <div className="min-w-0">
                              <h3 className="font-doto text-sm font-bold uppercase text-white mb-1">
                                {project.title}
                              </h3>
                              <p className="font-mono text-xs text-white/70 line-clamp-2 mb-2">
                                {project.summary}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {project.tech.slice(0, 3).map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/60"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 pt-0.5">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-0.5 rounded-full bg-white text-black font-mono text-[9px] font-bold uppercase"
                              >
                                Demo
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg text-white/70 hover:text-white"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    ))}
              </motion.div>
            )}
          </AnimatePresence>
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
