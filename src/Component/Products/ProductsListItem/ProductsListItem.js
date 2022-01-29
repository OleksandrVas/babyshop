import React, {useState} from "react";
import {Button, Card, CardContent, IconButton, SvgIcon} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import classes from './ProductsListItem.module.css'
import {pink ,grey } from "@mui/material/colors";


const ProductsListItem = ({nameOfProduct, src, price  , setLikeCount , likeCount}) => {
    const [liked, setLiked] = useState(false)

    const setLikeCountToState = () => {
        const currentLike = likeCount.totalLiked + (liked ? -1 : +1 )
        return setLikeCount({
            totalLiked : currentLike
        })
    }

    const onLiked = () => {
        return setLiked(!liked) , setLikeCountToState()
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div >
                        <div className={classes.productImage}>
                            <img src={src}/>
                        </div>
                        <div className={classes.nameOfProduct}>
                            <h3>{nameOfProduct}</h3>
                        </div>
                        <div className={classes.priceOfProduct}> price : <span>{price} $ </span> </div>
                        <div className={classes.addToCart}  >
                            <Button variant="outlined" >Add to cart</Button>
                        </div>
                        <div className={classes.positionOfLike}>
                            <IconButton aria-label="add to favorites" onClick={onLiked}>
                                <FavoriteIcon  sx={liked ? {color: pink[500]} : {color : grey[600] } }/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductsListItem