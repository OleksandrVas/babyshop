import React from "react"
import classes from "../Main/LikedProduct/LikedProudcts.module.css";
import {Button, TextField} from "@mui/material";

const Quantity = ({count ,  id ,onIncrementButtonClick , onDecrementButtonClick,  onRemoveFromCart  }) => {


    const removeFromCart= () => {
        if (count === 1 ){
            return onRemoveFromCart(id)
        }
        return onDecrementButtonClick()
    }

    return (
        <>
            <div className={classes.productCount}>
                <Button onClick={removeFromCart} disabled={count === 0} >-</Button>
                <TextField size="small" variant="outlined" value={count}/>
                <Button onClick={onIncrementButtonClick} disabled={count === 5}>+</Button>
            </div>
        </>
    )
}

export default Quantity