/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Black Han Sans', 'sans-serif'],
        body: ['ABeeZee', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
