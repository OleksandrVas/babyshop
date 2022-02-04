import React from "react";
import {Grid} from "@mui/material";
import ProductsListItem from "./ProductsListItem/ProductsListItem";
import productsArray from "./ProductsArray";
import ButtonHome from "../ButtonArray/ButtonHome";
import classes from "./ProductList.module.css"
import HeadLine from "../HeadLine/HeadLine";
import GridComponent from "../Grid/GridComponent";


const ProductsList = ({addLikeCount ,onAddToCart }) => {

    return (
        <>
            <HeadLine headLine="Product's Catalog"/>
            <GridComponent>
                {productsArray.map(({nameOfProduct, src, price, id}) =>
                    <Grid item xs={4} key={id}>
                        <ProductsListItem  id={id} onAddToCart={onAddToCart}  src={src} price={price} nameOfProduct={nameOfProduct} addLikeCount={addLikeCount} />
                    </Grid>)}
            </GridComponent>
            <div className={classes.buttonHome}>
                <ButtonHome text={"GO TO SHOP"} to="/shop"/>
            </div>
        </>
    )
}
export default ProductsList