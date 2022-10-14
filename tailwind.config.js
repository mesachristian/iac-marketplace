/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-white" : "#f0f0f0",
        "primary" : "#7d9816",
        "primary-bg" : "#f6fcf9",
        "primary-title" : "#0a2540",
        "primary-text" : "#425466",
        "dimBlue" : "rgba(9, 151, 124, 0.1)",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
