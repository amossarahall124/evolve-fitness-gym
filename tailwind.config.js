/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "gray-20": "#000000",
        "gray-50": "#444444",
        "gray-100": "#666666",
        "gray-500": "#f0f0f0",
        "primary-50": "#2B0000",
        "primary-100": "#550000",
        "primary-200": "#800000",
        "primary-300": "#AA0000",
        "primary-500": "#D50000",
        "primary-600": "#FF0000",
        "secondary-100": "#00003a",
        "secondary-200": "#00005c",
        "secondary-300": "#030076",
        "secondary-500": "#0000ff",
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
