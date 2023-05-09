import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthContextProvider, UserAuth, UserContext } from "./context/AuthContext";
import Vault from "./components/Vault";
import SelectAccount from "./components/SelectAccount";
import SelectAccountContainer from "./components/SelectAccountContainer";
import { useContext, useEffect, useState } from "react";
import Admin from "./components/Admin";
import { auth } from "./firebase-config";

function App() {
  const {user} = useContext(UserContext);
  
  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/auth/signin" />;
  }

  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/auth/signin" element={<SignIn />} />
          <Route path="/vault" element={<RequireAuth><Vault /></RequireAuth>} />
          <Route exact path="/add-account/select" element={<SelectAccount />} />
          <Route exact path="/add-account/select/add/:id" element={<SelectAccountContainer />}/>
        </Routes>
    </>
  );
}

export default App;
