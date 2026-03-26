import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export function CTA() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("myindaj@gmail.com");
    toast.success("Email copié dans le presse-papier !");
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Prêt à lancer votre prochain projet ?
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Que ce soit pour une mission freelance ou une opportunité en CDI, je suis toujours à l'écoute de nouveaux défis passionnants.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:myindaj@gmail.com"
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3"
              >
                Démarrer un projet <Send className="w-5 h-5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xl font-bold transition-all backdrop-blur-md border border-white/10 flex items-center justify-center gap-3"
              >
                Copier l'email <Mail className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center gap-10 text-slate-400">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Disponible maintenant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}