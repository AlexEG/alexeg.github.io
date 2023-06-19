/* eslint-disable react/prop-types */
import ProjectBox from "./project-box/ProjectBox";
import ProjectMoreInfo from "./project-more-info/ProjectMoreInfo";

import { useState } from "react";

function ProjectContainer({ projectData }) {
  // Left or Right
  let justify = "";
  +projectData.projectID.slice(8) % 2 === 0
    ? (justify = "justify-end")
    : (justify = "justify-start");
  // ------------- //
  // More info section
  const [isDisplay, setisDisplay] = useState(false);

  function displayMoreInfo() {
    setisDisplay((prevState) => !prevState);
  }
  // ------------- //
  // ProjectBox ProjectPhotoGallery

  const [isExpanded, setIsExpanded] = useState(false);
  function expandedPhotoGallery() {
    setIsExpanded((prevState) => !prevState);
    console.log("???????");
  }

  return (
    <div
      className={`w-full ${
        isExpanded ? "h-[570px] bg-zinc-900 justify-center" : "h-96"
      } flex ${justify} relative overflow-hidden`}
    >
      <button
        onClick={displayMoreInfo}
        className={` absolute ${
          isExpanded && " hidden"
        } top-2 mx-2 z-20 bg-gray-500 px-2 text-xs rounded-full text-gray-950 hover:text-gray-500 hover:bg-gray-900 transition font-medium `}
      >
        More Info
      </button>

      <ProjectBox
        projectName={projectData.projectName}
        img={projectData.img}
        langsToolsArr={projectData.langsToolsArr}
        githubLink={projectData.githubLink}
        liveDemoLink={projectData.liveDemoLink}
        projectHistoryLink={projectData.projectHistoryLink}
        expandedPhotoGallery={expandedPhotoGallery}
        isExpanded={isExpanded}
      />
      {!isExpanded && (
        <ProjectMoreInfo
          justify={justify}
          isDisplay={isDisplay ? true : false}
          githubRepoName={projectData.githubLink.slice(26)}
          wakatimeProjectID={projectData.wakatimeProjectID}
        />
      )}
    </div>
  );
}

export default ProjectContainer;

// TODO
// document.getElementById("cards").onmousemove = e => {
//   for(const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//           x = e.clientX - rect.left,
//           y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   };
// }

// function gotoCssBattle(link){
//   location.href = "./assets/cssbattle/cssbattle.html";
// }

// <div id="cards">
// <div class="card" onclick="gotoCssBattle(this)">
//   <div class="card-content">
//     <div class="card-image">
//     <img src="/assets/images/banner.png" alt="">
//     </div>
//     <div class="card-info-wrapper">
//       <div class="card-info">
//         <div class="card-info-title">
//           <h3>CSS Battle</h3>
//           <h4>Find here my solutions and some note plus tips & tricks </h4>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
