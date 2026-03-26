import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Smartphone } from 'lucide-react';

const stats = [
  { label: 'Projets Livrés', value: '40+', icon: Code2 },
  { label: 'Expérience', value: '5 ans', icon: Layout },
  { label: 'Technologies', value: '15+', icon: Database },
  { label: 'Localisation', value: 'Paris / Remote', icon: Smartphone },
];

export const Proof = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground/50 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};