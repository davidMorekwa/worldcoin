/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens:{
      sm: {'max':'400px'},
      md: {'max': '699px'},
      lg: {'min': '700px'},
      xlg:{'min': '1000px'}
    }
  },
  plugins: [],
}

