'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Open Source', href: '#opensource' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-[#1F1F1F]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="font-bold text-xl tracking-tight text-[#EDEDED] hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              GNANA.
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-[#A1A1A1] hover:text-[#EDEDED] transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-[#0070F3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
              <a
                href="mailto:gnana097@gmail.com"
                className="ml-4 px-4 py-2 text-sm border border-[#2E2E2E] text-[#EDEDED] hover:border-[#454545] hover:bg-[#1A1A1A] transition-all rounded-md"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#A1A1A1] hover:text-[#EDEDED] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative pt-24 px-6"
            >
              <nav aria-label="Mobile navigation">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-4 text-2xl font-medium text-[#EDEDED] hover:text-[#0070F3] transition-colors border-b border-[#1F1F1F]"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="mailto:gnana097@gmail.com"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 py-4 text-center text-lg font-medium border border-[#2E2E2E] text-[#EDEDED] hover:border-[#0070F3] hover:text-[#0070F3] transition-all rounded-md"
                  >
                    Get in Touch
                  </motion.a>
                </div>
              </nav>

              {/* Social Links in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-6 mt-12 pt-8 border-t border-[#1F1F1F]"
              >
                <a
                  href="https://github.com/gnana997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#707070] hover:text-[#EDEDED] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/gnanavaradaraju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#707070] hover:text-[#EDEDED] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/GnanaVaradaraju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#707070] hover:text-[#EDEDED] transition-colors"
                >
                  Twitter
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
