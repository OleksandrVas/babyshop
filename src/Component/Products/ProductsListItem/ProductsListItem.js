import React from "react";
import {Button, Card, CardContent, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import classes from './ProductsListItem.module.css'
import {pink, grey} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import AddToCartBtn from "../../AddToCart/AddToCartBtn";

const ProductsListItem = ({
                              nameOfProduct,
                              onAddToCart,
                              onDislike,
                              onLikeProduct,
                              src,
                              price,
                              id,
                              isLiked = false,
                              categories
                          }) => {

    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div className={classes.productImage}>
                            <NavLink to={"/shop"}><img src={src} /></NavLink>
                            <div className={classes.positionOfLike}>
                                <IconButton aria-label="add to favorites"
                                            onClick={isLiked? () => onDislike(id) : () => onLikeProduct(id)}>
                                    <FavoriteIcon sx={isLiked ? {color: pink[500]} : {color: grey[600]}}/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.nameOfProduct}>
                            <h3><NavLink to={`/product/${id}`}>{nameOfProduct}</NavLink></h3>
                            <h3>{categories}</h3>  {/*to link*/}
                        </div>
                        <div className={classes.priceOfProduct}> <span>{price} $ </span></div>
                        <AddToCartBtn onAddToCart={onAddToCart} id={id} />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}


const mapStateToProps = (state, {id}) => ({
    isLiked: state.productsLikeState[id]

})
const mapDispatchToProps = (dispatch) => ({
    onAddToCart: (id, count) => dispatch({type: "ADD_TO_CART", id, count}),
    onLikeProduct: (id) => dispatch({type: "ADD_LIKE", id}),
    onDislike: (id) => dispatch({type: "REMOVE_FROM_LIKE", id}),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductsListItem)