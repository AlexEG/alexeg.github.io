import ProjectBox from "./ProjectBox";
import ProjectMoreInfo from "./ProjectMoreInfo";

function ProjectContainer({
  direction = "right",
  projectName = "Project Name !?",
  img,
  langsToolsArr,
}) {
  let justify = "";
  if (direction === "left") {
    justify = "justify-end";
  } else {
    justify = "justify-start";
  }

  return (
    <div
      className={` bg-gradient-to-l w-full h-96 flex ${justify} p-2  from-red-800 to-blue-800`}
    >
      <ProjectBox
        projectName={projectName}
        img={img}
        langsToolsArr={langsToolsArr}
      />
      {/* <ProjectMoreInfo /> */}
    </div>
  );
}

export default ProjectContainer;
