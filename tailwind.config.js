/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'railway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'primary': '#FBC92B',
        'secondary': '#395E29'
      },
      backgroundImage: {
        'hero-image': "url('./assets/plane.jpg')",
      },
    },
  },
  plugins: [],
}