import img1 from "../../../assets/YourManga/YourManga (1).png";
import img2 from "../../../assets/YourManga/YourManga (2).png";
import img3 from "../../../assets/YourManga/YourManga (3).png";
import img4 from "../../../assets/YourManga/YourManga (4).png";
import img5 from "../../../assets/YourManga/YourManga (5).png";

function ProjectPhotoGalleryBar() {
  const imgStyle =
    " max-h-full opacity-75 grayscale-[50%] hover:grayscale-0 hover:opacity-100 transition cursor-pointer";
  return (
    <div className=" w-full h-24 mt-2 relative">
      {/* ---------- */}
      <button className=" top-0 left-1 absolute px-3 z-30  rounded-sm text-3xl text-gray-50 transition duration-150  hover:bg-[hsl(0,0%,0%,0.85)] active:text-pink-300 h-20 ">
        <span className=" opacity-50 group-hover:opacity-100 transition-opacity duration-200">
          &#10094;
        </span>
      </button>
      {/* ---------- */}
      <div className="project-photo-gallery-bar flex h-full overflow-x-auto pb-2 gap-1 px-12 items-center">
        <img src={img1} alt="" className="max-h-full brightness-110" />
        <img src={img2} alt="" className={imgStyle} />
        <img src={img3} alt="" className={imgStyle} />
        <img src={img4} alt="" className={imgStyle} />
        <img src={img5} alt="" className={imgStyle} />
        <img src={img1} alt="" className={imgStyle} />
        <img src={img2} alt="" className={imgStyle} />
        <img src={img3} alt="" className={imgStyle} />
      </div>
      {/* ---------- */}
      <button className="absolute top-0 right-1 w-10 z-30  rounded-sm text-3xl text-gray-50 transition duration-150 hover:bg-[hsl(0,0%,0%,0.75)] active:text-pink-300 h-20 ">
        <span className=" opacity-50 group-hover:opacity-100 transition-opacity duration-200">
          &#10095;
        </span>
      </button>
      {/* ---------- */}
    </div>
  );
}

export default ProjectPhotoGalleryBar;
