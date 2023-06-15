import ProjectLinks from "./ProjectLinks";
function ProjectLinksContainer() {
  return (
    <div className=" w-full  flex justify-center pt-1 gap-1">
      <ProjectLinks name="Source code" />
      <ProjectLinks name="Live Demo" />
      <ProjectLinks name="Project History" />
    </div>
  );
}

export default ProjectLinksContainer;
