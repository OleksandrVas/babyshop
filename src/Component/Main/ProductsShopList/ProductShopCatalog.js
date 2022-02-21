import React, {useState} from "react";
import classes from "./ProductsShopCatalog.module.css"
import GridComponent from "../../Grid/GridComponent";
import {Grid} from "@mui/material";
import ProductsListItem from "../../Products/ProductsListItem/ProductsListItem";
import Paginator from "../../Pagination/Pagination";
import FilterByCount from "./FilterByCount";
import {connect} from "react-redux";


const ProductShopCatalog = ({ addLikeCount ,menuItems }) => {

    const [filterCountInRow, setFilterCountInRow] = useState(5)

    const [filterCountInPage, setFilterCountInPage] = useState(3)
    const [currentPageIndex, setCurrentPageIndex] = useState(1)

    const onSetFilterCountInRow = (count) => setFilterCountInRow(count)
    const onSetFilterCountInPage = (count) => setFilterCountInPage(count)


    const lastProduct = currentPageIndex * filterCountInPage
    const firstProductIndex = lastProduct - filterCountInPage
    const currentPage = menuItems.slice(firstProductIndex, lastProduct)


    const pagination = pageNumber => setCurrentPageIndex(pageNumber)


    return (
        <>
            <div className={"colXs9"}>
                <div className={classes.filterHeader}>
                    <div className={classes.colXs6}>
                        <div>Result of filter</div>
                    </div>
                    <FilterByCount onSetFilterCountInPage={onSetFilterCountInPage}
                                   onSetFilterCountInRow={onSetFilterCountInRow}/>
                </div>
                <div>
                    <GridComponent>
                        {currentPage.map(({nameOfProduct, src, price, id , categories}) =>
                            <Grid item xs={filterCountInRow} key={id}>
                                <ProductsListItem id={id}
                                                  src={src} price={price}
                                                  nameOfProduct={nameOfProduct}
                                                  addLikeCount={addLikeCount}
                                                  categories={categories}/>
                            </Grid>)}
                    </GridComponent>
                </div>
                {menuItems.length > filterCountInPage &&
                <div className={classes.paginator}>
                    <Paginator totalProducts={menuItems.length} productPerPage={filterCountInPage}
                               pagination={pagination}/>
                </div>
                }
            </div>
        </>
    )
}



export default connect( )(ProductShopCatalog)
