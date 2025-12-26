"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Galería", href: "/gallery" },
  { name: "Tienda", href: "/shop" },
  { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-salon-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-salon-white hover:text-salon-red transition-colors duration-300"
          >
            <span className="text-salon-red">CARICCIO HAIR</span> SALON
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? "text-salon-red"
                    : "text-salon-white hover:text-salon-red"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-salon-red transform origin-left transition-transform duration-300 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-salon-red text-salon-white font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-salon-red/50"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-salon-white hover:text-salon-red transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-salon-black/98 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? "bg-salon-red text-salon-white"
                  : "text-salon-white hover:bg-salon-black-light hover:text-salon-red"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-4 px-6 py-3 bg-salon-red text-salon-white text-center font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300"
          >
            Reservar Cita
          </a>
        </div>
      </div>
    </nav>
  );
}
