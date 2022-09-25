import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DesktopNav from "./components/Navbar/DesktopNav/DesktopNav";
import Categories from "./pages/Categories/Categories";
import SubCategories from "./pages/SubCategories/SubCategories";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Header />
      <DesktopNav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:category_id" element={<SubCategories />} />
        <Route path="/products/:product_id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
