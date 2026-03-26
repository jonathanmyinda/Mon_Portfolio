import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Audit & Stratégie",
    desc: "Analyse de vos besoins, objectifs et public cible pour définir une roadmap claire.",
    icon: Target
  },
  {
    title: "Conception UI/UX",
    desc: "Création de prototypes et de maquettes mettant l'accent sur la fluidité et la conversion.",
    icon: Lightbulb
  },
  {
    title: "Développement Agile",
    desc: "Écriture de code propre, testé et maintenable en vous tenant informé régulièrement.",
    icon: Code
  },
  {
    title: "Lancement & Suivi",
    desc: "Mise en production, tests finaux et accompagnement pour la prise en main de l'outil.",
    icon: Rocket
  }
];

export function Process() {
  return (
    <section id="processus" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Ma Méthodologie</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Comment nous allons travailler ensemble.</h3>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-950 p-6 text-center"
              >
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-500/30 relative">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white dark:border-slate-950">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}