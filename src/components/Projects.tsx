'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Terminal } from 'lucide-react';
import React, { useRef, useState } from 'react';

import DecryptedText from './widgets/DecryptedText';
import ReachCounter from './widgets/ReachCounter';
import WorkClock from './widgets/WorkClock';
import { curatedProjectsContent } from '@/content/loaders';
import type { CuratedProject } from '@/content/schemas';

const CATEGORY_TABS: { id: string; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-agent', label: 'AI Agents & RAG' },
  { id: 'ml-vision', label: 'Models & Fine-Tuning' },
  { id: 'systems', label: 'Systems & Edge' },
  { id: 'platform', label: 'Platforms' },
];

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  CodexEngine: {
    label: 'Live Engine',
    color: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  },
  'Fine-tuning-Sarvam-1': {
    label: 'Research',
    color: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  },
  Disha: {
    label: 'Production',
    color: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
  },
  Nimbus: {
    label: 'Platform',
    color: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
  },
  AlgoDeck: {
    label: 'Shipped',
    color: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
  },
  commerce_cortex: {
    label: 'Agentic',
    color: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
  },
  vad_processor: {
    label: '<150ms WASM',
    color: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  },
  Aura: {
    label: 'Edge Daemon',
    color: 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30',
  },
};

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? curatedProjectsContent
      : curatedProjectsContent.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-28 relative z-10">
      <span id="projects" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute -left-28 top-24 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-[36rem] h-[36rem] w-[36rem] rounded-full bg-red-600/10 dark:bg-red-600/15 blur-3xl"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header with Ohshin-style Meta & Typography */}
        <header className="mb-14 sm:mb-16">
          {/* Micro Meta Row */}
          <div className="flex items-center justify-between font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.24em] text-muted-foreground border-b border-border/40 pb-3 mb-6">
            <span className="text-foreground font-semibold">work / output</span>
            <span className="hidden sm:inline">scroll / inspect systems</span>
            <span className="flex items-center gap-1.5">
              <WorkClock /> <span className="text-primary font-bold">IST</span>
            </span>
          </div>

          <div ref={ref} className="pt-2">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-2">
              teams, platforms &amp; production systems
            </p>
            <h2 className="font-doto text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-foreground">
              <DecryptedText text="Work" speed={60} sequential animateOn="view" />
            </h2>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground mt-3 max-w-2xl">
              Production-grade agent platforms, sub-150ms speech runtimes, and fine-tuned domain
              models.
            </p>
          </div>
        </header>

        {/* 01: System Metrics & Impact Strip */}
        <ReachCounter />

        {/* 02: Build Log / Curated Projects Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-border/40 pb-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary mb-1">
              <Terminal className="w-4 h-4" />
              <span>[ 02 / SELECTED PLATFORMS &amp; ENGINES ]</span>
            </div>
            <h3 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Build Log
            </h3>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {CATEGORY_TABS.map((tab) => {
              const count =
                tab.id === 'all'
                  ? curatedProjectsContent.length
                  : curatedProjectsContent.filter((p) => p.category === tab.id).length;
              const isActive = selectedCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 col on half-screen tiled (940px), 3 col on large desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: CuratedProject, index: number) => {
              const statusInfo = STATUS_MAP[project.id] || {
                label: 'System',
                color: 'bg-primary/10 text-primary border-primary/20',
              };
              const serial = String(project.sortOrder || index + 1).padStart(2, '0');

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group relative rounded-2xl glass p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-border/70 hover:border-primary/50"
                >
                  {/* Top Bar: Serial Index & Status Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-doto text-2xl font-black text-primary/80">
                        {serial}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${statusInfo.color} font-medium`}
                      >
                        {statusInfo.label}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="font-doto text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h4>

                    {/* Project Summary */}
                    <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Bottom: Tech Stack & Actions */}
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/40">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-muted hover:bg-muted/80 text-foreground transition-all duration-200 cursor-pointer"
                        aria-label={`${project.title} Source Code`}
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-sm"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Repos CTA in Ohshin Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center pt-4"
        >
          <a
            href="https://github.com/anmolsharma152?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 glass hover:border-primary/60 text-foreground rounded-2xl font-mono text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer group"
          >
            <Github size={18} className="group-hover:text-primary transition-colors" />
            <span>inspect all 25+ repositories on github</span>
            <ArrowUpRight
              size={16}
              className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
