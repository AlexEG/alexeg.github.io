/* eslint-disable react/prop-types */
// import { useState } from "react";

function ProjectPhotoGallery({ img, expandedPhotoGallery, isExpanded }) {
  return (
    <div
      className={` bg-gray-900 ${
        isExpanded ? " h-96" : "h-64 "
      }  flex justify-center relative`}
    >
      <img src={img} alt="" className="h-full" />
      <div className=" absolute w-full h-full  ">
        <div className=" w-full h-full  relative ">
          {!isExpanded && (
            <button
              className={`absolute  top-0 right-0  w-[4.33rem] z-30  rounded-sm text-3xl  transition duration-150 hover:bg-[hsl(0,0%,0%,0.5)] active:text-pink-300 h-full`}
            >
              <span className=" opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                &#10095;
              </span>
            </button>
          )}

          <button
            onClick={expandedPhotoGallery}
            className="w-16 bg-gray-100 rounded-full p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 group-hover:opacity-75 active:opacity-50 transition duration-200 cursor-pointer hover:bg-gray-500 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" />
            </svg>
          </button>

          {!isExpanded && (
            <button className="absolute top-0 left-0  w-[4.33rem] z-30  rounded-sm text-3xl text-gray-50 transition duration-150 hover:bg-[hsl(0,0%,0%,0.5)] active:text-pink-300 h-full">
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
