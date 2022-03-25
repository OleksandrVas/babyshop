import {combineReducers} from "redux";
import productListReducer from "./productListReducer";
import productLikeStateReducer from "./productLikeStateReducer";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";
import allProductsReducers from "./allProductsReducers";


const rootReducer = combineReducers({
        cartProductList: productListReducer,
        productsLikeState: productLikeStateReducer,
        allProducts: allProductsReducers
        // cashProducts : cashReducer,
        // customer : customerReducer,

    }
)

export default rootReducer