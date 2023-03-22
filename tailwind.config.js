/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // ".src/components/Header/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      img: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
