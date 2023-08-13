import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  let isUserAuth = localStorage.getItem("token");
  return isUserAuth ? <Outlet /> : <Navigate to={"/login"} />;
};
