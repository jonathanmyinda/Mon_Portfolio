import React from 'react';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'SQL'] },
  { name: 'Design/Tools', items: ['Figma', 'Git', 'Responsive Design', 'API'] },
];

export const Skills = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-16">Ma Stack Technique</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((cat, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
               <h3 className="font-bold text-xl mb-6 text-indigo-600">{cat.name}</h3>
               <div className="flex flex-wrap gap-2">
                 {cat.items.map(s => (
                   <span key={s} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full text-sm font-medium">{s}</span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};