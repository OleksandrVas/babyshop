
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

const defaultState = {
    products: [],
    isLoading: true ,
}

const allProductsReducers = (state = defaultState, acton) => {
    switch (acton.type) {
        case GET_ALL_PRODUCTS : {
            return  {
                ...state  ,
                products : [...acton.payload],
                isLoading: false
            }
        }

        default :
            return state
    }
}


export const getAllProductsAction = (payload) => ({type : GET_ALL_PRODUCTS , payload})


export default allProductsReducers