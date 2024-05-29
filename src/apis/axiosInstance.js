import axios from "axios";
import Cookies from "js-cookie";
import {
  ACCESS_TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_EXPIRE_TIME_SHORT,
} from "../globalVar";

// const navigate = useNavigate();
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// //response interceptor for refreshing token
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refreshToken");
        if (refreshToken) {
          const response = await axiosInstance.post("/api/user/refresh-token", {
            refreshToken,
          });

          const { accessToken, newRefreshToken } = response.data;

          Cookies.set("accessToken", accessToken, {
            expires: ACCESS_TOKEN_EXPIRE_TIME,
          });
          Cookies.set("refreshToken", newRefreshToken, {
            expires: REFRESH_TOKEN_EXPIRE_TIME_SHORT,
          });

          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
