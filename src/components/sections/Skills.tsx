import React from 'react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const categories = [
    {
      title: "Développement Web",
      skills: ["HTML5", "CSS3 / TailwindCSS", "JavaScript (ES6+)", "React / Next.js", "TypeScript"]
    },
    {
      title: "Développement Mobile",
      skills: ["React Native", "Flutter", "Interfaces Mobiles", "Logique Applicative", "Optimisation OS"]
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "PostgreSQL / SQL", "Firebase", "REST APIs"]
    },
    {
      title: "Outils & Design",
      skills: ["Git / GitHub", "UX/UI Design", "Figma", "Responsive Design", "SEO / Performances"]
    }
  ];

  return (
    <section id="competences" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Expertise Technique
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Une stack moderne pour des solutions robustes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};