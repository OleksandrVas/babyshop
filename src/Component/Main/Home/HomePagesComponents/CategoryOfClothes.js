import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from './CategoryOfClothes.module.css'
import {categoryArray} from "../../../../assets/category";

const CategoryOfClothes = () => {
    return (
        <>
            <div className={classes.container}>
                {categoryArray.map(({category, to , id   }) =>
                    <Link to={to} className={classes.clothesLink}>{category}</Link> )}
            </div>
        </>
    )
}
export default CategoryOfClothes