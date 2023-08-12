import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  //   const testUserData = {
  //     username: "jayesh789",
  //     password: "Jayesh21",
  //   };

  const handleLogin = () => {
    loginHandler({
      username: "jayesh789",
      password: "Jayesh21",
    });
  };

  return (
    <div>
      {/* <label>
        UserName
        <input type="text" placeholder="Enter Username here" />
      </label>{" "}
      <br />
      <label>
        Password
        <input type="password" placeholder="Enter Password here" />
      </label>{" "}
      <br /> */}
      <button onClick={handleLogin}>Guest Login</button>
    </div>
  );
};
