import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
  const { user, initialized } = useSelector((s) => s.auth);
  if (!initialized) return <div>Loading session...</div>;
  return user?.role === "admin" ? children : <Navigate to="/" />;
};
