/* eslint-disable react/prop-types */
import YoutubeDemo from "./YoutubeDemo";
// import youtubeLogo from "../../../../assets/YouTube_Logo.svg";

function ProjectPhotoGallery({
  expandedPhotoGallery,
  isExpanded,
  prevImg,
  nextImg,
  imageInView,
  galleryImgsArr,
  YouTubeEmbedURL,
}) {
  // console.log(galleryImgsArr);
  // console.log(imageInView);

  // let youtubevideo = isExpanded && <YoutubeDemo YouTubeEmbedURL={YouTubeEmbedURL} />

  return (
    <div
      className={` bg-gray-900 ${
        isExpanded ? " h-[26rem]" : "h-[17rem] "
      }  flex justify-center relative `}
    >
      {imageInView === galleryImgsArr[galleryImgsArr.length - 1] ? (
        isExpanded && <YoutubeDemo YouTubeEmbedURL={YouTubeEmbedURL} />
      ) : (
        <img src={imageInView} alt="" className="h-full " />
      )}

      <div className=" absolute w-full h-full ">
        <div className=" w-full h-full relative ">
          {/* NEXT btn  */}
          {!isExpanded && (
            <button
              onClick={nextImg}
              className={`absolute  top-0 right-0  w-[4.33rem] z-30  rounded-sm text-3xl  transition duration-150 hover:bg-[hsl(0,0%,0%,0.5)] active:text-pink-300 h-full`}
            >
              <span className=" opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                &#10095;
              </span>
            </button>
          )}

          <button
            onClick={expandedPhotoGallery}
            className={` bg-gray-900 rounded-full p-3 absolute ${
              !isExpanded
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75 hover:opacity-100"
                : "bottom-1 right-1 opacity-50 group-hover:opacity-100"
            }    active:opacity-50 transition-all duration-200 cursor-pointer hover:bg-gray-500 `}
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            )}
          </button>

          {!isExpanded && (
            <button
              onClick={prevImg}
              className="absolute top-0 left-0  w-[4.33rem] z-30  rounded-sm text-3xl text-gray-50 transition duration-150 hover:bg-[hsl(0,0%,0%,0.5)] active:text-pink-300 h-full"
            >
              <span className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                &#10094;
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectPhotoGallery;
