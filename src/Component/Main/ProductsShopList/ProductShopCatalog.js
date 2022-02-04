import React, {useState} from "react";
import classes from "./ProductsShopCatalog.module.css"
import GridComponent from "../../Grid/GridComponent";
import productsArray from "../../Products/ProductsArray";
import {Grid} from "@mui/material";
import ProductsListItem from "../../Products/ProductsListItem/ProductsListItem";
import Paginator from "../../Pagination/Pagination";


const ProductShopCatalog = ({onAddToCart, addLikeCount}) => {

    const [filterCount, setFilterCount] = useState(5)


    const onSetFilterCountBy = (count) => {
        return setFilterCount(count)
    }

    return (
        <>
            <div className={"colXs9"}>
                <div className={classes.filterHeader}>
                    <div className={classes.colXs6}>
                        <div>Result of filter</div>
                    </div>
                    <div className={classes.colXs6}>
                        <div className={classes.filterByCount}>
                            <div>Show : </div>
                            <div>4</div>
                            <div>8</div>
                            <div>12</div>
                            <div>Row : </div>
                            <div onClick={ () =>  onSetFilterCountBy(6)}>2</div>
                            <div onClick={ () =>  onSetFilterCountBy(5)}>3</div>
                            <div onClick={ () =>  onSetFilterCountBy(4)}>4</div>
                        </div>
                    </div>
                </div>
                <div>
                    <GridComponent>
                        {productsArray.map(({nameOfProduct, src, price, id}) =>
                            <Grid item xs={filterCount} key={id}>
                                <ProductsListItem id={id} onAddToCart={onAddToCart}
                                                  src={src} price={price}
                                                  nameOfProduct={nameOfProduct}
                                                  addLikeCount={addLikeCount}/>
                            </Grid>)}
                    </GridComponent>
                </div>
                <div className={classes.paginator}>
                    <Paginator/>
                </div>
            </div>
        </>
    )
}
export default ProductShopCatalog