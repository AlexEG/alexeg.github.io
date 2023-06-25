function Navbar() {
  return (
    <nav className=" w-full h-8 flex justify-between absolute top-0 left-0 ">
      <div className="   flex">
        <a href="#" className=" bg-gray-900 text-gray-100 px-3 py-1 ">
          Discord
        </a>
      </div>

      <div className=" flex justify-end gap-1 ">
        <a href="#" className="  bg-gray-900 text-gray-100 px-3 py-1  h-8 ">
          Everything About Me
        </a>

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
