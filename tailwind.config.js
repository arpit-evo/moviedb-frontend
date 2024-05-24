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
      fontSize: {
        h1: [
          "64px",
          {
            lineHeight: "80px",
            fontWeight: "600",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "700",
          },
        ],
        h5: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        h6: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        bl: [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        br: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        bs: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        bxs: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        caption: [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
