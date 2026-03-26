import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Jonathan<span className="text-primary">.Myinda</span>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Full-stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-400">Projects</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-400">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-400">About</a>
          </div>

          <div className="flex items-center space-x-5">
            <a href="https://github.com/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:myindaj@gmail.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} Jonathan Myinda. All rights reserved. Built with React 19 & Tailwind.
          </p>
          <div className="flex space-x-4 text-xs text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;