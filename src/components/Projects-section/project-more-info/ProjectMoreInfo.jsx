/* eslint-disable react/prop-types */
import ProjectShields from "./ProjectShields";
function ProjectMoreInfo({
  justify,
  isDisplay,
  githubRepoName,
  wakatimeProjectID,
}) {
  return (
    <div
      className={` bg-gray-900 w-[calc(100%-690px)] h-full  z-0 absolute top-0 p-3  ${
        justify === "justify-start" ? "right-0" : "left-0"
      } ${isDisplay ? "block" : "hidden"} `}
    >
      <ProjectShields
        githubRepoName={githubRepoName}
        wakatimeProjectID={wakatimeProjectID}
      />
    </div>
  );
}
export default ProjectMoreInfo;

// "https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c/project/19f61fe3-78ec-469f-8f4d-6158b7eb862e.svg"
