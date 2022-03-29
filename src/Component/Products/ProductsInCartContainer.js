import React from 'react';
import ProductsInCart from "../Main/LikedProduct/ProductsInCart";
import {connect} from "react-redux";

const ProductsInCartContainer = ({products, onRemoveFromCart, changeProductQuantity, productInCart}) => {


    return (
        <div>
            <ProductsInCart products={products}
                            changeProductQuantity={changeProductQuantity}
                            onRemoveFromCart={onRemoveFromCart}
                            productInCart={productInCart}
            />
        </div>
    );
};


const mapStateToProps = (state) => ({
    products: state.allProducts.products,
    productInCart: state.cartProductList

})

const mapDispatchToProps = (dispatch) => ({
    onRemoveFromCart: (id) => dispatch({type: "REMOVE_FROM_CART", id}),
    changeProductQuantity: (id, count) => dispatch({type: "CHANGE_PRODUCT_QUANTITY", id, count})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInCartContainer);