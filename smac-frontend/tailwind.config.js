/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontButtonPink: "#F19CFF",
        buttonBg: "#060B1D",
        headerBGLight: "#53504D",
      },
    },
  },
  plugins: [],
};
