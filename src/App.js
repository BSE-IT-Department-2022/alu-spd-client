// import "./App.css";
// import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home";
// import { Login } from "./components/login/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MyLogin from "./pages/MyLogin";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            {/* <Route path="/" index element={<HomePage />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<MyLogin />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
