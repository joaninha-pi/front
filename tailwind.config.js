/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto Serif', 'serif'],
        subtitle: ['Poppins 700', 'sans-serif'],
        body1: ['Poppins 400', 'sans-serif'],
        body2: ['Poppins 300', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
