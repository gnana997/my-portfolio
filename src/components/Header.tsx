'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      style={{
        transition: 'all 0.3s ease'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">Gnana Varadaraju</span>
          </Link>

          <nav 
            className="hidden"
            style={{
              display: 'none'
            }}
          >
            <Link href="#about" className="hover:text-primary transition-colors" style={{ marginRight: '2rem' }}>
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors" style={{ marginRight: '2rem' }}>
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors" style={{ marginRight: '2rem' }}>
              Projects
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors" style={{ marginRight: '2rem' }}>
              Skills
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Show nav on medium screens and up */}
          <nav 
            style={{
              display: 'none',
              gap: '2rem'
            }}
            className="nav-desktop"
          >
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex" style={{ gap: '1rem' }}>
            <a
              href="https://github.com/gnana997"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gnanavaradaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:gnana097@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 