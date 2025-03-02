'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from 'react-icons/fa';
import ClientOnly from './ClientOnlyForm';
import SectionBackground from './SectionBackground';
import Button from './Button';
import TerminalCard from './TerminalCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In a real application, you would send the form data to a server
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionBackground id="contact" pattern="grid">
      <div className="flex flex-col items-center mb-12">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-2">
            <span className="code-tag mr-2">&lt;h2&gt;</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">Get In Touch</h2>
            <span className="code-tag ml-2">&lt;/h2&gt;</span>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
            <span className="code-tag mr-2">&lt;p&gt;</span>
            Have a question or want to work together? Feel free to reach out.
            <span className="code-tag ml-2">&lt;/p&gt;</span>
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <TerminalCard title="contact_info.sh" delay={0.2}>
          <div className="space-y-6">
            <div className="terminal-prompt">
              <span className="terminal-command">echo "Contact Information"</span>
            </div>
            <div className="terminal-output">
              <div className="flex items-center group mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:gnana097@gmail.com" className="text-base font-medium hover:text-primary transition-colors">
                    gnana097@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919578627762" className="text-base font-medium hover:text-primary transition-colors">
                    +91 9578627762
                  </a>
                </div>
              </div>

              <div className="flex items-center group mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/gnanavaradaraju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/gnanavaradaraju
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                  <FaGithub size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/gnana997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    github.com/gnana997
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TerminalCard>

        <TerminalCard title="send_message.js" delay={0.4}>
          <div className="terminal-prompt mb-4">
            <span className="terminal-command">const sendMessage = async () =&gt; {'{'}</span>
          </div>
          <ClientOnly>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-muted-foreground">
                  <span className="text-primary">const</span> name <span className="text-primary">=</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-3 py-2 rounded-md border border-input bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                  placeholder="'Your name'"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-muted-foreground">
                  <span className="text-primary">const</span> email <span className="text-primary">=</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-3 py-2 rounded-md border border-input bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                  placeholder="'your.email@example.com'"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-muted-foreground">
                  <span className="text-primary">const</span> message <span className="text-primary">=</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-input bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                  placeholder="'Your message here...'"
                />
              </div>

              <div className="terminal-prompt mt-2">
                <span className="terminal-command">
                  <span className="text-primary">return</span> (
                </span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                icon={<FaPaperPlane />}
                iconPosition="right"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <div className="terminal-prompt">
                <span className="terminal-command">);</span>
              </div>

              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="terminal-output"
                >
                  <div className="terminal-prompt">
                    <span className="terminal-command">
                      <span className="text-primary">console.log</span>(
                      <span className="text-accent">"Message sent successfully!"</span>);
                    </span>
                  </div>
                </motion.div>
              )}

              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="terminal-output"
                >
                  <div className="terminal-prompt">
                    <span className="terminal-command">
                      <span className="text-red-500">console.error</span>(
                      <span className="text-red-400">"{submitError}"</span>);
                    </span>
                  </div>
                </motion.div>
              )}
            </form>
          </ClientOnly>
          <div className="terminal-prompt mt-4">
            <span className="terminal-command">{'}'}</span>
          </div>
        </TerminalCard>
      </div>
    </SectionBackground>
  );
};

export default Contact; 