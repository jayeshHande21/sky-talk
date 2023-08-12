import { createContext } from "react";
import { loginService } from "../services/authService";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const loginHandler = async (loginData) => {
    try {
      const {
        data: { foundUser },
        status,
      } = await loginService(loginData);

      if (status === 200 || status === 201) {
        console.log(foundUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
