import React from "react";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser || null);
  const [authloading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, authloading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
