'use client';

import { motion } from 'framer-motion';
import { FaAward, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-container relative">
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
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="terminal-prompt mb-6">
            <span className="text-[#00ffff] font-mono">{`>`} cat profile.md</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-[#00ff00] text-shadow-green">
            Full Stack Developer & DevOps Engineer
          </h3>
          
          <div className="terminal-output mb-8 pl-4 border-l-2 border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            <p className="mb-6 text-[#00ff00]">
              I am an experienced Full Stack Developer and DevOps Engineer with over 5 years of expertise in building scalable applications and managing cloud infrastructure. I am proficient in <span className="text-[#00ffff] text-shadow-cyan">Kubernetes</span>, <span className="text-[#00ffff] text-shadow-cyan">AWS</span>, <span className="text-[#00ffff] text-shadow-cyan">CI/CD pipelines</span>, and automation using <span className="text-[#00ffff] text-shadow-cyan">Go</span>. I have a proven ability to enhance system reliability and streamline deployments.
            </p>
            
            <p className="mb-6 text-[#00ff00]">
              Currently working as a <span className="text-[#ff00ff]">Member of Technical Staff - 3</span> at <span className="text-[#ff00ff]">Pure Storage</span>, I focus on architecting high-availability solutions, implementing service meshes, and developing efficient CI/CD pipelines. I am passionate about creating robust systems that deliver exceptional performance and reliability.
            </p>
            
            <p className="text-[#00ff00]">
              I hold certifications as a <span className="text-[#00ffff] text-shadow-cyan">Certified Kubernetes Administrator</span> and <span className="text-[#00ffff] text-shadow-cyan">AWS Developer Associate</span>, demonstrating my commitment to staying at the forefront of cloud technologies.
            </p>
          </div>
          
          <div className="terminal-prompt">
            <span className="text-[#00ffff] font-mono">{`>`} _</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="card relative overflow-hidden group"
            whileHover={{ 
              y: -10,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.4)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FaAward className="text-[#00ffff] text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-[#00ff00] text-shadow-green">Experience</h4>
            <p className="text-[#00ff00]">5+ Years</p>
            <p className="text-[#00ff00]">Professional Experience</p>
            
            {/* Terminal connector at bottom right */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00ff00]"></div>
          </motion.div>

          <motion.div 
            className="card relative overflow-hidden group"
            whileHover={{ 
              y: -10,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.4)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FaLaptopCode className="text-[#00ffff] text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-[#00ff00] text-shadow-green">Full Stack</h4>
            <p className="text-[#00ff00]">Frontend & Backend</p>
            <p className="text-[#00ff00]">Development</p>
            
            {/* Terminal connector at bottom right */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00ff00]"></div>
          </motion.div>

          <motion.div 
            className="card relative overflow-hidden group"
            whileHover={{ 
              y: -10,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.4)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FaServer className="text-[#00ffff] text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-[#00ff00] text-shadow-green">DevOps</h4>
            <p className="text-[#00ff00]">Cloud Infrastructure</p>
            <p className="text-[#00ff00]">& Automation</p>
            
            {/* Terminal connector at bottom right */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00ff00]"></div>
          </motion.div>

          <motion.div 
            className="card relative overflow-hidden group"
            whileHover={{ 
              y: -10,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.4)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-md bg-black border border-[#00ffff] text-[#00ffff] mb-4 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              <span className="text-2xl font-bold">K8s</span>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-[#00ff00] text-shadow-green">Kubernetes</h4>
            <p className="text-[#00ff00]">Certified Administrator</p>
            <p className="text-[#00ff00]">& Expert</p>
            
            {/* Terminal connector at bottom right */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00ff00]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 