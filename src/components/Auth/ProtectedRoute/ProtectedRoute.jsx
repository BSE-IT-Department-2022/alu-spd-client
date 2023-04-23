import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const isAuthenticated = (cookies) => {
  const token = cookies["authToken"];
  return !!token;
};

const ProtectedRoute = () => {
  const [cookies] = useCookies(["authToken"]);
  const location = useLocation();

  return isAuthenticated(cookies) ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default ProtectedRoute;
