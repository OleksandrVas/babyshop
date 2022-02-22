import React from "react"
import classes from "./ProductsShopCatalog.module.css";

const FilterByCount = ({onSetFilterCountInPage , onSetFilterCountInRow }) => {
    return(
        <>
            <div className={classes.colXs6}>
                <div className={classes.filterByCount}>
                    <div>Show :</div>
                    <div onClick={() => onSetFilterCountInPage(3)}>3</div>
                    <div onClick={() => onSetFilterCountInPage(6)}>6</div>
                    <div onClick={() => onSetFilterCountInPage(8)}>8</div>
                </div>
            </div>
        </>
    )
}
export default FilterByCount