
import React, {useState} from "react";
import {Button, Card, CardContent, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import classes from './ProductsListItem.module.css'
import {pink, grey} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import {isEmpty} from "lodash";

const ProductsListItem = ({nameOfProduct, onRemoveFromFavourite , onAddToLiked, src, price, onAddToCart, id, addToLiked, categories}) => {


    const onLikedProduct = () => {
        if(addToLiked[id] === undefined ){
            return () => onAddToLiked(id , true )
        } else if(addToLiked[id] === true) {
            return () => onAddToLiked(id , false )
        }
        return () => onAddToLiked(id , true )
    }

    console.log(addToLiked)

    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div className={classes.productImage}>
                            <img src={src}/>
                        </div>
                        <div className={classes.nameOfProduct}>
                            <h3><NavLink to={`/product/${id}`}>{nameOfProduct}</NavLink></h3>
                            <h3>{categories}</h3>  {/*to link*/}
                        </div>
                        <div className={classes.priceOfProduct}> price : <span>{price} $ </span></div>
                        <div className={classes.addToCart}>
                            <Button variant="outlined" onClick={() => onAddToCart(id, 1)}>Add to cart</Button>
                        </div>
                        <div className={classes.positionOfLike}>
                            <IconButton aria-label="add to favorites" onClick={onLikedProduct()}>
                                {addToLiked[id] === undefined &&  <FavoriteIcon sx={{color: grey[600]}}/> }
                                { addToLiked[id] === true && <FavoriteIcon sx={{color: pink[500]}} />  }
                                { addToLiked[id] === false && <FavoriteIcon sx={{color: grey[600]}} />  }
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon/>
                            </IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductsListItem