import axios from "axios";
import { store } from "../app/store";
import instance from "./instance";
// const navigate = useNavigate()


const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
adminAxios.interceptors.request.use((config) => {
  const token = store.getState()?.auth?.refreshToken;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

adminAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403 || error.response.status === 401) {

      store.dispatch(authChange({ adminName: "", accessToken: "", refreshToken: "" }))


    } else {
      return Promise.reject(error);
    }

  }
);

export default adminAxios;