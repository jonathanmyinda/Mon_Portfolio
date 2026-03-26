import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                JM
              </div>
              <span className="font-bold text-xl dark:text-white">Jonathan Myinda</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Développeur Full-Stack & Mobile • Expert UI/UX
            </p>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Jonathan Myinda. Tous droits réservés.
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <a href="#projets" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Projets</a>
            <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};