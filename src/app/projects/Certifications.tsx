'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Certification {
  name: string;
  issuer: string;
  abbreviation: string;
  verifyLink: string;
  color: string;
}

const certifications: Certification[] = [
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    abbreviation: 'CKA',
    verifyLink: 'https://www.credly.com/',
    color: '#326CE5', // Kubernetes blue
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    abbreviation: 'AWS',
    verifyLink: 'https://www.credly.com/',
    color: '#FF9900', // AWS orange
  },
];

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]">
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
            CREDENTIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]">
            Certifications
          </h2>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-[#111111] border border-[#1F1F1F] rounded-xl hover:border-[#2E2E2E] transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {/* Badge Icon */}
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold"
                    style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                  >
                    {cert.abbreviation}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#EDEDED] text-lg">{cert.name}</h3>
                    <p className="text-sm text-[#707070] mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#707070] hover:text-[#0070F3] transition-colors opacity-0 group-hover:opacity-100"
                  aria-label={`Verify ${cert.name}`}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-[#1F1F1F]">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#0070F3] hover:text-[#0060D0] transition-colors"
                >
                  Verify Credential
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
