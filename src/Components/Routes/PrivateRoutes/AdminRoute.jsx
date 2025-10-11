import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router";
import ErrorPage from "../../Pages/ErrorPage";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/users?email=${user.email}`)
        .then((res) => {
          const role = res.data.result[0]?.role;
          setIsAdmin(role === "Admin");
        })
        .catch((err) => console.error(err))
        .finally(() => setChecking(false));
    } else {
      setChecking(false);
    }
  }, [user]);

  if (loading || checking) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminRoute;
