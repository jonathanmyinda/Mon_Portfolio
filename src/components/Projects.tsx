import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    category: "Application Web Complexe",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/saas-dashboard-project-2fa5a30e-1774302388272.webp",
    problem: "Les entreprises avaient du mal à visualiser leurs données de ventes en temps réel.",
    solution: "Développement d'un dashboard intuitif avec visualisation interactive et API temps réel.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Nexus Real-Time App",
    category: "Communication & Collaboration",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/mobile-messaging-app-project-1f3b1713-1774302388125.webp",
    problem: "Nécessité d'une plateforme de messagerie mobile sécurisée et ultra-rapide.",
    solution: "Architecture basée sur les WebSockets pour une latence minimale et chiffrement de bout en bout.",
    stack: ["React Native", "Socket.io", "Firebase", "Styled Components"],
    link: "#",
    github: "#"
  },
  {
    title: "Aura Luxury Landing",
    category: "Design & Marketing",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/luxury-brand-landing-page-825b0fbc-1774302389247.webp",
    problem: "Une marque de luxe souhaitait moderniser son image digitale pour attirer une clientèle plus jeune.",
    solution: "Refonte complète axée sur le minimalisme, les micro-animations et la performance SEO.",
    stack: ["React", "Framer Motion", "Tailwind", "Next.js"],
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projets" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Des solutions concrètes pour des défis réels.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Chaque projet est une opportunité de résoudre un problème métier par une technologie élégante et efficace.
            </p>
          </div>
          <a
            href="https://github.com/jonathanmyinda"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            Voir plus sur GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <a href={project.link} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <Code2 className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h4>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter block mb-1">Le Problème</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter block mb-1">La Solution</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-100 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}