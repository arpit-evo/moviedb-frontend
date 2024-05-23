/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        30: "7.5rem" /* 120px */,
      },
      margin: {
        30: "7.5rem" /* 120px */,
      },
    },
  },
  plugins: [],
};
