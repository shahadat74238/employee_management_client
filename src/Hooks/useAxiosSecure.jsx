import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} = useAuth()

  const instance = axios.create({
    baseURL: 
    // "http://localhost:3003/api/v1", 
    "https://employee-blond.vercel.app/api/v1"
  });
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptors for 401 and 403 status codes
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async(error) => {
      const status = error.response.status;
      // console.log("interceptor error inside", status);
      if(status === 401 || status === 403){
        await logOut();
        navigate("/login")
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosSecure;
