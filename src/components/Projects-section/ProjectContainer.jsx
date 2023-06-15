/* eslint-disable react/prop-types */
import ProjectBox from "./ProjectBox";
// import ProjectMoreInfo from "./ProjectMoreInfo";

function ProjectContainer({
  direction = "right",
  projectName = "Project Name !?",
  img,
  langsToolsArr,
  githubLink,
  liveDemoLink,
  projectHistoryLink,
}) {
  let justify = "";

  direction === "left"
    ? (justify = "justify-end")
    : (justify = "justify-start");

  return (
    <div
      className={`w-full h-96 flex ${justify} p-2  from-red-800 to-blue-800`}
    >
      <ProjectBox
        projectName={projectName}
        img={img}
        langsToolsArr={langsToolsArr}
        githubLink={githubLink}
        liveDemoLink={liveDemoLink}
        projectHistoryLink={projectHistoryLink}
      />

      {/* <ProjectMoreInfo /> */}
    </div>
  );
}

export default ProjectContainer;
