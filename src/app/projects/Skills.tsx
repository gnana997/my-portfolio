'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Runtime',
    skills: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python'],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: ['Kubernetes', 'AWS', 'Docker', 'Helm', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Istio'],
  },
  {
    title: 'Databases & Messaging',
    skills: ['Cassandra', 'Kafka', 'Elasticsearch', 'Snowflake', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Node.js', 'React', 'Next.js', 'Spring Boot', 'Vercel AI SDK', 'MCP'],
  },
];

export default function Skills() {
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
            TECHNICAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]">
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-mono text-xs text-[#707070] tracking-wider mb-4 uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-[#111111] border border-[#1F1F1F] rounded-lg text-sm text-[#A1A1A1] hover:text-[#EDEDED] hover:border-[#2E2E2E] hover:bg-[#1A1A1A] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
