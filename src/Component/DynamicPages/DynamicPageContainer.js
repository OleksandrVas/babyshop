import React from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import DynamicPage from "./DynamicPage";


const DynamicPageContainer = ({addToLike, isLikedProduct, removeFromLike, onAddToProduct, products }) => {
    let {id} = useParams()
    const productsArray = products
    const allAge = [...new Set(productsArray.map(item => item.age))]
    const allGender = [...new Set(productsArray.map(item => item.gender))]

    return (
        <>
            <DynamicPage productsArray={productsArray}
                         id={id}
                         allAge={allAge}
                         allGender={allGender}
                         onAddToProduct={onAddToProduct}
                         removeFromLike={removeFromLike}
                         isLikedProduct={isLikedProduct}
                         addToLike={addToLike}
            />
        </>
    )
}


const mapStateToProps = (state) => ({
    isLikedProduct: state.productsLikeState,
    products: state.allProducts.products
})

const mapDispatchToProps = (dispatch) => ({
    addToLike: (id) => dispatch({type: "ADD_LIKE", id}),
    removeFromLike: (id) => dispatch({type: "REMOVE_FROM_LIKE", id}),
    onAddToProduct: (id, count) => dispatch({type: "ADD_TO_CART", id, count})
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicPageContainer)