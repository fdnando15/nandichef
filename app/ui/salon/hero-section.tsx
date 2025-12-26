"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('starters');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for background image - will add actual image later */}
        <div className="w-full h-full bg-gradient-to-br from-nandi-accent via-nandi-primary to-nandi-secondary" />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-nandi-dark/40 via-nandi-dark/30 to-nandi-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Comida Casera
            <br />
            <span className="font-pacifico text-nandi-accent">con Amor</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-nandi-light mb-8 font-light max-w-2xl mx-auto">
            Cocina tradicional para llevar
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-nandi-accent" />
            <div className="h-2 w-2 bg-nandi-accent rounded-full animate-pulse" />
            <div className="h-px w-16 bg-nandi-accent" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollToMenu}
              className="group px-8 py-4 bg-nandi-accent text-white font-semibold rounded-full hover:bg-nandi-primary transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-nandi-accent/50 w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Ver Menú
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
            </button>

            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-nandi-whatsapp text-white font-semibold rounded-full hover:bg-nandi-whatsapp/90 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Pedir Ahora
            </a>
          </div>

          {/* Opening hours */}
          <div className="mt-8 text-nandi-light/90">
            <p className="text-sm sm:text-base">
              🕐 Lun - Sáb: 12:00 - 15:00 | 19:00 - 22:00
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToMenu}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDownIcon className="h-8 w-8 text-nandi-accent" />
        </button>
      </div>
    </section>
  );
}
