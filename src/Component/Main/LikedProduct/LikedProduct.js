import React, {useState} from "react";
import GridComponent from "../../Grid/GridComponent";
import { Container} from "@mui/material";
import {keys} from "lodash";
import classes from "./LikedProudcts.module.css"
import LikedProductCard from "./LikedProductCard";


const LikedProduct = ({addToCart , quantity, onRemoveFromCart}) => {

    return (
        <>
            <div className="container">
                <div className={classes.wrapper}>
                    <Container maxWidth="lg">
                        <GridComponent>
                            {keys(addToCart).map(id =>
                               <LikedProductCard quantity={quantity} onRemoveFromCart={onRemoveFromCart} id={id} key={id} />
                            )}
                        </GridComponent>
                    </Container>
                </div>

            </div>


        </>
    )
}

export default LikedProduct