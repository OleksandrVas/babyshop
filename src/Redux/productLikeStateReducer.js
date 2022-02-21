const productLikeStateReducer = (state = {
    1 : true ,
    2 : true
}, action) => {
    switch (action.type) {
        case "ADD_LIKE" : {
            return {
                ...state,
                [action.id] : true
            }
        }
        case "REMOVE_FROM_LIKE" : {
            return {
                ...state,
                [action.id] : false
            }
        }
        default : {
            return state
        }
    }
}

export default productLikeStateReducer