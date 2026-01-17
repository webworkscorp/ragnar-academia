
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
        <div className="col-span-1 md:col-span-12 mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 uppercase block mb-4">Método Teiwaz</span>
          <h2 className="heading-wide text-4xl md:text-6xl leading-[0.9] tracking-tighter">LA CIENCIA DEL COMBATE</h2>
        </div>
        
        <div className="col-span-1 md:col-span-9 md:col-start-2 relative z-10 glass-card p-6 md:p-10 mb-0 md:mb-[-80px] order-2 md:order-1">
          <span className="material-symbols-outlined text-5xl text-crimson mb-6 block opacity-80">format_quote</span>
          <p className="text-xl md:text-3xl font-light italic leading-relaxed text-gray-200 tracking-tight">
            "La técnica es el medio para alcanzar el dominio físico y mental en situaciones de presión."
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-12 relative h-72 md:h-[500px] overflow-hidden rounded-sm order-1 md:order-2">
          <img 
            alt="Entrenamiento" 
            className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRjvrn3btw0j3INBW4L46eix3CzMNjYC04sjJ1MpoHk4wn5ruAuvcP5ENZ0Egyz6yV8d5DFVZknlaanm0i8t3hyF9QKUVoz8kRmkw9jjEMqDO5GShBmqvX5CvPmHbuqXBfAoeLiUkDr_HuQTXILeU4zR4t8aKtFjxCC9OcsN2iPA1-Y5Kumf0qXS0NoC42do6XgjMHWPSTy3RbxRPaJFkJhoaY9PYZn4ncc1tPRxl0dT8x4FVG-8zXEPin_LoKBAfWhvPNT44Z1XXJ" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deepBlack/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
