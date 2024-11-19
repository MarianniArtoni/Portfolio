/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: ['"Lucida Console"', '"Courier New"', 'monospace'],
        poiret: ['"Poiret One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

