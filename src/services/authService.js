import axios from "axios";

export const loginService = ({ username, password }) => {
  return axios.post("/api/auth/login", { username, password });
};

export const signUpService = (signUpInput) => {
  return axios.post("/api/auth/signup", signUpInput);
};
