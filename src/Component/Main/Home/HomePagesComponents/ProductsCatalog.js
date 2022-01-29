import React, {useState} from "react";
import ProductsList from "../../../Products/ProductsList";
import ProductSaleOfProducts from "../../../Products/ProductSaleOfProducts";
import ProductsBestsellers from "../../../Products/ProductsBestsellers";

const ProductsCatalog = ({likeCount,setLikeCount}) => {

    return (
        <>
            <ProductsList setLikeCount={setLikeCount} likeCount={likeCount}/>
            <ProductSaleOfProducts price={"30"}/>
            <ProductsBestsellers />
        </>
    )
}
export default ProductsCatalog