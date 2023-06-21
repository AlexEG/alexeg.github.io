/* eslint-disable react/prop-types */
import { useState } from "react";

function ProjectGithubAPI({ githubRepoName }) {
  const [commitsNum, setCommitsNum] = useState("??");
  const [createdAt, setCreatedAt] = useState("????-??-??");
  const [updatedAt, setUpdatedAt] = useState("????-??-??");

  fetch(`https://api.github.com/repos/AlexEG/${githubRepoName}`)
    .then((response) => response.json())
    .then((data) => {
      setCreatedAt(data.created_at.slice(0, 10));
      setUpdatedAt(data.updated_at.slice(0, 10));
    });

  fetch(
    `https://api.github.com/repos/AlexEG/${githubRepoName}/commits?page=1&per_page=100`
  )
    .then((response) => response.json())
    .then((data) => {
      setCommitsNum(data.length);
    });

  return (
    <div className="w-full  h-20 p-2 flex gap-2 mt-10 mb-7 justify-center">
      <div className=" px-2 pt-1 text-center font-semibold border-pink-700 border-2  h-full rounded-lg text-pink-700">
        <p>Status</p> <p>On Hold</p>
      </div>

      <div className=" px-2  pt-1 text-center font-semibold border-blue-700 border-2  h-full rounded-lg text-blue-700">
        <p>Commits Count</p> <p>{commitsNum}</p>
      </div>

      <div className=" px-2  pt-1 text-center font-semibold border-green-700 border-2  h-full rounded-lg text-green-700">
        <p>Last Update</p> <p>{updatedAt}</p>
      </div>
      <div className=" px-2  pt-1 text-center font-semibold  border-cyan-700 border-2  h-full rounded-lg text-cyan-700">
        <p>Created At</p> <p>{createdAt}</p>
      </div>
    </div>
  );
}

export default ProjectGithubAPI;
