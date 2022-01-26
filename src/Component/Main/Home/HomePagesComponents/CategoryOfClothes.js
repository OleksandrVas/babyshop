import React from "react";
import data from '../../../../assets/category.json'
import {NavLink} from "react-router-dom";
import classes from './CategoryOfClothes.module.css'
const CategoryOfClothes = () => {
    const category = Object.keys(data.category)
        .map(item => <NavLink className={classes.clothesLink} key={data.category[item].id} to={data.category[item].to}>{item}</NavLink> )

    return (
        <>
            <div className={classes.container}>
                {category}
            </div>
        </>
    )
}
export default CategoryOfClothes