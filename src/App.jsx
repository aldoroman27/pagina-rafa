import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Certificaciones from './components/Certificaciones';
import Services from './components/Services';
import Auditor from './components/Auditor';
import Contacto from './components/Contacto';
import PlantillaServicio from './components/PlantillaServicio';

// 1. Importas tus datos
import { serviciosData } from './data/serviciosData';

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
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            
            {/* 2. Creas las rutas dinámicamente con un map */}
            {serviciosData.map((servicio, index) => (
              <Route 
                key={index}
                path={servicio.path} 
                element={<PlantillaServicio {...servicio} />} 
              />
            ))}

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}