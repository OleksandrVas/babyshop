import {omit} from "lodash";


const productListReducer = (state = {
    1 : 2 ,
    3 : 4
} , action) => {
    switch (action.type) {
        case "ADD_TO_CART" : {
          return {
              ...state ,
              [action.id] : (state[action.id] || 0 ) + action.count
          }
        }
        case "REMOVE_FROM_CART" : {
            return  omit(state , [action.id])
        }
        case "CHANGE_PRODUCT_QUANTITY" : {
            return {
                ...state ,
                [action.id] :  action.count
            }
        }
        case "CLEAR_ALL_CART" : {
            return  state = {}
        }
        default :
            return state
    }
}

export default productListReducer