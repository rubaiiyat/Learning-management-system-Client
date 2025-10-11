import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";
import axios from "axios";

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

      await signOut(auth);

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

  // Login With Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const existing = await axios.get(
        `http://localhost:3000/users?email=${user.email}`
      );

      if (existing.data.result && existing.data.result.length > 0) {
        return;
      }

      await axios.post("http://localhost:3000/users", {
        fullName: user.displayName || "",
        email: user.email,
        image: user.photoURL || "",
        gender: "",
      });
      toast.success("Login Successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // User Logout Section
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
    loginWithGoogle,
    userLogout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
