import ProjectContainer from "./ProjectContainer";
import ProjectsData from "./ProjectsData";

import { allProjectCount } from "./ProjectsData";

function ProjectSection() {
  const allProjects = ProjectsData.map((project) => {
    return <ProjectContainer key={project.projectName} projectData={project} />;
  });

  return (
    <section className=" w-full min-h-screen flex-col gap-2 flex items-center max-w-screen-2xl mx-auto">
      <span className=" text-gray-50 font-semibold ">
        {allProjectCount} Projects
      </span>
      {allProjects}
    </section>
  );
}

export default ProjectSection;

// console.log(allProjectCount);
