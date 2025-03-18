'use client';

// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md p-4 z-50 shadow-lg"
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1, color: "#93c5fd" }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          @gnana997
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-6">
            {["Home", "Experience", "Projects", "Github", "Contact"].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#93c5fd" }}
                  className="text-gray-300 text-sm md:text-base font-medium hover:text-blue-400 transition-colors duration-200"
                  aria-label={`Go to ${item.toLowerCase()} section`}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col p-4 border-t border-gray-800">
                {["Home", "Experience", "Projects", "Github", "Contact"].map((item) => (
                  <li key={item} className="py-2">
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 5, color: "#93c5fd" }}
                      className="text-gray-300 text-lg font-medium hover:text-blue-400 transition-colors duration-200 block"
                      aria-label={`Go to ${item.toLowerCase()} section`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;