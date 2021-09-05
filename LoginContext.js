import React , { createContext , useContext , useState } from 'react';

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
    const [isSignedIn , setIsSignedIn] = useState(false);
    const value = {
        isSignedIn: isSignedIn,
        setIsSignedIn: setIsSignedIn,
    }
    return(
        <LoginContext.Provider value = {value}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext);
}