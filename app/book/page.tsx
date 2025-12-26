import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
            Reserva tu <span className="text-salon-red">Cita</span>
          </h1>
          <p className="text-xl text-salon-gray-light mb-12">
            Haz clic en el botón para reservar tu cita a través de Booksy.
          </p>
          <a
            href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-salon-red text-salon-white text-lg font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-salon-red/50"
          >
            Reservar en Booksy
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
