import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Prêt à propulser votre <span className="text-primary">vision digitale</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Que vous soyez une entreprise en pleine croissance ou une organisation à fort impact, je suis là pour construire la solution technologique dont vous avez besoin.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold group" asChild>
              <a href="mailto:myindaj@gmail.com">
                <Mail className="mr-2 w-6 h-6" />
                Démarrer un projet
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold" asChild>
              <a href="https://wa.me/243980215272" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 w-6 h-6" />
                Discuter sur WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Réponse sous 24h
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Consultation gratuite (30 min)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Freelance & Recrutement
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};