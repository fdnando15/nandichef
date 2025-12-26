import Navbar from "@/app/ui/salon/navbar";
import HeroSection from "@/app/ui/salon/hero-section";
import Footer from "@/app/ui/salon/footer";
import { menuItems, getAllergensForItem } from "@/app/lib/menu-data";
import { MenuItem } from "@/app/lib/definitions";

// Simple menu section component
function MenuSection({ 
  title, 
  items, 
  id 
}: { 
  title: string; 
  items: MenuItem[];
  id: string;
}) {
  return (
    <section id={id} className="py-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-nandi-secondary mb-8 text-center font-poppins">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item) => {
            const itemAllergens = getAllergensForItem(item);
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex gap-4">
                  {/* Placeholder for image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-nandi-accent to-nandi-primary rounded-lg flex-shrink-0 flex items-center justify-center text-white text-2xl">
                    🍽️
                  </div>
                  
                  {/* Item info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-nandi-dark text-base">
                        {item.name}
                      </h3>
                      <span className="font-bold text-nandi-primary text-lg flex-shrink-0">
                        {item.price.toFixed(2)}€
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Allergens */}
                    {itemAllergens.length > 0 && (
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {itemAllergens.map((allergen) => (
                          <span
                            key={allergen.id}
                            className="text-xs px-2 py-1 bg-nandi-alert/30 text-nandi-dark rounded-full"
                            title={allergen.description}
                          >
                            {allergen.icon} {allergen.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const starters = menuItems.filter(item => item.category === 'starters');
  const mains = menuItems.filter(item => item.category === 'mains');
  const desserts = menuItems.filter(item => item.category === 'desserts');
  const drinks = menuItems.filter(item => item.category === 'drinks');

  return (
    <main className="min-h-screen bg-nandi-light">
      <Navbar />
      <HeroSection />

      {/* Menu Sections */}
      <div className="bg-nandi-light">
        <MenuSection title="Entrantes" items={starters} id="starters" />
        <MenuSection title="Platos Principales" items={mains} id="mains" />
        <MenuSection title="Postres" items={desserts} id="desserts" />
        <MenuSection title="Bebidas" items={drinks} id="drinks" />
      </div>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nandi-primary to-nandi-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            ¿Listo para pedir?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contacta con nosotros por WhatsApp y prepararemos tu pedido
          </p>
          <a
            href="https://wa.me/34XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-nandi-whatsapp text-white font-semibold rounded-full hover:bg-nandi-whatsapp/90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
