/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkcs : "#1B262C",
        navycs: "#0F4C75",
        bluecs: "#3282B8",
        skycs: "#BBE1FA"
      },
    },
  },
   plugins: [require("daisyui")],
   
}

