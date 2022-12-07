import React from "react"
import Icons from "../../icons/routerIcons"
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import Product from "../Product/Product";

const MenuRouter = [
    {
        title: "Home",
        path: "/",
        element: <Home />,
    },
    {
        title: "Product",
        path: "/product",
        element: <Product />,
    },
    {
        title: "Product List",
        path: "/product-list",
        element: <ProductList />,
    },
].map((el) => {
    return {
        ...el,
        icon: Icons(el.path)
    };
})


export default MenuRouter