import React from "react";
import classes from "./Header.module.css"
import '../../App.css'
import NavLinkCreator from "../NavLinkCreator/NavLinkCreator";
import {pink} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {NavLink} from "react-router-dom";
import productsArray from "../Products/ProductsArray";

import {keys} from "lodash";

const productObject = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product
    }), {})

console.log(productObject)

const HeaderMenu = ({likeCount, addToCart}) => {
    return (
        <div className='container'>
            <div className={classes.rowForMenu}>
                <NavLinkCreator to="/home" text='HOME'/>
                <NavLinkCreator to="/shop" text='OUR PRODUCTS '/>
                <NavLinkCreator to="/about" text='ABOUT US '/>
                <NavLinkCreator to="/blog" text='BLOG'/>
                <NavLinkCreator to="/client" text='CLIENT CENTER '/>
                <NavLinkCreator to="/faq" text='FAQ '/>
                <NavLink to="/liked">
                    <FavoriteIcon sx={{color: pink[500]}}/>
                </NavLink>
                <span>{likeCount.totalLiked === 0 ? "" : likeCount.totalLiked}</span>
                <span>{keys(addToCart).map((productId) =>
                    <div>{productObject[productId].name} : {addToCart[productId]}</div>)}</span>
            </div>
        </div>
    )
}
export default HeaderMenu