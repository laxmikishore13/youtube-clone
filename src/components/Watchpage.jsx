import { useDispatch } from "react-redux";
import { closeNavbar } from "../Utils/navbarSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"), "params");
  useEffect(() => {
    dispatch(closeNavbar());
  }, []);
  return (
    <div className="px-5 ">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
