import { Link } from 'react-router-dom';
import { serviciosData } from '../../data/serviciosData';
import { medioAmbienteData } from '../../data/medioAmbiente';

export default function PaginaServicios() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Catálogo de <span className="text-emerald-600">Servicios</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones regulatorias integrales para mantener tu empresa operando dentro del marco legal, evitando multas y garantizando la seguridad.
          </p>
        </div>

        {/* Sección 1: Seguridad y Normatividad STPS */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-300 flex-grow"></div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide">
              Seguridad y Normatividad (STPS)
            </h2>
            <div className="h-px bg-slate-300 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosData.map((servicio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col h-full group">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {servicio.titulo}
                </h3>
                {/* Cortamos la descripción a 110 caracteres para que todas las tarjetas se vean parejas */}
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {servicio.descripcion.substring(0, 110)}...
                </p>
                <Link 
                  to={servicio.path} 
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 text-sm mt-auto"
                >
                  Ver detalles completos
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sección 2: Medio Ambiente */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-300 flex-grow"></div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide">
              Trámites de Medio Ambiente
            </h2>
            <div className="h-px bg-slate-300 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medioAmbienteData.map((servicio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col h-full group">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {servicio.descripcion.substring(0, 110)}...
                </p>
                <Link 
                  to={servicio.path} 
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 text-sm mt-auto"
                >
                  Ver detalles completos
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}