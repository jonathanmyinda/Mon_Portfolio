import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      title: "Analyse du besoin",
      description: "Étude de vos objectifs, de votre cible et définition des spécifications techniques.",
      icon: <Search className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Conception UX/UI",
      description: "Création de wireframes et de maquettes haute-fidélité centrées sur l'utilisateur.",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-indigo-500"
    },
    {
      title: "Développement",
      description: "Codage de la solution avec des technologies modernes et tests rigoureux.",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Livraison",
      description: "Mise en ligne, formation et accompagnement pour le lancement de votre produit.",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Mon Processus</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Une méthodologie structurée pour des résultats garantis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-12 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-current/20`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};