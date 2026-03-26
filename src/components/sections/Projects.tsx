import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "USCT SARL",
      tag: "E-Commerce & Corporate",
      description: "Conception complète d'un site corporate avec section e-commerce pour une entreprise de logistique. Optimisation du tunnel de vente et gestion de catalogue.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/usct-sarl-project-18a1fa31-1774487197766.webp",
      tech: ["React", "Tailwind", "Node.js", "Stripe"],
      github: "https://github.com/jonathanmyinda/usct-corporate",
      demo: "https://usct-corporate.vercel.app/",
      details: {
        problem: "Besoin de digitaliser la vente de services et produits industriels.",
        solution: "Une plateforme robuste avec paiement sécurisé et interface d'administration simple.",
        result: "+40% de demandes de devis via le site en 3 mois."
      }
    },
    {
      title: "IRMA Congo",
      tag: "Site Professionnel",
      description: "Développement d'une vitrine institutionnelle moderne pour IRMA, mettant en avant les services et l'expertise locale en République du Congo.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/irma-congo-project-6dea666b-1774487209420.webp",
      tech: ["HTML5", "CSS3", "JavaScript", "Animation"],
      github: "https://github.com/jonathanmyinda/Projet_IRMA",
      demo: "https://jonathanmyinda.github.io/Projet_IRMA/",
      details: {
        problem: "Absence de présence en ligne pour une entreprise en pleine croissance.",
        solution: "Un site responsive et élégant reflétant le professionnalisme de la marque.",
        result: "Visibilité accrue et amélioration de la crédibilité client."
      }
    },
    {
      title: "SmartTask Mobile",
      tag: "Application Mobile (Projet Phare)",
      description: "Application mobile de gestion de tâches intuitive. Permet d'organiser son quotidien avec une interface fluide et des rappels intelligents.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/smarttask-mobile-project-97670474-1774487203987.webp",
      tech: ["React Native", "Firebase", "Redux", "UX Design"],
      github: "#",
      demo: "#",
      details: {
        problem: "Difficulté pour les utilisateurs de rester productifs en déplacement.",
        solution: "Une app centrée sur la rapidité d'ajout et la clarté visuelle des priorités.",
        result: "Démontre une expertise avancée en UX mobile et logique cross-platform."
      }
    },
    {
      title: "myDigit Agency",
      tag: "Concept Agency",
      description: "Landing page premium pour une agence digitale fictive, axée sur les animations et l'esthétique moderne.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/mydigit-agency-project-055247ec-1774487203687.webp",
      tech: ["Framer Motion", "React", "Next.js"],
      github: "#",
      demo: "#",
      details: {
        problem: "Manque d'inspiration pour des designs premium dans le secteur local.",
        solution: "Démonstrateur technique de capacités UI haut de gamme.",
        result: "Vitrine de créativité pour attirer des clients haut de gamme."
      }
    },
    {
      title: "Business Dashboard",
      tag: "Application SaaS",
      description: "Interface de gestion d'entreprise complète avec visualisation de données en temps réel et gestion d'utilisateurs.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/business-dashboard-project-86fb31d7-1774487198034.webp",
      tech: ["React", "Chart.js", "SQL", "Dashboard UI"],
      github: "#",
      demo: "#",
      details: {
        problem: "Gestion fragmentée des données opérationnelles.",
        solution: "Un hub centralisé pour suivre les KPIs et la performance.",
        result: "Optimisation du temps de décision pour les managers."
      }
    }
  ];

  return (
    <section id="projets" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Études de Cas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Une sélection de projets web et mobile, du concept à la mise en production.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/jonathanmyinda" target="_blank" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
              Voir tout mon GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-sm font-bold shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="block font-bold mb-1">Problème</span>
                    <span className="text-xs text-slate-500">{project.details.problem}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/10">
                    <span className="block font-bold mb-1 text-blue-600">Solution</span>
                    <span className="text-xs text-slate-500">{project.details.solution}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/10">
                    <span className="block font-bold mb-1 text-green-600">Résultat</span>
                    <span className="text-xs text-slate-500">{project.details.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};