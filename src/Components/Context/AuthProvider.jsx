import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);
const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [OwnError, setOwnError] = useState(false);

  // Create User
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

  // Login User
  const loginUser = async (email, password) => {
    setLoading(true);
    setOwnError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      setOwnError(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Logout failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    OwnError,
    setOwnError,
    createUser,
    loginUser,
    userLogout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
