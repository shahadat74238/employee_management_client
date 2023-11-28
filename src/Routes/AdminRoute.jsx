/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const AdminRoute = ({children}) => {
   const [isAdmin, isAdminLoading] = useAdmin();
   const {user, loading} = useAuth();
   const location = useLocation();

   if(loading || isAdminLoading) {
      return <Loading />
   }
   if(user && isAdmin){
      return children;
   }

   return <Navigate to="/" state={{ from: location }} replace ></Navigate>
   
};

export default AdminRoute;