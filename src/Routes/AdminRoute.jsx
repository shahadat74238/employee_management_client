/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
   const [isAdmin, isAdminLoading] = useAdmin();
   const {user, loading} = useAuth();
   const location = useLocation();

   if(loading || isAdminLoading) {
      return <p>Loading .... Admin</p>
   }
   if(user && isAdmin){
      return children;
   }

   return <Navigate to="/" state={{ from: location }} replace ></Navigate>
   
};

export default AdminRoute;