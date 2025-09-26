import Header from "./Components/MainHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </>
  );
};

export default App;
