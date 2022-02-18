import React from "react";
import classes from "../Products/ProductList.module.css";
import ButtonHome from "../ButtonArray/ButtonHome";

const ButtonToShop = () => {
  return (
      <>
          <div className={classes.buttonHome}>
              <ButtonHome text={"GO TO SHOP"} to="/shop"/>
          </div>
      </>
  )
}

export default ButtonToShop