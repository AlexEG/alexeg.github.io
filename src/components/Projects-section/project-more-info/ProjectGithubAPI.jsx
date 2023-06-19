function ProjectGithubAPI() {
  return (
    <div className="w-full  h-20 p-2 flex gap-2 mt-10 mb-7 justify-center">
      <div className=" px-2 pt-1 text-center font-semibold border-pink-700 border-2  h-full rounded-lg text-pink-700">
        <p>Status</p> <p>On Hold</p>
      </div>

      <div className=" px-2  pt-1 text-center font-semibold border-blue-700 border-2  h-full rounded-lg text-blue-700">
        <p>Commits Count</p> <p>92</p>
      </div>

      <div className=" px-2  pt-1 text-center font-semibold border-purple-700 border-2  h-full rounded-lg text-purple-700">
        <p>License</p> <p>MIT</p>
      </div>
      <div className=" px-2  pt-1 text-center font-semibold border-green-700 border-2  h-full rounded-lg text-green-700">
        <p>Last Update</p> <p>Jun 3, 2023</p>
      </div>
      <div className=" px-2  pt-1 text-center font-semibold  border-cyan-700 border-2  h-full rounded-lg text-cyan-700">
        <p>Created At</p> <p>Dec 28, 2022</p>
      </div>
    </div>
  );
}

export default ProjectGithubAPI;

/*


  // let createdAt = "";
  // let updatedAt = "";
  // let license = "";
  // let description = "";
  let CommitsCount = 0;

  // GITHUB API 
  // Commits number 
  fetch(
    `https://api.github.com/repos/AlexEG/YourManga/commits?page=1&per_page=100`
  )
    .then((response) => response.json())
    .then((data) => {
      CommitsCount = data.length;
    });

    // -------------------------------
    
    //? GITHUB API
    fetch(`https://api.github.com/repos/AlexEG/YourManga`)
    //*  Project's Create Date
    .then((response) => response.json())
    .then((data) => {
      createdAt = `${data.created_at.slice(0, 10)}`;

      //* Last Update
      updatedAt = `${data.updated_at.slice(0, 10)}`;

      //* license
      license = `${data.license.name}`;
      
      //* Project's description
      description = `${data.description}`;
    });

      {console.log("createdAt" + createdAt)}
      {console.log("updatedAt" + updatedAt)}
      {console.log("license" + license)}
      {console.log("description" + description)}
      

      // -------------------------------

      //? GITHUB API
fetch(`https://api.github.com/repos/AlexEG/${projectName}`)
//*  Project's Create Date
.then((response) => response.json())
.then((data) => {
  document.querySelector(
    `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(1) > span`
  ).innerHTML = `${data.created_at.slice(0, 10)}`;

  //* Last Update
  document.querySelector(
    `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(2) > span`
  ).innerHTML = `${data.updated_at.slice(0, 10)}`;

  //* license
  document.querySelector(
    `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(3) > span`
  ).innerHTML = `${data.license.name}`;

  //* Project's description
  document.querySelector(
    `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__description > article`
  ).innerHTML = `${data.description}`;
});

//* Commits number
fetch(
`https://api.github.com/repos/AlexEG/${projectName}/commits?page=1&per_page=100`
)
.then((response) => response.json())
.then((data) => {
  document.querySelector(
    `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(4) > span`
  ).innerHTML = `{ ${data.length} }`;
});

*/
