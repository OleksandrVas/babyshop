import React from "react";
import classes from "./Header.module.css"
import '../../App.css'
import NavLinkCreator from "../NavLinkCreator/NavLinkCreator";
import {pink} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {NavLink} from "react-router-dom";
import {keys} from "lodash/object";

const HeaderMenu = ({likeCount, addToCart}) => {
    return (
        <div className='container'>
            <div className={classes.rowForMenu}>
                <NavLinkCreator to="/" text='HOME'/>
                <NavLinkCreator to="/shop" text='OUR PRODUCTS '/>
                <NavLinkCreator to="/about" text='ABOUT US '/>
                <NavLinkCreator to="/blog" text='BLOG'/>
                <NavLinkCreator to="/client" text='CLIENT CENTER '/>
                <NavLinkCreator to="/faq" text='FAQ '/>
                <NavLinkCreator to="/cart" text={"CART"} />
                <div className={classes.countOfProductInCart}>
                    product in cart :  {keys(addToCart).reduce(
                    (total , object) => (
                        total + (addToCart[object])
                    )
                    , 0)}
                </div>
                <NavLink to="/likedProduct">
                    <FavoriteIcon sx={{color: pink[500]}}/>
                </NavLink>
                <span>{likeCount.totalLiked === 0 ? "" : likeCount.totalLiked}</span>
            </div>
        </div>
    )
}
export default HeaderMenu