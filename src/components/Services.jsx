
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    { id: 1, title: "Auditoría de Cumplimiento", description: "Evaluación exhaustiva para garantizar que tu empresa cumpla con toda la normativa ambiental federal, estatal y municipal.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { id: 2, title: "Gestión de Residuos", description: "Estrategias para el manejo, clasificación y disposición final de residuos peligrosos y de manejo especial bajo la ley vigente.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>) },
    { id: 3, title: "Control de Emisiones", description: "Gestión de planta y estrategias operativas para asegurar el cumplimiento total de emisiones a la atmósfera bajo normativa SEMARNAT.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>) },
    { id: 4, title: "Aguas Residuales", description: "Asesoría técnica y gestión de cumplimiento para que el uso, aprovechamiento y descargas se alineen a los parámetros oficiales.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>) },
    { id: 5, title: "Riesgo y Contingencia", description: "Elaboración de diagnósticos de riesgo ambiental y diseño de planes de contingencia para prevenir y mitigar accidentes.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>) },
    { id: 6, title: "Gestoría General", description: "Acompañamiento integral en trámites ante dependencias ambientales como SEMARNAT, SEMADET y secretarías estatales.", icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>) }
  ];

  return (
    <section id="experiencia" className="bg-white py-24 relative border-t border-slate-200">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-50 rounded-l-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Nuestra Experiencia</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Soluciones integrales para la <span className="text-emerald-600">industria</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Cubrimos todas las áreas críticas de impacto ambiental para asegurar que tus operaciones se mantengan eficientes, seguras y dentro de la legalidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 ease-out"></div>
              
              <div className="bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ver todos los servicios
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}