'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';

interface ProjectLink {
  github?: string;
  live?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Decentralized Cache',
    description: 'A distributed cache system leveraging a Raft consensus algorithm to ensure scalability, consistency, and fault tolerance. This system provides reliable data caching across multiple nodes with automatic leader election and data replication.',
    technologies: ['Go', 'Raft Consensus', 'Distributed Systems', 'Caching'],
    links: {
      github: 'https://github.com/gnana997/decentralized-cache',
    },
    image: '/images/decentralized-cache.jpg'
  },
  {
    title: 'Message Queue',
    description: 'A scalable messaging system, comparable to Kafka, managing multiple publishers and consumers efficiently. This system handles high-throughput message processing with guaranteed delivery and fault tolerance.',
    technologies: ['Go', 'Distributed Systems', 'Message Queues', 'Concurrency'],
    links: {
      github: 'https://github.com/gnana997/message-queue',
    },
    image: '/images/message-queue.jpg'
  },
  {
    title: '1 Billion Rows CLI',
    description: 'A high-performance CLI tool that can parse and analyze 1 billion rows of temperature data in approximately 10 seconds. The tool implements four different algorithms to calculate minimum, average, and maximum temperatures by city.',
    technologies: ['Go', 'Algorithms', 'Performance Optimization', 'CLI'],
    links: {
      github: 'https://github.com/gnana997/billion-rows-cli',
    },
    image: '/images/billion-rows-cli.jpg'
  }
];

const Projects = () => {
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
    <section id="projects" className="section-container relative">
      {/* Terminal connectors at corners */}
      <div className="absolute top-8 left-8 connector-node node-pulse"></div>
      <div className="absolute top-8 right-8 connector-node node-pulse"></div>
      <div className="absolute bottom-8 left-8 connector-node node-pulse"></div>
      <div className="absolute bottom-8 right-8 connector-node node-pulse"></div>
      
      {/* Terminal border frame */}
      <div className="absolute top-8 left-8 right-8 h-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_15px_#00ff00]"></div>
      <div className="absolute bottom-8 left-8 right-8 h-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_15px_#00ff00]"></div>
      <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_15px_#00ff00]"></div>
      <div className="absolute right-8 top-8 bottom-8 w-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_15px_#00ff00]"></div>
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="terminal-prompt mb-8 text-center">
        <span className="text-[#00ffff] font-mono">{`>`} ls -la ./projects</span>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card overflow-hidden flex flex-col h-full bg-black border-[#00ff00] group"
            variants={itemVariants}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.3)",
              borderColor: "#00ffff"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Terminal header */}
            <div className="terminal-header mb-3 group-hover:border-[#00ffff] transition-colors duration-300">
              <div className="terminal-circle terminal-circle-red"></div>
              <div className="terminal-circle terminal-circle-yellow"></div>
              <div className="terminal-circle terminal-circle-green"></div>
              <div className="terminal-title group-hover:text-[#00ffff] transition-colors duration-300">{project.title}.go</div>
            </div>
            
            <div className="relative mb-6 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-[#000000] flex items-center justify-center border border-[#00ff00] group-hover:border-[#00ffff] transition-colors duration-300"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                <FaTerminal className="text-[#00ff00] text-5xl group-hover:text-[#00ffff] transition-colors duration-300" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-2 left-2 right-2 text-center py-1 bg-black/80 border border-[#00ff00] group-hover:border-[#00ffff] transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#00ff00] group-hover:text-[#00ffff] transition-colors duration-300 text-shadow-green">
                  {project.title}
                </h3>
              </motion.div>
            </div>
            
            <div className="terminal-prompt mb-3">
              <span className="text-[#00ffff] font-mono">{`>`} cat README.md</span>
            </div>
            
            <p className="text-[#00ff00] mb-6 flex-grow pl-3 border-l border-[#00ffff]">
              {project.description}
            </p>
            
            <div className="mb-6">
              <div className="terminal-prompt mb-2">
                <span className="text-[#00ffff] font-mono">{`>`} ls -la ./technologies</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-black text-[#00ff00] border border-[#00ffff] rounded-sm shadow-[0_0_8px_rgba(0,255,255,0.3)] group-hover:text-[#00ffff] group-hover:border-[#00ffff] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="terminal-prompt mb-2">
                <span className="text-[#00ffff] font-mono">{`>`} open links</span>
              </div>
              <div className="flex gap-6 pl-3">
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00ff00] hover:text-[#00ffff] transition-colors group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2 text-lg" />
                    <span className="relative">
                      GitHub
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffff] group-hover/link:w-full transition-all duration-300 shadow-[0_0_5px_#00ffff]"></span>
                    </span>
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00ff00] hover:text-[#00ffff] transition-colors group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2 text-lg" />
                    <span className="relative">
                      Live Demo
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffff] group-hover/link:w-full transition-all duration-300 shadow-[0_0_5px_#00ffff]"></span>
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
            
            {/* Corner indicator that appears on hover */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-[#00ffff] transition-all duration-300 shadow-[0_0_10px_#00ff00] group-hover:shadow-[0_0_15px_#00ffff]"></div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="terminal-prompt mt-10 text-center">
        <span className="text-[#00ffff] font-mono">{`>`} _</span>
      </div>
    </section>
  );
};

export default Projects; 