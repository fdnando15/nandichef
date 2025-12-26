import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        // Hair Salon Brand Colors - Black/White/Red theme
        salon: {
          black: "#0a0a0a",
          "black-light": "#1a1a1a",
          white: "#ffffff",
          "white-dark": "#f5f5f5",
          red: "#dc2626", // Vibrant red accent
          "red-dark": "#991b1b",
          "red-light": "#fecaca",
          gray: "#404040",
          "gray-light": "#737373",
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
