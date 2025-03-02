'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Member of Technical Staff - 3',
    company: 'Pure Storage',
    period: 'June 2023 - Present',
    description: [
      'Architected and implemented a high-availability and disaster recovery setup for Kubernetes clusters on AWS, ensuring system resilience and minimal downtime.',
      'Configured Velero for regular backups and restores of Kubernetes cluster state and persistent volumes to AWS S3, enabling cross-region replication and enhancing disaster recovery capabilities.',
      'Implemented Istio service mesh within the Kubernetes cluster for blue-green deployments using feature flags with ArgoCD, enhancing deployment flexibility and minimizing downtime.',
      'Developed CI/CD pipelines using GitHub Actions and ArgoCD for seamless Kubernetes deployments, improving deployment efficiency and reducing errors.',
      'Created an auto-approval system using Decision Trees, reducing quote approval volume by 77% and decreasing approval time by 42%, significantly enhancing operational efficiency.',
      'Engineered a solution for Snowflake data processing by replacing complex multi-join queries with efficient in-app operations, achieving a 70-75% reduction in data query latency and substantially improving processing throughput.',
      'Designed and implemented a high-performance traffic and log monitoring system capable of processing over 100,000 logs per second with minimal latency, improving real-time analytics and system monitoring.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Velotio Technologies',
    period: 'August 2021 - May 2023',
    description: [
      'Led feature ownership and deployment in Pure Storage projects, increasing application performance by 20%.',
      'Maintained a fault-tolerant AWS cloud infrastructure, ensuring high system availability.',
      'Involved in requirement gathering, functional specification preparation, and application deployment.',
      'Efficiently Reverse-Engineered and fully owned two undocumented SpringBoot legacy applications.',
      'Enhanced their functionality to align with new requirements and meticulously documented the systems, facilitating easier access and development for the team.'
    ]
  },
  {
    title: 'System Engineer',
    company: 'TCS',
    period: 'June 2019 - August 2021',
    description: [
      'Spearheaded a critical project for the London Stock Exchange Group, leading the migration from on-premise infrastructure to Serverless Architecture, achieving a notable 15% reduction in operational costs while improving scalability and reliability.',
      'Designed and implemented a robust architecture to transfer on-premise SFTP (Secure File Transfer Protocol) servers to AWS Transfer Family, enabling seamless, secure, and efficient file transfers in a cloud-native environment, enhancing data accessibility and operational agility.'
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaBriefcase className="text-primary mr-2" />
                <h3 className="text-2xl font-bold">{exp.title}</h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-2">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden sm:block sm:mx-2">•</span>
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience; 