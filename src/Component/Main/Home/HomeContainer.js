import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";

const HomeContainer = ({likeCount, products  }) => {


    return (
        <div>
            <Home likeCount={likeCount} products={products}/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    likeCount: state.productsLikeState,
    products: state.allProducts.products
})


export default connect(mapStateToProps)(HomeContainer);