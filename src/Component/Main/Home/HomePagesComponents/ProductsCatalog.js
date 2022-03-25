import React, {useState} from "react";
import ProductsList from "../../../Products/ProductsList";
import ProductSaleOfProducts from "../../../Products/ProductSaleOfProducts";
import ProductsBestsellers from "../../../Products/ProductsBestsellers";

const ProductsCatalog = ({ likeCount,addLikeCount, products }) => {

    return (
        <>
            <ProductsList products={products}  likeCount={likeCount} addLikeCount={addLikeCount}/>
            <ProductSaleOfProducts price={"30"}/>
            {/*<ProductsBestsellers products={products} />*/}
        </>
    )
}
export default ProductsCatalog