/* eslint-disable react/prop-types */
import ProjectBox from "./project-box/ProjectBox";
import ProjectMoreInfo from "./project-more-info/ProjectMoreInfo";

import { useState } from "react";

function ProjectContainer({ projectData }) {
  // Left or Right
  let justify = "";
  +projectData.projectID.slice(8) % 2 === 0
    ? (justify = "justify-end")
    : (justify = "justify-start");
  // ------------- //

  const [isDisplay, setisDisplay] = useState(false);

  function changeBgState() {
    setisDisplay((prevState) => !prevState);
  }
  return (
    <div className={`w-full h-96 flex ${justify} relative`}>
      <button
        onClick={changeBgState}
        className=" absolute top-2 mx-2  bg-gray-500 px-2 text-xs rounded-full text-gray-950 hover:text-gray-500 hover:bg-gray-900 transition font-medium z-10"
      >
        More Info
      </button>

      <ProjectBox
        projectName={projectData.projectName}
        img={projectData.img}
        langsToolsArr={projectData.langsToolsArr}
        githubLink={projectData.githubLink}
        liveDemoLink={projectData.liveDemoLink}
        projectHistoryLink={projectData.projectHistoryLink}
      />
      <ProjectMoreInfo
        justify={justify}
        isDisplay={isDisplay ? false : true}
        githubRepoName={projectData.githubLink.slice(26)}
        wakatimeProjectID={projectData.wakatimeProjectID}
      />
    </div>
  );
}

export default ProjectContainer;
