import axios from "axios";

const API_URL = "/api/users/";
const API_URL_REGISTER = "/api/users/register";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  return response.data;
};

// logout user
const logout = () => {
  // localStorage.removeItem("user")
};

const getMe = async (token) => {
  const config = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.defaults.withCredentials = true;
  const response = await axios.get(API_URL + "me", config);

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  getMe,
};

export default authService;
