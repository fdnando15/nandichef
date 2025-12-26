import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
            Sobre <span className="text-salon-red">Nosotros</span>
          </h1>
          <p className="text-xl text-salon-gray-light mb-12">
            Próximamente: Nuestra historia, equipo, experiencia e información de contacto.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
