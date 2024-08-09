/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ['"Libre Franklin"', "sans-serif"],
        prata: ['"Prata"', "serif"],
        "alfa-slab-one": ['"Alfa Slab One"', "serif"],
      },
      width: {
        132: "33.75rem",
      },
      height: {
        132: "33.75rem",
      },
      colors: {
        "my-dark-red": "#C2546F",
        "my-text": "#484848",
        "my-green": "#9BA188",
        "my-brown": "#B29793",
        "my-yellow": "#dfc39b",
        "my-purple": "#c6a9cc",
        "my-careys-pink": "#C797A3",
        "my-pink": "#F0A2B8",
        "my-light-careys-pink": "#FFEFF3",
        "my-blue": "#7B9CA3",
        "my-blue2": "#A1B8CA",
        "my-light-blue": "#E7F6FA",
        "my-light-grey": "#DFDFDF",
      },
      dropShadow: {
        "my-normal-drop-shadow": "0 4px 3px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

