import axios from "axios";
import { ACCESS_TOKEN } from "../constants/localStorage";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    "Accept": "applications/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && config.headers) {
      config.headers["x_authorization"] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
