import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AddLauncherPage from "./Pages/AddLauncherPage";
import LauncherDetails from "./Pages/LauncherDetails";

function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-linear-to-bl from-yellow-200 to-red-500">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addLauncher" element={<AddLauncherPage />} />
        <Route path="lancherDetails" element={<LauncherDetails />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
