function ProjectLanguagesTools({ langsToolsArr }) {
  function icon(lang) {
    return <img src={lang} width="30" />;
  }
  let LanguagesAndTools = langsToolsArr.map((lang) => icon(lang));

  return (
    <div className=" w-full py-1 px-1 flex justify-end gap-1">
      {LanguagesAndTools}
    </div>
  );
}

export default ProjectLanguagesTools;
