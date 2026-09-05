import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center relative">
            
            <div className="flex items-center w-1/3">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md text-slate-600 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none transition-colors"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex justify-center w-1/3 absolute left-1/2 transform -translate-x-1/2">
              <a href="#" className="text-4xl font-black tracking-[0.2em] text-emerald-600 drop-shadow-sm">
                GreenShield
              </a>
            </div>

            <div className="hidden md:flex justify-end w-1/3">
              <a href="#contacto" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
          <span className="text-2xl font-black tracking-[0.2em] text-emerald-600">
            MENÚ
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-emerald-600 transition-colors focus:outline-none p-2 hover:bg-slate-100 rounded-md"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-4 py-8 space-y-4">
          <a onClick={() => setIsOpen(false)} href="#inicio" className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all">Inicio</a>
          <a onClick={() => setIsOpen(false)} href="#experiencia" className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all">Experiencia</a>
          <a onClick={() => setIsOpen(false)} href="#auditor" className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all">¿Por qué elegirnos?</a>
          
          <div className="pt-4 mt-4 border-t border-slate-100 md:hidden">
            <a onClick={() => setIsOpen(false)} href="#contacto" className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-md">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </>
  );
}