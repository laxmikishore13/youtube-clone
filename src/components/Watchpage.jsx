import { useDispatch } from "react-redux";
import { closeNavbar } from "../Utils/navbarSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";
import { COMMENT } from "../Utils/constants";
import Comments from "./Comments";

const Watchpage = () => {
  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"), "params");
  useEffect(() => {
    dispatch(closeNavbar());
  }, []);

  return (
    <>
      <div className="px-5">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="my-5">
          <ChannelInfo />
        </div>
        <div className="flex flex-col gap-3">
          {COMMENT.map((comment) => (
            <Comments key={comment.name} comments={comment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Watchpage;
