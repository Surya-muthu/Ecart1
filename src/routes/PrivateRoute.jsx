import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn, initialized } = useSelector((s) => s.auth);
  if (!initialized) return <div>Loading session...</div>;
  return isLoggedIn ? children : <Navigate to="/login" />;
};
