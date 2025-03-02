'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'BTech',
    institution: 'Vellore Institute Of Technology',
    period: '2015 - 2019',
    location: 'Vellore',
    type: 'education'
  }
];

const certifications = [
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022',
    type: 'certification'
  },
  {
    name: 'AWS Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2021',
    type: 'certification'
  }
];

const Education = () => {
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
    <section id="education" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <FaGraduationCap className="text-primary text-3xl mr-4" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          {education.map((item, index) => (
            <motion.div key={index} className="card mb-6" variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
              <p className="text-lg mb-1">{item.institution}</p>
              <p className="text-muted-foreground mb-1">{item.period}</p>
              <p className="text-muted-foreground">{item.location}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <FaCertificate className="text-primary text-3xl mr-4" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          {certifications.map((item, index) => (
            <motion.div key={index} className="card mb-6" variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2">{item.name}</h4>
              <p className="text-lg mb-1">{item.issuer}</p>
              <p className="text-muted-foreground">{item.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 