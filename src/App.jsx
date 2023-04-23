import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProtectedRoute from "./components/Auth/ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/Login/LoginPage";

/**
 * App component represents the main entry point of our React application.
 * It includes routing, context providers, and other high-level app configurations.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <ProtectedRoute path="/" index component={<HomePage />} /> */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
