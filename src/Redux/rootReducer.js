import {combineReducers} from "redux";
import productListReducer from "./productListReducer";
import productLikeStateReducer from "./productLikeStateReducer";
import allProductsReducers from "./allProductsReducers";
import authorizeReducer from "./authorizeReducer";


const rootReducer = combineReducers({
        cartProductList: productListReducer,
        productsLikeState: productLikeStateReducer,
        allProducts: allProductsReducers,
        authReduce: authorizeReducer,

    }
)

export default rootReducer