/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'silver': '#F3F3F3',
        'black': '#0F0F0F',
        'BrownGary': '#646360',
        'card-color': '#D2DAFF',
        'good':'#FFFFFF',
        "green":"#607D8A",
        "purple":"#9D28AC",
        "Browne":"#7A5448",
        "blue":"#1A96F0",
    },
    textColor:{
      "black":"#222223"
    },
    fill:{
      'withe':'#FFFFFF'
    },
    fontFamily: {
        'Sans': 'Inter', 
    }
    },
  },
  plugins: [],
}