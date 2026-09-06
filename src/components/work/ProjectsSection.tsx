'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, ChevronDown, Layers } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { curatedProjectsContent } from '@/content/loaders';
import { cn } from '@/lib/utils';

type FilterCategory = 'all' | 'ai-agent' | 'systems' | 'platform';

interface FilterTab {
  id: FilterCategory;
  label: string;
  count: number;
}

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  // Default to expanding the top flagship project (CodexEngine)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(['CodexEngine'])
  );

  const filterTabs: FilterTab[] = useMemo(() => [
    { id: 'all', label: 'All Systems', count: curatedProjectsContent.length },
    {
      id: 'ai-agent',
      label: 'AI & Agents',
      count: curatedProjectsContent.filter((p) => p.category === 'ai-agent').length,
    },
    {
      id: 'systems',
      label: 'Systems & Rust',
      count: curatedProjectsContent.filter((p) => p.category === 'systems').length,
    },
    {
      id: 'platform',
      label: 'ML & Platform',
      count: curatedProjectsContent.filter(
        (p) => p.category === 'platform' || p.category === 'ml-vision'
      ).length,
    },
  ], []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return curatedProjectsContent;
    if (selectedFilter === 'platform') {
      return curatedProjectsContent.filter(
        (p) => p.category === 'platform' || p.category === 'ml-vision'
      );
    }
    return curatedProjectsContent.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const areAllExpanded = filteredProjects.length > 0 && filteredProjects.every((p) => expandedIds.has(p.id));

  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(curatedProjectsContent.map((p) => p.id)));
    }
  };

  return (
    <section className="min-w-0" aria-label="Projects Showcase">
      <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe">
        <GlassSheen className="left-[-40%] bg-white/[0.035]" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-white/50 font-semibold">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production Systems ({curatedProjectsContent.length})</span>
            </div>
            <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
              projects
            </h2>
          </div>

          <button
            type="button"
            onClick={toggleExpandAll}
            className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.16em] text-white/50 hover:text-white/90 transition-colors cursor-pointer self-start sm:self-end py-1 px-2.5 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.04]"
          >
            {areAllExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.05] border border-white/10 w-full overflow-x-auto no-scrollbar mb-6">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={cn(
                  'relative shrink-0 px-3 sm:px-3.5 py-1.5 rounded-full font-mono text-[0.60rem] sm:text-[0.66rem] uppercase tracking-[0.14em] transition-all cursor-pointer flex items-center gap-1.5',
                  isActive
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white/80'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-active-filter-pill"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={cn(
                    'relative z-10 text-[0.55rem] px-1.5 py-0.2 rounded-full font-mono',
                    isActive ? 'bg-white/20 text-white' : 'bg-white/8 text-white/40'
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards List */}
        <motion.div layout className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedIds.has(project.id);
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group work-card"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

                  {/* Header Strip (Always Visible, Clickable) */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpand(project.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(project.id);
                      }
                    }}
                    className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none transition-colors hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Serial Number */}
                      <span className="font-doto text-[1.15rem] sm:text-[1.3rem] font-black leading-none text-white/35 shrink-0 select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Title & Preview Badges */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="min-w-0 break-words font-doto text-[0.98rem] sm:text-[1.15rem] font-black uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        {/* Top 3 Tech Preview (visible when collapsed) */}
                        {!isExpanded && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            {project.tech.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-white/70 border border-white/8"
                              >
                                {t}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-[9px] font-mono text-white/40">
                                +{project.tech.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Action Icons & Expand Chevron */}
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 sm:p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 sm:p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </a>
                      )}

                      <div
                        className={cn(
                          'p-1.5 rounded-full text-white/50 transition-transform duration-300',
                          isExpanded && 'rotate-180 text-white'
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Body Drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-white/8 bg-black/30"
                      >
                        <div className="p-4 sm:p-5 pt-3 space-y-4">
                          <p className="font-mono text-[0.76rem] sm:text-[0.82rem] text-white/80 leading-relaxed">
                            {project.summary}
                          </p>

                          {/* Full Tech Badges */}
                          <div>
                            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/45 mb-2 font-semibold">
                              Architecture &amp; Tooling
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white/85 border border-white/12"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Deep Link Buttons */}
                          <div className="flex items-center gap-3 pt-2">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/18 text-white font-mono text-[0.64rem] uppercase tracking-wider border border-white/15 transition-all cursor-pointer"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Repository</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-[0.64rem] font-bold uppercase tracking-wider transition-all cursor-pointer"
                              >
                                <span>Live Demo</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
