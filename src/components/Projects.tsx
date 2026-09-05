'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

import ReachCounter from './widgets/ReachCounter';
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
  topics: string[];
  updated_at: string;
  fork: boolean;
}

const getRepoDescription = (name: string, description: string | null) => {
  // First check curated projects from JSON
  const curated = curatedProjectsContent.find((p) => p.id.toLowerCase() === name.toLowerCase());
  if (curated) return curated.summary;

  const fallbacks: { [key: string]: string } = {
    'Scholar-Loop':
      'Personal spaced-repetition agent executing FSRS-scheduled Learn + Quiz loops daily via Resend across System Design, ML, and DSA.',
    IdeaForge:
      'Agentic creative synthesis engine that diverges, evaluates, synthesizes, and persists novel ideas with compounding memory.',
    Ozyman:
      'Personal Operator & Autonomous AI Assistant app built for multi-agent workflows and local environment control.',
    commerce_cortex:
      'Stateful autonomous commerce & inventory intelligence agent demonstrating persistent tool calling with LangGraph & PostgreSQL.',
    'frontier-llmops-core':
      'An end-to-end engineering workspace for the modern LLM lifecycle, evaluation benchmarks, and fine-tuning pipelines.',
    'drone-intelligence':
      'Self-guided predictive drone simulation & reinforcement learning navigation engine built with PyTorch and Gym.',
    PsyRAG:
      'Domain-adapted RAG pipeline for psychological support & conversational mental health assistants with safety guardrails.',
    MedPal:
      'Neuro-symbolic clinical decision support assistant integrating structured medical knowledge graphs with LLM reasoning.',
    'promptcraft-lab':
      'A hands-on playground for prompt engineering, systematic evaluation metrics, and LLM behavior benchmarking.',
    RecSys_RL:
      'Reinforcement Learning algorithms and environments designed for dynamic recommendation and personalization.',
    'Fine-tuning-on-Job-Description-Corpus':
      'Fine-tuning transformer models on specialized job description corpora for automated skill mapping.',
    'ML-Foundations':
      'Implementations of foundational machine learning algorithms (regression, clustering, trees) from scratch.',
    Disha:
      'A production-grade, agentic Personal Intelligence platform powered by LangGraph, pgvector, and async PostgreSQL.',
    Aura: 'A privacy-focused, edge-optimized Arch Linux biometric auth daemon decoupled via Unix domain sockets and PAM.',
    CodexEngine:
      'A production-ready Agentic RAG engine with hybrid search, pgvector, LangGraph, and async FastAPI.',
    WellnessMate:
      'Multi-agent health companion built with CrewAI and MediaPipe real-time posture tracking in a Tauri desktop shell.',
    vad_processor:
      'Real-time, client-side Voice Activity Detection (VAD) built with Rust, WebAssembly, and ONNX Runtime.',
    wikirag:
      'A lightweight, fully offline RAG engine for Wikipedia querying using FAISS, RoBERTa, and Python.',
    nimbus:
      'Autonomous Cloud Software Engineering Agent Platform powered by multi-agent orchestration and cloud infrastructure tools.',
  };

  return (
    fallbacks[name] ||
    description ||
    'A project showcasing advanced software engineering and machine learning principles.'
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/anmolsharma152/repos?sort=updated&per_page=50'
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');

        const data = await response.json();

        // Filter out forks and the special profile README repository.
        // Prioritize repos that match our curated projects or have a homepage link, then sort by updated_at
        const filteredRepos = data
          .filter(
            (repo: GitHubRepo) =>
              !repo.fork &&
              !['anmolsharma152', 'nextjs-portfolio', 'anmolsharma152.github.io'].includes(
                repo.name.toLowerCase()
              )
          )
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            const isCuratedA = curatedProjectsContent.some(
              (p) => p.id.toLowerCase() === a.name.toLowerCase()
            );
            const isCuratedB = curatedProjectsContent.some(
              (p) => p.id.toLowerCase() === b.name.toLowerCase()
            );

            if (isCuratedA && !isCuratedB) return -1;
            if (!isCuratedA && isCuratedB) return 1;

            const hasHomepageA = !!a.homepage && a.homepage.trim() !== '';
            const hasHomepageB = !!b.homepage && b.homepage.trim() !== '';

            if (hasHomepageA && !hasHomepageB) return -1;
            if (!hasHomepageA && hasHomepageB) return 1;

            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 9);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      Python: 'bg-blue-500',
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      React: 'bg-cyan-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      Java: 'bg-red-500',
      'C++': 'bg-pink-500',
      'C#': 'bg-green-500',
      Go: 'bg-cyan-600',
      Rust: 'bg-orange-600',
      PHP: 'bg-purple-600',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReachCounter />
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Loading projects from GitHub...
            </p>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReachCounter />
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my latest work and open source contributions on GitHub.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/anmolsharma152"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-2xl flex flex-col items-center gap-4 max-w-md w-full hover:shadow-lg transition-all duration-300"
              >
                <Github size={48} className="text-primary" />
                <span className="text-lg font-semibold">Visit my GitHub profile</span>
                <span className="text-muted-foreground text-sm">github.com/anmolsharma152</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reach & Social Proof Metrics Strip */}
        <ReachCounter />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of production-grade agent platforms, fine-tuned models, and systems
            engineering from GitHub.
          </p>
        </motion.div>

        {/* Projects Grid - 1 col on mobile, 2 col on half-screen tiled (940px), 3 col on full screen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                {/* Project Header & Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors duration-200 line-clamp-1">
                        {repo.name}
                      </h3>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-1.5 rounded-lg hover:bg-foreground/5 text-muted-foreground hover:text-primary transition-colors duration-200"
                        aria-label={`GitHub repo for ${repo.name}`}
                      >
                        <Github size={18} />
                      </a>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 mb-4">
                      {getRepoDescription(repo.name, repo.description)}
                    </p>
                  </div>

                  {/* Language and Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/30">
                    {repo.language && (
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`}
                        />
                        <span className="text-xs font-mono text-muted-foreground">
                          {repo.language}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center space-x-3 text-xs font-mono text-muted-foreground ml-auto">
                      <div className="flex items-center space-x-1">
                        <Star size={13} className="text-amber-500" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch size={13} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="p-5 sm:p-6 border-t border-border/50 bg-secondary/20 dark:bg-secondary/10 flex flex-col justify-between min-h-[130px]">
                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics && repo.topics.length > 0 ? (
                      repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-muted text-[10px] font-mono rounded-full text-muted-foreground font-medium"
                        >
                          {topic}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono rounded-full text-muted-foreground font-medium opacity-60">
                        systems
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 glass rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 text-xs font-semibold cursor-pointer"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.a>

                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-md transition-all duration-200 text-xs font-semibold cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}

                    <span className="text-[11px] font-mono text-muted-foreground ml-auto hidden sm:inline">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/anmolsharma152?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-200 cursor-pointer"
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
