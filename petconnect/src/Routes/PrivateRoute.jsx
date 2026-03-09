import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div
        className="radial-progress"
        style={{ "--value": 70 } /* as React.CSSProperties */}
        aria-valuenow={70}
        role="progressbar"
      >
        70%
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location?.pathname }}
      replace={true}
    ></Navigate>
  );
};

export default PrivateRoute;
