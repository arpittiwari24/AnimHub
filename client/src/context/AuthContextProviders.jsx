import {auth} from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authloading, setAuthLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
            console.log("User Logged from Local Storage");
        }
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
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