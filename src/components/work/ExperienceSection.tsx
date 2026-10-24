import { Award } from 'lucide-react';
import React from 'react';

import { PanelEffects } from '@/components/widgets/PanelEffects';
import { educationContent, workExperienceContent } from '@/content/loaders';

const HONORS = [
  "Director's Certificate of Appreciation, Student Council, Symbiosis School for Liberal Arts (SSLA), Pune",
  'NTSE Scholar, National Talent Search Examination',
];

export default function ExperienceSection() {
  return (
    <section
      className="work-panel p-5 motion-safe:animate-glass-breathe sm:p-7"
      aria-labelledby="experience-heading"
    >
      <PanelEffects />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
        <div className="min-w-0">
          <h2
            id="experience-heading"
            className="font-doto text-3xl font-black uppercase tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
          >
            experience
          </h2>

          <ol className="mt-6 space-y-6 border-l border-white/12 pl-5">
            {workExperienceContent.map((exp) => (
              <li key={exp.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-black"
                />
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {exp.period} <span className="font-normal text-white/60">· {exp.location}</span>
                </p>
                <h3 className="mt-1 font-mono text-base font-bold tracking-tight text-white sm:text-lg">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs font-semibold text-white/70 sm:text-sm">
                  {exp.company}
                </p>
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 font-mono text-[0.82rem] leading-relaxed text-white/80"
                    >
                      <span aria-hidden="true" className="select-none text-emerald-400">
                        ▹
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="min-w-0 space-y-6">
          <h2 className="font-doto text-3xl font-black uppercase tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
            education
          </h2>
          <ul className="space-y-5">
            {educationContent.map((edu) => (
              <li key={edu.id}>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {edu.period} <span className="font-normal text-white/60">· {edu.grade}</span>
                </p>
                <h3 className="mt-1 font-mono text-sm font-bold text-white sm:text-base">
                  {edu.degree}
                </h3>
                <p className="font-mono text-xs text-white/70">
                  {edu.institution}
                  {edu.division && ` · ${edu.division}`}
                </p>
                {edu.curriculum && (
                  <p className="mt-1.5 font-mono text-[0.76rem] leading-relaxed text-white/60">
                    {edu.curriculum}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-5">
            <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
              <Award aria-hidden="true" className="h-4 w-4 text-emerald-400" />
              Honors &amp; Leadership
            </p>
            <ul className="mt-3 space-y-2">
              {HONORS.map((honor) => (
                <li key={honor} className="font-mono text-[0.78rem] leading-relaxed text-white/75">
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
