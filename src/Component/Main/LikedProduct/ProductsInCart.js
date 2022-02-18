import React, {useState} from "react";
import GridComponent from "../../Grid/GridComponent";
import {Container} from "@mui/material";
import {isEmpty, keys} from "lodash";
import classes from "./LikedProudcts.module.css"
import ProductInCard from "./ProductInCard";
import ButtonToShop from "../../ButtonToShop/ButtonToShop";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import productsArray, {productObject} from "../../Products/ProductsArray";

const ProductsInCart = ({addToCart, quantity, onRemoveFromCart}) => {
    console.log(addToCart)
    return (
        <>
            <div className="container">
                <div className={classes.wrapper}>
                    {isEmpty(addToCart) && <div className={classes.containerForEmpty}>
                        <GridComponent>
                            <h1>Your Cart is Empty now</h1>
                            <div className={classes.sadSmile}><SentimentVeryDissatisfiedIcon/></div>
                        </GridComponent>
                        <ButtonToShop/>

                    </div>}
                    <Container maxWidth="lg">
                        <GridComponent>
                            {keys(addToCart).map(id =>
                                <ProductInCard addToCart={addToCart} quantity={quantity}
                                               onRemoveFromCart={onRemoveFromCart} id={id} key={id}/>
                            )}
                        </GridComponent>
                        {!isEmpty(addToCart) && <div>
                            Total Price : {keys(addToCart).reduce(
                            (total , object) =>(
                                total  + (productObject(productsArray)[object].price * addToCart[object]  )
                            )
                            ,0)} $
                        </div>}
                    </Container>
                </div>

            </div>


        </>
    )
}

export default ProductsInCart