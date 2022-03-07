import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Form from "./practice/Form";
import Home from "./practice/Home";

function App() {
 
  return (
    <>
    <Router>
      <Routes>
      <Route path="/form" element={<Form/>} />
      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/home" element={<Home/>} />
      </Routes>

    </Router>
    </>
      

    
  );
}

export default App;
