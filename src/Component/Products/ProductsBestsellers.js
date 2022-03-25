import React from "react";
import HeadLine from "../HeadLine/HeadLine";
import GridComponent from "../Grid/GridComponent";
import {Grid} from "@mui/material";
import ProductsListItem from "./ProductsListItem/ProductsListItem";

const ProductsBestsellers = ({products}) => {
    const productsArray = products
    return (
        <>
            <div className="container">
                <HeadLine headLine="Our bestsellers"/>
                <GridComponent>
                    {productsArray.filter(item => item.type === "bestSeller")
                        .map(({src, price, nameOfProduct, id}) => <Grid item xs={4} key={id}>
                            <ProductsListItem src={src} price={price} nameOfProduct={nameOfProduct}/>
                        </Grid>)}
                </GridComponent>
            </div>
        </>
    )
}

export default ProductsBestsellers