'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  children: ReactNode;
  className?: string;
  id?: string;
  pattern?: 'hero' | 'section' | 'grid' | 'none';
}

const SectionBackground = ({ 
  children, 
  className = '', 
  id,
  pattern = 'section' 
}: SectionBackgroundProps) => {
  const patternClass = pattern === 'none' 
    ? '' 
    : pattern === 'hero' 
      ? 'bg-hero-pattern' 
      : pattern === 'grid' 
        ? 'bg-grid-pattern bg-[size:50px_50px]' 
        : 'bg-section-pattern';

  return (
    <section 
      id={id} 
      className={`section-container relative ${className}`}
    >
      <motion.div
        className={`absolute inset-0 opacity-30 ${patternClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionBackground; 