
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Disciplines from './components/Disciplines';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen antialiased bg-deepBlack selection:bg-crimson selection:text-white">
      <div className="fixed inset-0 grain-overlay z-[60] pointer-events-none"></div>

      <Nav />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="metodo">
          <Methodology />
          
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col p-6 border-l border-white/10">
                <span className="material-symbols-outlined text-crimson mb-4 text-3xl">shield_person</span>
                <h4 className="heading-wide text-lg mb-2">DISCIPLINA</h4>
                <p className="text-sm text-gray-400 font-light">
                  Compromiso constante con la técnica y el esfuerzo.
                </p>
              </div>
              <div className="flex flex-col p-6 border-l border-white/10 mt-0 md:mt-8">
                <span className="material-symbols-outlined text-crimson mb-4 text-3xl">adjust</span>
                <h4 className="heading-wide text-lg mb-2">CONTROL</h4>
                <p className="text-sm text-gray-400 font-light">
                  Dominio mental y físico en cada situación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="programas">
          <Disciplines />
        </section>

        <section id="contacto">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
