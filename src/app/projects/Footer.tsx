'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="py-8 px-6 md:px-8 border-t border-[#1F1F1F]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-lg tracking-tight text-[#EDEDED] hover:text-white transition-colors"
          >
            GNANA.
          </a>

          {/* Copyright */}
          <p className="text-sm text-[#707070]">
            &copy; {new Date().getFullYear()} V Gnana Siva Sai. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-[#707070] hover:text-[#EDEDED] transition-colors flex items-center gap-1"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
