/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightPink: "#f3d0f8",
        customPink: "#e25ed9",
        customPurple: "#8b5ce0",
        customOrange: "#fb7d55"
      },
    },
  },
  plugins: [],
};