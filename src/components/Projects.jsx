// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const projects = [
  {
    title: "Ollama Copilot",
    description: "Ollama Copilot integrates local LLMs from <a href='https://ollama.com/' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:text-blue-300'>Ollama</a> directly into VS Code, providing AI-powered code completion and an interactive chat experience with your own locally-running models.",
    githubLink: "https://github.com/gnana997/ollama-copilot",
    marketPlaceLink: "https://marketplace.visualstudio.com/items?itemName=Gnana997.ollama-dev-companion"
  },
  {
    title: "Telegram Vault Bot",
    description: "The Vault Engineer Bot simplifies the management of HashiCorp Vault's unseal and rekey operations via a Telegram bot interface. It automates key collection, unseal processes, and rekey procedures, providing real-time status updates and secure key distribution among authorised users.",
    githubLink: "https://github.com/gnana997/telegram-vault-bot"
  },
  {
    title: "Load Balancer",
    description: "A simple, configurable load balancer implemented in Golang, supporting Weighted Round Robin and Round Robin strategies. Features include health checks for service instances and easy configuration via a YAML file.",
    githubLink: "https://github.com/gnana997/load-balancer-go"
  },
  {
    title: "1 Billion Rows CLI",
    description: "CLI tool processing 1 billion rows in ~10 seconds to calculate temperature statistics. It provides a simple interface to test the performance using multiple algorithms and data structures.",
    githubLink: "https://github.com/gnana997/1billion-row-challenge"
  }
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 8px 30px rgba(59, 130, 246, 0.15)" },
};

const Projects = () => {
  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Project showcase">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col"
              role="listitem"
              aria-labelledby={`project-title-${index}`}
            >
              <h3
                id={`project-title-${index}`}
                className="text-xl font-semibold mb-3 text-blue-400"
              >
                {project.title}
              </h3>
              <div
                className="text-gray-300 mb-6 flex-grow text-sm md:text-base"
                dangerouslySetInnerHTML={createMarkup(project.description)}
                aria-label={`Description of ${project.title}`}
              />
              <div className="flex items-center gap-6 mt-auto" aria-label="Project links">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-900/50 px-4 py-2 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${project.title} GitHub repository (opens in new tab)`}
                  >
                    <FaGithub className="text-xl" aria-hidden="true" />
                    <span className="text-sm md:text-base">GitHub</span>
                  </motion.a>
                )}
                {project.marketPlaceLink && (
                  <motion.a
                    href={project.marketPlaceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-900/50 px-4 py-2 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${project.title} VS Code Marketplace (opens in new tab)`}
                  >
                    <VscVscode className="text-xl" aria-hidden="true" />
                    <span className="text-sm md:text-base">Marketplace</span>
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;