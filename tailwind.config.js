/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeIn1: {
        '0%': { opacity: 0 },
        '60':{opacity:0.8},
        '100%': { opacity: 1 },
      },
      clicked: {
        '0%': { 
            transform: 'scale(1)', 
            
          },
          '50%': { 
            transform: 'scale(0.97)', 
             
          },
          '100%': { 
            transform: 'scale(1)',  
          },
      },
    },
    animation: {
      fadeIn: 'fadeIn 2s ease-in-out',
      fadeIn1: 'fadeIn 1s ease-in-out',
      clicked: 'clicked 0.3s ease-in-out ',
    },
  },
  plugins: [],
}

