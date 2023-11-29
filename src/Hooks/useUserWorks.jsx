import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserWorks = () => {
   const axiosSecure = useAxiosSecure();
   const {user} = useAuth();

   const {data:userWorks, isLoading: userWorksLoading, refetch: userWorksReload} = useQuery({
      queryKey: ["userWorks", user?.email],
      queryFn: async() =>{
         const res = await axiosSecure.get(`/userWorks?email=${user?.email}`);
         return res.data;
      }
   })

   return [userWorks, userWorksLoading, userWorksReload];
};

export default useUserWorks;