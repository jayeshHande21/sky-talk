import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export const SignUp = () => {
  const { signUpHandler } = useContext(AuthContext);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  //   console.log(signUpData);
  const handleUserSignUp = (e) => {
    e.preventDefault();
    // console.log(signUpData);
    signUpHandler(signUpData);
  };
  return (
    <div>
      <h2>Here is the SignUp Form</h2>
      <form>
        <label>
          <h3>First Name</h3>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        </label>
        <label>
          <h3>Last Name</h3>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </label>
        <label>
          <h3>UserName</h3>
          <input
            type="text"
            placeholder="Enter your userName"
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </label>
        <label>
          <h3>UserName</h3>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>

        <button type="submit" onClick={handleUserSignUp}>
          Create new Account
        </button>
      </form>
    </div>
  );
};
