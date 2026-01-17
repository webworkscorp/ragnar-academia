
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-deepBlack">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="heading-wide text-4xl tracking-tighter">
          RAGNAR<br/><span className="text-crimson">TEIWAZ</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-xs tracking-widest font-bold text-gray-500 uppercase">
          <div className="space-y-4">
            <p className="text-white border-b border-crimson w-fit pb-1">Ubicación</p>
            <p className="leading-relaxed">San José, Costa Rica</p>
          </div>
          <div className="space-y-4">
            <p className="text-white border-b border-crimson w-fit pb-1">Contacto</p>
            <div className="block leading-relaxed">
              <span className="text-white text-lg font-medium tracking-normal block mb-1">6112 4253</span>
              <span className="text-gray-600 lowercase tracking-normal font-normal">info@ragnarteiwaz.com</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left">
            © 2026 Ragnar Teiwaz Academy — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
