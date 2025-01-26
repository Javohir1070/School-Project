import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext()
export const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token))
    }, [token]);
    
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users]);

    return(
        <Context.Provider value={{token, setToken, users, setUsers}}>{children}</Context.Provider>
    )
}