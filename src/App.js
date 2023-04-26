import "./App.css";
import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { Login } from "./components/login/Login";
import Lost from './pages/Lost';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
