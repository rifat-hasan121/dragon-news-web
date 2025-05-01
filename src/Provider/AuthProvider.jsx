import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

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
    };

    return <AuthContext value={authData}>{children}</AuthContext>

}
export default AuthProvider;