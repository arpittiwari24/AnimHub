import React from "react";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

// Function to set a cookie
const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

function getCookie(cookieName) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null; // Return null if the cookie is not found
}

const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState(auth.currentUser || null);
  const [user, setUser] = useState(getCookie("user"));

  const [authloading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setCookie("user", JSON.stringify(user), 7);
      } else {
        document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        // localStorage.removeItem("user");
        setUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [user, authloading]);

  return (
    <AuthContext.Provider value={{ user, authloading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
