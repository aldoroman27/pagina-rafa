export default function Hero() {
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-r-full blur-3xl transform -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
              Auditoría y Cumplimiento Normativo
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Tranquilidad legal para tu <span className="text-emerald-600">industria.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Garantizamos el cumplimiento normativo ambiental y la sostenibilidad de tu empresa. Evaluamos, diagnosticamos y regularizamos tus procesos ante las autoridades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl text-center">
                Agendar Asesoría
              </a>
              <a href="#experiencia" className="border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-emerald-50 text-center">
                Ver Servicios
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-16 pt-8 border-t border-slate-200">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900">+150</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Auditorías Concluidas</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900">100%</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Aprobaciones</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900">+10</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Años de Experiencia</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 relative mt-16 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden group border border-slate-200 shadow-xl">
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Instalaciones industriales" 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 animate-[bounce_3s_infinite] z-20">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg leading-tight">Certificado</p>
                  <p className="text-emerald-600 text-sm font-semibold">Auditor Acreditado</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}