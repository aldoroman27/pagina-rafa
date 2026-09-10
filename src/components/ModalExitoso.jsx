
export default function ModalExito({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
        
        {/* Botón X para cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Cerrar ventana"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icono de Éxito */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
          <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Contenido */}
        <h3 className="text-2xl font-black text-center text-slate-900 mb-3">
          ¡Mensaje Recibido!
        </h3>
        <p className="text-center text-slate-600 mb-8 text-lg leading-relaxed">
          Gracias por escribirnos. Hemos recibido tu información con éxito y uno de nuestros especialistas se pondrá en contacto contigo en un lapso de <strong className="text-slate-900">24 a 48 horas</strong>.
        </p>

        {/* Botón de confirmación */}
        <button 
          onClick={onClose} 
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          Entendido
        </button>

      </div>
    </div>
  );
}