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
  // More info section
  const [isDisplay, setisDisplay] = useState(false);

  function displayMoreInfo() {
    setisDisplay((prevState) => !prevState);
  }
  // ------------- //
  // ProjectBox ProjectPhotoGallery

  const [isExpanded, setIsExpanded] = useState(false);
  function expandedPhotoGallery() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <div
      className={`w-full ${
        isExpanded
          ? "p-2 bg-zinc-900   rounded-lg  items-end animate-[projectContainerExpandOpen_1s_ease-in-out_1_forwards]"
          : `h-96 `
      } flex  relative ${justify} overflow-hidden  -pink-700 `}
    >
      <button
        onClick={displayMoreInfo}
        className={` absolute ${
          isExpanded && " hidden"
        } top-2 mx-2 z-20 bg-gray-500 px-2 text-xs rounded-full text-gray-950 hover:text-gray-500 hover:bg-gray-900 transition font-medium `}
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
        expandedPhotoGallery={expandedPhotoGallery}
        isExpanded={isExpanded}
        galleryImgsArr={projectData.galleryImgsArr}
        YouTubeEmbedURL={projectData.YouTubeEmbedURL}
        justify={justify}
      />

      <ProjectMoreInfo
        justify={justify}
        isExpanded={isExpanded}
        isDisplay={isDisplay ? true : false}
        githubRepoName={projectData.githubLink.slice(26)}
        wakatimeProjectID={projectData.wakatimeProjectID}
      />
    </div>
  );
}

export default ProjectContainer;
