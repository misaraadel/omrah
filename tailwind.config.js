module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      primary: `#B38224`,
      secondary: `#38568A`,
      thirdColor: `#FCFAF7`,
      desc: `#2E2E2E`,
      white: `#fff`,
      dark: `#000`,
      pargraph: `#989898`,
    },

    fontFamily: {
      display: ['Tajawal', 'sans-serif'],
      body: ['Tajawal', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },

    container: {
      center: true,
      padding: '15px',
    },
  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],

  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
