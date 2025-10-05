import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    const from = location.state?.from?.pathname;
    return <Navigate to={from} replace />;
  }
  return children;
};

export default PublicRoute;
