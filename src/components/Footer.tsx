import React from 'react';
import { Mail, ChevronUp, Globe, Briefcase } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
              Jonathan<span className="text-indigo-600">Myinda</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs">
              Développeur Full-Stack & Designer UI/UX basé en France. Créer des produits digitaux avec passion.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a href="https://github.com/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-indigo-600 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-indigo-600 transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="mailto:myindaj@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
            >
              Retour en haut <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Jonathan Myinda. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-slate-500 hover:underline">Mentions Légales</a>
            <a href="#" className="text-xs text-slate-500 hover:underline">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}