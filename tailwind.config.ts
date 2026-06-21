import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0a1a10",
          900: "#0f2318",
          800: "#162e1f",
          700: "#1c3a27",
          600: "#234930",
          500: "#2d5e3d",
          400: "#3d7a52",
          300: "#5a9e6f",
          200: "#89c49e",
          100: "#c4e4ce",
          50:  "#edf7f1",
        },
        gold: {
          900: "#4a3300",
          800: "#6b4a00",
          700: "#8c6200",
          600: "#b07d00",
          500: "#c8920a",
          400: "#d9a820",
          300: "#e8c050",
          200: "#f0d480",
          100: "#f8ecbb",
          50:  "#fdf8e8",
        },
        cream: {
          DEFAULT: "#f9f5ee",
          dark: "#ede9e0",
        },
        stone: {
          DEFAULT: "#7a7267",
          light: "#a09890",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Jost'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url('/noise.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
