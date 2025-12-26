"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video_barberia_final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-salon-black/70 via-salon-black/50 to-salon-black/70" />

        {/* Red accent overlay on edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-salon-red/10 via-transparent to-salon-red/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-salon-white mb-6 tracking-tight">
            Tu Estilo,
            <br />
            <span className="text-salon-red">Nuestra Pasión</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-salon-white-dark mb-8 font-light max-w-2xl mx-auto">
            Barbero | Visagista en Sevilla
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-salon-red" />
            <div className="h-2 w-2 bg-salon-red rounded-full" />
            <div className="h-px w-16 bg-salon-red" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-salon-red text-salon-white font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-salon-red/50 w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Reservar Cita
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
            </a>

            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-salon-white text-salon-white font-semibold rounded-full hover:bg-salon-white hover:text-salon-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDownIcon className="h-8 w-8 text-salon-red" />
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-salon-black to-transparent z-10" />
    </section>
  );
}
