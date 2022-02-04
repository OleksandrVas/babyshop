import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import LikedProduct from "./LikedProduct/LikedProduct";
import ProductsShopList from "./ProductsShopList/ProductsShopList";


const Main = ({addLikeCount , likeCount  , onAddToCart}) => {
    return (
        <Routes>
            <Route path="/home" element={
                <Home addLikeCount={addLikeCount} likeCount={likeCount}  onAddToCart={onAddToCart}  />
            }/>
            <Route path="/shop" element={
                <ProductsShopList addLikeCount={addLikeCount} onAddToCart={onAddToCart}  />
            }/>
            <Route path="/liked" element={
                <LikedProduct  />
            }/>
        </Routes>
    )
}

export default Main