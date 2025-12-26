import { Inter, Poppins, Pacifico, Lusitana } from "next/font/google";

// Body text - clean and readable
export const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

// Headings and titles - modern and bold
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Logo and brand accents - warm script font
export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});

// Keep for dashboard compatibility
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lusitana",
  display: "swap",
});
