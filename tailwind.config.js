/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        sm : "576px",
        md : "768px",
        lg : "992px",
        xl : "1200px"
      },
      colors :{
        //Dark (slate color)
        cd900      : "#0f172a",
        cd800      : "#1e293b",
        cdCard     : "#1e293b",
        cd700      : "#334155",
        cd600      : "#475569",
        cd500      : "#64748b",
        cd400      : "#94a3b8",
        cd300      : "#cbd5e1",
        cd200      : "#e2e8f0",
        cd100      : "#f1f5f9",
        cd50       : "#f8fafc",
        
        //Light (blue bolor)
        cl900      : "#4c1d95",
        cl800      : "#5b21b6",
        clCard     : "#7c3aed",
        cl700      : "#6d28d9",
        cl600      : "#7c3aed",
        cl500      : "#8b5cf6",
        cl400      : "#a78bfa",
        cl300      : "#c4b5fd",
        cl200      : "#ddd6fe",
        cl100      : "#ede9fe",
        cl50       : "#f5f3ff"
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
