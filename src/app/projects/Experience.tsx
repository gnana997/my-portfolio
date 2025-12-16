'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ExperienceCategory {
  title: string;
  items: string[];
}

interface WorkExperience {
  company: string;
  logo: string;
  link: string;
  position: string;
  duration: string;
  location: string;
  categories?: ExperienceCategory[];
  description?: string[];
}

const workExperience: WorkExperience[] = [
  {
    company: 'Pure Storage',
    logo: '/assets/pureLogo.svg',
    link: 'https://www.purestorage.com/',
    position: 'Member of Technical Staff 3 (MTS-3)',
    duration: 'Jun 2023 – Present',
    location: 'Bangalore, India',
    categories: [
      {
        title: 'Observability & AI Platform',
        items: [
          'Architected an AI-powered Observability Agent enabling natural language debugging across Elasticsearch logs, Kubernetes infrastructure, and Prometheus metrics using MCP servers',
          'Built 3 MCP servers (Go + TypeScript): Elasticsearch (7 tools), Kubernetes (9 tools), Prometheus (metrics queries)',
          'Demonstrated to engineering leadership; reduced MTTR by eliminating tool-switching overhead',
        ],
      },
      {
        title: 'Infrastructure & Performance',
        items: [
          'Designed high-performance traffic monitoring system in Go processing 100,000+ logs/second with minimal latency',
          'Migrated Kubernetes clusters from EKS 1.24 to 1.31, achieving 25% AWS cost reduction',
          'Deployed and maintained Kafka, Elasticsearch, and Cassandra clusters ensuring 99.9% availability',
        ],
      },
      {
        title: 'Automation & Efficiency',
        items: [
          'Designed approval system in Go tokenizing user queries into AST trees, achieving 30-50ms latency for 1000+ rules',
          'Created auto-approval system using Decision Trees reducing quote approval volume by 77%',
          'Engineered Snowflake data processing solution achieving 70-75% reduction in query latency',
        ],
      },
      {
        title: 'DevOps & CI/CD',
        items: [
          'Built certificate expiration alerting system integrating cert-manager and AWS ACM with PagerDuty',
          'Developed CI/CD pipelines using GitHub Actions and ArgoCD for Kubernetes deployments',
          'Implemented Istio service mesh for blue-green deployments using feature flags',
        ],
      },
    ],
  },
  {
    company: 'Velotio Technologies',
    logo: '/assets/velotioLogo.svg',
    link: 'https://www.velotio.com/',
    position: 'Senior Software Engineer',
    duration: 'Aug 2021 – May 2023',
    location: 'Pune, India',
    description: [
      'Owned end-to-end feature development delivering 20% increase in application performance',
      'Built and maintained fault-tolerant AWS cloud infrastructure ensuring high availability',
      'Reverse-engineered and modernized two undocumented legacy Spring Boot applications',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    logo: '/assets/tcsLogo.svg',
    link: 'https://www.tcs.com/',
    position: 'Systems Engineer',
    duration: 'Jun 2019 – Jul 2021',
    location: 'Pune, India',
    description: [
      'Led infrastructure migration from on-premises to Serverless Architecture for London Stock Exchange Group, reducing operational costs by 15%',
      'Architected cloud-native solution using AWS Transfer Family transitioning SFTP servers to AWS',
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">
            CAREER
          </p>
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]"
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Work experience timeline">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
              role="listitem"
            >
              {/* Timeline Line */}
              {index < workExperience.length - 1 && (
                <div
                  className="absolute left-[11px] md:left-[15px] top-6 bottom-0 w-px bg-[#1F1F1F]"
                  aria-hidden="true"
                />
              )}

              {/* Timeline Dot */}
              <div
                className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#EDEDED] flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black" />
              </div>

              {/* Content Card */}
              <div className="border-l-0 md:border-l-2 border-[#1F1F1F] pl-0 md:pl-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-lg bg-[#111111] p-2 flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={32}
                          height={32}
                          className="object-contain max-w-full max-h-full"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#EDEDED]">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0070F3] transition-colors"
                        >
                          {exp.company}
                        </a>
                      </h3>
                      <p className="text-[#A1A1A1]">{exp.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-[#707070]">{exp.duration}</p>
                    <p className="text-sm text-[#707070]">{exp.location}</p>
                  </div>
                </div>

                {/* Expandable Categories (for Pure Storage) */}
                {exp.categories && (
                  <>
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                      className="flex items-center gap-2 text-sm font-medium text-[#707070] hover:text-[#EDEDED] transition-colors mb-4"
                      aria-expanded={expandedIndex === index}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedIndex === index ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {expandedIndex === index ? 'Hide details' : 'Show details'}
                    </button>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="grid md:grid-cols-2 gap-4 overflow-hidden"
                        >
                          {exp.categories.map((category) => (
                            <div
                              key={category.title}
                              className="p-4 bg-[#111111] rounded-lg border border-[#1F1F1F]"
                            >
                              <h4 className="font-semibold text-[#EDEDED] mb-3">{category.title}</h4>
                              <ul className="space-y-2">
                                {category.items.map((item, i) => (
                                  <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                                    <span className="text-[#707070] mt-1">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

                {/* Simple Description List (for other companies) */}
                {exp.description && (
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                        <span className="text-[#707070] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
