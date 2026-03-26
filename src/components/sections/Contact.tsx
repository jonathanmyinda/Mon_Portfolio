import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-card border border-border rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Info */}
            <div className="p-12 lg:p-20 bg-primary text-primary-foreground relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.9]">
                  Commençons <br />à construire <br /><span className="text-white/60 italic">demain.</span>
                </h2>
                <p className="text-primary-foreground/80 text-xl mb-16 leading-relaxed font-medium">
                  Vous avez un projet web ou mobile en tête ? Je suis prêt à vous accompagner pour lui donner vie. Discutons de vos objectifs !
                </p>

                <div className="space-y-10">
                  <a href="mailto:myindaj@gmail.com" className="flex items-center space-x-6 group">
                    <div className="bg-white/10 p-5 rounded-[1.5rem] group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-primary-foreground/60 font-black uppercase tracking-[0.2em] mb-1">Email</span>
                      <span className="text-xl md:text-2xl font-bold tracking-tighter">myindaj@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center space-x-6 pt-10 border-t border-white/10">
                    <a href="https://github.com/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1">
                      <Github className="w-7 h-7" />
                    </a>
                    <a href="https://linkedin.com/in/jonathanmyinda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1">
                      <Linkedin className="w-7 h-7" />
                    </a>
                    <a href="https://wa.me/243980215272" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1">
                      <MessageSquare className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Form */}
            <div className="p-12 lg:p-20 bg-card">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-8 py-5 rounded-2xl border border-border bg-muted/30 focus:bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full px-8 py-5 rounded-2xl border border-border bg-muted/30 focus:bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Votre message</label>
                  <textarea
                    rows={5}
                    placeholder="Dites-moi en plus sur votre projet (Web, Mobile, etc.)..."
                    className="w-full px-8 py-5 rounded-2xl border border-border bg-muted/30 focus:bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none font-medium"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black text-xl tracking-widest uppercase flex items-center justify-center group hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Envoyer le message
                  <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Contact;