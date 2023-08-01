/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'onest': ['Onest', 'sans-serif']
      },
      colors: {
        "lime-green": "#00EC85",
        "light-green": "#EAFFF6",
        "light-black": "#222237",
      }
    },
  },
  plugins: [],
}