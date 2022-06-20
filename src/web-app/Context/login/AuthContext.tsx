import React from 'react'
import { createContext,useContext,useState,useEffect } from 'react'

export type childrenType = React.ReactNode;

type AuthContextProviderProps = {
    children:childrenType;
};

type AuthContextType = {
    token:string | null;
    setToken:(value: any) => any;
    user:any | null;
    setUser:(value: any) => any; 
};

export const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const localStorageToken = localStorage.getItem("token");
    const [token, setToken] = useState(localStorageToken);
    const localStorageUser = JSON.parse(localStorage.getItem("user")|| '{}');
    const [user, setUser] = useState(localStorageUser);

    useEffect(()=>{
        let localStorageToken = localStorage.getItem("token");
        setToken(localStorageToken)  
    },[token])

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>{children}</AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }