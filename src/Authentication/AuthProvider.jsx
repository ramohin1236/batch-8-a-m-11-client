/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../public/firebase.config";


export const AuthContext= createContext();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

    const createUser =(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setIsLoading(true)
        return signOut(auth)
    }


     useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setIsLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
     },[])



const values={
    user,
    isLoading,
    createUser,
    signInUser,
    logOut
}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;