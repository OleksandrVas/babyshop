import React from "react";
import classes from './Home.module.css'
import "../../../App.css"
import NameOfTrend from "./HomePagesComponents/NameOfTrend";
import CategoryOfClothes from "./HomePagesComponents/CategoryOfClothes";
import ProductsCatalog from "./HomePagesComponents/ProductsCatalog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import {NavLink} from "react-router-dom";

const Home = ({likeCount ,addToLiked, onAddToLiked, addLikeCount  , onAddToCart}) => {

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
                <ProductsCatalog  addToLiked={addToLiked} onAddToLiked={onAddToLiked} likeCount={likeCount} addLikeCount={addLikeCount}  onAddToCart={onAddToCart} />
            </div>

        </>
    )
}
export default Home