const defaultState = {
    customer: [],
    isLoading : true
}
const ADD_CUSTOMER = "ADD_CUSTOMER"
const DELETE_CUSTOMER = "DELETE_CUSTOMER"
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"
const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMER : {
            return {
                ...state,
                customer: [...state.customer , ...action.payload] ,
                isLoading: false ,
            }
        }
        case ADD_CUSTOMER : {
            return {...state, customer: [...state.customer, action.payload]}
        }
        case DELETE_CUSTOMER : {
            return {...state, customer: state.customer.filter(customer => customer.id !== action.payload)}
        }
        default :
            return state
    }
};

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: DELETE_CUSTOMER, payload})
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload})


export default customerReducer