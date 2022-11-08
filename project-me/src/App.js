import React from "react";
import { useTranslation } from "react-i18next";
import DrawerMenu from "./components/Drawer/DrawerMenu";
import "./config/i18n";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";

function App() {

  
  return (
    <>
      <Router>
        <DrawerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
