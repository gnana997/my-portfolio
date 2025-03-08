// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const contactInfo = {
  email: "gnana097@gmail.com",
  phone: "+91-9578627762",
  twitter: "https://x.com/GnanaVaradaraju", // Replace with your actual Twitter URL
  linkedin: "https://linkedin.com/in/gnanavaradaraju", // Replace with your actual LinkedIn URL
  github: "https://github.com/gnana997",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-800/70 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="text-center text-gray-300" aria-label="Contact information">
            <p className="text-lg mb-6">Feel free to reach out to me through any of these channels!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-full text-gray-300 hover:text-white transition-all duration-200"
                aria-label={`Send email to ${contactInfo.email}`}
              >
                <FaEnvelope className="text-xl text-blue-400" aria-hidden="true" />
                <span className="text-sm md:text-base">{contactInfo.email}</span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-full text-gray-300 hover:text-white transition-all duration-200"
                aria-label={`Call ${contactInfo.phone}`}
              >
                <FaPhone className="text-xl text-blue-400" aria-hidden="true" />
                <span className="text-sm md:text-base">{contactInfo.phone}</span>
              </motion.a>

              {/* Twitter */}
              <motion.a
                href={contactInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-full text-gray-300 hover:text-white transition-all duration-200"
                aria-label="Visit my Twitter profile (opens in new tab)"
              >
                <FaX className="text-xl text-blue-400" aria-hidden="true" />
                <span className="text-sm md:text-base">Gnana Varadaraju</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-full text-gray-300 hover:text-white transition-all duration-200"
                aria-label="Visit my LinkedIn profile (opens in new tab)"
              >
                <FaLinkedin className="text-xl text-blue-400" aria-hidden="true" />
                <span className="text-sm md:text-base">Gnana Varadaraju</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-full text-gray-300 hover:text-white transition-all duration-200 md:col-span-2 md:max-w-md md:mx-auto"
                aria-label="Visit my GitHub profile (opens in new tab)"
              >
                <FaGithub className="text-xl text-blue-400" aria-hidden="true" />
                <span className="text-sm md:text-base">gnana997</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;