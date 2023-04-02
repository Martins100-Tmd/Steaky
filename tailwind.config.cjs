/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
        b_serif: ["Bree Serif"],
        hev: ["Helvetica"],
      },
      width: {
        ninety: ["90%"],
        nineFive: ["95%"],
        35: ["35%"],
        70: ["70%"],
      },
      backgroundColor: {
        white_4: ["rgba(255,255,255,.6)"],
      },
      maxHeight: {
        350: ["350px"],
      },
      backgroundImage: {
        news: "url(./src/Assets/F17.jpg)",
      },
    },
  },
  plugins: [],
};
