'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGithub, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiGo, SiKubernetes, SiSpringboot, SiTerraform } from 'react-icons/si';

const skillCategories = [
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Kubernetes', icon: <SiKubernetes size={28} />, level: 95 },
      { name: 'AWS', icon: <FaAws size={28} />, level: 90 },
      { name: 'Docker', icon: <FaDocker size={28} />, level: 95 },
      { name: 'Terraform', icon: <SiTerraform size={28} />, level: 85 },
      { name: 'CI/CD', icon: <FaGithub size={28} />, level: 90 },
    ]
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Go', icon: <SiGo size={28} />, level: 90 },
      { name: 'Java', icon: <FaJava size={28} />, level: 85 },
      { name: 'JavaScript', icon: <FaJs size={28} />, level: 85 },
      { name: 'Python', icon: <FaPython size={28} />, level: 80 },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot size={28} />, level: 85 },
      { name: 'React', icon: <FaReact size={28} />, level: 80 },
      { name: 'Node.js', icon: <FaNodeJs size={28} />, level: 80 },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-container relative">
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
        Skills & Technologies
      </motion.h2>

      <div className="terminal-prompt mb-8 text-center">
        <span className="text-[#00ffff] font-mono">{`>`} skills --scan-proficiency</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="card relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.7), 0 0 50px rgba(0, 255, 0, 0.3)"
            }}
          >
            <div className="terminal-header mb-6 group-hover:border-[#00ffff] transition-colors duration-300">
              <div className="terminal-circle terminal-circle-red"></div>
              <div className="terminal-circle terminal-circle-yellow"></div>
              <div className="terminal-circle terminal-circle-green"></div>
              <div className="terminal-title group-hover:text-[#00ffff] transition-colors duration-300">{category.name}</div>
            </div>
            
            <div className="terminal-prompt mb-4">
              <span className="text-[#00ffff] font-mono">{`>`} proficiency --view</span>
            </div>
            
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div key={skillIndex} variants={itemVariants} className="relative">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-[#00ffff] group-hover:text-[#00ffff] transition-colors duration-300 transform group-hover:scale-110">{skill.icon}</div>
                    <span className="font-medium text-[#00ff00] text-lg">{skill.name}</span>
                    <span className="ml-auto text-[#00ff00] font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-[6px] bg-black border border-[#00ff00] rounded-sm overflow-hidden relative">
                    <motion.div
                      className="h-full bg-[#00ff00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    {/* Glow effect on top of progress bar */}
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#00ff00] opacity-50 blur-sm"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  
                  {/* Skill level indicators */}
                  <div className="flex justify-between mt-1 text-xs text-[#00ff00] opacity-50">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                  </div>
                  <div className="flex justify-between mt-0 text-xs font-mono text-[#00ffff] opacity-60">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Corner indicator that appears on hover */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-[#00ffff] transition-all duration-300 shadow-[0_0_10px_#00ff00] group-hover:shadow-[0_0_15px_#00ffff]"></div>
          </motion.div>
        ))}
      </div>
      
      <div className="terminal-prompt mt-10 text-center">
        <span className="text-[#00ffff] font-mono">{`>`} _</span>
      </div>
    </section>
  );
};

export default Skills; 