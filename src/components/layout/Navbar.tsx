import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Compétences', href: '#competences' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl py-4 border-b border-border shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="bg-primary p-2 rounded-2xl transition-transform group-hover:rotate-12">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">Jonathan<span className="text-primary">.</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-[1px] bg-border mx-2" />
            <div className="flex items-center space-x-5">
               <a href="https://github.com/jonathanmyinda" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
               <a href="https://linkedin.com/in/jonathanmyinda" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Me contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/98 backdrop-blur-2xl border-b border-border absolute w-full top-full left-0 z-40"
          >
            <div className="px-6 pt-10 pb-12 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-black tracking-tighter text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex items-center space-x-8">
                <a href="https://github.com/jonathanmyinda" className="text-muted-foreground"><Github className="w-8 h-8" /></a>
                <a href="https://linkedin.com/in/jonathanmyinda" className="text-muted-foreground"><Linkedin className="w-8 h-8" /></a>
                <a href="mailto:myindaj@gmail.com" className="text-muted-foreground"><Mail className="w-8 h-8" /></a>
              </div>
              <div className="pt-10">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-primary-foreground py-6 rounded-3xl text-xl font-black uppercase tracking-widest"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;