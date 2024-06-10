/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "bg-image":
          "url('./images/images/deniz-demirci-0UeHGWsFyHM-unsplash.jpg')",
      },
      colors: {
        "regal-purple": "#F8F5FF",
        "regular-black": "#101828",
      },
    },
  },
  plugins: [],
};
