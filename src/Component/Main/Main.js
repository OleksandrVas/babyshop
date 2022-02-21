import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import ProductsInCart from "./LikedProduct/ProductsInCart";
import ProductsShopList from "./ProductsShopList/ProductsShopList";
import LikedProducts from "../LikedProducts/LikedProducts";
import DynamicPage from "../DynamicPages/DynamicPage";


const Main = ({
                  onAddToCart,
              }) => {
    return (
        <Routes>
            <Route path="/" element={
                <Home/>
            }/>
            <Route path="/shop" element={
                <ProductsShopList  />
            }/>
            <Route path="/cart" element={
                <ProductsInCart />
            }/>
            <Route path="/likedProduct" element={
                <LikedProducts  />
            }/>
            <Route path="/product/:id" element={
                <DynamicPage onAddToCart={onAddToCart} />
            }/>
        </Routes>
    )
}
export default Main