import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { getUserData } from "../apis/user.api";
import { auth } from "../firebase/auth";
import { getCookie } from "./AuthContextProviders";

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userCookie = getCookie("user");
                const response = await getUserData(JSON.parse(userCookie).email);
                if (response) {
                    setUserData(response);
                } else {
                    console.log("No data fetched");
                }
            } catch (error) {
                console.log("Could not fetch user profile.", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
