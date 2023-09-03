import { Link } from "react-router-dom";
import { YOUTUBEAPI } from "../Utils/constants";
import useFetch from "../Utils/useFetch";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const { data, loading, error } = useFetch(YOUTUBEAPI);

  if (error) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-evenly flex-wrap">
        {Array(16)
          .fill("")
          .map((i, index) => (
            <Shimmer key={index} />
          ))}
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="flex justify-around flex-wrap">
      {data?.items?.map((data) => (
        <Link to={`/watch?v=${data.id}`} key={data.id}>
          <VideoCard data={data} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
