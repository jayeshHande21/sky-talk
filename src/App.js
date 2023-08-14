import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/auth/login";
import { SignUp } from "./pages/auth/signUp";
import { Explore } from "./pages/auth/explore";

function App() {
  return (
    <>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/Explore">Explore</NavLink>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
