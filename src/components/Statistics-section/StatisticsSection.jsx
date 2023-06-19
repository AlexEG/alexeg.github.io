function StatisticsSection() {
  return (
    <div id="StatisticsSection" className=" min-h-screen py-7">
      <div className="flex gap-2 justify-center">
        <img
          src="https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c.svg"
          alt="Total time coded since Dec 22 2022"
        />
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
      </div>

      {/* ------------------------------------- */}
      {/* GitHub  */}
      <div className=" mx-auto mt-7 w-fit ">
        <div className="flex mb-1 gap-1">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=AlexEG&hide_border=true&card_width=420&theme=radical"
            alt="AlexEG"
            className=" h-[150px]"
          />

          <img
            src="https://github-readme-stats.vercel.app/api?username=AlexEG&show_icons=true&count_private=true&hide_border=true&theme=radical"
            alt="AlexEG's Github stats"
            className=" h-[150px]"
          />
          <img
            className=" h-[150px]"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlexEG&layout=compact&hide_border=true&theme=radical"
            alt="AlexEG"
          />
        </div>

        <img
          alt="AlexEG's Activity Graph"
          src="https://github-readme-activity-graph.vercel.app/graph?username=AlexEG&theme=redical&height=400&hide_border=true"
          className=" h-[320px] rounded-lg"
        />

        <iframe
          className="mt-1 rounded-lg"
          width="960"
          height="349"
          seamless
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTnFjpOWd2mEd28vLmu0WGcLlO3HtFQL-30mUEt3qSOPdKu2T7jJvf0jRSnzZPKAe6Epv8hcH8uZ4aZ/pubchart?oid=1414259734&amp;format=interactive"
        ></iframe>

        <figure>
          <embed
            className="mt-1 rounded-lg"
            src="https://wakatime.com/share/@AlexEG/e5c768c1-1627-4f4e-9c31-8b9d6e07b9d0.svg"
          ></embed>
        </figure>

        <figure>
          <embed
            className="mt-1 rounded-lg"
            src="https://wakatime.com/share/@AlexEG/8e131d38-7da9-495a-84f5-53c8dec88f93.svg"
          ></embed>
        </figure>
      </div>
      {/* GitHub  */}
    </div>
  );
}

export default StatisticsSection;
