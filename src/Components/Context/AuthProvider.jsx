import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);
const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OwnError, setOwnError] = useState(false);

  const createUser = async (email, password) => {
    setLoading(true);
    setOwnError(null);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return result;
    } catch (error) {
      toast.error("This email is already used.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    OwnError,
    setOwnError,
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
