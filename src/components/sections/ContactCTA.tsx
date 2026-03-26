import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { toast } from 'sonner';

export const ContactCTA = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("myindaj@gmail.com");
    toast.success("Email copié dans le presse-papier !");
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 dark:bg-blue-950/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Vous avez un projet web ou mobile ? Parlons-en.
          </h2>
          <p className="text-xl text-blue-100/70 mb-12">
            Que vous soyez une entreprise établie ou un porteur de projet innovant, je suis prêt à vous accompagner dans votre réussite numérique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              <Mail className="w-6 h-6" />
              myindaj@gmail.com
            </button>
            <a
              href="https://linkedin.com/in/jonathanmyinda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl"
            >
              Me contacter sur LinkedIn
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-10">
            <a href="https://github.com/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-white/60 text-xs font-medium uppercase tracking-widest">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-white/60 text-xs font-medium uppercase tracking-widest">LinkedIn</span>
            </a>
            <a 
              href="/cv-jonathan-myinda.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Mon CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};