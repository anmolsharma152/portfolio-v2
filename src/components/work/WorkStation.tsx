import React from 'react';

import TechStackSection from '@/components/widgets/TechStackSection';
import DeliverablesSection from '@/components/work/DeliverablesSection';
import ExperienceSection from '@/components/work/ExperienceSection';
import ProjectsSection from '@/components/work/ProjectsSection';
import ReachOutSection from '@/components/work/ReachOutSection';
import WorkHeader from '@/components/work/WorkHeader';

const SECTIONS = [
  WorkHeader,
  ProjectsSection,
  ExperienceSection,
  DeliverablesSection,
  TechStackSection,
  ReachOutSection,
];

export default function WorkStation() {
  return (
    <div className="relative z-10 mx-auto max-w-[1460px] space-y-6 px-4 pt-8 sm:space-y-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">
      {SECTIONS.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
