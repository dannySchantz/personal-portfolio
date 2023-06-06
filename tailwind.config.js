/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  
  daisyui: {
    themes: [
      {
        mytheme: {
                
        "primary": "#1eb854",
                
        "secondary": "#1db990",
                
        "accent": "#1db9ac",
                
        "neutral": "#18342b",
                
        "base-100": "#000000",
                
        "info": "#3abff8",
                
        "success": "#36d399",
                
        "warning": "#fbbd23",
                
        "error": "#f87272",
        },
      },
    ],
    darkTheme: "mytheme",
  },
};




