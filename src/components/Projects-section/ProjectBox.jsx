import ProjectTitle from "./ProjectTitle";
import ProjectPhotoGallery from "./ProjectPhotoGallery";
import ProjectLanguagesTools from "./ProjectLanguagesTools";
import ProjectLinksContainer from "./ProjectLinksContainer";

function ProjectBox({ projectName, img, langsToolsArr }) {
  return (
    <div className=" text-gray-50 font-semibold  aspect-video h-full  bg-gray-950 group ">
      <ProjectTitle projectName={projectName} />
      <ProjectPhotoGallery img={img} />
      <ProjectLanguagesTools langsToolsArr={langsToolsArr} />
      <ProjectLinksContainer />
    </div>
  );
}

export default ProjectBox;
