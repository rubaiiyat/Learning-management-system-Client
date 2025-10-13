import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";
import axios from "axios";

const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [OwnError, setOwnError] = useState(null);

  // ----------- Create User -----------
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
      setOwnError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // ----------- Login User (Email/Password) -----------
  const loginUser = async (email, password) => {
    setLoading(true);
    setOwnError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      // Get JWT from backend
      const { data } = await axios.post(
        "http://localhost:3000/jwt",
        { email: result.user.email },
        { withCredentials: true }
      );
      console.log("JWT Role:", data.role);
      setUser({ email: result.user.email, role: data.role });

      return result;
    } catch (error) {
      setOwnError(error);
    } finally {
      setLoading(false);
    }
  };

  // ----------- Login with Google -----------
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setOwnError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      const userInfo = result.user;

      // Check if user exists in DB
      const existing = await axios.get(
        `http://localhost:3000/users?email=${userInfo.email}`
      );

      if (!existing.data.result || existing.data.result.length === 0) {
        // create new user in DB
        await axios.post("http://localhost:3000/users", {
          fullName: userInfo.displayName || "",
          email: userInfo.email,
          image: userInfo.photoURL || "",
          gender: "",
          role: "Student",
        });
      }

      // Get JWT
      const { data } = await axios.post(
        "http://localhost:3000/jwt",
        { email: userInfo.email },
        { withCredentials: true }
      );

      setUser({ email: userInfo.email, role: data.role || "Student" });
      toast.success("Login Successful!");
    } catch (error) {
      toast.error(error.message);
      setOwnError(error);
    } finally {
      setLoading(false);
    }
  };

  // ----------- Logout -----------
  const userLogout = async () => {
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:3000/logout",
        {},
        { withCredentials: true }
      );
      await signOut(auth);
      setFirebaseUser(null);
      setUser(null);
      toast.success("Logout Successful!");
    } catch (error) {
      toast.error("Logout Failed!");
    } finally {
      setLoading(false);
    }
  };

  // ----------- Firebase Auth Listener -----------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ----------- Verify JWT on Refresh -----------
  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/verify-token", {
          withCredentials: true,
        });

        if (data?.email && data?.role) {
          setUser({ email: data.email, role: data.role });
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const userInfo = {
    firebaseUser,
    user,
    loading,
    OwnError,
    createUser,
    loginUser,
    loginWithGoogle,
    userLogout,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
