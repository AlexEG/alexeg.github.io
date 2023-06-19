/* eslint-disable react/prop-types */
import ProjectShields from "./ProjectShields";
import ProjectGithubAPI from "./ProjectGithubAPI";

function ProjectMoreInfo({
  justify,
  isDisplay,
  githubRepoName,
  wakatimeProjectID,
}) {
  return (
    <div
      className={` bg-gray-900 w-[calc(100%-690px)] h-full  z-0 absolute top-0 p-3  ${
        justify === "justify-start"
          ? "right-0 animate-[projectinfoleft_1s_ease-in-out]"
          : "left-0 animate-[projectinforight_1s_ease-in-out]"
      } ${isDisplay ? "block" : "hidden"}`}
    >
      {/* <ProjectShields
        githubRepoName={githubRepoName}
        wakatimeProjectID={wakatimeProjectID}
      /> */}
      <ProjectGithubAPI />

      <div className="{/*border border-pink-600*/ } w-full h-40">
        <h3 className="text-gray-200 font-bold text-lg ">Description</h3>
        <p className=" text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          quaerat minima in asperiores corporis repellendus consectetur
          distinctio. Pariatur, maxime totam?
        </p>
      </div>
    </div>
  );
}
export default ProjectMoreInfo;
