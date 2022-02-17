import React from "react";
import productsArray, {productObject} from "../Products/ProductsArray";
import {useParams} from "react-router-dom";
import HeadLine from "../HeadLine/HeadLine";
import classes from "./DynamicPage.module.css"
import SelectForAge from "./SelectComponent/SelectForAge";

const allAge = [...new Set(productsArray.map(item => item.age))]
const allGender = [...new Set(productsArray.map(item => item.gender))]

const DynamicPage = () => {
    let {id} = useParams()
    const description = () => {
        return {__html : productObject(productsArray)[id].description}
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={classes.colXs6}>
                        <HeadLine headLine={productObject(productsArray)[id].nameOfProduct}/>
                        <div dangerouslySetInnerHTML={description()} className={classes.dynamicDescription}></div>
                        <div className={classes.price}>Price : <span>{productObject(productsArray)[id].price}</span> $ </div>
                    <div className={classes.selectorForAge}><SelectForAge array={allAge} type={'Age'} /></div>
                    <div className={classes.selectorForGender}><SelectForAge array={allGender} type={'Gender'} /></div>
                    </div>
                    <div className={classes.colXs6}>
                        <div className={classes.imageToCenter}>
                            <img className={classes.image} src={productObject(productsArray)[id].src}/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default DynamicPage