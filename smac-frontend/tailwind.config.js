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
        backGround:"#262626",
        border:"#36415F",
        docsSideBar:"#1d1d1d",
        docOptions:"#565656",
        docSkeleton:"#454545"
      },
    },
  },
  plugins: [],
};
