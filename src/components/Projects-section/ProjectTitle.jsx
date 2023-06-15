function ProjectTitle({ projectName }) {
  return (
    <div className=" relative">
      <h2 className="text-center py-1 cursor-default">{projectName}</h2>
      <div className="absolute top-0 right-0 flex justify-center items-center h-full mr-1 ">
        <button className="bg-gray-500 px-2 text-xs rounded-full text-gray-950 hover:text-gray-500 hover:bg-gray-900 transition">
          More Info
        </button>
      </div>
    </div>
  );
}

export default ProjectTitle;
