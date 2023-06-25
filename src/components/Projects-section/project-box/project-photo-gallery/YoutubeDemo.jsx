/* eslint-disable react/prop-types */
function YoutubeDemo({ YouTubeEmbedURL }) {
  return (
    <iframe
      className="aspect-video w-full z-10"
      src={`https://www.youtube.com/embed/${YouTubeEmbedURL}`}
      allowfullscreen
    ></iframe>
  );
}

export default YoutubeDemo;
