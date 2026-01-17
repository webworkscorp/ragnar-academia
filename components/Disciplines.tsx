
import React from 'react';

interface DisciplineCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  borderColorClass: string;
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({ category, title, description, image, borderColorClass }) => (
  <div className="relative min-h-[500px] md:min-h-[600px] flex flex-col justify-end p-8 md:p-12 group overflow-hidden border-b border-white/5 md:border-r last:border-r-0">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" 
      style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.4), rgba(5,5,5,0.98)), url('${image}')` }}
    ></div>
    
    <div className={`relative z-10 border-l-2 ${borderColorClass} pl-6 transition-all duration-700`}>
      <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block ${borderColorClass === 'border-crimson' ? 'text-crimson' : 'text-white/60'}`}>
        {category}
      </span>
      <h3 className="heading-wide text-4xl md:text-5xl mb-4 tracking-tighter">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 font-light max-w-xs mb-8 leading-relaxed">
        {description}
      </p>
      <a 
        href="#contacto"
        className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest cursor-pointer group/btn w-fit"
      >
        <span className="group-hover/btn:text-crimson transition-colors">Solicitar Info</span>
        <div className="size-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-crimson group-hover/btn:bg-crimson group-hover/btn:text-white transition-all duration-300">
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
      </a>
    </div>
  </div>
);

const Disciplines: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full border-t border-white/5">
      <DisciplineCard 
        category="Suelo"
        title="JIU-JITSU"
        description="Domina el combate en el suelo mediante palancas y control."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCzlYx-MPz7VOE9XZdpLYHVJc1fhmAieFDByC6r6NoW_zWHK00X855u5oihINUoTQwyQTOyAUzMXefmClnd5YMLUS4nNSmY_f_UsLhFvzyTgdu5dei3fJ33Kpx7B1PnrnZiyBi9TZ1oii7K7ltmpchq7B1C-Mwe036ExeO65hIZMlab23XAUv6ZbSd5XS4-glAdDaQdVNCPtYTv1ajIbV64acev6FZFzKiORMU6sHLutnYy0NJC0L-TI6MAiDtNoa3bLszqPx6d1iyO"
        borderColorClass="border-crimson"
      />
      <DisciplineCard 
        category="Impacto"
        title="BOXEO"
        description="Precisión, potencia y agilidad en cada combinación."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXZJm1D2LuKoVoUy0wQNTWh6sWut0nbSV9bT7c8xz4DFOYm6_W4IlJCmc7YCNjBZA6UgCa4D2NrI82mjZVYs2Sso1Hlr0XIN1SpTCc0EZRYDTj7RJiUm1UbZIJawoBgM17e4m6LNphuSea8EvPXMUcpMjmFYwcheltIrvFB-7eGFpKUZHcU3f22czOd7j4-2FoQaL3u_nUSETgQQGn0JRQFgoxrYK2MPexEbrKC0BpFaea9kF9D5aNwGrAre0NFhhcSS3Mrov20IY"
        borderColorClass="border-white"
      />
      <DisciplineCard 
        category="Defensa"
        title="TEIWAZ"
        description="Sistema de combate híbrido para situaciones reales."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEt5CsQHlHlvW3PqHBYltK6fK_nKQ-WvyKwbEgRVfDhXn8kwHHi2qRx6t_QSs9SyCKfPrD_iaLN10NAxSZYceYurh85FIHykRQNTMLlH6it5Gs90Z8UGuXLxah7OHa0J9M2bL5FBAE03XPI9tamVONAhPjvsFI6FWX_3tWLKrSbFZBsh_scNn3CN36u4OTVCYOPgL9-5RVVKYjG2YhcHnAnTzqdtQlyTYNPSWe0Q2PMzDj4M9ycgYKwx22efK5PVRjJSTMR7sCWWC"
        borderColorClass="border-crimson"
      />
    </section>
  );
};

export default Disciplines;
