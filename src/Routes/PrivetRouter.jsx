/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRouter = ({children}) => {
   const {user, loading} = useAuth()
   const location = useLocation()

   if(loading){
      return <p>Loading .... Privet</p>
   }
   if(user){
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRouter;