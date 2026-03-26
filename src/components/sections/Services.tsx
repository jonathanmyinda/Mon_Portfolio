import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, Zap, Search, Globe } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Création de sites web",
      description: "Conception de sites vitrines et institutionnels modernes, optimisés pour le référencement naturel et la conversion.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Interfaces React",
      description: "Développement de composants UI réutilisables et performants pour des applications web fluides et interactives.",
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Applications web",
      description: "Création de SaaS et d'outils métiers complexes avec des dashboards intuitifs et une logique métier robuste.",
      icon: <Layout className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Développement mobile",
      description: "Applications mobiles natives et cross-platform (React Native) performantes pour iOS et Android.",
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "Refonte UI/UX",
      description: "Modernisation de vos interfaces existantes pour améliorer l'expérience utilisateur et l'image de marque.",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Solutions digitales",
      description: "Accompagnement technique global, de l'analyse des besoins au déploiement et à la maintenance.",
      icon: <Search className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Mes Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Des solutions sur mesure pour répondre à vos enjeux digitaux, du web au mobile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};