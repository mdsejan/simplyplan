import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
