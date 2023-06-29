/* eslint-disable react/prop-types */
import ProjectTitle from "./ProjectTitle";
import ProjectLanguagesTools from "./ProjectLanguagesTools";
import ProjectLinksContainer from "./ProjectLinksContainer";
import ProjectPhotoGallery from "./project-photo-gallery/ProjectPhotoGallery";
import ProjectPhotoGalleryBar from "./project-photo-gallery/ProjectPhotoGalleryBar";
import { useState } from "react";

function ProjectBox({
  projectName,
  img,
  langsToolsArr,
  githubLink,
  liveDemoLink,
  projectHistoryLink,
  expandedPhotoGallery,
  isExpanded,
  galleryImgsArr,
  YouTubeEmbedURL,
  justify,
}) {
  // ---------------------
  const [imageInView, setImageInView] = useState(img);

  function nextImg() {
    setImageInView((prevImg) => {
      return galleryImgsArr.indexOf(prevImg) < galleryImgsArr.length - 1
        ? galleryImgsArr[galleryImgsArr.indexOf(prevImg) + 1]
        : prevImg;
    });
  }
  function prevImg() {
    setImageInView((prevImg) => {
      return galleryImgsArr.indexOf(prevImg) > 0
        ? galleryImgsArr[galleryImgsArr.indexOf(prevImg) - 1]
        : prevImg;
    });
  }

  const expandAnimation =
    justify === "justify-end"
      ? "animate-[projectBoxExpandOpenRL_3s_ease-in-out_1_forwards]"
      : "animate-[projectBoxExpandOpenLR_3s_ease-in-out_1_forwards]";

  return (
    <div
      className={` ${
        isExpanded ? `justify-center ${expandAnimation}` : "bg-gray-950"
      } text-gray-50 font-semibold aspect-video h-96  bg-gray-950 group z-10 relative overflow-hidden`}
    >
      <ProjectTitle projectName={projectName} />

      <ProjectPhotoGallery
        expandedPhotoGallery={expandedPhotoGallery}
        isExpanded={isExpanded}
        imageInView={imageInView}
        nextImg={nextImg}
        prevImg={prevImg}
        galleryImgsArr={galleryImgsArr}
        YouTubeEmbedURL={YouTubeEmbedURL}
      />

      {isExpanded && (
        <ProjectPhotoGalleryBar
          galleryImgsArr={galleryImgsArr}
          imageInView={imageInView}
          nextImg={nextImg}
          prevImg={prevImg}
          setImageInView={setImageInView}
        />
      )}

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
