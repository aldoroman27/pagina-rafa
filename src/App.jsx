import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Certificaciones from './components/Certificaciones';
import Services from './components/Services';
import Auditor from './components/Auditor';
import Contacto from './components/Contacto';
import PlantillaServicio from './components/PlantillaServicio';
import PlantillaProyectos from './components/PlantillaProyectos';


// Importamos los datos para completar las páginas
import { serviciosData } from './data/serviciosData';
import { medioAmbienteData } from './data/medioAmbiente';
import { proyectosData } from './data/proyectosPersonales';
import ScrollHandler from './components/ScrollHandler';

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

export default function App() {
  return (
    <Router>

      <ScrollHandler/>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            
            {/* Creamos las rutas dinámicamente con un map */}
            {serviciosData.map((servicio, index) => (
              <Route 
                key={index}
                path={servicio.path} 
                element={<PlantillaServicio {...servicio} />} 
              />
            ))}

            {medioAmbienteData.map((servicio, index) => (
              <Route 
                key={`ma-${index}`}
                path={servicio.path} 
                element={<PlantillaServicio {...servicio} />} 
              />
            ))}

            {proyectosData.map((proyecto, index) => (
              <Route 
                key={`proy-${index}`}
                path={proyecto.path} 
                element={<PlantillaProyectos {...proyecto} />} 
              />
            ))}

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}