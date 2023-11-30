import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorks = (data) => {
  const axiosSecure = useAxiosSecure();
  console.log(data, "filter info");

  const {
    data: works,
    isLoading: worksLoading,
    refetch: worksReload,
  } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/works?name=${data?.name ? data.name : ""}&month=${
          data?.month ? data.month : ""
        }`
      );
      return res.data;
    },
  });

  return [works, worksLoading, worksReload];
};

export default useWorks;
