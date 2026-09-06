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
    <div className="min-h-screen relative pb-36 bg-black text-white selection:bg-white selection:text-black">
      {/* Deep Atmospheric Glow & Subtle Grid Raster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-12 [background-image:radial-gradient(rgba(255,255,255,0.45)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 -z-10 h-[38rem] w-[38rem] rounded-full bg-white/[0.04] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[42rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-white/[0.03] blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 bottom-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-white/[0.025] blur-[130px]"
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
    </div>
  );
}
