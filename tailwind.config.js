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

        //* <ProjectSection />  isExpanded

        //? <ProjectContainer />
        "ProjectContainer-expand-open": {
          "0%": {
            height: "384px",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            height: "620px",
          },
        },

        //? <ProjectBox />
        "project-box-expand-open": {
          "0%": {
            transform: "translate(0,0)",
          },
          "20%": {
            transform: "translate(0,0)",
          },

          "45%": {
            transform: "translate(-418px,0)",
          },
          "70%": {
            transform: "translate(-418px,-111px)",
            height: "24rem",
          },

          "100%": {
            transform: "translate(-223px,0)",
            height: "100%",
          },
        },

        //* <Header />
        "languages-tools-rows-animation-rl": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },

          "100%": {
            transform: "translateX(0)",
          },
        },
        "languages-tools-rows-animation-lr": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
