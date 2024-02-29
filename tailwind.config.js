/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,j2}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E1251B',
        'secondary': '#003A5D',
      },
      screens: {
        'xs': '400px',
      },
    }
  },
  plugins: [],
}
