import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import UserPage from "./pages/UserPage";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { RedirectToUserPage } from "./utils/RedirectToUserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route element={<RedirectToUserPage />}>
          <Route path="/login" element={<LogInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
