import React from "react";
import {productObject} from "../ProductsArray";
import {Button, Grid} from "@mui/material";
import classes from "./LikedProduct.module.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import ButtonHome from "../../ButtonArray/ButtonHome";


const LikedProductCart = ({id, likedProducts, removeFromLikedProducts, products}) => {

    const productsArray = products
    const productObj = productObject(productsArray)[id]

    return (
        <>
            {likedProducts[id] && <Grid item xs={16}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.image} src={productObj.src}/>
                    </div>
                    <div className={classes.description}>
                        <h2>Product : {productObj.nameOfProduct}</h2>
                        <h3>Price : {productObj.price} $ </h3>
                        <h3>Categories : {productObj.categories} </h3>
                        <h3>For child {productObj.age} years old </h3>
                        <div className={classes.navigationToShop}>
                            <Button>
                                <FavoriteIcon onClick={() => removeFromLikedProducts(id)} sx={{color: pink[500]}}/>
                            </Button>
                            <div className={classes.buttonHome}>
                                <ButtonHome text={"GO TO SHOP"} to="/shop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>}
        </>
    )
}
export default LikedProductCart