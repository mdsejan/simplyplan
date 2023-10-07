import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("Sign-out successful");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      ) : (
        " "
      )}
    </>
  );
  return (
    <div className="bg-base-100  sticky top-0 border-b z-30">
      <div className="navbar max-w-screen-2xl mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl font-bold">
            SimplyPlan
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div>
                <h3 className="mr-2 font-medium"> {user.displayName} </h3>
              </div>
              <div className="avatar mr-3">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/Sw3GfGJ/user.png"
                    }
                  />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className=" py-2 px-8 bg-gray-200 hover:bg-black hover:text-white rounded font-semibold capitalize"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className=" py-2 px-8 bg-gray-200 hover:bg-black hover:text-white rounded font-semibold capitalize"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
