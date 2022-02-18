import React from "react"
import {Container, Grid} from "@mui/material";
import {keys} from "lodash";
import LikedProductCart from "./LikedProductCart";
import GridComponent from "../Grid/GridComponent";


const LikedProducts = ({addToLiked ,onRemoveFromFavourite}) => {


    return (
        <>
            <Container maxWidth="lg">
                <GridComponent>
                    <h1>Your Liked Products</h1>
                </GridComponent>
                <Grid container columns={16} spacing={3} >
                    {keys(addToLiked).map(
                        id => <LikedProductCart addToLiked={addToLiked} key={id} id={id} onRemoveFromFavourite={onRemoveFromFavourite}/>
                    )}
                </Grid>

            </Container>
        </>
    )
}

export default LikedProducts