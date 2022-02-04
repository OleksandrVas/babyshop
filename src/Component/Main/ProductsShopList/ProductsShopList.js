import React from "react"
import HeadLine from "../../HeadLine/HeadLine";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import NavBarShop from "./NavBarShop";
import ProductShopCatalog from "./ProductShopCatalog";

const ProductsShopList = ({addLikeCount ,  onAddToCart}) => {
    return (
        <>
            <HeadLine headLine={"Products Catalog"}/>
            <BreadCrumbs/>
            <div className={"colXs12"}>
                <NavBarShop/>
                <ProductShopCatalog addLikeCount={addLikeCount}   onAddToCart={onAddToCart} />
            </div>
        </>
    )
}

export default ProductsShopList