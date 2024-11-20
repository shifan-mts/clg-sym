/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0C10',
        darkgrey: '#1F2833',
        whitegrey: '#C5C6C7',
        neonblue: '#66FCF1',
        greenblue: '#45A29E',
        pink: '#D83f87',
        violet: '#44318D',
      },
      fontFamily: {
        'collegefont' : ['collegefont', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 10s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },

  plugins: [],
}
