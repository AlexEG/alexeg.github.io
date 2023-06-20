/* eslint-disable react/prop-types */
function GalleryImg({ projectImg, imageInView, setImageInView }) {
  function changeImageInView() {
    setImageInView(projectImg);
    console.log(projectImg);
  }

  return (
    <img
      onClick={changeImageInView}
      src={projectImg}
      alt=""
      className={`max-h-full opacity-50 grayscale-[50%] hover:grayscale-0 hover:opacity-100 transition cursor-pointer ${
        projectImg === imageInView && "opacity-100 "
      }`}
    />
  );
}

export default GalleryImg;
