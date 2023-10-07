import { useContext } from "react";
import { ThemeContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../pages/shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ThemeContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
