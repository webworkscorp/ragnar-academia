
import React, { useState, useEffect } from 'react';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-deepBlack/95 border-white/10 py-3 shadow-2xl backdrop-blur-md' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <a href="#inicio" className="heading-wide text-xl tracking-tighter hover:opacity-80 transition-opacity">
          RAGNAR <span className="text-crimson">TEIWAZ</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
