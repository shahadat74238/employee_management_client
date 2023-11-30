import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeePayment = (email) => {
   const axiosSecure = useAxiosSecure();

   const { data: payment, isLoading: paymentLoading, refetch:paymentReload } = useQuery({
      queryKey: ["payment", email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payment?email=${email}`);
        return res.data;
      },
    });

    return [payment,paymentLoading,paymentReload ];
};

export default useEmployeePayment;