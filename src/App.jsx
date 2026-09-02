import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Contenido temporal para probar el scroll */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Hero />
          <Services />
        <div className="h-[150vh]"></div> {/* Espacio extra para forzar el scroll y ver la barra pegajosa */}
      </main>
    </div>
  );
};

