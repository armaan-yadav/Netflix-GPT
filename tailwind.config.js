/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#db0000",
        secondary: "#000000",
        primaryTwo: "#B00710",
        secondaryTwo: "#564d4d",
      },
    },
  },
  plugins: [],
};
