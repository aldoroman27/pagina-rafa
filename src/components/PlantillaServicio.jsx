import { Link } from 'react-router-dom';

export default function PlantillaServicio({ 
  titulo, 
  descripcion, 
  alcance, 
  beneficios, 
  requisitos 
}) {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Servicio */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {titulo}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {descripcion}
          </p>
        </div>

        {/* Contenido Principal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Columna Izquierda: Alcance */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Alcance Legal / Técnico</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {alcance}
            </p>
          </div>

          {/* Columna Derecha: Beneficios */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Beneficios</h2>
            </div>
            <ul className="space-y-3">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección de Documentos Requeridos */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-bl-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Documentos Generales Requeridos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {requisitos.map((req, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="text-slate-300 font-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Botón de Contacto */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">¿Listo para regularizar tu empresa?</h3>
          <Link 
            to="/#contacto" 
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Solicitar Asesoría
          </Link>
        </div>

      </div>
    </div>
  );
}