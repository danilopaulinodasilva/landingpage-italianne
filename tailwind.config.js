/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // don't forget to add other files and directories
    "./obrigado.html", // don't forget to add other files and directories
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        downriver: {
          50: "#e9f8ff",
          100: "#ceeeff",
          200: "#a7e2ff",
          300: "#6bd4ff",
          400: "#26b8ff",
          500: "#008eff",
          600: "#0064ff",
          700: "#0049ff",
          800: "#003de6",
          900: "#003bb3",
          950: "#001f5a",
        },
        "harvest-gold": {
          50: "#fcf9f0",
          100: "#f7f1dd",
          200: "#eee0ba",
          300: "#e3ca8e",
          400: "#d9b26a",
          500: "#ce9741",
          600: "#c08036",
          700: "#9f652f",
          800: "#80522c",
          900: "#684426",
          950: "#382212",
        },
      },
    },
  },
  plugins: [],
};
