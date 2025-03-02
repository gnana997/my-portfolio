'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

interface NavItem {
  number: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { number: '01', label: 'Home', href: '#home' },
  { number: '02', label: 'Portfolio', href: '#portfolio' },
  { number: '03', label: 'Press', href: '#press' },
  { number: '04', label: 'Contact', href: '#contact' },
];

const TerminalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_0_10px_rgba(0,255,0,0.3)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="#home" 
            className="flex items-center text-[#00ff00] font-mono text-lg font-bold hover:text-[#00ffff] transition-colors"
            style={{ textShadow: "0 0 10px rgba(0, 255, 0, 0.5)" }}
          >
            <div className="mr-2 h-6 w-6 rounded-full border border-[#00ff00] flex items-center justify-center">
              <span className="text-xs">&gt;</span>
            </div>
            <span>Gnana</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="relative group"
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-[#00ff00] font-mono group-hover:text-[#00ffff] transition-colors">
                    {item.number}.
                  </span>
                  <span className="text-[#00ff00] hover:text-[#00ffff] transition-colors font-mono">
                    {item.label}
                  </span>
                </div>
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#00ff00] shadow-[0_0_5px_#00ff00] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button 
                variant="primary"
                size="sm"
              >
                <span className="text-[#00ff00]">&lt;DOWNLOAD CV/&gt;</span>
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#00ff00] hover:text-[#00ffff] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-lg">&times;</span>
            ) : (
              <span className="text-lg">&equiv;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black border border-[#00ff00] shadow-[0_0_10px_rgba(0,255,0,0.3)] mx-4 my-2 rounded-md overflow-hidden"
        >
          <div className="terminal-header">
            <div className="terminal-circle terminal-circle-red"></div>
            <div className="terminal-circle terminal-circle-yellow"></div>
            <div className="terminal-circle terminal-circle-green"></div>
            <div className="terminal-title">navigation.sh</div>
          </div>
          <div className="terminal-body p-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.number} className="terminal-prompt">
                  <Link
                    href={item.href}
                    className="block py-2 text-[#00ff00] hover:text-[#00ffff] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="terminal-command">
                      cd <span className="text-[#00ffff]">/{item.label.toLowerCase()}</span>
                    </span>
                  </Link>
                </div>
              ))}
              <div className="terminal-prompt mt-6">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block py-2 text-[#00ff00] hover:text-[#00ffff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="terminal-command">
                    wget <span className="text-[#ff00ff]">resume.pdf</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default TerminalNav; 