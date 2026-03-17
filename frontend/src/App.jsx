import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AddLauncherPage from "./Pages/AddLauncherPage";
import LauncherDetails from "./Pages/LauncherDetails";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-linear-to-bl from-yellow-200 to-red-500">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addLauncher" element={<AddLauncherPage />} />
        <Route path="lancherDetails" element={<LauncherDetails />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
