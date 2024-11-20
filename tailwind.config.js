/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./assets/**/*.{html,js} ./index.html","./assets/js/**/*.js","./assets/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        'primary': "#009D8C",
        'secondary': "#374151",
        'tertiary': "#1F2937",
        'quaternary': "#6B7280",
        'senary': "#F3F4F6",
        'septenary': "#C08D54",
        'octonary': "#1B1C1E",
        'nonary': "#004532",
        'decenary': "#909396",
        'undecenary': "#101011",
        'duodecenary': "#004532",
        'dodecenary': "#224269",
      },
      fontFamily: {
        'primary':["Poppins"],
        'secondary':[" DM Sans "],
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        '2md': '850px',
        // => @media (min-width: 850px) { ... }
        '3md': '970px',
        // => @media (min-width: 970px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        '2lg': '1120px',
        // => @media (min-width: 1120px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

