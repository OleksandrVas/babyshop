import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from './CategoryOfClothes.module.css'
import {categoryArray} from "../../../../assets/category";

const CategoryOfClothes = () => {
    return (
        <>
            <div className={classes.container}>
                {categoryArray.map(({category, id   }) =>
                    <Link to="/shop" key={id } className={classes.clothesLink}>{category}</Link> )}
            </div>
        </>
    )
}
export default CategoryOfClothes