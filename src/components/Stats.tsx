import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Layers, MapPin } from 'lucide-react';

const stats = [
  { label: 'Projets livrés', value: '25+', icon: Globe },
  { label: 'Stack Principale', value: 'React / Node', icon: Code2 },
  { label: 'Spécialisation', value: 'UI/UX & Performance', icon: Layers },
  { label: 'Localisation', value: 'Paris / Remote', icon: MapPin },
];

export function Stats() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-3"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}