/* eslint-disable react/jsx-key */
import ProjectContainer from "./ProjectContainer";
import ProjectsData from "./ProjectsData";

function ProjectSection() {
  const allProjects = ProjectsData.map((project) => {
    return (
      <ProjectContainer
        projectName={project.projectName}
        direction={project.direction}
        img={project.img}
        langsToolsArr={project.langsToolsArr}
        githubLink={project.githubLink}
        liveDemoLink={project.liveDemoLink}
        projectHistoryLink={project.projectHistoryLink}
      />
    );
  });

  return (
    <section className=" w-full min-h-screen flex-col gap-2 flex items-center max-w-screen-2xl mx-auto">
      {allProjects}
    </section>
  );
}

export default ProjectSection;
