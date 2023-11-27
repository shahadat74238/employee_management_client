import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useHr = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isHr, isLoading: isHrLoading } = useQuery({
    queryKey: [user?.email, "hr"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/hr/${user.email}`);
      console.log(res.data);
      return res.data?.hr;
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
