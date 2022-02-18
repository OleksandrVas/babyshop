import React, {useState} from "react"
import {Button, Grid, TextField} from "@mui/material";
import classes from "./LikedProudcts.module.css";
import productsArray, {productObject} from "../../Products/ProductsArray";
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from "../../Quantity/Quantity";


const ProductInCard = ({id, quantity, addToCart, onRemoveFromCart}) => {


    return (
        <Grid item xs={6}>
            <div className={classes.textStyle}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={productObject(productsArray)[id].src}/>
                </div>
                <div className={classes.containerForDescription}>
                    <h2>{productObject(productsArray)[id].nameOfProduct}</h2>
                    <h4>price : {productObject(productsArray)[id].price} $</h4>
                    <h4>age : {productObject(productsArray)[id].age} years</h4>
                    <h4>for : {productObject(productsArray)[id].gender} </h4>
                    <h4>Current price : {productObject(productsArray)[id].price * addToCart[id] } $ </h4>

                </div>
            </div>

            <div className={classes.toCenter}>
                <Quantity count={addToCart[id]} id={productObject(productsArray)[id].id} onRemoveFromCart={onRemoveFromCart}
                          onIncrementButtonClick={() => quantity(productObject(productsArray)[id].id, addToCart[id] + 1)}
                          onDecrementButtonClick={() => quantity(productObject(productsArray)[id].id, addToCart[id] - 1)}/>

                <Button><DeleteIcon onClick={() => onRemoveFromCart(productObject(productsArray)[id].id)}/></Button>
            </div>
        </Grid>
    )
}

export default ProductInCard