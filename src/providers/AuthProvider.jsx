import React, { createContext, useState } from 'react'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);
const auth =getAuth(app)

const AuthProvider = ({children}) => {
   const [user ,setUser] = useState(null)
// createuser

    const createUser =(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
//signin
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
// update profile
        // const userUpdateProfile =()=>{
            
        // }
     const logOut =()=>{
          return  signOut(auth)
        }
 useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, userLoggedUser =>{
        console.log('loooooooooooooooog',userLoggedUser);
        setUser(userLoggedUser)
    })
    return ()=>{
        unSubscribe();
    }
 },[])
    const authInfo ={
     user,
     createUser,
     signIn,
     logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;