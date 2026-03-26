import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="a-propos" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-slate-900 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/195773251?v=4"
                alt="Jonathan Myinda"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl">
              <div className="text-4xl font-bold">Full</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Stack & Mobile</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Passionné par la création d'expériences numériques d'exception
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Je suis Jonathan Myinda, développeur full-stack & mobile avec une forte sensibilité UI/UX. Mon approche est centrée sur l'utilisateur : je ne me contente pas de coder, je conçois des solutions qui apportent une réelle valeur ajoutée à vos clients.
              </p>
              <p>
                Spécialisé dans l'écosystème React (Web & Mobile), j'accompagne les entreprises et les porteurs de projets dans la transformation de leurs idées en produits digitaux performants, scalables et esthétiques.
              </p>
              <p>
                Ma polyvalence me permet d'intervenir sur toute la chaîne de production : de l'analyse stratégique à la conception d'interfaces, jusqu'au déploiement et à l'optimisation des performances.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Qualité</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Code propre & maintenable</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Rapidité</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Délais respectés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Écoute</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Collaboration étroite</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};