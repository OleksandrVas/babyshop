import React, {useEffect} from "react"
import {Container, Grid} from "@mui/material";
import { keys} from "lodash";
import LikedProductCart from "./LikedProductCart";
import GridComponent from "../../Grid/GridComponent";
import classes from "./LikedProduct.module.css"


const LikedProducts = ({likedProducts, removeFromLikedProducts , products}) => {

    return (
        <>
            <div className={classes.box}>
                <Container maxWidth="lg">
                    <GridComponent>
                        <h1>Your Liked Products</h1>

                    </GridComponent>
                    <Grid container columns={16} spacing={3}>
                        {
                            keys(likedProducts).map(
                                id => <LikedProductCart products={products}
                                                        likedProducts={likedProducts}
                                                        removeFromLikedProducts={removeFromLikedProducts}
                                                        key={id}
                                                        id={id}/>)
                        }
                    </Grid>
                </Container>
            </div>
        </>
    )
}



export default LikedProducts