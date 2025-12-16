'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  num: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Telegram Vault Bot',
    category: 'DevOps · Go',
    description: 'Simplifies HashiCorp Vault management via Telegram bot, automating unseal, rekey, and key distribution with real-time updates.',
    impact: 'Secure key distribution among authorized users',
    techStack: ['Go', 'Telegram API', 'HashiCorp Vault'],
    githubLink: 'https://github.com/gnana997/telegram-vault-bot',
  },
  {
    num: '02',
    title: 'Decentralized Cache',
    category: 'Distributed Systems · Go',
    description: 'Distributed cache system using Raft consensus algorithm ensuring scalability, consistency, and fault tolerance.',
    impact: 'Production-ready distributed caching',
    techStack: ['Go', 'Raft Consensus'],
    githubLink: 'https://github.com/gnana997/decentralized-cache',
  },
  {
    num: '03',
    title: 'Load Balancer',
    category: 'Infrastructure · Go',
    description: 'Configurable load balancer supporting Weighted Round Robin and Round Robin strategies with health checks.',
    impact: 'Easy configuration via YAML file',
    techStack: ['Go', 'YAML'],
    githubLink: 'https://github.com/gnana997/load-balancer-go',
  },
  {
    num: '04',
    title: '1 Billion Rows CLI',
    category: 'Performance · Go',
    description: 'CLI tool processing 1 billion rows in ~10 seconds to calculate temperature statistics using optimized algorithms.',
    impact: 'Demonstrates high-performance data processing',
    techStack: ['Go', 'CLI'],
    githubLink: 'https://github.com/gnana997/1billion-row-challenge',
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">
              OTHER WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]">
              Projects
            </h2>
          </div>
        </motion.div>

        {/* Project List */}
        <div className="space-y-1" role="list" aria-label="Project showcase">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group block border-t border-[#1F1F1F] py-6 hover:bg-[#111111] transition-all cursor-pointer px-4 -mx-4"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              role="listitem"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Number */}
                <div className="font-mono text-sm text-[#707070] md:w-16">{project.num}</div>

                {/* Title and category */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#EDEDED] group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-[#707070] transition-all ${
                        hoveredProject === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="font-mono text-xs text-[#707070] mt-1 tracking-wider">{project.category}</p>
                </div>

                {/* Tech stack */}
                <div className="hidden lg:flex gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-[#1F1F1F] text-xs text-[#707070] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable description */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hoveredProject === index ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#A1A1A1] max-w-2xl ml-0 md:ml-16">{project.description}</p>
                <p className="font-mono text-xs text-[#707070] mt-2 ml-0 md:ml-16">↳ {project.impact}</p>
                <div className="flex gap-4 mt-3 ml-0 md:ml-16">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#0070F3] hover:text-[#0060D0]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#707070] hover:text-[#EDEDED]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
