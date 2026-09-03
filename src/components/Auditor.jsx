export default function Auditor() {
  return (
    <section id="auditor" className="bg-slate-50 py-24 relative overflow-hidden border-t border-slate-200">
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-100 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-emerald-200 rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl z-10 bg-white aspect-[4/5] sm:aspect-auto sm:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Retrato del Auditor Principal" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-100 p-4 rounded-xl shadow-lg">
                <p className="text-slate-900 font-bold text-lg">Ing. [Nombre del Auditor]</p>
                <p className="text-emerald-600 text-sm font-semibold mt-1">Auditor Principal Titular</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Conoce al Experto</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Liderazgo técnico con impacto <span className="text-emerald-600">sostenible.</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                Con más de una década de experiencia liderando procesos de cumplimiento normativo en el sector industrial, nuestra firma garantiza que cada diagnóstico y dictamen esté respaldado por un rigor técnico absoluto.
              </p>
              <p>
                Entendemos que la auditoría no es solo un requisito legal, sino una herramienta estratégica para optimizar recursos, mitigar riesgos operativos y proyectar una imagen corporativa responsable ante la sociedad y las autoridades.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <h4 className="text-slate-900 font-bold text-xl mb-4 border-b border-slate-200 pb-2">Acreditaciones Clave</h4>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Auditor Ambiental Acreditado</p>
                  <p className="text-slate-500 text-sm">Registro oficial ante la Procuraduría Federal de Protección al Ambiente (PROFEPA).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Especialista en Sistemas de Gestión</p>
                  <p className="text-slate-500 text-sm">Auditor Líder en normativas ISO 14001 (Ambiental) e ISO 45001 (Seguridad y Salud).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}