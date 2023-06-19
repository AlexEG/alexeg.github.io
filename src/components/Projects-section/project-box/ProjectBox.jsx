/* eslint-disable react/prop-types */
import ProjectTitle from "./ProjectTitle";
import ProjectPhotoGallery from "./ProjectPhotoGallery";
import ProjectLanguagesTools from "./ProjectLanguagesTools";
import ProjectLinksContainer from "./ProjectLinksContainer";
import ProjectPhotoGalleryBar from "./ProjectPhotoGalleryBar";
// import { useState } from "react";

function ProjectBox({
  projectName,
  img,
  langsToolsArr,
  githubLink,
  liveDemoLink,
  projectHistoryLink,
  expandedPhotoGallery,
  isExpanded,
}) {
  return (
    <div className=" text-gray-50 font-semibold  aspect-video h-full  bg-gray-950 group z-10 relative">
      <ProjectTitle projectName={projectName} />
      <ProjectPhotoGallery
        img={img}
        expandedPhotoGallery={expandedPhotoGallery}
        isExpanded={isExpanded}
      />
      {isExpanded && <ProjectPhotoGalleryBar />}
      <ProjectLanguagesTools
        langsToolsArr={langsToolsArr}
        isExpanded={isExpanded}
      />
      <ProjectLinksContainer
        githubLink={githubLink}
        liveDemoLink={liveDemoLink}
        projectHistoryLink={projectHistoryLink}
        isExpanded={isExpanded}
      />
    </div>
  );
}

export default ProjectBox;
