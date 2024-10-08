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
        italianne: {
          50: "#ebfef6",
          100: "#cffce9",
          200: "#a3f7d7",
          300: "#68edc2",
          400: "#2cdba9",
          500: "#08c192",
          600: "#009d78",
          700: "#007e63",
          800: "#026350",
          900: "#035143",
          950: "#00322a",
        },
      },
    },
  },
  plugins: [],
};
