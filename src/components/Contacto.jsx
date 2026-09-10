import { useState } from 'react';
import ModalExito from './ModalExitoso';

export default function Contacto() {
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue o cambie de URL
    setStatus('loading');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // Hacemos la petición por detrás sin salir de la página
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Limpiamos el formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-white py-24 relative border-t border-slate-200">
      
      {/* Modal inyectado aquí */}
      <ModalExito 
        isOpen={status === 'success'} 
        onClose={() => setStatus('')} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Contacto</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
            Inicia tu proceso de <span className="text-emerald-600">regularización</span> hoy.
          </h3>
          <p className="text-slate-600 text-lg">
            Déjanos tus datos y uno de nuestros especialistas se pondrá en contacto contigo para evaluar las necesidades específicas de tu empresa.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Información */}
          <div className="mb-12 lg:mb-0 space-y-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Información Directa</h4>
              
              <div className="space-y-6">
                
                {/* Oficinas Centrales */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 border border-emerald-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Oficinas Centrales</p>
                    <p className="text-slate-600 mt-1">Cedros 2417, Colinas de los Robles<br/>Zapopan, Jalisco.</p>
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 border border-emerald-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Correo Electrónico</p>
                    <a href="mailto:GreenShieldConsultoria@outlook.com" className="text-slate-600 mt-1 hover:text-emerald-600 transition-colors">
                      GreenShieldConsultoria@outlook.com
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 border border-emerald-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Atención Telefónica</p>
                    <a href="tel:+523320211181" className="text-slate-600 mt-1 hover:text-emerald-600 transition-colors block">
                      +52 (33) 2021-1181
                    </a>
                  </div>
                </div>

              </div>
              
              {/* Botón WhatsApp */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <a href="https://wa.me/523320211181" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg relative">
            
            {status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <p>Hubo un problema al enviar el mensaje. Por favor revisa tu conexión o contáctanos directamente por teléfono.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo / Empresa</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors disabled:opacity-50"
                  placeholder="Ej. Juan Pérez - Industrias MX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors disabled:opacity-50"
                  placeholder="correo@tuempresa.com"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-slate-700 mb-2">Servicio de interés</label>
                <select 
                  id="servicio" 
                  name="servicio"
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors appearance-none disabled:opacity-50"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="stps">Seguridad y Normatividad (STPS)</option>
                  <option value="medio-ambiente">Trámites de Medio Ambiente</option>
                  <option value="proyectos">Proyectos e Implementaciones</option>
                  <option value="otro">Otro trámite o gestoría</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="4" 
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Describe brevemente cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}