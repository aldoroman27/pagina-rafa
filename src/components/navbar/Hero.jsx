export default function Hero() {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Fondo decorativo difuminado */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-800/30 rounded-r-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Contenido de Texto (Izquierda en PC, Centrado en Móvil) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
              Auditoría y Cumplimiento Normativo
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Tranquilidad legal para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">industria.</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Garantizamos el cumplimiento normativo ambiental y la sostenibilidad de tu empresa. Evaluamos, diagnosticamos y regularizamos tus procesos ante las autoridades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] text-center">
                Agendar Asesoría
              </a>
              <a href="#experiencia" className="border-2 border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-slate-800 text-center">
                Ver Servicios
              </a>
            </div>

            {/* Métricas de Confianza */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-16 pt-8 border-t border-slate-800">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">+150</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Auditorías Concluidas</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">100%</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Aprobaciones</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">+10</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Sección de Imagen (Oculta en celulares, visible en PC) */}
          <div className="hidden lg:block lg:col-span-6 relative mt-16 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden group border border-slate-800 shadow-2xl">
              {/* Filtro esmeralda que desaparece al pasar el mouse */}
              <div className="absolute inset-0 bg-emerald-900/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Instalaciones industriales" 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Tarjeta Flotante Animada */}
            <div className="absolute -bottom-8 -left-8 bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700 animate-[bounce_3s_infinite] z-20">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Certificado</p>
                  <p className="text-emerald-400 text-sm font-semibold">Auditor Acreditado</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}