import React from "react";
import {productObject} from "../Products/ProductsArray";
import {NavLink, useParams} from "react-router-dom";
import HeadLine from "../HeadLine/HeadLine";
import classes from "./DynamicPage.module.css"
import SelectForAge from "./SelectComponent/SelectForAge";
import {connect} from "react-redux";
import {Button} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AddToCartBtn from "../AddToCart/AddToCartBtn";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const DynamicPage = ({addToLike, isLikedProduct, removeFromLike, onAddToProduct, products}) => {
    let {id} = useParams()
    const productsArray = products
    const allAge = [...new Set(productsArray.map(item => item.age))]
    const allGender = [...new Set(productsArray.map(item => item.gender))]


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={classes.colXs6}>
                        <HeadLine headLine={productObject(productsArray)[id].nameOfProduct}/>
                        <div className={classes.price}>Price : <span>{productObject(productsArray)[id].price}</span> $
                        </div>
                        <div className={classes.selectCategory}>
                            <div className={classes.selectorForAge}><SelectForAge array={allAge} type={'Age'}/></div>
                            <div className={classes.selectorForGender}><SelectForAge array={allGender} type={'Gender'}/>
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


const mapStateToProps = (state) => ({
    isLikedProduct: state.productsLikeState,
    products: state.allProducts.products
})

const mapDispatchToProps = (dispatch) => ({
    addToLike: (id) => dispatch({type: "ADD_LIKE", id}),
    removeFromLike: (id) => dispatch({type: "REMOVE_FROM_LIKE", id}),
    onAddToProduct: (id, count) => dispatch({type: "ADD_TO_CART", id, count})
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicPage)