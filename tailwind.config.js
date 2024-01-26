/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "galactic-blue": "#755CDE",
        "summer-yellow": "#F6A560",
        "pink-shade": "#F39E9E",
        "light-red": "#EB7565",
        "cyan-shade": "#61C4B7",
        "red-grape": "#552049",
        "almost-black": "#030303",
        "medium-brown": "#7A746E",
        "light-cream": "#FFF7F0",
      },
      maxWidth: {
        "screen-2xl": "1440px",
        "3xl": "680px",
      },
      minHeight: {
        44: "182px",
        40: "158px",
      },
      maxHeight: {
        96: "364px",
        44: "182px",
        40: "158px",
      },
      fontFamily: {
        custom: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "6xl": "3.5rem",
        "5xl": "2.75rem",
        "4xl": "2.5rem",
        "3xl": "2.25rem",
        "2xl": "2rem",
        xl: "1.5rem",
        base: "1.125rem",
        sm: "1rem",
        xs: "0.875rem",
      },
      lineHeight: {
        10: "4.375rem",
        9: "3.1875rem",
        8: "2.5rem",
        6: "1.625rem",
      },
      padding: {
        "164px": "10.25rem",
        "68px": "4.25rem",
        "45px": "2.8125rem",
        "38px": "2.375rem",
        "14px": "0.875rem",
      },
      margin: {
        "66px": "4.125rem",
      },
      typography: {
        DEFAULT: {
          css: {
            "@layer base": {
              "font-synthesis": "none",
              "text-rendering": "optimizeLegibility",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
