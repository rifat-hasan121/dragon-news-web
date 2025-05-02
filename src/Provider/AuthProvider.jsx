import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
  };
  

  const login = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);
  }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          return setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }

   },[])

    const [user, setUser] = useState(null);
    console.log(user)

    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      login,
    };

    return <AuthContext value={authData}>{children}</AuthContext>

}
export default AuthProvider;