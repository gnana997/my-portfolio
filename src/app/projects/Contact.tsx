'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaNpm, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/gnana997', icon: FaGithub, handle: 'gnana997' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/gnanavaradaraju', icon: FaLinkedin, handle: 'gnanavaradaraju' },
  { name: 'npm', href: 'https://npmjs.com/~gnana997', icon: FaNpm, handle: '~gnana997' },
  { name: 'Twitter', href: 'https://x.com/GnanaVaradaraju', icon: FaTwitter, handle: '@GnanaVaradaraju' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-[#707070] tracking-wider mb-4">
            LET&apos;S CONNECT
          </p>
          <h2
            id="contact-heading"
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#EDEDED] mb-8"
          >
            Get in Touch
          </h2>
        </motion.div>

        {/* Email Link */}
        <motion.a
          href="mailto:gnana097@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-xl md:text-2xl text-[#EDEDED] border-b-2 border-[#EDEDED] pb-1 hover:text-[#0070F3] hover:border-[#0070F3] transition-colors"
        >
          gnana097@gmail.com
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>

        {/* Phone */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-[#707070]"
        >
          <a
            href="tel:+91-9578627762"
            className="hover:text-[#EDEDED] transition-colors"
          >
            +91-9578627762
          </a>
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 mt-16"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#707070] hover:text-[#EDEDED] transition-colors"
              aria-label={`Visit ${social.name} profile`}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs">{social.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
