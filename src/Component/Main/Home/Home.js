import React from "react";
import classes from './Home.module.css'
import "../../../App.css"
import NameOfTrend from "./HomePagesComponents/NameOfTrend";
import CategoryOfClothes from "./HomePagesComponents/CategoryOfClothes";
import ProductsCatalog from "./HomePagesComponents/ProductsCatalog";

const Home = () => {

    return (
        <>
            <div className={classes.homePage}>
                <NameOfTrend/>
                <CategoryOfClothes />
                <ProductsCatalog/>
            </div>

        </>
    )
}
export default Home