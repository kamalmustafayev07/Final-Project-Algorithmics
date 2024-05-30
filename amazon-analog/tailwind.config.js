/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#FF9900",
        "primary-100":"#FFBE5B",
        "primary-900":"#CA7900",
        "secondary": "#F9F9F9",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px",
        "tablet":"900px",
        "small-tablet":"630px",
        "phone":"560px",
        "sm-phone":"470px",
        "xs-phone":"420px",
      }
    },
  },
  plugins: [],
}