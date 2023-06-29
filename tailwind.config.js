/** @type {import('tailwindcss').Config} */

// <Header />
import { languagesToolsRowsAnimationRL } from "./src/components/Header-section/HeaderLanguagesToolsAnimation";
import { languagesToolsRowsAnimationLR } from "./src/components/Header-section/HeaderLanguagesToolsAnimation";

// <ProjectBox />
import { projectBoxExpandOpenLR } from "./src/components/Projects-section/project-box/ProjectBoxAinmation";
import { projectBoxExpandOpenRL } from "./src/components/Projects-section/project-box/ProjectBoxAinmation";

// <ProjectContainer />
import { projectContainerExpandOpen } from "./src/components/Projects-section/projectContainerAnimation";

// <ProjectMoreInfo />
import { projectInfoLeftBoxClose } from "./src/components/Projects-section/project-more-info/ProjectMoreInfoAnimation";
import { projectInfoLeftBoxOpen } from "./src/components/Projects-section/project-more-info/ProjectMoreInfoAnimation";
import { projectInfoRightBoxClose } from "./src/components/Projects-section/project-more-info/ProjectMoreInfoAnimation";
import { projectInfoRightBoxOpen } from "./src/components/Projects-section/project-more-info/ProjectMoreInfoAnimation";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        //* <ProjectMoreInfo /> *//
        projectInfoLeftBoxClose,
        projectInfoLeftBoxOpen,
        projectInfoRightBoxClose,
        projectInfoRightBoxOpen,

        //* <ProjectContainer /> *//
        projectContainerExpandOpen,

        //* <ProjectBox /> *//
        projectBoxExpandOpenRL,
        projectBoxExpandOpenLR,

        //* <Header /> *//
        languagesToolsRowsAnimationRL,
        languagesToolsRowsAnimationLR,
      },
    },
  },
  plugins: [],
};
