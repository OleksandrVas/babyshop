import React from "react"
import HeadLine from "../../HeadLine/HeadLine";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import NavBarShop from "./NavBarShop";
import ProductShopCatalog from "./ProductShopCatalog";


const ProductsShopList = ({
                              buttonsOfAge ,
                              filter ,
                              buttons ,
                              filteredByAge ,
                              menuItems}) => {

    return (
        <>
            <HeadLine headLine={"Products Catalog"}/>
            <BreadCrumbs/>
            <div className={"colXs12"}>
                <NavBarShop buttonsOfAge={buttonsOfAge} filter={filter} button={buttons} filteredByAge={filteredByAge}/>
                <ProductShopCatalog menuItems={menuItems}/>
            </div>
        </>
    )
}


export default ProductsShopList