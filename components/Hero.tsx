
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Athlete focus" 
          className="w-full h-full object-cover grayscale brightness-[0.35] contrast-125 scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG2OJw23maIueuqwLI8bHeOaDnb0foXCb9bMCSHEFMjycGnW7bnE60TNGq0OG3OiAkzNlXdMtooIYV0Fo2KpV9EEpS5bhTxg-6z8-Kl_e_niE1r7CrVvVQ8LJLXTpmX0v8Tz-jUpEHU7UR7JOGNyw91VW3nDpfJVCNmQJqm7XllzNc2QFjRwKBxcPjnAxptKClKw-QT9Hufi3vdtbfwo4bKA5FOfzfiVvwV_-08VpE2c1ChOprLjtPCkxPGfetAT4wR-I9eUZyk7Ee" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mb-12 md:mb-20 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-crimson"></div>
          <p className="text-crimson font-semibold tracking-[0.3em] text-[10px] md:text-xs uppercase">
            Academia de Artes Marciales
          </p>
        </div>
        
        <h1 className="heading-wide text-[13vw] sm:text-7xl md:text-9xl leading-[0.82] mb-10 tracking-tighter">
          FORJANDO<br/>EL PODER<br/><span className="text-white/90">INTERIOR</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit">
          <a 
            href="#contacto"
            className="bg-white text-black heading-wide py-5 px-10 text-sm hover:bg-crimson hover:text-white transition-colors duration-200 shadow-2xl flex items-center justify-center text-center outline-none select-none active:bg-white active:opacity-80 border-0"
          >
            Reservar Clase
          </a>
          <a 
            href="#programas"
            className="bg-transparent border border-white/20 text-white heading-wide py-5 px-10 text-sm hover:border-crimson hover:text-crimson transition-colors duration-200 backdrop-blur-sm flex items-center justify-center text-center outline-none select-none active:bg-white/10"
          >
            Ver Programas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
