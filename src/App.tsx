import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { QuickProof } from './components/sections/QuickProof';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Process } from './components/sections/Process';
import { ContactCTA } from './components/sections/ContactCTA';
import { Footer } from './components/sections/Footer';
import { ThemeProvider } from './lib/ThemeContext';
import { Toaster } from 'sonner';

function App() {
  useEffect(() => {
    document.title = 'Jonathan Myinda | Développeur Full-Stack & Mobile';

    const descriptionText =
      "Portfolio de Jonathan Myinda, développeur full-stack & mobile spécialisé en React, Node.js et interfaces modernes. Création de sites web, applications et solutions digitales professionnelles.";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', descriptionText);
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-950">
        <Navbar />
        <main>
          <Hero />
          <QuickProof />
          <Projects />
          <Services />
          <Skills />
          <About />
          <Process />
          <ContactCTA />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;