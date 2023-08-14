import { createContext, useState } from "react";
import { loginService, signUpService } from "../services/authService";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [token, setToken] = useState(localStorageToken?.token);
  const [users, setUsers] = useState([]);

  const loginHandler = async (loginData) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await loginService(loginData);

      if (status === 200 || status === 201) {
        console.log(foundUser, encodedToken);
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const signUpHandler = async (signUpData) => {
    console.log(signUpData);
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(signUpData);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        setUsers((prevUsers) => [...prevUsers, createdUser]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, signUpHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
