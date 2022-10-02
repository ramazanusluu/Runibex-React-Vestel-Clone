import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import DesktopNav from "./components/Navbar/DesktopNav/DesktopNav";
import Categories from "./pages/Categories/Categories";
import SubCategories from "./pages/SubCategories/SubCategories";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Search from "./pages/Search/Search";
import ShoppingCard from "./pages/ShoppingCard/ShoppingCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <DesktopNav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:category_id" element={<SubCategories />} />
        <Route path="/products/:product_id" element={<ProductPage />} />
        <Route path="/product-detail/:product" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/card" element={<ShoppingCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
