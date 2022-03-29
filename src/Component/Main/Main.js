import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./Home/HomeContainer";
import ProductsShopListContainer from "./ProductsShopList/ProductsShopListContainer";
import ProductsInCartContainer from "../Products/ProductsInCartContainer";
import LikedProductsContainer from "../Products/LikedProducts/LikedProductsContainer";
import DynamicPageContainer from "../DynamicPages/DynamicPageContainer";
import CommentsContainer from "./Comments/CommentsContainer";


const MainContainer = ({isLogin}) => {

    return (
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/shop" element={<ProductsShopListContainer/>}/>

            {isLogin &&
            <>
                <Route path="/cart" element={<ProductsInCartContainer/>}/>
                <Route path="/likedProduct" element={<LikedProductsContainer/>}/>
            </>
            }
            <Route path="/product/:id" element={<DynamicPageContainer/>}/>
            <Route path="/comments" element={<CommentsContainer/>}/>
        </Routes>
    )
}


export default MainContainer