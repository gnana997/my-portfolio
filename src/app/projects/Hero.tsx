'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaNpm, FaTwitter } from 'react-icons/fa';

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '', label: 'NPM Packages' },
  { value: 2, suffix: '', label: 'VS Code Extensions' },
  { value: 'CKA', suffix: '', label: 'Certified', isText: true },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/gnana997', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/gnanavaradaraju', icon: FaLinkedin },
  { name: 'NPM', href: 'https://npmjs.com/~gnana997', icon: FaNpm },
  { name: 'Twitter', href: 'https://x.com/GnanaVaradaraju', icon: FaTwitter },
];

// Animated counter component
function AnimatedCounter({ value, suffix, isText }: { value: number | string; suffix: string; isText?: boolean }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible || isText) return;

    const numValue = typeof value === 'number' ? value : 0;
    const duration = 800;
    const steps = 20;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value, isText]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isText) {
    return <span>{value}</span>;
  }

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Role Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-[#707070] mb-4 tracking-wider"
        >
          SENIOR SOFTWARE ENGINEER
        </motion.p>

        {/* Name */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
        >
          <span className="text-[#EDEDED]">V Gnana</span>
          <br />
          <span className="text-outline">Siva Sai</span>
        </motion.h1>

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-0.5 w-full max-w-md mt-4 origin-left"
          style={{
            background: 'linear-gradient(90deg, #0070F3, #2E2E2E)',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-[#A1A1A1] max-w-2xl leading-relaxed"
        >
          Building high-performance distributed systems and AI-powered developer tools at scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="mailto:gnana097@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            View Resume
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-8 md:gap-x-12 gap-y-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border-l border-[#2E2E2E] pl-6"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#EDEDED]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isText={stat.isText} />
              </div>
              <div className="font-mono text-xs text-[#707070] mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 flex gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#707070] hover:text-[#EDEDED] hover:bg-[#1A1A1A] rounded-lg transition-all"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 md:mt-24 flex items-center gap-3"
        >
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-5 text-[#707070]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
          <span className="font-mono text-xs text-[#707070] tracking-wider">
            SCROLL TO EXPLORE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
