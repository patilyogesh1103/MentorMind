import React, { useContext, useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase/firebase'; // Ensure this import points to your Firebase configuration file

const auth = getAuth(app);

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    userLoggedIn: currentUser !== null,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
