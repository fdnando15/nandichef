import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        pacifico: ['var(--font-pacifico)', 'cursive'],
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        // Nandi Chef Brand Colors - Warm, homemade food theme
        nandi: {
          primary: "#E8734E", // Warm orange/terracotta
          secondary: "#2D5016", // Dark olive green
          accent: "#F4A261", // Light orange
          dark: "#2B2B2B", // Near black for text
          light: "#FAF9F6", // Off-white background
          alert: "#D4A373", // Beige/golden for allergens
          whatsapp: "#25D366", // WhatsApp green
        },
        // Keep existing colors for dashboard compatibility
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideDown: {
        "0%": { opacity: "0", transform: "translateY(-10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.6s ease-out",
      slideDown: "slideDown 0.3s ease-out",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
