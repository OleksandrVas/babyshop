import {combineReducers} from "redux";
import productListReducer from "./productListReducer";
import productLikeStateReducer from "./productLikeStateReducer";
import allProductsReducers from "./allProductsReducers";
import authorizeReducer from "./authorizeReducer";
import {blogReducer} from "./blogReducer";


const rootReducer = combineReducers({
        cartProductList: productListReducer,
        productsLikeState: productLikeStateReducer,
        allProducts: allProductsReducers,
        authReduce: authorizeReducer,
        blog : blogReducer

    }
)

export default rootReducer