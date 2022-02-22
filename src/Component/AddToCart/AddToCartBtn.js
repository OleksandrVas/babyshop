import React from "react"
import classes from "../Products/ProductsListItem/ProductsListItem.module.css";
import {Button} from "@mui/material";

const AddToCartBtn = ({onAddToCart, id}) => {
  return (
      <>
          <div className={classes.addToCart}>
              <Button variant={"text"} className={classes.addToCartBTN} onClick={() => onAddToCart(id, 1)}>Add to cart</Button>
          </div>
      </>
  )
}


export default AddToCartBtn