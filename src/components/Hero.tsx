'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import Button from './Button';
import TerminalCard from './TerminalCard';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Terminal border connectors */}
      <div className="absolute top-20 left-20 connector-node node-pulse"></div>
      <div className="absolute top-20 right-20 connector-node node-pulse"></div>
      <div className="absolute bottom-20 left-20 connector-node node-pulse"></div>
      <div className="absolute bottom-20 right-20 connector-node node-pulse"></div>
      
      {/* Connecting lines */}
      <div className="absolute top-20 left-20 right-20 h-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_10px_#00ff00]"></div>
      <div className="absolute bottom-20 left-20 right-20 h-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_10px_#00ff00]"></div>
      <div className="absolute left-20 top-20 bottom-20 w-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_10px_#00ff00]"></div>
      <div className="absolute right-20 top-20 bottom-20 w-[2px] bg-[#00ff00] opacity-50 shadow-[0_0_10px_#00ff00]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px bg-[#00ff00] mb-4"
              />
              <p className="text-[#00ff00] font-mono mb-4 relative text-shadow-green">
                <span className="terminal-prompt">{'>'} Hello, World! I am</span>
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-[#00ff00] relative z-10"
                style={{ textShadow: "0 0 10px rgba(0, 255, 0, 0.7)" }}
              >
                Gnana
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block text-[#00ffff] relative z-10"
                style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.7)" }}
              >
                Varadaraju
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center mb-4"
            >
              <div className="h-px bg-[#00ff00] flex-grow mr-4"></div>
              <p className="text-[#00cc00] font-mono text-sm">Developer and DevOps Engineer</p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[#00ff00] mb-8 max-w-lg font-mono relative"
          >
            <span className="terminal-prompt">{'>'} cat about.txt</span>
            <br />
            <span className="block mt-2 terminal-output">
              I build and deploy scalable applications with modern technologies. 
              Specializing in Kubernetes, AWS, and CI/CD pipelines to deliver 
              robust solutions for complex problems.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaDownload />}
              iconPosition="right"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/gnana997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00ff00] hover:text-[#00ffff] transition-all transform hover:scale-110"
                whileHover={{ y: -2 }}
                style={{ textShadow: "0 0 10px rgba(0, 255, 0, 0.7)" }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/gnanavaradaraju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00ff00] hover:text-[#00ffff] transition-all transform hover:scale-110"
                whileHover={{ y: -2 }}
                style={{ textShadow: "0 0 10px rgba(0, 255, 0, 0.7)" }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff00] to-[#00ffff] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            <TerminalCard title="developer.config.js">
              <div className="space-y-4">
                <div className="terminal-prompt">
                  <span className="terminal-command">
                    <span className="text-[#00ffff]">const</span> developer = {'{'} 
                  </span>
                </div>
                
                <div className="terminal-command group pl-4">
                  name: <motion.span 
                    className="text-[#ff00ff]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >"Gnana Siva Sai Varadaraju"</motion.span>,
                </div>
                <div className="terminal-command group pl-4">
                  title: <motion.span 
                    className="text-[#ff00ff]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >"Full Stack Developer & DevOps Engineer"</motion.span>,
                </div>
                <div className="terminal-command group pl-4">
                  location: <motion.span 
                    className="text-[#ff00ff]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >"Bengaluru, India"</motion.span>,
                </div>
                <div className="terminal-command group pl-4">
                  skills: [
                  <motion.span 
                    className="text-[#ff00ff]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    "Kubernetes", "AWS", "Go", "React", "Node.js"
                  </motion.span>
                  ],
                </div>
                <div className="terminal-command group pl-4">
                  interests: [
                  <motion.span 
                    className="text-[#ff00ff]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    "Cloud Native", "DevOps", "Microservices"
                  </motion.span>
                  ]
                </div>
                <div className="terminal-prompt">
                  <span className="terminal-command">{'}'}</span>
                </div>
                <div className="terminal-prompt mt-4">
                  <span className="terminal-command">
                    <span className="text-[#00ffff]">console</span>.log(developer.greeting);
                  </span>
                </div>
                <motion.div 
                  className="terminal-output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <span className="text-[#ff00ff]">"Hello! I'm passionate about building scalable systems and solving complex problems."</span>
                </motion.div>
              </div>
            </TerminalCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 