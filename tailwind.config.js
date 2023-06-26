/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // project box in the left side
        "project-info-l-close": {
          "0%": {
            left: "690px",
            visibility: "visible",
            opacity: "1",
          },

          "100%": {
            left: "0px",
            visibility: "hidden",
            opacity: "0",
          },
        },
        "project-info-l-open": {
          "0%": {
            left: "0",
            visibility: "hidden",
            opacity: "0",
          },
          "1%": {
            left: "0",
            visibility: "visible",
            opacity: "0",
          },

          "100%": {
            left: "690px",
            opacity: "1",
          },
        },
        // project box in the right side
        "project-info-r-close": {
          "0%": {
            left: "0px",
            visibility: "visible",
            opacity: "1",
          },

          "100%": {
            left: "690px",
            visibility: "hidden",
            opacity: "0",
          },
        },
        "project-info-r-open": {
          "0%": {
            left: "690px",
            visibility: "hidden",
            opacity: "0",
          },
          "1%": {
            left: "690px",
            visibility: "visible",
            opacity: "0",
          },

          "100%": {
            left: "0",
            opacity: "1",
          },
        },
        //todo isExpanded <ProjectBox />

        // Animation '<AlexEG />'
        // 'header-alexeg': {
        //   from {
        //     'background-position': 0% center
        //   }
        // }
      },
    },
  },
  plugins: [],
};
