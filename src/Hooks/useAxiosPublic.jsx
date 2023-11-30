import axios from 'axios';

const useAxiosPublic = () => {
   const instance = axios.create({
      baseURL: 
      // 'http://localhost:3003/api/v1',
      "https://employee-blond.vercel.app/api/v1"
    });
   return instance
};

export default useAxiosPublic;