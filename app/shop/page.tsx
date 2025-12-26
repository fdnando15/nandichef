import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
            Nuestra <span className="text-salon-red">Tienda</span>
          </h1>
          <p className="text-xl text-salon-gray-light mb-12">
            Próximamente: Productos premium para el cuidado del cabello y herramientas de estilismo.
          </p>
          <div className="inline-block px-6 py-3 bg-salon-red/20 border-2 border-salon-red rounded-lg">
            <p className="text-salon-red font-semibold">Funcionalidad de e-commerce disponible en Fase 2</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
