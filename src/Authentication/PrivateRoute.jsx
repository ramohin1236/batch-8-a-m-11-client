/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {


    const {user,isLoading}=useContext(AuthContext)
    const location= useLocation()

    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(!isLoading && !user?.email){
     return   <Navigate state={location.pathname}
      to='/login'
      
      />
    }

    return  children
};

export default PrivateRoute;