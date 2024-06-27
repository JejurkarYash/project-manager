/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#D8EFD3",
        sideBarColor: "#95D2B3",
        buttonColor: "#55AD9B",
      },
    },
  },
  plugins: [],
};
