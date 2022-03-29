import React from "react";
import {productObject} from "../Products/ProductsArray";
import {NavLink} from "react-router-dom";
import HeadLine from "../HeadLine/HeadLine";
import classes from "./DynamicPage.module.css"
import SelectForAge from "./SelectComponent/SelectForAge";
import {Button} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AddToCartBtn from "../AddToCart/AddToCartBtn";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const DynamicPage = ({
                         addToLike,
                         isLikedProduct,
                         id,
                         removeFromLike,
                         onAddToProduct,
                         productsArray,
                         allAge,
                         allGender
                     }) => {


    console.log(productsArray)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={classes.colXs6}>

                        <HeadLine headLine={productObject(productsArray)[id].nameOfProduct}/>
                        <div className={classes.descriptionContainer}>
                            <h2>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend
                                justo vel bibendum sapien.</h2>
                            <ul>
                                <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
                                <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
                                <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
                                <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
                            </ul>
                            <h3>Composition: Main material: 95% Cotton, 5% Polyester</h3>
                        </div>
                        <div className={classes.price}>
                            Price : <span>{productObject(productsArray)[id].price}</span>
                        </div>
                        <div className={classes.selectCategory}>
                            <div className={classes.selectorForAge}>
                                <SelectForAge array={allAge} type={'Age'}/>
                            </div>
                            <div className={classes.selectorForGender}>
                                <SelectForAge array={allGender} type={'Gender'}/>
                            </div>

                        </div>

                    </div>
                    <div className={classes.colXs6}>
                        <div className={classes.imageToCenter}>
                            <img className={classes.image} src={productObject(productsArray)[id].src}/>
                        </div>
                        <div className={classes.showBtn}>
                            <div className={classes.toRowLike}>
                                <div className={classes.doYouLike}>Do You Like this Product ? {isLikedProduct[id] &&
                                <span><SentimentVerySatisfiedIcon/></span>}
                                    {isLikedProduct[id] === false &&
                                    <span><SentimentVeryDissatisfiedIcon/></span>}</div>
                                <Button onClick={() => addToLike(id)}><ThumbUpIcon/></Button>
                                <NavLink to="/shop" className={classes.nonDecoration}><Button
                                    onClick={() => removeFromLike(id)}> <ThumbDownAltIcon/> </Button></NavLink>

                            </div>
                            <div>{isLikedProduct[id] ?
                                <NavLink to="/cart" className={classes.nonDecoration}>
                                    <AddToCartBtn onAddToCart={onAddToProduct} id={id}/>
                                </NavLink> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DynamicPage