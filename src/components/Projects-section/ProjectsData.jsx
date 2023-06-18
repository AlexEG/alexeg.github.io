// images
import YourMangaImg from "../../assets/YourManga.png";
import statsPreviewCardComponentImg from "../../assets/localhost_5173_.png";
import Every_Day_Calendar from "../../assets/Every Day Calendar.png";

import Icons from "./Icons";

class Project {
  static projectsCount = 0;
  constructor(
    projectName,
    img,
    langsToolsArr,
    githubLink,
    liveDemoLink,
    projectHistoryLink
  ) {
    this.projectID = `Project ${Project.projectsCount}`;
    this.projectName = projectName;
    this.img = img;
    this.langsToolsArr = langsToolsArr;
    this.githubLink = githubLink;
    this.liveDemoLink = liveDemoLink;
    this.projectHistoryLink = projectHistoryLink;
    Project.projectsCount++;
  }
  static allProjectCount() {
    return this.projectsCount;
  }
}

export default [
  new Project(
    "YourManga",
    YourMangaImg,
    [
      Icons.HTML,
      Icons.FIREBASE,
      Icons.TIALWINDCSS,
      Icons.VITE,
      Icons.MARKDOWN,
      Icons.ASTRO,
    ],
    "https://github.com/AlexEG/YourManga",
    "https://alexeg.github.io/YourManga/",
    "https://alexeg.github.io/PROJECTS/"
  ),
  new Project(
    "Frontend Mentor | Stats preview card component",
    statsPreviewCardComponentImg,
    [
      Icons.TIALWINDCSS,
      Icons.REACT,
      Icons.NEXTJS,
      Icons.JS,
      Icons.SASS,
      Icons.NETLIFY,
    ],
    "https://github.com/AlexEG/stats-preview-card-component",
    "https://guileless-fairy-6adaab.netlify.app/",
    "https://alexeg.github.io/PROJECTS/"
  ),

  new Project(
    "Every_Day_Calendar",
    Every_Day_Calendar,
    [
      Icons.GOLANG,
      Icons.ELECTRON,
      Icons.FIREBASE,
      Icons.NODEJS,
      Icons.TS,
      Icons.HTML,
      Icons.CSS,
    ],
    "https://github.com/AlexEG/Every_Day_Calendar",
    "https://alexeg.github.io/Every_Day_Calendar/",
    "https://alexeg.github.io/PROJECTS/"
  ),
  new Project(
    "Every_Day_Calendar",
    Every_Day_Calendar,
    [
      Icons.GOLANG,
      Icons.ELECTRON,
      Icons.FIREBASE,
      Icons.NODEJS,
      Icons.TS,
      Icons.HTML,
      Icons.CSS,
    ],
    "https://github.com/AlexEG/Every_Day_Calendar",
    "https://alexeg.github.io/Every_Day_Calendar/",
    "https://alexeg.github.io/PROJECTS/"
  ),
];

export const allProjectCount = Project.allProjectCount();
