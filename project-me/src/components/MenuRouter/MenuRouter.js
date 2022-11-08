import React from "react"
import Icons from "../../icons/routerIcons"
import Category from "../Category/Category";
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
        title: "Category",
        path: "/category",
        element: <Category />,
    },
].map((el) => {
    return {
        ...el,
        icon: Icons(el.path)
    };
})


export default MenuRouter