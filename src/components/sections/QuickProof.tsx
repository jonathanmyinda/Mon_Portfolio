import React from 'react';
import { motion } from 'framer-motion';

export const QuickProof = () => {
  const stats = [
    { label: 'Projets réalisés', value: '15+' },
    { label: 'Stack principale', value: 'React / Node' },
    { label: 'Spécialisation', value: 'Web & Mobile' },
    { label: 'Disponibilité', value: 'Immédiate' },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};