import {combineReducers} from "redux";
import productListReducer from "./productListReducer";
import productLikeStateReducer from "./productLikeStateReducer";


const rootReducer =  combineReducers({
    cartProductList :  productListReducer,
    productsLikeState :  productLikeStateReducer,
    }
)

export default rootReducer