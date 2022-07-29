/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        sm : "576px",
        md : "768px",
        lg : "992px",
        xl : "1200px"
      },
      colors :{
        
      },
      keyframes :{
        slider :{
          from :{transform : 'translateX(-100%)'},
          to :{transform : 'translateX(0px)'}
        },
        animation :{
          'slider-my-projects' : 'slider 3s linear'
        },
      }

    },
  },
  plugins: [],
}
