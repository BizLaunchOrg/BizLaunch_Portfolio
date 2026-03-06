const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // enable class‑based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brand colors used in components
        primary: colors.red[500],
        accent: colors.blue[500],
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
