import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible pour nouveaux projets
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
          >
            Développeur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Full-Stack & Mobile
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Je conçois des sites et applications web et mobile modernes, performants et centrés utilisateur. Transformez vos idées en solutions digitales robustes et élégantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              Voir mes projets
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center gap-8 opacity-50 dark:opacity-40"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Web</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium">Performance</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-4/5 pointer-events-none">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/hero-background-3419a323-1774487201664.webp" 
          alt="Interface Design" 
          className="w-full h-full object-cover rounded-l-[4rem] shadow-2xl opacity-80 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
};