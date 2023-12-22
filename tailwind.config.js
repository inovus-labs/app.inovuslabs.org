/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#E7FFE6', // background primary
        bgSecondary: '#DADBDD', // background secondary
        primary: '#92E3A9', // button color / icon hover
        secondary: '#263238', // button color / icon hover
        tertiary: '#A3A3A3', // button color / icon hover
        border: '#484848', // border / line color
        link: '#4A8FFF', // link color
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}