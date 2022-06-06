import { createContext, useContext, useState } from "react";
import { logIn, logOut, signUp } from "../utilities/services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const signupUser = async (signupCredentials) => {
    try {
      await signUp(signupCredentials);
      setToken(localStorage.getItem("token"));
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (loginCredentials) => {
    try {
      await logIn(loginCredentials);
      setToken(localStorage.getItem("token"));
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = async () => {
    try {
      await logOut();
      setToken("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        logoutUser,
        loginUser,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
