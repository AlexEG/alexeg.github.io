/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types

function ProjectLanguagesTools({ langsToolsArr, isExpanded }) {
  let LanguagesAndTools = langsToolsArr.map((lang) => (
    <img key={lang} src={lang} width="30" />
  ));

  return (
    <div
      className={` w-full py-1 px-1 flex justify-end gap-1
    ${isExpanded && " absolute bottom-1 right-1 "}`}
    >
      {LanguagesAndTools}
    </div>
  );
}

export default ProjectLanguagesTools;
