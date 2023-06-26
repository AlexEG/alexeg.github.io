/* eslint-disable react/prop-types */
import youtubeLogo from "../../../../assets/YouTube_Logo.svg";

function GalleryImg({
  projectImg,
  imageInView,
  setImageInView,
  galleryImgsArr,
}) {
  function changeImageInView() {
    setImageInView(projectImg);
    console.log(projectImg);
  }

  return (
    <div
      className={`relative flex-shrink-0 w-36 after:w-0 after:h-0   after:absolute after:-top-7 after:right-1/2 after:translate-x-1/2 after:border-[14px] after:border-transparent ${
        projectImg === imageInView && "after:border-b-gray-800"
      } `}
    >
      <img
        onClick={changeImageInView}
        src={projectImg}
        alt=""
        className={`max-h-full  opacity-50 grayscale-[50%] hover:grayscale-0 hover:opacity-90 transition cursor-pointer  ${
          projectImg === imageInView && "opacity-90 grayscale-0"
        }`}
      />
      {projectImg === galleryImgsArr[galleryImgsArr.length - 1] && (
        <div className=" w-full h-full bg-[#00000055] absolute top-0 left-0 flex justify-center items-center cursor-pointer ">
          <img
            onClick={changeImageInView}
            src={youtubeLogo}
            className="max-h-full max-w-full hover:animate-pulse"
            alt="YouTube"
          />
        </div>
      )}
    </div>
  );
}

export default GalleryImg;
