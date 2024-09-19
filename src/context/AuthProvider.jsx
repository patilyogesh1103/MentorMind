import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        // Get user from localStorage if available
        const storedUser = localStorage.getItem("Users");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        // Sync localStorage whenever authUser changes
        if (authUser) {
            localStorage.setItem("Users", JSON.stringify(authUser));
        } else {
            localStorage.removeItem("Users");
        }
    }, [authUser]);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
