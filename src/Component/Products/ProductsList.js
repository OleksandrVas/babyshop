import React from "react";
import {Grid} from "@mui/material";
import ProductsListItem from "./ProductsListItem/ProductsListItem";
import productsArray from "./ProductsArray";
import HeadLine from "../HeadLine/HeadLine";
import GridComponent from "../Grid/GridComponent";
import ButtonToShop from "../ButtonToShop/ButtonToShop";
import classes from "../Main/ProductsShopList/ProductsShopCatalog.module.css";


const ProductsList = ({addLikeCount}) => {

    return (
        <>
                <HeadLine headLine="Product's Catalog"/>
                <GridComponent>
                    {productsArray.map(({nameOfProduct, src, price, id , categories}) =>
                        <Grid item xs={4} key={id} className={classes.gridItemForProductList} >
                            <ProductsListItem id={id} src={src} price={price} nameOfProduct={nameOfProduct}
                                              addLikeCount={addLikeCount} />
                        </Grid>)}
                </GridComponent>
                <ButtonToShop/>
        </>
    )
}
export default ProductsList