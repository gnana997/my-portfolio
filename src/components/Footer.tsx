'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-primary font-mono mr-2">{'>'}</span>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">const</span> copyright = 
                <span className="text-accent"> {`"© ${currentYear} Gnana Siva Sai Varadaraju"`}</span>;
              </p>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-primary font-mono mr-2">{'>'}</span>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">const</span> rights = 
                <span className="text-accent"> "All rights reserved"</span>;
              </p>
            </div>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/gnana997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/gnanavaradaraju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:gnana097@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            Built with Next.js, TypeScript, and Tailwind CSS
            <span className="text-primary">{'/>'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 