/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        '21/9': '21 / 9',
      },
    },
  },
  plugins: [],
}

