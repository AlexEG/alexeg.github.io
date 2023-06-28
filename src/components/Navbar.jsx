function Navbar() {
  return (
    <nav className=" w-full h-8 flex justify-between absolute top-0 left-0  select-none">
      <div className="flex gap-1">
        <a href="#" className=" bg-gray-900 text-gray-100 px-3 py-1 ">
          Discord
        </a>
        <a href="#" className=" bg-gray-900 text-gray-100 px-3 py-1 ">
          Notion
        </a>
        <a href="#" className=" bg-gray-900 text-gray-100 px-3 py-1 relative">
          <span className=" peer">What I Like</span>
          <span className=" absolute bg-gray-900 top-0 translate-y-10 left-1/2 -translate-x-1/2  text-gray-100 px-3 py-1 opacity-0 peer-hover:opacity-75 cursor-default flex flex-col whitespace-nowrap">
            <span>Anime</span>
            <span>Manga</span>
            <span>Podcast</span>
            <span>Music</span>
            <span>YouTube</span>
            <span>TV series</span>
            <span>Movies</span>
          </span>
        </a>
      </div>

      <div className=" flex justify-end gap-1 ">
        {/* <a href="#" className="  bg-gray-900 text-gray-100 px-3 py-1  h-8 ">
          Everything About Me
        </a> */}

        <a
          href="#statistics-section"
          className="bg-gray-900 text-gray-100 px-3 py-1 h-8 "
        >
          Statistics
        </a>
        <a
          href="#project-section"
          className="bg-gray-900 text-gray-100 px-3 py-1  h-8"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
