/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        projectinfoleft: "projectinfoleft 1s ease-in-out",
        projectinforight: "projectinforight 1s ease-in-out",
      },
      keyframes: {
        projectinfoleft: {
          "0%": {
            right: "700px",
            opacity: "0",
          },
          "100%": { right: "0px", opacity: "1" },
        },
        projectinforight: {
          "0%": {
            left: "700px",
            opacity: "0",
          },
          "100%": { left: "0px", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
