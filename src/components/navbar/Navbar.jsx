import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); 
  const [activeCategory, setActiveCategory] = useState(null); 

  const menuEstructura = [
    { titulo: 'Inicio', href: '/' },
    {
      titulo: 'Servicios',
      categorias: [
        {
          nombre: 'Seguridad y Normatividad (STPS)',
          items: [
            { nombre: 'NOM-001-STPS (Edificios y locales)', href: '/servicio/stps-nom-001' },
            { nombre: 'NOM-002-STPS (Prevención de Incendios)', href: '/servicio/stps-nom-002' },
            { nombre: 'NOM-005-STPS (Manejo, transporte y almacenamiento de sustancias químicas)', href: '/servicio/stps-nom-005' },
            { nombre: 'NOM-009-STPS (Condiciones de seguridad para trabajos en altura)', href: '/servicio/stps-nom-009' },
            { nombre: 'NOM-017-STPS (Equipos de protección personal)', href: '/servicio/stps-nom-017' },
            { nombre: 'NOM-018-STPS (Identificación y comunicación de riesgos químicos)', href: '/servicio/stps-nom-018' },
            { nombre: 'NOM-019-STPS (Comisiones de seguridad e higiene)', href: '/servicio/stps-nom-019' },
            { nombre: 'NOM-020-STPS (Seguridad en recipientes a presión y calderas)', href: '/servicio/stps-nom-020' },
            { nombre: 'NOM-022-STPS (Electricidad estática y seguridad en el trabajo)', href: '/servicio/stps-nom-022' },
            { nombre: 'NOM-026-STPS (Colores y señales de seguridad laboral)', href: '/servicio/stps-nom-026' },
            { nombre: 'NOM-030-STPS (Servicios preventivos de Seguridad y Salud)', href: '/servicio/stps-nom-030' },
            { nombre: 'NOM-035-STPS (Factores de riesgo psicosocial en el trabajo)', href: '/servicio/stps-nom-035' },
            { nombre: 'NOM-036-STPS (Prevención de riesgos ergonómicos)', href: '/servicio/stps-nom-036' },
          ]
        },
        {
          nombre: 'Medio Ambiente',
          items: [
            { nombre: 'Registro como generador', href: '/medio-ambiente/residuos/rcg' },
            { nombre: 'Planes de manejo de residuos', href: '/medio-ambiente/residuos/pdmdr' },
            { nombre: 'LAU/LF', href: '/medio-ambiente/residuos/lau' },
            { nombre: 'Gestión y cumplimiento en materia de agua', href: '/medio-ambiente/agua/gycmda' },
            { nombre: 'Cédula de Operación Anual (COA)', href: '/medio-ambiente/coa' },
            { nombre: 'Registro como generador (Estatal/SEMADET)', href: '/medio-ambiente/estatal/rcg' },
            { nombre: 'Actualización de plan de manejo de residuos de manejo especial', href: '/medio-ambiente/estatal/adpdmdrdme' },
            { nombre: 'Trámites Varios', href: '/medio-ambiente/estatal/tramites-varios' },
          ]
        }
      ]
    },
    {
      titulo: 'Proyectos',
      categorias: [
        {
          nombre: 'Implementación y Casos',
          items: [
            { nombre: 'Filtración de agua', href: '/proyectos/filtracion-agua' },
            { nombre: 'Seguridad en planta', href: '/proyectos/seguridad-planta' },
            { nombre: 'Implementación ISO 9001, 14001 y 45001 - Versión 2026', href: '/proyectos/normas-iso' },
            { nombre: 'Proyecto Personalizado', href: '/proyectos/personalizado' }
          ]
        }
      ]
    }
  ];

  const toggleMenu = (titulo) => {
    if (activeMenu === titulo) {
      setActiveMenu(null);
      setActiveCategory(null);
    } else {
      setActiveMenu(titulo);
      setActiveCategory(null);
    }
  };

  const toggleCategory = (nombre) => {
    setActiveCategory(activeCategory === nombre ? null : nombre);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center"> 
            <div className="w-1/4 flex justify-start">
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 p-2 -ml-2 rounded-md text-slate-600 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Abrir Menú"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-emerald-600 font-bold text-sm uppercase">Menú</span>
            </button>
            </div>

            <div className="w-2/4 flex justify-center">
              <Link to="/" className="flex items-center justify-center gap-2 sm:gap-3">
                <img 
                  src="/GREENSHIELD.png" 
                  alt="Escudo Greenshield" 
                  className="h-10 sm:h-12 object-contain"
                />
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-emerald-600 drop-shadow-sm truncate">
                  GREENSHIELD
                </span>
              </Link>
            </div>

            <div className="w-1/4 flex justify-end">
              <Link to="/#contacto" className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
                Contacto
              </Link>
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
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
          <span className="text-xl font-black tracking-[0.2em] text-emerald-600">MENÚ</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-emerald-600 transition-colors focus:outline-none p-2 hover:bg-slate-100 rounded-md"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2">
          {menuEstructura.map((seccion) => (
            <div key={seccion.titulo}>
              {seccion.href ? (
                <Link 
                  to={seccion.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  {seccion.titulo}
                </Link>
              ) : (
                <div>
                  <button 
                    onClick={() => toggleMenu(seccion.titulo)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-lg font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {seccion.titulo}
                    <svg className={`w-5 h-5 transition-transform ${activeMenu === seccion.titulo ? 'rotate-180 text-emerald-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  
                  {activeMenu === seccion.titulo && (
                    <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-emerald-100 ml-4 mt-1">
                      {seccion.categorias.map((categoria) => (
                        <div key={categoria.nombre}>
                          <button 
                            onClick={() => toggleCategory(categoria.nombre)}
                            className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all"
                          >
                            {categoria.nombre}
                            <svg className={`w-4 h-4 transition-transform ${activeCategory === categoria.nombre ? 'rotate-180 text-emerald-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          
                          {activeCategory === categoria.nombre && (
                            <div className="pl-4 py-2 space-y-1">
                              {categoria.items.map((item) => (
                                <Link 
                                  key={item.nombre}
                                  to={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                                >
                                  {item.nombre}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 mt-4 border-t border-slate-100 md:hidden">
            <Link to="/#contacto" onClick={() => setIsOpen(false)} className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-md">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}