import React from "react";
import classes from './Home.module.css'
import "../../../App.css"
import NameOfTrend from "./HomePagesComponents/NameOfTrend";
import CategoryOfClothes from "./HomePagesComponents/CategoryOfClothes";
import ProductsCatalog from "./HomePagesComponents/ProductsCatalog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";

const Home = ({likeCount,setLikeCount}) => {

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.likeCount}>
                    <div className={classes.containerForLikeCount}>
                        <FavoriteIcon  sx={{color: pink[500]} }/> <span>{likeCount.totalLiked}</span>
                    </div>
                </div>
                <NameOfTrend/>
                <CategoryOfClothes />
                <ProductsCatalog likeCount={likeCount} setLikeCount={setLikeCount} />
            </div>

        </>
    )
}
export default Home