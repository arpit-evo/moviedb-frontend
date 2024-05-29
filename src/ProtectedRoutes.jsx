import React from 'react'
import Cookies from "js-cookie"
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
   const token = Cookies.get("refreshToken");
  return (
    token? <Outlet/>:<Navigate to={'/sign-in'}/>
  )
}

export default ProtectedRoutes