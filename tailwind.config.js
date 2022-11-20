/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'phthalo-green': '#283618',
        'polished-pine': '#70998A',
        'earth-yellow': '#E9B872',
        'wine': '#663939',
        'cornsilk':'#FEFAE0',
        'oliveGreen':'#283618',
        'lemon':'#9A8E7E',
        },
        fontFamily: {
          body: ['Montserrat']
        },
    },
  },
  plugins: [],
}