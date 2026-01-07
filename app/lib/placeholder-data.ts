// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const recipes = [
  {
    id: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
    name: 'Arroz con Pollo',
    description: 'Arroz casero con pollo tierno y verduras frescas de temporada',
    price: 850, // 8.50€
    allergens: ['celery'],
    category: 'mains',
    available: true,
    image_url: '/arroz.png',
  },
  {
    id: 'b2c3d4e5-f6a7-4b5c-9d0e-1f2a3b4c5d6e',
    name: 'Brownie Casero',
    description: 'Delicioso brownie de chocolate con nueces crujientes',
    price: 350, // 3.50€
    allergens: ['gluten', 'nuts', 'dairy', 'eggs'],
    category: 'desserts',
    available: true,
    image_url: '/brauni.png',
  },
  {
    id: 'c3d4e5f6-a7b8-4c5d-0e1f-2a3b4c5d6e7f',
    name: 'Carrillada Ibérica',
    description: 'Carrillada de cerdo ibérico estofada en salsa de vino tinto',
    price: 1250, // 12.50€
    allergens: ['sulfites'],
    category: 'mains',
    available: true,
    image_url: '/carrillada.png',
  },
  {
    id: 'd4e5f6a7-b8c9-4d5e-1f2a-3b4c5d6e7f8a',
    name: 'Ensaladilla Rusa',
    description: 'Ensaladilla tradicional con atún de calidad y mahonesa casera',
    price: 450, // 4.50€
    allergens: ['eggs', 'fish'],
    category: 'starters',
    available: true,
    image_url: '/ensaladilla.png',
  },
  {
    id: 'e5f6a7b8-c9d0-4e5f-2a3b-4c5d6e7f8a9b',
    name: 'Macarrones Caseros',
    description: 'Macarrones con salsa de tomate casera y carne picada',
    price: 750, // 7.50€
    allergens: ['gluten'],
    category: 'mains',
    available: true,
    image_url: '/macarrones.png',
  },
  {
    id: 'f6a7b8c9-d0e1-4f5a-3b4c-5d6e7f8a9b0c',
    name: 'Serranito',
    description: 'Bocadillo andaluz con lomo, jamón serrano y pimiento verde',
    price: 550, // 5.50€
    allergens: ['gluten'],
    category: 'starters',
    available: true,
    image_url: '/serranito.png',
  },
  {
    id: 'a7b8c9d0-e1f2-4a5b-4c5d-6e7f8a9b0c1d',
    name: 'Coca-Cola',
    description: 'Refresco de cola 330ml',
    price: 200, // 2.00€
    allergens: [],
    category: 'drinks',
    available: true,
    image_url: '/cola.png',
  },
];

export { users, customers, invoices, revenue, recipes };
