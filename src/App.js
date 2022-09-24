import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DesktopNav from "./components/Navbar/DesktopNav/DesktopNav";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <>
      <Header />
      <DesktopNav />
      <Routes>
        <Route path="/" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
