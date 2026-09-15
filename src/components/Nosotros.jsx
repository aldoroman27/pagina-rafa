export default function Nosotros() {
  const valores = [
    {
      titulo: "Integridad",
      desc: "Ética y transparencia en cada proyecto.",
      icono: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      titulo: "Sostenibilidad",
      desc: "Equilibrio entre el negocio y el planeta.",
      icono: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      titulo: "Seguridad",
      desc: "La protección de las personas es lo primero.",
      icono: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
    },
    {
      titulo: "Excelencia",
      desc: "Rigor técnico y mejora continua.",
      icono: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    },
    {
      titulo: "Compromiso",
      desc: "Resultados medibles junto al cliente.",
      icono: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    }
  ];

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">Nuestro Propósito</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6">Misión y Visión</h3>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          
          {/* Misión */}
          <div className="bg-emerald-900 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-bl-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">
              <div className="bg-white p-3 md:p-4 rounded-full shadow-inner text-emerald-700 shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white">Misión</h4>
            </div>
            <p className="text-emerald-50 text-base md:text-lg leading-relaxed relative z-10">
              Hacer que la seguridad y el cumplimiento no sea un camino difícil. Trabajamos para que operes con tranquilidad, cuidando a las personas y el futuro de tus Operaciones.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-emerald-900 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-bl-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">
              <div className="bg-white p-3 md:p-4 rounded-full shadow-inner text-emerald-700 shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white">Visión</h4>
            </div>
            <p className="text-emerald-50 text-base md:text-lg leading-relaxed relative z-10">
              Convertirnos en tu mejor aliado reconociendo la huella positiva que dejaremos al hacer las cosas bien aportando tranquilidad a la empresa y a la comunidad.
            </p>
          </div>

        </div>

        {/* Valores */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">Lo que nos define</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Nuestros valores</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {valores.map((valor, index) => (
            <div key={index} className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-50 text-emerald-600 mb-4 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                {valor.icono}
              </div>
              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">{valor.titulo}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{valor.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}