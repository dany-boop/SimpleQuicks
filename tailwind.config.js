/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {    
    extend: {
      colors:{
        grey:'#4F4F4F',
        lala:'#333333',
      }
    },
  },
  plugins: [],
};
