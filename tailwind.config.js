/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-shadow": "#8D7B68",
        "custom-grullo": "#A4907C",
        "custom-almond": "#F1DEC9",
      },
      fontSize: {
        "custom-xs": "0.7em",
      },
      keyframes: {
        "drawer-show": {
          "0%": {
            height: "0",
            top: "0",
            padding: "0 20px 20px",
            overflow: "hidden",
            opacity: "0",
          },
          "100%": {
            height: "100vh",
            top: "0",
            padding: "50px 20px 20px",
            overflow: "hidden",
            opacity: "1",
          },
        },
        "drawer-hide": {
          "0%": {
            height: "100vh",
            top: "0",
            padding: "50px 20px 20px",
            overflow: "hidden",
            opacity: "1",
          },
          "100%": {
            height: "0",
            top: "0",
            padding: "0 20px 20px",
            overflow: "hidden",
            opacity: "0",
          },
        },
      },
      animation: {
        "drawer-show": "drawer-show 0.2s forwards",
        "drawer-hide": "drawer-hide 0.2s forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
