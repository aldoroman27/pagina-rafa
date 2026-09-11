export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-4 mb-6">
              <img 
                src="/Firefly.png" 
                alt="Logo Greenshield Consultoría" 
                className="h-16 sm:h-20 object-contain"
              />
              <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-emerald-600">
                GREENSHIELD
              </span>
            </a>
            <p className="text-slate-600 max-w-sm mb-6">
              Expertos en auditoría, gestión y cumplimiento normativo ambiental e industrial. Protegemos tu industria y el entorno con rigor técnico y certeza legal.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#experiencia" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Servicios Ambientales</a></li>
              <li><a href="#auditor" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">¿Por qué elegirnos?</a></li>
              <li><a href="#contacto" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Legales</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Aviso de Privacidad</a></li>
              <li><a href="#" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Términos y Condiciones</a></li>
            </ul>
          </div>

        </div>
        {/*Linea divisora del resto de texto informativo*/}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Greenshield Consultoría. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Diseñado con <span className="text-emerald-600 font-semibold">profesionalismo</span> para el sector industrial.
          </p>
        </div>
      </div>
    </footer>
  );
}