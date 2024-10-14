import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Exam from "./screens/questions/Exam";
import Header from "./components/Header";
import Home from "./components/Home";
import Logout from "./screens/Logout";
import Result from "./screens/questions/Result";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default App;
