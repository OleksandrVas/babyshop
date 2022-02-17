import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import LikedProduct from "./LikedProduct/LikedProduct";
import ProductsShopList from "./ProductsShopList/ProductsShopList";


const Main = ({addLikeCount ,quantity, likeCount,onRemoveFromCart  , onAddToCart , addToCart}) => {
    return (
        <Routes>
            <Route path="/" element={
                <Home addLikeCount={addLikeCount} likeCount={likeCount}  onAddToCart={onAddToCart}  />
            }/>
            <Route path="/shop" element={
                <ProductsShopList addLikeCount={addLikeCount} onAddToCart={onAddToCart}  />
            }/>
            <Route path="/liked" element={
                <LikedProduct quantity={quantity} onRemoveFromCart={onRemoveFromCart} addToCart={addToCart} />
            }/>
        </Routes>
    )
}

export default Main