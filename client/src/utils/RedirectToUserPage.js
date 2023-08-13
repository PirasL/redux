import { Outlet, Navigate } from "react-router-dom";

export const RedirectToUserPage = () => {
  let isUserAuth = localStorage.getItem("token");
  return !isUserAuth ? <Outlet /> : <Navigate to={"/user"} />;
};
