/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-white": "#ccd6f6",
        "custom-gray":"#8892b0",
      },
      body: {
        padding: "50px"
      }
    },
    // colors: {
    //   darkBlue: "#0a182f",
    //   blueGrey: "#ccd6f6",
    //   neonGreen: "#64ffda",
    //   myGrey: "#64ffda"
    // }
  },
  plugins: [],
};
