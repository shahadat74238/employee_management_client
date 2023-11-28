/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useHr from "../Hooks/useHr";
import Loading from "../Shared/Loading";

const HrRoute = ({children}) => {
   const [isHr, isHrLoading] = useHr()
   const {user, loading} = useAuth();
   const location = useLocation();

   if(loading || isHrLoading) {
      return <Loading />
   }
   if(user && isHr){
      return children;
   }

   return <Navigate to="/" state={{ from: location }} replace ></Navigate>
};

export default HrRoute;