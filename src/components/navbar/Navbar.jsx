import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 text-white shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center relative">
            
            {/* Botón Hamburguesa (Izquierda) */}
            <div className="flex items-center md:w-1/3">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-800 focus:outline-none transition-colors md:hidden"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {/* Menú de Escritorio (Oculto en móvil) */}
              <div className="hidden md:flex space-x-8">
                <a href="#experiencia" className="text-sm uppercase tracking-wider font-semibold hover:text-emerald-400 transition-colors">Experiencia</a>
                <a href="#auditor" className="text-sm uppercase tracking-wider font-semibold hover:text-emerald-400 transition-colors">El Auditor</a>
              </div>
            </div>

            {/* Nombre del Proyecto (Centro) */}
            <div className="flex-1 flex justify-center md:w-1/3 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
              <a href="#" className="text-4xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
                RMR
              </a>
            </div>

            {/* Botón de Contacto (Derecha) */}
            <div className="hidden md:flex justify-end w-1/3">
              <a href="#contacto" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay oscuro para cuando el menú está abierto */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menú Desplegable Lateral Izquierdo (Drawer) */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabecera del menú lateral */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
          <span className="text-2xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            RMR
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Enlaces del menú lateral */}
        <div className="flex-1 px-4 py-8 space-y-4">
          <a onClick={() => setIsOpen(false)} href="#experiencia" className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all">
            Experiencia
          </a>
          <a onClick={() => setIsOpen(false)} href="#auditor" className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all">
            El Auditor
          </a>
          <div className="pt-4 mt-4 border-t border-slate-800">
            <a onClick={() => setIsOpen(false)} href="#contacto" className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </>
  );
}