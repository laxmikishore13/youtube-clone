import { buttonList } from "../Utils/buttonlist";
import Button from "./Button";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {buttonList.map((button, index) => (
          <Button key={index} name={button} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
