/* eslint-disable react/prop-types */
function ProjectShields({ githubRepoName, wakatimeProjectID }) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      <img
        src={`https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c/project/${wakatimeProjectID}.svg`}
        alt="wakatime"
      />
      <img
        src={`https://img.shields.io/github/commit-activity/m/AlexEG/${githubRepoName}?color=%23309930&style=plastic"
        alt="GitHub commit activity`}
      />
      <img
        src={`https://img.shields.io/github/languages/count/AlexEG/${githubRepoName}?style=plastic`}
        alt="GitHub language count"
      />
      <img
        src={`https://img.shields.io/github/languages/top/AlexEG/${githubRepoName}?color=%239900ff&style=plastic`}
        alt="top language"
      />
      <img
        src={`https://img.shields.io/github/license/AlexEG/${githubRepoName}?color=%2300dd&style=plastic`}
        alt="GitHub Project license"
      />
      <img
        src={`https://img.shields.io/github/directory-file-count/AlexEG/${githubRepoName}?&style=plastic`}
        alt="GitHub contributors"
      />
      <img
        src={`https://img.shields.io/github/repo-size/AlexEG/${githubRepoName}?color=%23ff0055&style=plastic`}
        alt="GitHub repo size"
      />
      <img
        src={`https://img.shields.io/github/languages/code-size/AlexEG/${githubRepoName}?color=5500bb&style=plastic`}
        alt="GitHub code size in bytes"
      />
      <img
        src={`https://img.shields.io/github/stars/AlexEG/${githubRepoName}?color=FFD700&style=plastic`}
        alt="GitHub Repo stars"
      />
      <img
        src={`https://img.shields.io/github/watchers/AlexEG/${githubRepoName}?color=008a52&style=plastic`}
        alt="GitHub watchers"
      />
    </div>
  );
}

export default ProjectShields;
