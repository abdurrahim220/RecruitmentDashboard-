import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar/Sidebar";
import RightBar from "../pages/RightBar/RightBar";

const Main = () => {
  return (
    <div className=" mx-auto px-5 lg:px-10">
      <div className="">
        <Sidebar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};

export default Main;
