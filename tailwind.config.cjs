/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(158, 36%, 37%)',
        'primaryDark' : 'hsl(158, 36%, 27%)',
        'cream': 'hsl(30, 38%, 92%)'
      },
      fontFamily: {
        'fraunces': 'Fraunces, serif',
        'montserrat': 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}