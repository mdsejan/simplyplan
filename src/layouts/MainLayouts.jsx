import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const MainLayouts = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `SimplyPlan`;
    } else {
      document.title = `${location.pathname.replace("/", "")}`;
    }

    if (location.pathname === "/login" && location.state) {
      document.title = `login`;
      return;
    }
    if (location.state) {
      document.title = `${location.state}`;
    }
  }, [location.pathname, location.state]);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayouts;
