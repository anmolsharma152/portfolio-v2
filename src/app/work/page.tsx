import { Metadata } from 'next';
import WorkHeader from '@/components/work/WorkHeader';
import DeliverablesSection from '@/components/work/DeliverablesSection';
import TechStackSection from '@/components/widgets/TechStackSection';
import ExperienceSection from '@/components/work/ExperienceSection';
import ProjectsSection from '@/components/work/ProjectsSection';
import ReachOutSection from '@/components/work/ReachOutSection';

export const metadata: Metadata = {
  title: 'Work & Systems // Anmol Sharma',
  description:
    'Engineering output, production AI architectures, research models, and career timeline.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen relative pb-36 bg-[#D3170A] text-white selection:bg-white selection:text-[#D3170A]">
      {/* Atmospheric Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-black/30 blur-3xl"
        />
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 relative z-10 space-y-8">
        <WorkHeader />
        <DeliverablesSection />
        <TechStackSection />

        <div className="grid gap-8 py-2 lg:grid-cols-[minmax(18rem,0.56fr)_minmax(0,1fr)] lg:gap-8 items-start">
          <ExperienceSection />
          <ProjectsSection />
        </div>

        <ReachOutSection />
      </div>
    </main>
  );
}
