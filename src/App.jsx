import Navbar from "./components/navbar/Navbar"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Contenido temporal para probar el scroll */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-slate-800 text-center mt-10">
          Contenido de la página
        </h1>
        <div className="h-[150vh]"></div> {/* Espacio extra para forzar el scroll y ver la barra pegajosa */}
      </main>
    </div>
  );
};

