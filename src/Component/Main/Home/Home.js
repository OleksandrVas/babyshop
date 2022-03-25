import React from "react";
import classes from './Home.module.css'
import "../../../App.css"
import NameOfTrend from "./HomePagesComponents/NameOfTrend";
import CategoryOfClothes from "./HomePagesComponents/CategoryOfClothes";
import ProductsCatalog from "./HomePagesComponents/ProductsCatalog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import sumReduce from "../../sumReduce /sumRedcue";

const Home = ({likeCount = 0, products}) => {

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.likeCount}>
                    <div className={classes.containerForLikeCount}>
                        <NavLink to="/likedProduct">
                            <FavoriteIcon sx={{color: pink[500]}}/>
                        </NavLink>
                        <span>{sumReduce(likeCount) === 0 ? "" : sumReduce(likeCount)}</span>
                    </div>
                </div>
                <NameOfTrend/>
                <CategoryOfClothes/>
                <ProductsCatalog likeCount={likeCount} products={products} />
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    likeCount: state.productsLikeState,
    products: state.allProducts.products
})


export default connect(mapStateToProps)(Home)