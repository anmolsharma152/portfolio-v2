import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react';

import { CardEffects, PanelEffects } from '@/components/widgets/PanelEffects';
import { curatedProjectsContent } from '@/content/loaders';
import type { CuratedProject } from '@/content/schemas';

const featuredProjects = curatedProjectsContent.filter((p) => p.featured);

function ProjectCard({ project, index }: { project: CuratedProject; index: number }) {
  return (
    <article className="work-card group flex flex-col p-5 hover:scale-[1.01] sm:p-6">
      <CardEffects />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-1 break-words font-mono text-lg font-bold tracking-tight text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-0.5 font-mono text-xs text-emerald-400/90">{project.subtitle}</p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-neutral-200"
            >
              <span>Demo</span>
              <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 font-mono text-[0.82rem] leading-relaxed text-white/78">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.07] px-2 py-0.5 font-mono text-[11px] text-white/75"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      className="work-panel p-5 motion-safe:animate-glass-breathe sm:p-7"
      aria-labelledby="projects-heading"
    >
      <PanelEffects />
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
            flagship systems
          </p>
          <h2
            id="projects-heading"
            className="mt-1 font-doto text-3xl font-black uppercase tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
          >
            projects
          </h2>
        </div>
        <a
          href="https://github.com/anmolsharma152?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-mono text-xs text-white/70 transition-colors hover:text-white"
        >
          <span>All repositories</span>
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
