import React, {useState} from "react";
import GridComponent from "../../Grid/GridComponent";
import {Container} from "@mui/material";
import {isEmpty, keys} from "lodash";
import classes from "./LikedProudcts.module.css"
import ProductInCard from "./ProductInCard";
import ButtonToShop from "../../ButtonToShop/ButtonToShop";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import productsArray, {productObject} from "../../Products/ProductsArray";
import {connect} from "react-redux";

const ProductsInCart = ({ changeProductQuantity , onRemoveFromCart , productInCart }) => {
     return (
        <>
            <div className="container">
                <div className={classes.wrapper}>
                    {isEmpty(productInCart) && <div className={classes.containerForEmpty}>
                        <GridComponent>
                            <h1>Your Cart is Empty now</h1>
                            <div className={classes.sadSmile}><SentimentVeryDissatisfiedIcon/></div>
                        </GridComponent>
                        <ButtonToShop/>

                    </div>}
                    <Container maxWidth="lg">
                        <GridComponent>
                            {keys(productInCart).map(id =>
                                <ProductInCard  changeProductQuantity={changeProductQuantity}
                                                productInCart={productInCart}
                                                onRemoveFromCart={onRemoveFromCart} id={id} key={id}/>
                            )}
                        </GridComponent>
                        {!isEmpty(productInCart) && <div>
                            Total Price : {keys(productInCart).reduce(
                            (total , object) =>(
                                total  + (productObject(productsArray)[object].price * productInCart[object]  )
                            )
                            ,0)} $
                        </div>}
                    </Container>
                </div>

            </div>


        </>
    )
}


const mapStateToProps = (state  ) => ({
    productInCart : state.cartProductList
})

const mapDispatchToProps = (dispatch) => ({
    onRemoveFromCart : (id) => dispatch({type : "REMOVE_FROM_CART" , id }),
    changeProductQuantity : (id, count ) => dispatch({type : "CHANGE_PRODUCT_QUANTITY" , id , count  })
})

export default connect(mapStateToProps , mapDispatchToProps )(ProductsInCart)