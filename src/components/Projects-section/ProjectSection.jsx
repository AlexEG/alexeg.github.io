import ProjectContainer from "./projectContainer";
// images
import YourMangaImg from "../../assets/Screenshot 2023-06-13 at 16-27-08 YourManga.png";
import statsPreviewCardComponentImg from "../../assets/localhost_5173_.png";
import Every_Day_Calendar from "../../assets/Every Day Calendar.png";

// Languages & Tools
import REACT from "../../assets/icons/React-Dark.svg";
import HTML from "../../assets/icons/HTML.svg";
import CSS from "../../assets/icons/CSS.svg";
import TIALWINDCSS from "../../assets/icons/TailwindCSS-Dark.svg";
import VITE from "../../assets/icons/Vite-Dark.svg";
import FIREBASE from "../../assets/icons/Firebase-Dark.svg";
import NEXTJS from "../../assets/icons/NextJS-Dark.svg";
import NODEJS from "../../assets/icons/NodeJS-Dark.svg";
import JS from "../../assets/icons/JavaScript.svg";
import TS from "../../assets/icons/TypeScript.svg";

function ProjectSection() {
  return (
    <section className=" w-full min-h-screen flex-col gap-2 flex items-center max-w-screen-2xl mx-auto">
      <ProjectContainer
        projectName="YourManga"
        direction="left"
        img={YourMangaImg}
        langsToolsArr={[CSS, REACT, NODEJS, NEXTJS]}
      />

      <ProjectContainer
        projectName="Frontend Mentor | Stats preview card component"
        direction="right"
        img={statsPreviewCardComponentImg}
        langsToolsArr={[NODEJS, NEXTJS, FIREBASE, VITE, TIALWINDCSS, HTML]}
      />

      <ProjectContainer
        projectName="Every_Day_Calendar"
        direction="left"
        img={Every_Day_Calendar}
        langsToolsArr={[HTML, TIALWINDCSS, JS]}
      />
    </section>
  );
}

export default ProjectSection;
