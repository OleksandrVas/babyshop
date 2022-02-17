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




const LikedProductCard = ({id , quantity , onRemoveFromCart}) => {

    const [count , setCount ] = useState(1)

debugger
return (
    <Grid item xs={4} >
        <div className={classes.textStyle}>
            <img className={classes.image} src={likerProduct[id].src}/>
            <div>{likerProduct[id].nameOfProduct}</div>
            <div>price : {likerProduct[id].price} $</div>
            <div>age : {likerProduct[id].age} years</div>
            <div>for : {likerProduct[id].gender} </div>
            <Quantity count={count} id={likerProduct[id].id}  onRemoveFromCart={onRemoveFromCart}
                      onIncrementButtonClick={ () => quantity(likerProduct[id].id , setCount(count + 1  ))}
                      onDecrementButtonClick={() => quantity(likerProduct[id].id , setCount(count - 1 ) )} />
        </div>
        <div className={classes.toCenter}>
            <Button variant="text"> Add to Cart </Button>
            <Button><DeleteIcon onClick={() => onRemoveFromCart(likerProduct[id].id)} /></Button>
        </div>
    </Grid>
)
}

export default LikedProductCard