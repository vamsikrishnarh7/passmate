import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/auth/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
