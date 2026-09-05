import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import Certificaciones from "./components/Certificaciones";
import Services from "./components/Services"
import Auditor from "./components/Auditor";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Certificaciones/>
        <Auditor />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

 