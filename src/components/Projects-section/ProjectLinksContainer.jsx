import ProjectLinks from "./ProjectLinks";

function ProjectLinksContainer({
  githubLink,
  liveDemoLink,
  projectHistoryLink,
}) {
  return (
    <div className=" w-full  flex justify-center pt-1 gap-1">
      <ProjectLinks githubBtnIcon githubLink={githubLink} name="Source code" />
      <ProjectLinks liveDemoLink={liveDemoLink} name="Live Demo" />
      <ProjectLinks
        projectHistoryLink={projectHistoryLink}
        name="Project History"
      />
    </div>
  );
}

export default ProjectLinksContainer;
