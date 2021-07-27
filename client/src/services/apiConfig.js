import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};
const api = axios.create({
  baseURL: `https://serene-earth-24708.herokuapp.com/api`
    // process.env.NODE_ENV === "production"
    //   ? `https://serene-earth-24708.herokuapp.com/api`
    //   : `http://localhost:3000/api`,
});
api.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error:", error);
    return Promise.reject(error);
  }
);
export default api;
