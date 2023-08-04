/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //2 color theme black and white
        primary: "#ffffff",
        "primary-variant": "#f3f3f3",
        "primary-variant-2": "#e1e1e1",
        secondary: "#000000",
        "secondary-variant": "#141414",
        "secondary-variant-2": "#1b1b1b",
        green: "#7DCE13",
        red: "#D61C4E",
      },
      fontFamily: {
        // thin,light,normal,medium,bold,black
        Roboto: ["Roboto", "sans-serif"],
        Marker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
