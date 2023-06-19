/* eslint-disable react/prop-types */
import ProjectLinks from "./ProjectLinks";

function ProjectLinksContainer({
  githubLink,
  liveDemoLink,
  projectHistoryLink,
  isExpanded,
}) {
  return (
    <div
      className={`w-full flex ${
        isExpanded
          ? " absolute bottom-1 left-1 justify-start"
          : "justify-center"
      }  pt-1 gap-1 `}
    >
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
