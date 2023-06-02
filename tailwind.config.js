/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        black: '#000000', // Replace with your desired black color value
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  
  daisyui: {
    themes: ["forest", "retro"],
    darkTheme: "forest",
  },
};




