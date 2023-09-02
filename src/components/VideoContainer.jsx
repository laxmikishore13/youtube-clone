import { YOUTUBEAPI } from "../Utils/constants";
import useFetch from "../Utils/useFetch";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const { data, loading, error } = useFetch(YOUTUBEAPI);
  console.log(data);
  console.log(loading);
  console.log(error);

  return data.length > 0 ? (
    <div className="flex justify-around flex-wrap">
      {data?.map((data) => (
        <VideoCard key={data.id} data={data} />
      ))}
    </div>
  ) : (
    <div className="flex justify-evenly flex-wrap">
      {Array(16)
        .fill("")
        .map((i, index) => (
          <Shimmer key={index} />
        ))}
      <Shimmer />
    </div>
  );
};

export default VideoContainer;
