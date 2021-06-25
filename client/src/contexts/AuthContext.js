import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    //   function that would be changed if changing type of authentication 
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    //   If we don't want to use firebase in the future we can change the code inside of this function to reflect that. Reusable code.
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
        {/* not rendering until we have our user set */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
