import { MenuItem, Allergen } from "./definitions";

// Allergen definitions
export const allergens: Allergen[] = [
  {
    id: "gluten",
    name: "Gluten",
    icon: "🌾",
    description: "Contains wheat, barley, rye or other gluten-containing grains",
  },
  {
    id: "dairy",
    name: "Dairy",
    icon: "🥛",
    description: "Contains milk, cheese, butter or other dairy products",
  },
  {
    id: "nuts",
    name: "Nuts",
    icon: "🥜",
    description: "Contains tree nuts or peanuts",
  },
  {
    id: "egg",
    name: "Egg",
    icon: "🥚",
    description: "Contains eggs or egg products",
  },
  {
    id: "fish",
    name: "Fish",
    icon: "🐟",
    description: "Contains fish or fish products",
  },
  {
    id: "shellfish",
    name: "Shellfish",
    icon: "🦐",
    description: "Contains shrimp, crab, lobster or other shellfish",
  },
  {
    id: "soy",
    name: "Soy",
    icon: "🫘",
    description: "Contains soybeans or soy products",
  },
];

// Sample menu items
export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: "starter-1",
    name: "Ensalada Caprese",
    description: "Fresh tomatoes, mozzarella, basil and olive oil",
    price: 6.50,
    category: "starters",
    image: "/menu-images/starters/caprese.jpg",
    allergens: ["dairy"],
    available: true,
  },
  {
    id: "starter-2",
    name: "Croquetas Caseras",
    description: "Homemade croquettes with bechamel and ham",
    price: 7.00,
    category: "starters",
    image: "/menu-images/starters/croquetas.jpg",
    allergens: ["gluten", "dairy", "egg"],
    available: true,
  },
  {
    id: "starter-3",
    name: "Hummus with Veggies",
    description: "Creamy chickpea hummus with fresh vegetables",
    price: 5.50,
    category: "starters",
    image: "/menu-images/starters/hummus.jpg",
    allergens: [],
    available: true,
  },
  {
    id: "starter-4",
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, garlic and basil",
    price: 5.00,
    category: "starters",
    image: "/menu-images/starters/bruschetta.jpg",
    allergens: ["gluten"],
    available: true,
  },

  // MAINS
  {
    id: "main-1",
    name: "Paella Valenciana",
    description: "Traditional Spanish rice with chicken, rabbit and vegetables",
    price: 12.50,
    category: "mains",
    image: "/menu-images/mains/paella.jpg",
    allergens: [],
    available: true,
  },
  {
    id: "main-2",
    name: "Lasagna Bolognese",
    description: "Homemade lasagna with meat sauce and bechamel",
    price: 10.00,
    category: "mains",
    image: "/menu-images/mains/lasagna.jpg",
    allergens: ["gluten", "dairy", "egg"],
    available: true,
  },
  {
    id: "main-3",
    name: "Pollo al Curry",
    description: "Tender chicken in creamy curry sauce with rice",
    price: 11.00,
    category: "mains",
    image: "/menu-images/mains/curry-chicken.jpg",
    allergens: ["dairy"],
    available: true,
  },
  {
    id: "main-4",
    name: "Merluza a la Plancha",
    description: "Grilled hake with lemon butter and seasonal vegetables",
    price: 13.50,
    category: "mains",
    image: "/menu-images/mains/hake.jpg",
    allergens: ["fish", "dairy"],
    available: true,
  },
  {
    id: "main-5",
    name: "Rabo de Toro",
    description: "Slow-cooked oxtail stew in rich red wine sauce",
    price: 14.00,
    category: "mains",
    image: "/menu-images/mains/oxtail.jpg",
    allergens: [],
    available: true,
  },

  // DESSERTS
  {
    id: "dessert-1",
    name: "Tarta de Santiago",
    description: "Traditional almond cake from Galicia",
    price: 4.50,
    category: "desserts",
    image: "/menu-images/desserts/santiago-cake.jpg",
    allergens: ["nuts", "egg"],
    available: true,
  },
  {
    id: "dessert-2",
    name: "Flan Casero",
    description: "Homemade caramel flan with whipped cream",
    price: 4.00,
    category: "desserts",
    image: "/menu-images/desserts/flan.jpg",
    allergens: ["dairy", "egg"],
    available: true,
  },
  {
    id: "dessert-3",
    name: "Brownie de Chocolate",
    description: "Rich chocolate brownie with vanilla ice cream",
    price: 5.00,
    category: "desserts",
    image: "/menu-images/desserts/brownie.jpg",
    allergens: ["gluten", "dairy", "egg", "nuts"],
    available: true,
  },
  {
    id: "dessert-4",
    name: "Arroz con Leche",
    description: "Creamy rice pudding with cinnamon",
    price: 3.50,
    category: "desserts",
    image: "/menu-images/desserts/rice-pudding.jpg",
    allergens: ["dairy"],
    available: true,
  },

  // DRINKS
  {
    id: "drink-1",
    name: "Agua Mineral",
    description: "Still or sparkling mineral water (500ml)",
    price: 1.50,
    category: "drinks",
    image: "/menu-images/drinks/water.jpg",
    allergens: [],
    available: true,
  },
  {
    id: "drink-2",
    name: "Zumo Natural",
    description: "Freshly squeezed orange juice",
    price: 3.00,
    category: "drinks",
    image: "/menu-images/drinks/orange-juice.jpg",
    allergens: [],
    available: true,
  },
  {
    id: "drink-3",
    name: "Café con Leche",
    description: "Coffee with steamed milk",
    price: 1.80,
    category: "drinks",
    image: "/menu-images/drinks/coffee.jpg",
    allergens: ["dairy"],
    available: true,
  },
  {
    id: "drink-4",
    name: "Té Casero",
    description: "Homemade iced tea with lemon and mint",
    price: 2.50,
    category: "drinks",
    image: "/menu-images/drinks/iced-tea.jpg",
    allergens: [],
    available: true,
  },
  {
    id: "drink-5",
    name: "Vino de la Casa",
    description: "House red or white wine (glass)",
    price: 3.50,
    category: "drinks",
    image: "/menu-images/drinks/wine.jpg",
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
