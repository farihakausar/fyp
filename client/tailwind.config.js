/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      fontFamily: {
        customfontname: ['Segoe UI', 
                       'Helvetica Neue', 
                       'Arial',
                       'sans-serif',
                       /*...*/ defaultTheme.fontFamily.customfontname],
      
        marck: ['"Marck Script"', ...defaultTheme.fontFamily.sans],
        oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
        satisfy: ['"Satisfy"', ...defaultTheme.fontFamily.sans]
       
      
      }
    },
  },
  plugins: [],
}

