
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    discipline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mapeo de valores técnicos a nombres legibles
    const disciplineMap: Record<string, string> = {
      mma: 'MMA COMBAT',
      'jiu-jitsu': 'JIU-JITSU',
      boxeo: 'BOXEO',
      teiwaz: 'SISTEMA TEIWAZ'
    };

    const selectedDiscipline = disciplineMap[formData.discipline] || formData.discipline;
    const phoneNumber = '50661124253';
    
    // Construcción del mensaje ordenado
    const whatsappMessage = `*SOLICITUD DE ACCESO - RAGNAR TEIWAZ*%0A%0A` +
      `*Nombre:* ${formData.name.toUpperCase()}%0A` +
      `*Programa:* ${selectedDiscipline}%0A` +
      `*Detalles:* ${formData.message.toUpperCase()}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario opcionalmente o dar feedback
    setFormData({ name: '', discipline: '', message: '' });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-slateMatte relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="mb-14">
          <h2 className="heading-wide text-3xl md:text-4xl mb-4 leading-tight tracking-tighter">SOLICITAR ACCESO</h2>
          <p className="text-gray-400 font-light text-xs uppercase tracking-[0.3em]">Consulta directa para nuevos alumnos</p>
        </div>
        
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="relative group">
            <input 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-crimson transition-all placeholder:text-white/20 text-lg uppercase tracking-wider outline-none"
              id="name" 
              placeholder="NOMBRE COMPLETO" 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          {/* Programa */}
          <div className="relative group">
            <select 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-crimson transition-all text-white/40 focus:text-white text-lg uppercase tracking-wider outline-none appearance-none cursor-pointer"
              value={formData.discipline}
              onChange={(e) => setFormData({...formData, discipline: e.target.value})}
            >
              <option value="" className="bg-deepBlack">SELECCIONE PROGRAMA</option>
              <option value="mma" className="bg-deepBlack">MMA COMBAT</option>
              <option value="jiu-jitsu" className="bg-deepBlack">JIU-JITSU</option>
              <option value="boxeo" className="bg-deepBlack">BOXEO</option>
              <option value="teiwaz" className="bg-deepBlack">SISTEMA TEIWAZ</option>
            </select>
            <span className="material-symbols-outlined absolute right-0 bottom-4 text-white/20 pointer-events-none">expand_more</span>
          </div>
          
          {/* Detalles (Obligatorio) */}
          <div className="relative group">
            <textarea 
              required
              rows={3}
              className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-crimson transition-all placeholder:text-white/20 text-lg tracking-wider outline-none resize-none uppercase"
              placeholder="DETALLES DE SU CONSULTA"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full py-6 heading-wide text-sm bg-white text-black hover:bg-crimson hover:text-white transition-all duration-300 shadow-2xl active:scale-[0.98]"
            >
              ENVIAR SOLICITUD
            </button>
            <p className="mt-6 text-[10px] text-center text-white/20 uppercase tracking-[0.4em] font-light">
              Atención profesional personalizada a tu WhatsApp
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
