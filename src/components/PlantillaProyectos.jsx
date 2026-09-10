import { Link } from 'react-router-dom';

export default function PlantillaProyecto({ 
  titulo, 
  descripcion, 
  reto, 
  solucion, 
  resultados 
}) {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver al inicio
          </Link>
          <span className="block text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Proyecto Especializado</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {titulo}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {descripcion}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">El Reto</h2>
            <p className="text-slate-600 leading-relaxed">
              {reto}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-emerald-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Solución</h2>
            <p className="text-slate-600 leading-relaxed">
              {solucion}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-bl-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Resultados Obtenidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {resultados.map((resultado, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <span className="text-slate-300 font-medium leading-relaxed">{resultado}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">¿Tienes un proyecto similar en mente?</h3>
          <Link 
            to="/#contacto" 
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Cuéntanos sobre tu proyecto
          </Link>
        </div>

      </div>
    </div>
  );
}