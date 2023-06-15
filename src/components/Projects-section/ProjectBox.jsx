/* eslint-disable react/prop-types */
import ProjectTitle from "./ProjectTitle";
import ProjectPhotoGallery from "./ProjectPhotoGallery";
import ProjectLanguagesTools from "./ProjectLanguagesTools";
import ProjectLinksContainer from "./ProjectLinksContainer";

function ProjectBox({
  projectName,
  img,
  langsToolsArr,
  githubLink,
  liveDemoLink,
  projectHistoryLink,
}) {
  return (
    <div className=" text-gray-50 font-semibold  aspect-video h-full  bg-gray-950 group ">
      <ProjectTitle projectName={projectName} />
      <ProjectPhotoGallery img={img} />
      <ProjectLanguagesTools langsToolsArr={langsToolsArr} />
      <ProjectLinksContainer
        githubLink={githubLink}
        liveDemoLink={liveDemoLink}
        projectHistoryLink={projectHistoryLink}
      />
    </div>
  );
}

export default ProjectBox;
