import React, { useContext } from "react";
import { Navigate } from "react-router";
import ErrorPage from "../../Pages/ErrorPage";
import { AuthContext } from "../../Context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user || user.role !== "Admin") {
    return <ErrorPage></ErrorPage>;
  }

  return children;
};

export default AdminRoute;
