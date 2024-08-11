/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8.5xl': ['7.45rem', { lineHeight: '1' }], 
      },
      lineHeight: {
        'custom': '1',
      },
        colors: {
          gold: '#FFD700',
          grid: '#141414',
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

