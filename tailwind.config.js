/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Hanken: ["Hanken Grotesk", "sans-serif"]
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        Light_red: "hsl(0, 100%, 67%)",
        Light_red_bg: "hsla(0, 100%, 67%, 0.1)",
        rangey_yellow: "hsl(39, 100%, 56%)",
        rangey_yellow_bg: "hsl(39, 100%, 56%, 0.1)",
        Green_teal: "hsl(166, 100%, 37%)",
        Green_teal_bg: "hsl(166, 100%, 37%, 0.1)",
        Cobalt_blue: "hsl(234, 85%, 45%)",
        Cobalt_blue_bg: "hsl(234, 85%, 45%, 0.1)",
        White: "hsl(0, 0%, 100%)",
        Pale_blue: "hsl(221, 100%, 96%)",
        Light_lavender: "hsl(241, 100%, 89%)",
        Dark_gray_blue: "hsl(224, 30%, 27%)",
        Light_slate_blue: "hsl(252, 100%, 67%)",
        Light_royal_blue: "hsl(241, 81%, 54%)",
        Violet_blue: "hsla(256, 72%, 46%, 1)",
        Persian_blue: "hsla(241, 72%, 46%, 0)",
      },
    },
  },
  plugins: [],
}