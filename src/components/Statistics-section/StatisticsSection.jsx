import { useState } from "react";
import StudyTracker from "./StudyTracker";
import WakatimeLanguages from "./WakatimeLanguages";
import WakatimeCodingActivity from "./WakatimeCodingActivity";

function StatisticsSection() {
  const [publicReposNum, setPublicReposNum] = useState("????");

  fetch(`https://api.github.com/users/AlexEG/repos?page=1&per_page=100`)
    .then((response) => response.json())
    .then((data) => {
      setPublicReposNum(data.length);
    });

  return (
    <div id="statistics-section" className=" min-h-screen py-7">
      <div className="flex gap-2 justify-center">
        <a
          href="https://wakatime.com/@fbdfdc0f-d449-43dc-8090-ced03a22fe8c"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c.svg"
            alt="Total time coded since Dec 22 2022"
          />
        </a>
        <img
          alt="freeCodeCamp points"
          src="https://img.shields.io/freecodecamp/points/fcc4dcee3ab-a388-4f70-9ad9-0ac52ed81dc7?logo=freecodecamp&logoColor=%2349f3f2&color=%230a0a49&style=plastic"
        />
        <img
          alt="codewars"
          src="https://www.codewars.com/users/AlexEG/badges/micro"
        />
        <img
          alt="GitHub followers"
          src="https://img.shields.io/github/followers/AlexEG?logo=github&style=plastic"
        />
        <div className="h-5 rounded-sm flex overflow-hidden cursor-default">
          <span className=" bg-slate-700 font-semibold text-slate-200 text-sm px-2">
            GitHub public Repos
          </span>
          <span className="bg-slate-900 px-2 text-sm text-slate-50 font-bold text-center">
            {publicReposNum}
          </span>
        </div>
      </div>

      {/* ------------------------------------- */}

      {/* GitHub start */}
      <div className=" mx-auto mt-7 w-fit ">
        <div className="flex mb-1 gap-1">
          <img
            className=" h-[150px] rounded-lg"
            src="https://github-readme-streak-stats.herokuapp.com/?user=AlexEG&hide_border=true&card_width=420&theme=radical"
            alt="AlexEG"
          />

          <img
            className=" h-[150px]  rounded-lg"
            src="https://github-readme-stats.vercel.app/api?username=AlexEG&show_icons=true&count_private=true&hide_border=true&theme=radical"
            alt="AlexEG's Github stats"
          />
          <img
            className=" h-[150px]  rounded-lg"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlexEG&layout=compact&hide_border=true&theme=radical"
            alt="AlexEG"
          />
        </div>

        <img
          className=" h-[320px] rounded-lg"
          src="https://github-readme-activity-graph.vercel.app/graph?username=AlexEG&theme=redical&height=400&hide_border=true"
          alt="AlexEG's Activity Graph"
        />

        <StudyTracker />
        <WakatimeLanguages />
        <WakatimeCodingActivity />
      </div>

      {/* GitHub end */}
    </div>
  );
}

export default StatisticsSection;
