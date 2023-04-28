import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../firebase-config";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({})
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            console.log(user);
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])

    return(
        <UserContext.Provider value={{createUser,user,logOut,signIn}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext)
}