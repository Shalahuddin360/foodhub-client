import React, { createContext, useState } from 'react'; 
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);
const auth =getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
   const [user ,setUser] = useState(null);
   const [loading,setLoading] = useState(true);
// createuser

    const createUser =(email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password);
    }
//signin
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
// update profile
        // const userUpdateProfile =()=>{
            
        // }
    // logout     
     const logOut =()=>{
          return  signOut(auth);
          setLoading(true);
        }

    // sign in with google 
    const signInWithGoogle =()=>{
      return  signInWithPopup(auth,googleAuthProvider)
    }
    // sign in with Github
    const signInWithGithub =()=>{
       return  signInWithPopup(auth,githubAuthProvider);
    }
 useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, userLoggedUser =>{
        console.log('loooooooooooooooog',userLoggedUser);
        setUser(userLoggedUser);
        setLoading(false);
    })
    return ()=>{
        unSubscribe();
    }
 },[])
    const authInfo ={
     user,
     loading,
     createUser,
     signIn,
     logOut,
     signInWithGoogle,
     signInWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;