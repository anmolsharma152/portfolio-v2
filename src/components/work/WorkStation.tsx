'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WorkHeader from '@/components/work/WorkHeader';
import DeliverablesSection from '@/components/work/DeliverablesSection';
import TechStackSection from '@/components/widgets/TechStackSection';
import ExperienceSection from '@/components/work/ExperienceSection';
import ProjectsSection from '@/components/work/ProjectsSection';
import ReachOutSection from '@/components/work/ReachOutSection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WorkStation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12"
    >
      <motion.div variants={itemVariants}>
        <WorkHeader />
      </motion.div>

      <motion.div variants={itemVariants}>
        <DeliverablesSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TechStackSection />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid gap-8 py-2 lg:grid-cols-2 lg:gap-8 items-start"
      >
        <ExperienceSection />
        <ProjectsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <ReachOutSection />
      </motion.div>
    </motion.div>
  );
}
