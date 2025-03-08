// src/components/Hero.jsx
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Runtime",
    skills: [
      { name: "Go", icon: "go" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Terraform", icon: "terraform" }
    ]
  },
  {
    title: "Databases & Messaging",
    skills: [
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Cassandra", icon: "cassandra" },
      { name: "Kafka", icon: "kafka" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" }
    ]
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "React", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Spring", icon: "spring" },
      { name: "VSCode", icon: "vscode" },
    ]
  }
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.03, boxShadow: "0px 8px 30px rgba(59, 130, 246, 0.2)" }
};

const iconVariants = {
  hover: { 
    scale: 1.15,
    transition: { duration: 0.2 }
  }
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-6xl mx-auto px-4"
      >
        <h1
          id="hero-heading"
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Gnana Siva Sai Varadaraju
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">MTS-3 @ PureStorage</p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Software Engineer specializing in distributed systems and scalable solutions
        </p>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 shadow-lg hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-6 text-blue-400">{category.title}</h3>
                <div className="grid grid-cols-5 gap-4 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative group"
                      whileHover="hover"
                    >
                      <motion.img
                        variants={iconVariants}
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300"
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        <span className="bg-gray-900/90 text-gray-200 text-sm px-2 py-1 rounded">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="mailto:gnana097@gmail.com"
          className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 mb-6 rounded-full text-white font-semibold shadow-md transition-all duration-300"
          aria-label="Send email to gnana097@gmail.com"
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 text-gray-400 text-sm"
      >
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-4 border-b-2 border-r-2 border-gray-400 transform rotate-45 mx-auto mt-2"
        ></motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;