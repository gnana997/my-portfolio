'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TerminalCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

const TerminalCard = ({ 
  children, 
  title = 'terminal@portfolio', 
  className = '',
  delay = 0
}: TerminalCardProps) => {
  return (
    <motion.div
      className={`overflow-hidden rounded-lg border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="terminal-header">
        <div className="terminal-circle terminal-circle-red"></div>
        <div className="terminal-circle terminal-circle-yellow"></div>
        <div className="terminal-circle terminal-circle-green"></div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body bg-black">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalCard; 