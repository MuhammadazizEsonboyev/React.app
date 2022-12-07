import React from "react";
import DrawerMenu from "./components/Drawer/DrawerMenu";
import "./config/i18n";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";
import EditPage from "./components/EditPage/EditPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <DrawerMenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-list/edit-product/:id" element={<EditPage/>} />
          <Route path="*" element={<h1 style={{marginLeft: "300px"}}>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
