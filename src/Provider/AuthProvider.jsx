import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true)
   return signInWithPopup(auth, provider)
  }

  const loginWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  }
  

  const login = (email, password) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const logOut = () => {
    return signOut(auth);
  }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser);
          setLoading(false)
        });
        return () => {
            unsubscribe()
        }

   },[])


    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      login,
      loading,
      setLoading,
      updateUser,
      loginWithGoogle,
      loginWithGithub,
    };

    return <AuthContext value={authData}>{children}</AuthContext>

}
export default AuthProvider;