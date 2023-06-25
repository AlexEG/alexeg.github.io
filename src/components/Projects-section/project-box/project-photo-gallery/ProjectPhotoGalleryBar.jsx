/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import GalleryImg from "./GalleryImg";

function ProjectPhotoGalleryBar({
  galleryImgsArr,
  nextImg,
  prevImg,
  imageInView,
  setImageInView,
}) {
  let images = galleryImgsArr.map((image) => (
    <GalleryImg
      key={image}
      projectImg={image}
      imageInView={imageInView}
      setImageInView={setImageInView}
    />
  ));

  return (
    <div className=" w-full h-24 mt-2 relative">
      {/* ---------- */}
      <button
        onClick={prevImg}
        className=" top-0 left-1 absolute px-3 z-30  rounded-sm text-3xl text-gray-50 transition duration-150  hover:bg-[hsl(0,0%,0%,0.85)] active:text-pink-300 h-20 "
      >
        <span className=" opacity-50 group-hover:opacity-100 transition-opacity duration-200">
          &#10094;
        </span>
      </button>
      {/* ---------- */}
      <div className="project-photo-gallery-bar flex h-full overflow-x-auto pb-2 gap-1 px-12 items-center">
        {images}
      </div>
      {/* ---------- */}
      <button
        onClick={nextImg}
        className="absolute top-0 right-1 w-10 z-30  rounded-sm text-3xl text-gray-50 transition duration-150 hover:bg-[hsl(0,0%,0%,0.75)] active:text-pink-300 h-20 "
      >
        <span className=" opacity-50 group-hover:opacity-100 transition-opacity duration-200">
          &#10095;
        </span>
      </button>
      {/* ---------- */}
    </div>
  );
}

export default ProjectPhotoGalleryBar;
