import { MenuItem, Allergen } from "./definitions";

// Allergen definitions
export const allergens: Allergen[] = [
  {
    id: "gluten",
    name: "Gluten",
    icon: "🌾",
    description: "Contiene trigo, cebada, centeno u otros cereales con gluten",
  },
  {
    id: "dairy",
    name: "Lácteos",
    icon: "🥛",
    description: "Contiene leche, queso, mantequilla u otros productos lácteos",
  },
  {
    id: "nuts",
    name: "Frutos Secos",
    icon: "🥜",
    description: "Contiene frutos secos o cacahuetes",
  },
  {
    id: "egg",
    name: "Huevo",
    icon: "🥚",
    description: "Contiene huevo o productos derivados",
  },
  {
    id: "fish",
    name: "Pescado",
    icon: "🐟",
    description: "Contiene pescado o productos derivados",
  },
  {
    id: "shellfish",
    name: "Marisco",
    icon: "🦐",
    description: "Contiene gambas, cangrejo, langosta u otros mariscos",
  },
  {
    id: "soy",
    name: "Soja",
    icon: "🫘",
    description: "Contiene soja o productos de soja",
  },
];

// Menu items
export const menuItems: MenuItem[] = [
  // ENTRANTES
  {
    id: "starter-1",
    name: "Ensaladilla Rusa",
    description: "Ensaladilla rusa casera con patata, zanahoria, guisantes y mayonesa",
    price: 5.50,
    category: "starters",
    image: "/ensaladilla.png",
    allergens: ["egg"],
    available: true,
  },

  // PRINCIPALES
  {
    id: "main-1",
    name: "Arroz Tres Delicias",
    description: "Arroz salteado con jamón, guisantes, huevo y zanahoria",
    price: 8.50,
    category: "mains",
    image: "/arroz.png",
    allergens: ["egg"],
    available: true,
  },
  {
    id: "main-2",
    name: "Macarrones Gratinados",
    description: "Macarrones con salsa de tomate casera y queso gratinado",
    price: 8.00,
    category: "mains",
    image: "/macarrones.png",
    allergens: ["gluten", "dairy"],
    available: true,
  },
  {
    id: "main-3",
    name: "Carrillada de Cerdo",
    description: "Carrillada de cerdo estofada en su jugo, melosa y sabrosa",
    price: 12.50,
    category: "mains",
    image: "/carrillada.png",
    allergens: [],
    available: true,
  },
  {
    id: "main-4",
    name: "Serranito",
    description: "Bocadillo de lomo, jamón serrano, pimiento verde y tomate",
    price: 6.50,
    category: "mains",
    image: "/serranito.png",
    allergens: ["gluten"],
    available: true,
  },

  // POSTRES
  {
    id: "dessert-1",
    name: "Brownie de Chocolate",
    description: "Brownie de chocolate casero, jugoso y con nueces",
    price: 4.50,
    category: "desserts",
    image: "/brauni.png",
    allergens: ["gluten", "dairy", "egg", "nuts"],
    available: true,
  },

  // BEBIDAS
  {
    id: "drink-1",
    name: "Coca Cola",
    description: "Refresco de cola (330ml)",
    price: 2.00,
    category: "drinks",
    image: "/cola.png",
    allergens: [],
    available: true,
  },
];

// Helper function to get items by category
export function getItemsByCategory(category: MenuItem["category"]): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

// Helper function to get allergen info by ID
export function getAllergenById(id: string): Allergen | undefined {
  return allergens.find((allergen) => allergen.id === id);
}

// Helper function to get allergens for a menu item
export function getAllergensForItem(item: MenuItem): Allergen[] {
  return item.allergens
    .map((allergenId) => getAllergenById(allergenId))
    .filter((allergen): allergen is Allergen => allergen !== undefined);
}
