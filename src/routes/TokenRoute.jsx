import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isValid } from "../utils/token";

export const TokenRoute = ({ children }) => {
  const { accessToken, initialized } = useSelector((s) => s.auth);
  if (!initialized) return <div>Loading session...</div>;
  return isValid(accessToken) ? children : <Navigate to="/login" />;
};
