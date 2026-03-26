import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Palette, Database, Zap, Globe } from 'lucide-react';

const services = [
  {
    title: 'Sites Vitrines & SEO',
    desc: "Création de sites ultra-rapides, responsives et optimisés pour le SEO pour booster votre présence digitale.",
    icon: Globe,
    color: 'bg-blue-500'
  },
  {
    title: 'Interfaces React Premium',
    desc: "Conception d'interfaces modernes avec Framer Motion, mettant l'accent sur une expérience utilisateur fluide.",
    icon: Palette,
    color: 'bg-indigo-500'
  },
  {
    title: 'Applications Web (SaaS)',
    desc: "Développement d'outils métiers complexes (CRM, Dashboards) avec gestion robuste des bases de données.",
    icon: Database,
    color: 'bg-purple-500'
  },
  {
    title: 'Refonte & Performance',
    desc: "Audit et optimisation des performances, de l'accessibilité et modernisation visuelle de vos outils.",
    icon: Zap,
    color: 'bg-orange-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Expertise technique & vision stratégique.</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Je ne me contente pas de coder ; je conçois des outils qui servent vos objectifs d'affaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all shadow-sm hover:shadow-xl group"
            >
              <div className={`w-12 h-12 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}