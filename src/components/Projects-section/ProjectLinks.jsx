/* eslint-disable react/prop-types */

import GITHUB from "../../assets/icons/Github-Dark.svg";

function ProjectLinks({
  name = "Link",
  githubBtnIcon,
  githubLink,
  liveDemoLink,
  projectHistoryLink,
}) {
  return (
    <a
      href={
        githubLink
          ? githubLink
          : liveDemoLink
          ? liveDemoLink
          : projectHistoryLink
          ? projectHistoryLink
          : "#"
      }
      className="bg-gray-500 rounded-sm px-3 py-1 hover:bg-gray-900 transition duration-200 flex"
    >
      {githubBtnIcon && (
        <img src={GITHUB} alt="GITHUB" width="19" className="mr-2" />
      )}{" "}
      {name}
    </a>
  );
}

export default ProjectLinks;
