import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
