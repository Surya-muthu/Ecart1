import axios from "axios";
import { store } from "../redux/store";
import { logout } from "../redux/Slice/authSlicess";
import { isValid, generateToken, ACCESS_TOKEN_EXPIRY } from "../utils/token";

const api = axios.create({ baseURL: "/api" });

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("accessToken"));
  if (isValid(token)) config.headers.Authorization = `Bearer ${token.value}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      const refresh = JSON.parse(localStorage.getItem("refreshToken"));
      if (!isValid(refresh)) {
        store.dispatch(logout());
        localStorage.clear();
        return Promise.reject(err);
      }
      const newAccess = generateToken("access", ACCESS_TOKEN_EXPIRY);
      localStorage.setItem("accessToken", JSON.stringify(newAccess));
      err.config.headers.Authorization = `Bearer ${newAccess.value}`;
      return api(err.config);
    }
    return Promise.reject(err);
  }
);

export default api;
