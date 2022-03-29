import React from "react";
import classes from "./Header.module.css"
import '../../App.css'
import NavLinkCreator from "../NavLinkCreator/NavLinkCreator";
import {pink} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import sumReduce from "../sumReduce /sumRedcue";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {Button} from "@mui/material";

const HeaderMenu = ({likeCount = 0, clearCart, productsInCart, isLogin}) => {
    return (
        <div className='container'>
            <div className={classes.rowForMenu}>
                <NavLinkCreator to="/" text='HOME'/>
                <NavLinkCreator to="/shop" text='OUR PRODUCTS '/>
                <NavLinkCreator to="/about" text='ABOUT US '/>
                <NavLinkCreator to="/comments" text='BLOG'/>
                <NavLinkCreator to="/client" text='CLIENT CENTER '/>
                <NavLinkCreator to="/faq" text='FAQ '/>
                <NavLinkCreator to="/cart" text={"CART"}/>

                {isLogin && <>
                    <div className={classes.countOfProductInCart}>
                        product in cart : {sumReduce(productsInCart)}
                        <Button onClick={() => clearCart()}><RemoveShoppingCartIcon/></Button>
                    </div>
                    <NavLink to="/likedProduct">
                        <FavoriteIcon sx={{color: pink[500]}}/>
                    </NavLink>
                    <span>{sumReduce(likeCount)}</span>
                </>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.cartProductList,
    likeCount: state.productsLikeState,
})
const mapDispatchToProps = (dispatch) => ({
    clearCart: () => dispatch({type: "CLEAR_ALL_CART"})
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)