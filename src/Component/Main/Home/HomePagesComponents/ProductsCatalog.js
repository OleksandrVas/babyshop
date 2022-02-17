import React, {useState} from "react";
import ProductsList from "../../../Products/ProductsList";
import ProductSaleOfProducts from "../../../Products/ProductSaleOfProducts";
import ProductsBestsellers from "../../../Products/ProductsBestsellers";

const ProductsCatalog = ({addToLiked, onAddToLiked, likeCount,addLikeCount, onAddToCart }) => {

    return (
        <>
            <ProductsList addToLiked={addToLiked} onAddToLiked={onAddToLiked} onAddToCart={onAddToCart} likeCount={likeCount} addLikeCount={addLikeCount}/>
            <ProductSaleOfProducts price={"30"}/>
            <ProductsBestsellers />
        </>
    )
}
export default ProductsCatalog