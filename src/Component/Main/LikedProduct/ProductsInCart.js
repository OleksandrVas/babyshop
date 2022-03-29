import React from "react";
import GridComponent from "../../Grid/GridComponent";
import {Container} from "@mui/material";
import {isEmpty, keys} from "lodash";
import classes from "./LikedProudcts.module.css"
import ProductInCard from "./ProductInCard";
import ButtonToShop from "../../ButtonToShop/ButtonToShop";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {productObject} from "../../Products/ProductsArray";

const ProductsInCart = ({changeProductQuantity, onRemoveFromCart, productInCart, products}) => {

    return (
        <>
            <div className={classes.box}>
                <div className="container">
                    <div className={classes.wrapper}>
                        {isEmpty(productInCart) && <div>
                            <GridComponent>
                                <h1>Your Cart is Empty now</h1>
                                <div className={classes.sadSmile}><SentimentVeryDissatisfiedIcon/></div>
                            </GridComponent>
                            <ButtonToShop/>

                        </div>}
                        <Container maxWidth="lg">
                            <GridComponent>
                                {keys(productInCart).map(id =>
                                    <ProductInCard products={products}
                                                   changeProductQuantity={changeProductQuantity}
                                                   productInCart={productInCart}
                                                   onRemoveFromCart={onRemoveFromCart} id={id} key={id}/>
                                )}
                            </GridComponent>
                            {!isEmpty(productInCart) && <div>
                                Total Price : {keys(productInCart).reduce(
                                (total, object) => (
                                    total + (productObject(products)[object].price * productInCart[object])
                                )
                                , 0)} $
                            </div>}
                        </Container>
                    </div>

                </div>
            </div>
        </>
    )
}




export default ProductsInCart