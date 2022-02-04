import React, {useState} from "react";
import classes from "./ProductsShopCatalog.module.css"
import GridComponent from "../../Grid/GridComponent";
import productsArray from "../../Products/ProductsArray";
import {Grid} from "@mui/material";
import ProductsListItem from "../../Products/ProductsListItem/ProductsListItem";
import Paginator from "../../Pagination/Pagination";


const ProductShopCatalog = ({onAddToCart, addLikeCount}) => {

    const [filterCountInRow, setFilterCountInRow] = useState(5)

    const [filterCountInPage, setFilterCountInPage] = useState(8)
    const [a, b] = useState(false)

    const addMore = () => {
        return b(true)
    }

    const onSetFilterCountInRow = (count) => {
        return setFilterCountInRow(count)
    }

    const onSetFilterCountInPage = (count) => {
        return setFilterCountInPage(count)
    }

console.log(productsArray.slice(0, filterCountInPage))
    console.log(productsArray.slice(filterCountInPage, (filterCountInPage+filterCountInPage)))

    return (
        <>
            <div className={"colXs9"}>
                <div className={classes.filterHeader}>
                    <div className={classes.colXs6}>
                        <div>Result of filter</div>
                    </div>
                    <div className={classes.colXs6}>
                        <div className={classes.filterByCount}>
                            <div>Show :</div>
                            <div onClick={() => onSetFilterCountInPage(3)}>3</div>
                            <div onClick={() => onSetFilterCountInPage(6)}>6</div>
                            <div onClick={() => onSetFilterCountInPage(8)}>8</div>
                            <div>Row :</div>
                            <div onClick={() => onSetFilterCountInRow(6)}>2</div>
                            <div onClick={() => onSetFilterCountInRow(5)}>3</div>
                            <div onClick={() => onSetFilterCountInRow(4)}>4</div>
                        </div>
                    </div>
                </div>
                <div>
                    <GridComponent>
                        {productsArray.slice(0, filterCountInPage).map(({nameOfProduct, src, price, id}) =>
                            <Grid item xs={filterCountInRow} key={id}>
                                <ProductsListItem id={id} onAddToCart={onAddToCart}
                                                  src={src} price={price}
                                                  nameOfProduct={nameOfProduct}
                                                  addLikeCount={addLikeCount}/>
                            </Grid>)}
                        {a && productsArray.slice(filterCountInPage, (filterCountInPage+filterCountInPage) ).map(({
                                                                                                    nameOfProduct,
                                                                                                    src,
                                                                                                    price,
                                                                                                    id
                                                                                                }) =>
                            <Grid item xs={filterCountInRow} key={id}>
                                <ProductsListItem id={id} onAddToCart={onAddToCart}
                                                  src={src} price={price}
                                                  nameOfProduct={nameOfProduct}
                                                  addLikeCount={addLikeCount}/>
                            </Grid>)}
                    </GridComponent>
                    <button onClick={addMore}>more</button>


                </div>
                {productsArray.length > filterCountInPage &&
                <div className={classes.paginator}>
                    <Paginator/>
                </div>
                }
            </div>
        </>
    )
}
export default ProductShopCatalog