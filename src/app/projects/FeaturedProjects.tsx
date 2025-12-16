'use client';

import { motion } from 'framer-motion';

const observabilityAgent = {
  title: 'Observability Agent',
  badge: { text: 'Internal Tool', type: 'default' as const },
  description: 'Identified a critical pain point from my team\'s on-call experience: engineers waste valuable time context-switching between multiple tools during incident debugging. Architected and developed an AI-powered debugging platform from scratch that unifies all data sources.',
  painPoint: 'During on-call rotations, engineers context-switch between logs, infrastructure dashboards, and metrics tools — slowing down incident resolution when every second counts.',
  solution: 'Built an AI-powered platform enabling engineers to investigate production issues using natural language queries across logs, infrastructure, and metrics in one unified interface.',
  impact: 'Demonstrated to engineering leadership; significantly reduces mean time to resolution (MTTR) by eliminating tool-switching overhead during incidents.',
  techStack: ['Go', 'TypeScript', 'AI/LLM'],
};

const certWatch = {
  title: 'CertWatch',
  badge: { text: 'Beta Launch Soon', type: 'warning' as const },
  description: 'Built a full-stack SaaS platform to solve a common DevOps headache: unexpected SSL certificate expirations causing production outages. Designed and developed the entire system from certificate monitoring engine to alerting infrastructure.',
  coreFeatures: [
    'Full chain validation - leaf to root certificate verification',
    'OCSP and CRL revocation checking',
    'Weak crypto detection (SHA1, weak RSA keys)',
    '5-minute check intervals with customizable alert thresholds',
    'Real-time dashboard with certificate health status',
  ],
  inTesting: [
    'Multi-channel alerts (Slack, PagerDuty, Teams, Email, Webhooks)',
  ],
  comingSoon: [
    'Kubernetes Native - Auto-discover certificates from cert-manager',
    'AWS ACM Integration - Monitor certificates in Amazon Certificate Manager',
    'CT Log Monitoring - Get alerted on unauthorized certificates',
    'Domain Monitoring - Track domain expirations alongside certificates',
  ],
  techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
  link: 'https://certwatch-web.vercel.app',
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">
            FEATURED WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]">
            Projects
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Observability Agent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="group p-6 md:p-8 bg-[#111111] border border-[#1F1F1F] rounded-xl hover:border-[#2E2E2E] hover:bg-[#1A1A1A] transition-all duration-300"
          >
            {/* Header */}
            <div className="mb-4">
              <span className="badge badge-default mb-3">
                {observabilityAgent.badge.text}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EDEDED] tracking-tight">
                {observabilityAgent.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#A1A1A1] mb-6 leading-relaxed">
              {observabilityAgent.description}
            </p>

            {/* Pain Point → Solution → Impact */}
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-[#0A0A0A] border border-[#2E2E2E] rounded-lg">
                <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">PAIN POINT</p>
                <p className="text-sm text-[#A1A1A1]">{observabilityAgent.painPoint}</p>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#2E2E2E] rounded-lg">
                <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">SOLUTION</p>
                <p className="text-sm text-[#A1A1A1]">{observabilityAgent.solution}</p>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#0070F3]/30 rounded-lg">
                <p className="font-mono text-xs text-[#0070F3] tracking-wider mb-2">IMPACT</p>
                <p className="text-sm text-[#EDEDED]">{observabilityAgent.impact}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1F1F1F]">
              {observabilityAgent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0A0A0A] border border-[#2E2E2E] rounded text-xs font-mono text-[#A1A1A1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CertWatch Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-6 md:p-8 bg-[#111111] border border-[#1F1F1F] rounded-xl hover:border-[#2E2E2E] hover:bg-[#1A1A1A] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="badge badge-warning mb-3">
                  🚀 {certWatch.badge.text}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#EDEDED] tracking-tight">
                  {certWatch.title}
                </h3>
              </div>
              <a
                href={certWatch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#707070] hover:text-[#0070F3] transition-colors"
                aria-label={`View ${certWatch.title}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="text-[#A1A1A1] mb-6 leading-relaxed">
              {certWatch.description}
            </p>

            {/* Core Features */}
            <div className="mb-4">
              <p className="font-mono text-xs text-[#00C853] tracking-wider mb-2">✓ CORE FEATURES</p>
              <ul className="space-y-1">
                {certWatch.coreFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#A1A1A1]">
                    <span className="text-[#00C853] mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* In Testing */}
            <div className="mb-4">
              <p className="font-mono text-xs text-[#F5A623] tracking-wider mb-2">🔄 IN TESTING</p>
              <ul className="space-y-1">
                {certWatch.inTesting.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#A1A1A1]">
                    <span className="text-[#F5A623] mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon */}
            <div className="mb-6 p-4 bg-[#0A0A0A] border border-[#0070F3]/30 rounded-lg">
              <p className="font-mono text-xs text-[#0070F3] tracking-wider mb-2">🔮 ROADMAP</p>
              <ul className="space-y-1">
                {certWatch.comingSoon.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#A1A1A1]">
                    <span className="text-[#0070F3] mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1F1F1F]">
              {certWatch.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0A0A0A] border border-[#2E2E2E] rounded text-xs font-mono text-[#A1A1A1]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={certWatch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[#0070F3] hover:text-[#0060D0] transition-colors font-medium"
            >
              View Live Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}