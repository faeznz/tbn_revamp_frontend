/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '21/9': '21 / 9',
        '18/9': '18 / 9',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
};
