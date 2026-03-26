import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Zustand"],
  backend: ["Node.js", "Express", "SQL (PostgreSQL)", "NoSQL (MongoDB)", "REST APIs"],
  tools: ["Git", "Docker", "Figma", "Vercel / Netlify", "Postman"]
};

export function About() {
  return (
    <section id="a-propos" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">À propos</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Jonathan Myinda : <br />
              <span className="text-slate-500">Allier code & design.</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Depuis plus de 3 ans, j'aide les entreprises et entrepreneurs à transformer leurs visions complexes en produits numériques simples et impactants. 
              Mon approche repose sur trois piliers : la performance technique, l'élégance visuelle et l'expérience utilisateur.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Ce qui me différencie ? Ma double casquette. Je comprends les enjeux business et UX, ce qui me permet d'écrire du code qui n'est pas seulement fonctionnel, mais stratégique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-medium">Orientation Résultats</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-medium">Clean Code & TDD</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-medium">Culture UX/UI Forte</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-medium">Agile & Reactif</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                Stack Principale
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Front-end</h5>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(s => <span key={s} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-semibold border border-indigo-100 dark:border-indigo-800">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Back-end</h5>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map(s => <span key={s} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold border border-slate-100 dark:border-slate-700">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Outils & Workflow</h5>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map(s => <span key={s} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold border border-slate-100 dark:border-slate-700">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}