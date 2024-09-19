/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { backgroundColor: '#4CAF50' },  // Start and end color (green)
          '25%': { backgroundColor: '#2196F3' },       // Blue
          '50%': { backgroundColor: '#FF5722' },       // Orange
          '75%': { backgroundColor: '#FFC107' },       // Yellow
        },
      },
      animation: {
        colorCycle: 'colorChange 4s infinite', // Duration and infinite looping
      },
    },
  },
plugins: [
    require('daisyui'),
  ],}

  

