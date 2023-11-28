import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorks = () => {
   const axiosSecure = useAxiosSecure();

   const {data: works, isLoading: worksLoading, refetch: worksReload} = useQuery({
      queryKey: ["works"],
      queryFn: async() =>{
         const res = await axiosSecure.get("/works")
         return res.data;
      }
   })

   return [works, worksLoading, worksReload];

   
};

export default useWorks;