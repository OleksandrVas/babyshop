import React from "react"
import {connect} from "react-redux";
import LikedProducts from "./LikedProducts";


const LikedProductsContainer = ({likedProducts, removeFromLikedProducts, products}) => {

    return (
        <LikedProducts likedProducts={likedProducts}
                       removeFromLikedProducts={removeFromLikedProducts}
                       products={products}/>
    )
}

const mapStateToProps = (state) => ({
    likedProducts: state.productsLikeState,
    products: state.allProducts.products

})
const mapDispatchToProps = (dispatch) => ({
    removeFromLikedProducts: (id) => dispatch({type: "REMOVE_FROM_LIKE", id})
})


export default connect(mapStateToProps, mapDispatchToProps)(LikedProductsContainer)