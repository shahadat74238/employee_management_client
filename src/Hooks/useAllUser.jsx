import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
   const axiosSecure = useAxiosSecure();

   const {data: users, isLoading: usersLoading, refetch: userReload} = useQuery({
      queryKey: ["users"],
      queryFn: async() =>{
         const res = await axiosSecure.get("/users")
         return res.data;
      }
   })

   return [users, usersLoading, userReload];
};

export default useAllUser;