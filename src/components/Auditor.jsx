export default function Auditor() {
  return (
    <section id="auditor" className="bg-slate-50 py-24 relative overflow-hidden border-t border-slate-200">
      
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-100 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Columna de Imagen (Abstracta / Industrial) */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-emerald-200 rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl z-10 bg-white aspect-[4/5] sm:aspect-auto sm:h-[600px] group">
              {/* Imagen de planos, ingeniería o procesos industriales */}
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ingeniería y Metodología Ambiental" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Etiqueta Flotante de Garantía */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-100 p-5 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-slate-900 font-black text-lg">Blindaje Total</p>
                </div>
                <p className="text-slate-600 text-sm font-medium">Metodología a prueba de auditorías federales y estatales.</p>
              </div>
            </div>
          </div>

          {/* Columna de Textos y Argumentos de Venta */}
          <div>
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">¿Por qué elegirnos?</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Metodología probada para la <span className="text-emerald-600">continuidad de tu negocio.</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg mb-10">
              <p>
                No improvisamos. Aplicamos ingeniería ambiental de alto nivel para blindar las operaciones de tu planta contra riesgos normativos, sanciones y clausuras.
              </p>
            </div>

            {/* Lista de Ventajas Competitivas */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="mt-1 bg-emerald-100 p-3 rounded-lg text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Rigor Técnico y Legal</h4>
                  <p className="text-slate-600 text-sm">Soluciones técnicas personalizadas que garantizan el cumplimiento legal, analizando a fondo las necesidades y el giro de cada cliente.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="mt-1 bg-emerald-100 p-3 rounded-lg text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Respuesta Estratégica</h4>
                  <p className="text-slate-600 text-sm">Actuamos de inmediato ante inspecciones, requerimientos urgentes y emplazamientos de SEMARNAT, PROFEPA y Protección Civil.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="mt-1 bg-emerald-100 p-3 rounded-lg text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Confidencialidad Absoluta</h4>
                  <p className="text-slate-600 text-sm">Manejamos la información de tus procesos y patentes con los más estrictos acuerdos de confidencialidad.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}