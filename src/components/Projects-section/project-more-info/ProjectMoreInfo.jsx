/* eslint-disable react/prop-types */
import ProjectShields from "./ProjectShields";
import ProjectGithubAPI from "./ProjectGithubAPI";
import { useState } from "react";

function ProjectMoreInfo({
  justify,
  isDisplay,
  githubRepoName,
  wakatimeProjectID,
  isExpanded,
}) {
  const [description, setDescription] = useState("???????? ???? ??????? ????");

  fetch(`https://api.github.com/repos/AlexEG/${githubRepoName}`)
    .then((response) => response.json())
    .then((data) => {
      setDescription(data.description);
    });

  let rightLeftOpenCloseAnimation =
    justify === "justify-start"
      ? `${
          isDisplay
            ? "animate-[projectInfoLeftBoxOpen_1s_ease-in-out_1_forwards]"
            : "animate-[projectInfoLeftBoxClose_1s_ease-in-out_1_forwards]"
        } right-0`
      : `${
          isDisplay
            ? "animate-[projectInfoRightBoxOpen_1s_ease-in-out_1_forwards]"
            : "animate-[projectInfoRightBoxClose_1s_ease-in-out_1_forwards]"
        } left-0`;

  return (
    <div
      className={` bg-gray-900 w-[calc(100%-690px)] ${
        isExpanded && "invisible"
      } h-full z-0 absolute top-0 p-3  ${rightLeftOpenCloseAnimation} `}
    >
      <ProjectShields
        githubRepoName={githubRepoName}
        wakatimeProjectID={wakatimeProjectID}
      />
      <ProjectGithubAPI githubRepoName={githubRepoName} />

      <div className="border border-pink-600  w-full h-40">
        <h3 className="text-gray-200 font-bold text-lg ">Description</h3>
        <p className=" text-gray-300">{description}</p>
      </div>
    </div>
  );
}
export default ProjectMoreInfo;
