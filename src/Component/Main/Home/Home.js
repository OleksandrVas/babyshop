import React from "react";
import classes from './Home.module.css'
import "../../../App.css"
import NameOfTrend from "./HomePagesComponents/NameOfTrend";
import CategoryOfClothes from "./HomePagesComponents/CategoryOfClothes";
import ProductsCatalog from "./HomePagesComponents/ProductsCatalog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import {NavLink} from "react-router-dom";

const Home = ({likeCount , addLikeCount  }) => {

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.likeCount}>
                    <div className={classes.containerForLikeCount}>
                        <NavLink to="/liked" >
                            <FavoriteIcon  sx={{color: pink[500]} }/>
                        </NavLink>
                        <span>{likeCount.totalLiked ===0 ? "" : likeCount.totalLiked}</span>
                    </div>
                </div>
                <NameOfTrend/>
                <CategoryOfClothes />
                <ProductsCatalog  likeCount={likeCount} addLikeCount={addLikeCount}   />
            </div>

        </>
    )
}
export default Home