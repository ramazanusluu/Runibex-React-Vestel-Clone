import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import DesktopNav from "./components/Navbar/DesktopNav/DesktopNav";

function App() {
  return (
    <>
      <Header />
      <DesktopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
