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
                    <div>Row :</div>
                    <div onClick={() => onSetFilterCountInRow(6)}>2</div>
                    <div onClick={() => onSetFilterCountInRow(5)}>3</div>
                    <div onClick={() => onSetFilterCountInRow(4)}>4</div>
                </div>
            </div>
        </>
    )
}
export default FilterByCount