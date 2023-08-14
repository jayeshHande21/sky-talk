import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
// import { SignUp } from "./signUp";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const testUserData = {
    username: "jayesh789",
    password: "Jayesh21",
  };

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLogin = () => {
    loginHandler(loginData);
  };

  const handleGuestLogin = () => {
    setLoginData(testUserData);
    setLoginData((prevLoginData) => {
      loginHandler(prevLoginData);
      return prevLoginData;
    });
  };

  return (
    <div>
      <label>
        UserName
        <input
          type="text"
          placeholder="Enter Username here"
          onChange={(e) =>
            setLoginData((prevLoginData) => ({
              ...prevLoginData,
              username: e.target.value,
            }))
          }
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          placeholder="Enter Password here"
          onChange={(e) =>
            setLoginData((prevLoginData) => ({
              ...prevLoginData,
              password: e.target.value,
            }))
          }
        />
      </label>
      <br />
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleGuestLogin}>Guest Login</button>

      <h3>
        Dont Have An Account?{" "}
        <NavLink to="/SignUp">
          <span style={{ color: "red", textDecoration: "none" }}>SignUp</span>
        </NavLink>
      </h3>
    </div>
  );
};
