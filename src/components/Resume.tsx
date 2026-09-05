'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Download, Award } from 'lucide-react';
import { useRef, useState } from 'react';

import { workExperienceContent, educationContent } from '@/content/loaders';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-extrabold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Resume &amp; Experience
            </span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey, enterprise operations, and academic foundations in AI and
            Systems.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <a
              href="/resume.pdf"
              download="Anmol_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 glass rounded-lg p-1">
            {[
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'experience' | 'education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary opacity-30" />

          {/* Work Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {workExperienceContent.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-14 sm:pl-16"
                >
                  <div className="absolute left-[32px] -translate-x-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 sm:p-7 rounded-2xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.01, x: 6 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-lg font-semibold text-foreground/90">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2 md:mt-0 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.summary && (
                      <p className="text-sm text-foreground/80 mb-4 leading-relaxed font-medium">
                        {exp.summary}
                      </p>
                    )}

                    <div className="text-muted-foreground mb-4 space-y-2">
                      {exp.highlights.map((bullet, bulletIdx) => (
                        <div
                          key={bulletIdx}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 select-none font-bold">•</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-border/40">
                      {exp.techBadges.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {educationContent.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-14 sm:pl-16"
                >
                  <div className="absolute left-[32px] -translate-x-1/2 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 sm:p-7 rounded-2xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.01, x: 6 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/90">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2 md:mt-0 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-bold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {edu.description}
                      </p>
                    )}

                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/40">
                        {edu.honors.map((honor, honorIdx) => (
                          <span
                            key={honorIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs font-medium"
                          >
                            <Award size={13} />
                            {honor}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
