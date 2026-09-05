export default function Certificaciones() {
  const certs = [
    {
      id: 1,
      titulo: "Auditor ISO 14001",
      desc: "Gestión Ambiental",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      id: 2,
      titulo: "Constancia DC-5",
      desc: "STPS",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      id: 3,
      titulo: "Gestión de Riesgos",
      desc: "Evaluación Integral",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      )
    },
    {
      id: 4,
      titulo: "Seguridad Industrial",
      desc: "Cobertura Total",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
      )
    }
  ];

  return (
    <section className="bg-white py-10 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-sm font-bold tracking-widest uppercase text-slate-400 mb-8">
          Respaldados por certificaciones oficiales
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certs.map((cert) => (
            <div key={cert.id} className="text-center group">
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {cert.icon}
                <h4 className="font-bold text-slate-800 text-sm sm:text-base">{cert.titulo}</h4>
                <p className="text-xs text-slate-500 font-medium">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}