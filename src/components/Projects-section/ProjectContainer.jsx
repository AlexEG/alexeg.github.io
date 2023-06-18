/* eslint-disable react/prop-types */
import ProjectBox from "./ProjectBox";
// import ProjectMoreInfo from "./ProjectMoreInfo";

function ProjectContainer({ projectData }) {
  let justify = "";

  projectData.direction === "left"
    ? (justify = "justify-end")
    : (justify = "justify-start");

  return (
    <div
      className={`w-full h-96 flex ${justify} p-2  from-red-800 to-blue-800`}
    >
      <ProjectBox
        projectName={projectData.projectName}
        img={projectData.img}
        langsToolsArr={projectData.langsToolsArr}
        githubLink={projectData.githubLink}
        liveDemoLink={projectData.liveDemoLink}
        projectHistoryLink={projectData.projectHistoryLink}
      />
      {console.log(projectData)}
      {/* <ProjectMoreInfo /> */}
    </div>
  );
}

export default ProjectContainer;
