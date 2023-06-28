import ProjectContainer from "./ProjectContainer";
import ProjectsData from "../User-data/ProjectsData";
import { allProjectCount } from "../User-data/ProjectsData";

function ProjectSection() {
  const allProjects = ProjectsData.map((project) => {
    return <ProjectContainer key={project.projectID} projectData={project} />;
  });

  return (
    <section
      id="project-section"
      className=" w-full min-h-screen flex-col gap-3 flex items-center max-w-screen-2xl mx-auto py-7"
    >
      <span className=" text-gray-50 font-semibold ">
        {allProjectCount} Projects
      </span>
      {allProjects}
    </section>
  );
}

export default ProjectSection;
