/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans",
        satisfy: "Satisfy",
      },
      colors: {
        title: "#fd79a8",
        secondary: "#C5D0DD",
      },
    },
  },
  plugins: [],
};
