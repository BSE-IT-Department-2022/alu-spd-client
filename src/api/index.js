import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // set environment variable

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiClientWithCredentials = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const googleLogin = async (returnTo) => {
  const clientBaseUrl = "http://localhost:3000"; // Change this for prod
  const absoluteReturnTo = `${clientBaseUrl}${returnTo.pathname}`;
  const returnToParam = encodeURIComponent(absoluteReturnTo);
  window.location.href = `http://localhost:5000/api/auth/google?returnTo=${returnToParam}`;
};

export const getMe = async () => {
  try {
    const response = await apiClientWithCredentials.get("/users/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const response = await apiClient.post("/register", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOpportunities = async () => {
  try {
    const response = await apiClientWithCredentials.get("/opportunities");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API calls as needed
