import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import ProductsInCart from "./LikedProduct/ProductsInCart";
import ProductsShopList from "./ProductsShopList/ProductsShopList";
import LikedProducts from "../LikedProducts/LikedProducts";
import DynamicPage from "../DynamicPages/DynamicPage";


const Main = ({
                  addLikeCount,
                  onAddToLiked,
                  onRemoveFromFavourite,
                  quantity,
                  addToLiked,
                  likeCount,
                  onRemoveFromCart,
                  onAddToCart,
                  addToCart
              }) => {
    return (
        <Routes>
            <Route path="/" element={
                <Home addLikeCount={addLikeCount} likeCount={likeCount} addToLiked={addToLiked}
                      onAddToLiked={onAddToLiked} onAddToCart={onAddToCart}/>
            }/>
            <Route path="/shop" element={
                <ProductsShopList addToLiked={addToLiked} onRemoveFromFavourite={onRemoveFromFavourite}
                                  addLikeCount={addLikeCount} onAddToLiked={onAddToLiked} onAddToCart={onAddToCart}/>
            }/>
            <Route path="/cart" element={
                <ProductsInCart quantity={quantity} onRemoveFromCart={onRemoveFromCart} addToCart={addToCart}/>
            }/>
            <Route path="/likedProduct" element={
                <LikedProducts addToLiked={addToLiked} onRemoveFromFavourite={onRemoveFromFavourite}/>
            }/>
            <Route path="/product/:id" element={
                <DynamicPage/>
            }/>
        </Routes>
    )
}

export default Main