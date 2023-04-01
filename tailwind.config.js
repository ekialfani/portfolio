/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-shadow': '#8D7B68',
        'custom-grullo': '#A4907C',
        'custom-almond': '#F1DEC9',
      },
    },
  },
  plugins: [],
}

