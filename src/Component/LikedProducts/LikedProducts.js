import React from "react"
import {Container, Grid} from "@mui/material";
import {keys} from "lodash";
import LikedProductCart from "./LikedProductCart";
import GridComponent from "../Grid/GridComponent";
import {connect} from "react-redux";


const LikedProducts = ({likedProducts  , removeFromLikedProducts}) => {


    return (
        <>
            <Container maxWidth="lg">
                <GridComponent>
                    <h1>Your Liked Products</h1>
                </GridComponent>
                <Grid container columns={16} spacing={3} >
                    {keys(likedProducts).map(
                        id => <LikedProductCart  removeFromLikedProducts={removeFromLikedProducts} likedProducts={likedProducts} key={id} id={id} />
                    )}
                </Grid>

            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    likedProducts : state.productsLikeState
})
const mapDispatchToProps = (dispatch) =>({
    removeFromLikedProducts : (id) => dispatch({type : "REMOVE_FROM_LIKE" , id })
})


export default connect(mapStateToProps , mapDispatchToProps)(LikedProducts)