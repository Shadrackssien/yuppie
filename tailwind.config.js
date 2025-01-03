/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B0DC00",
        secondary: "#CCFF00",
      },
    },
  },
  plugins: [],
};
