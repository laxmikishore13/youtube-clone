import Button from "./Button";
import { buttonList } from "../Utils/buttonlist";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="px-2 py-3 col-span-8">
      <div className="flex items-center">
        {buttonList.map((button, index) => (
          <Button key={index} name={button} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default Body;
