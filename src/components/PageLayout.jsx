import React from "react";
import { useSelector } from "react-redux";

export const PageLayout = ({ title, children }) => {
  const { user, lastLogin, accessToken } = useSelector((s) => s.auth);

  return (
    <div>
      <h2>{title}</h2>
      {user && (
        <div>
          Logged in as: <b>{user.name}</b> ({user.role}) <br />
          Last login: {lastLogin} <br />
          Access token expires in:{" "}
          {Math.max(0, Math.floor((accessToken.expiresAt - Date.now()) / 1000))}s
        </div>
      )}
      <hr />
      {children}
    </div>
  );
};
