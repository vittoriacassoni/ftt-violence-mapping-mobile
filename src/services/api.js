import axios from "axios";

const api = axios.create({
  baseURL: "https://violence-mapping-api.herokuapp.com/",
});

api.interceptors.request.use(async (config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTYzNTM4NjU3Nn0.EzozYyjDfle6mDyKK29jg5X573Jnbe0E6-p5dKy42LU";
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
