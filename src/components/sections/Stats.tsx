import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, CheckCircle, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Projets réalisés', value: '10+', icon: Code2 },
    { label: 'Stack principale', value: 'React / RN', icon: Smartphone },
    { label: 'Spécialisation', value: 'Web & Mobile', icon: Zap },
    { label: 'Disponibilité', value: 'Immédiate', icon: CheckCircle },
  ];

  return (
    <section className="py-16 border-y border-border bg-card/30 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-foreground tracking-tighter mb-1">{stat.value}</div>
              <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;