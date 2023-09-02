/* eslint-disable react/prop-types */

const VideoCard = ({ data }) => {
  const { id, snippet } = data;
  const { thumbnails, channelTitle, localized } = snippet;
  return (
    <div className="px-2 py-3 cursor-pointer rounded-lg shadow-lg w-72">
      <img
        className="rounded-lg h-40 w-auto
        "
        src={thumbnails.medium.url}
        alt={channelTitle}
      />
      <div className="flex items-start mt-2">
        <img
          src={thumbnails.medium.url}
          className="w-8 h-8  m-2 bg-slate-200 rounded-full"
        />
        <span className="font -bold line-clamp-2">{localized.title}</span>
      </div>
    </div>
  );
};

export default VideoCard;
