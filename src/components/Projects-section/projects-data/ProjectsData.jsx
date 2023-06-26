import statsPreviewCardComponentImg from "../../../assets/localhost_5173_.png";
import Every_Day_Calendar from "../../../assets/Every Day Calendar.png";

// images
import ProjectsImages from "./ProjectsImages";

import Icons from "./Icons";

class Project {
  static projectsCount = 0;
  constructor(
    projectName,
    img,
    langsToolsArr,
    githubLink,
    liveDemoLink,
    projectHistoryLink,
    wakatimeProjectID,
    galleryImgsArr,
    YouTubeEmbedURL = "fYlzdqPH-LI" // Default
  ) {
    this.projectID = `Project ${Project.projectsCount}`;
    this.projectName = projectName;
    this.img = img;
    this.langsToolsArr = langsToolsArr;
    this.githubLink = githubLink;
    this.liveDemoLink = liveDemoLink;
    this.projectHistoryLink = projectHistoryLink;
    this.wakatimeProjectID = wakatimeProjectID;
    this.galleryImgsArr = galleryImgsArr;
    this.YouTubeEmbedURL = YouTubeEmbedURL;

    Project.projectsCount++;
  }
  static allProjectCount() {
    return this.projectsCount;
  }
}

export default [
  new Project(
    "YourManga",
    ProjectsImages.YourManga[0],
    [Icons.HTML, Icons.JS, Icons.TIALWINDCSS],
    "https://github.com/AlexEG/YourManga",
    "https://alexeg.github.io/YourManga/",
    "https://alexeg.github.io/PROJECTS/",
    "19f61fe3-78ec-469f-8f4d-6158b7eb862e",
    ProjectsImages.YourManga,
    "JEzTcmgGEhc"
  ),
  new Project(
    "Frontend Mentor | Stats preview card component",
    statsPreviewCardComponentImg,
    [Icons.REACT, Icons.JS, Icons.TIALWINDCSS, Icons.NETLIFY],
    "https://github.com/AlexEG/stats-preview-card-component",
    "https://guileless-fairy-6adaab.netlify.app/",
    "https://alexeg.github.io/PROJECTS/",
    "19f61fe3-78ec-469f-8f4d-6158b7eb862e",
    ProjectsImages.YourManga
  ),

  new Project(
    "Every_Day_Calendar",
    Every_Day_Calendar,
    [Icons.HTML, Icons.JS, Icons.TIALWINDCSS],
    "https://github.com/AlexEG/Every_Day_Calendar",
    "https://alexeg.github.io/Every_Day_Calendar/",
    "https://alexeg.github.io/PROJECTS/",
    "19f61fe3-78ec-469f-8f4d-6158b7eb862e",
    ProjectsImages.YourManga
  ),
  new Project(
    "Every_Day_Calendar",
    Every_Day_Calendar,
    [Icons.HTML, Icons.JS, Icons.TIALWINDCSS],
    "https://github.com/AlexEG/Every_Day_Calendar",
    "https://alexeg.github.io/Every_Day_Calendar/",
    "https://alexeg.github.io/PROJECTS/",
    "19f61fe3-78ec-469f-8f4d-6158b7eb862e",
    ProjectsImages.YourManga
  ),
];

export const allProjectCount = Project.allProjectCount();
