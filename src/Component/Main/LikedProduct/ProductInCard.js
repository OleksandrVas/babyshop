import React, {useState} from "react"
import {Button, Grid, TextField} from "@mui/material";
import classes from "./LikedProudcts.module.css";
import productsArray from "../../Products/ProductsArray";
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from "../../Quantity/Quantity";


const likerProduct = productsArray.reduce(
    (obj, products) => ({
        ...obj,
        [products.id]: products
    }), {})


const ProductInCard = ({id, quantity, onRemoveFromCart}) => {

    const [count, setCount] = useState(1)

    return (
        <Grid item xs={6}>
            <div className={classes.textStyle}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={likerProduct[id].src}/>
                </div>
                <div className={classes.containerForDescription}>
                    <h2>{likerProduct[id].nameOfProduct}</h2>
                    <h4>price : {likerProduct[id].price} $</h4>
                    <h4>age : {likerProduct[id].age} years</h4>
                    <h5>for : {likerProduct[id].gender} </h5>
                   </div>
            </div>

            <div className={classes.toCenter}>
                    <Quantity count={count} id={likerProduct[id].id} onRemoveFromCart={onRemoveFromCart}
                              onIncrementButtonClick={() => quantity(likerProduct[id].id, setCount(count + 1))}
                              onDecrementButtonClick={() => quantity(likerProduct[id].id, setCount(count - 1))}/>
                    <Button><DeleteIcon onClick={() => onRemoveFromCart(likerProduct[id].id)}/></Button>
            </div>
        </Grid>
    )
}

export default ProductInCard