'use client';

// src/components/Experience.jsx
import { motion } from 'framer-motion';

const workExperience = [
  {
    company: "PureStorage",
    logo: "/assets/pureLogo.svg",
    link: "https://www.purestorage.com/",
    position: "Member of Technical Staff - 3",
    duration: "2023 - Present",
    description: [
      "Developed CI/CD pipelines using GitHub Actions and ArgoCD for seamless Kubernetes deployments, improving deployment efficiency and reducing errors.",
      "Deployed and maintained Kafka, Elasticsearch, and Cassandra clusters, ensuring optimal performance and high availability for application usage.",
      "Optimized Elasticsearch setup by configuring S3 repository searches to retain indices older than 30 days for an additional 3 months, enhancing data accessibility and usability for the team.",
      "Migrated Kubernetes clusters from EKS version 1.24 to 1.31, upgraded EC2 instance types for enhanced performance, significantly reduced the total number of instances, and achieved substantial cost savings, decreasing monthly AWS bills by 25%.",
      "Implemented Istio service mesh within the Kubernetes cluster for blue-green deployments using feature flags with ArgoCD, enhancing deployment flexibility and minimizing downtime.",
      "Designed and implemented a high-performance traffic and log monitoring system capable of processing over 100,000 logs per second with minimal latency, improving real-time analytics and system monitoring.",
      "Created an auto-approval system using Decision Trees, reducing quote approval volume by 77% and decreasing approval time by 42%, significantly enhancing operational efficiency.",
      "Engineered a solution for Snowflake data processing by replacing complex multi-join queries with efficient in-app operations, achieving a 70–75% reduction in data query latency and substantially improving processing throughput.",
    ]
  },
  {
    company: "Velotio Technologies",
    logo: "/assets/velotioLogo.svg",
    link: "https://www.velotio.com/",
    position: "Senior Software Engineer",
    duration: "2021 - 2023",
    description: [
      "Owned end-to-end feature development and deployment for Pure Storage projects, delivering a 20% increase in application performance.",
      "Built and maintained robust, fault-tolerant AWS cloud infrastructure, achieving consistent high availability and minimizing downtime.",
      "Collaborated closely with stakeholders to gather requirements, craft detailed functional specifications, and drive seamless application deployments.",
      "Successfully reverse-engineered, took full ownership of, and modernized two undocumented legacy Spring Boot applications.",
      "Enhanced legacy applications to meet evolving business requirements and produced comprehensive documentation, significantly streamlining onboarding and future development efforts for the team.",
    ]
  },
  {
    company: "Tata Consultancy Services",
    logo: "/assets/tcsLogo.svg",
    link: "https://www.tcs.com/",
    position: "Systems Engineer",
    duration: "2019 - 2021",
    description: [
      "Led a strategic initiative for the London Stock Exchange Group, migrating critical infrastructure from on-premises to a Serverless Architecture, resulting in a 15% reduction in operational costs while significantly enhancing system scalability and reliability.",
      "Architected and implemented a secure, cloud-native solution using AWS Transfer Family, successfully transitioning on-premises SFTP servers to the cloud. This streamlined secure file transfers, boosted operational agility, and improved data accessibility across teams.",
    ]
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverVariants = {
  hover: { scale: 1.02, boxShadow: "0px 8px 30px rgba(59, 130, 246, 0.15)", transition: { duration: 0.3 } },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative" role="list" aria-label="Work experience timeline">
          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <div
                key={index}
                className="relative pl-12"
                role="listitem"
                aria-label={`${experience.position} at ${experience.company}, ${experience.duration}`}
              >
                {/* Timeline Dot and Line */}
                <div
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center border border-blue-400/50 z-10"
                  aria-hidden="true"
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                {index < workExperience.length - 1 && (
                  <div
                    className="absolute left-2.5 top-6 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-blue-600"
                    style={{ height: "calc(100% + 3rem)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Main Content with Hover Effect */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.article
                    whileHover={hoverVariants.hover}
                    className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <header className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {experience.logo && (
                          <motion.img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-12 h-12 object-contain rounded-full bg-gray-700/50 p-2"
                            width="48"
                            height="48"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-300 transition-colors duration-200"
                              aria-label={`${experience.company} website (opens in new tab)`}
                            >
                              {experience.company}
                            </a>
                          </h3>
                          <h4 className="text-md md:text-lg font-semibold text-gray-200">{experience.position}</h4>
                        </div>
                      </div>
                      <time
                        dateTime={experience.duration.replace(' - ', '/')}
                        className="text-gray-400 font-medium text-sm md:text-base whitespace-nowrap bg-gray-900/50 px-3 py-1 rounded-full"
                      >
                        {experience.duration}
                      </time>
                    </header>

                    <ul
                      className="list-disc list-inside space-y-3 text-gray-300 text-sm md:text-base"
                      aria-label={`Responsibilities and achievements at ${experience.company}`}
                    >
                      {experience.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="hover:text-gray-200 transition-colors duration-200"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  </motion.article>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;