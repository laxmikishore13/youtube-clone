import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="px-2 py-3 flex items-start">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
