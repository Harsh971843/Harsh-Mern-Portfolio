/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#1E293B",
        "secondary" : "#71BEE5",
        "tertiary" : "#C9639D",
      },  
    },
  },
  plugins: [],
}