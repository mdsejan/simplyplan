import { createContext } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase.config";

const GoogleProvider = new GoogleAuthProvider();

export const ThemeContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const themeInfo = { googleSignIn, name: "test context" };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
