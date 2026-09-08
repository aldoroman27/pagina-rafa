import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Certificaciones from './components/Certificaciones';
import Services from './components/Services';
import Auditor from './components/Auditor';
import Contacto from './components/Contacto';
import PlantillaServicio from './components/PlantillaServicio';

// Componente que agrupa la página principal (Landing)
function Inicio() {
  return (
    <>
      <Hero />
      <Certificaciones />
      <Services />
      <Auditor />
      <Contacto />
    </>
  );
}

// Pagina para mostrar que estamos trabajando en ello
function PaginaMantenimiento() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Detalles del Servicio:</h1>
      <p className="text-slate-600">El equipo de TI se encuentra trabajando en esta ruta para brindarles un mejor servicio</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        {/* El Navbar siempre se renderiza arriba */}
        <Navbar />
        
        {/* El contenido central cambia según la URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            {/* Aquí van las rutas de nuestra página, si no están completas dejamos la de mantenimiento */}
            
            {/* Este es el de la NOM-001-STPS*/}
            <Route path="/servicio/stps-nom-001"
             element={
              <PlantillaServicio
                titulo="NOM-001-STPS (Edificios y locales)"
                descripcion= "Establecemos las condiciones de seguridad de los edificios, locales, insalaciones y áreas en los centros de trbajo para su adecuado funcionamiento y conservación."
                alcance = "Se realiza un recorrido y diagnóstico estructural, revisión de planos arquitectónicos, validación de áreas de tránsito, escaleras, rampas y salidas de emergencia conforme a la normativa vigente de la STPS."
                beneficios={[
                  "Evita multas por clausuras operativas de la STPS.",
                  "Previene accidentes y caídas del personal.",
                  "Optimiza el flujo y logística dentro de la planta."
                ]}
                requisitos={[
                  "Planos arquitectónicos actualizados.",
                  "Layout de maquinaria y equipo.",
                  "Bitácoras de mantenimiento de instalaciones.",
                  "Acta constitutiva de la empresa."
                ]}
              />
             } />
            <Route path="/servicios/stps-nom-002" element={<PaginaMantenimiento />}/>
          </Routes>
        </main>

        {/* El Footer siempre se renderiza abajo */}
        <Footer />
      </div>
    </Router>
  );
}
 