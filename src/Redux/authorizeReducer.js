const ON_LOG_IN = "ON_LOG_IN"
const ON_LOG_OUT = "ON_LOG_OUT"

const defaultStatus = {
    isAuth: false,
    user : {}
}


const authorizeReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case ON_LOG_IN  : {
            return {
                ...state ,
                isAuth: true,
                // user: action.payload
            }
        }
        case ON_LOG_OUT : {
            return  {
                ...state ,
                isAuth: false ,
                // user : {}
            }
        }
        default :
            return state
    }
}

export const onLogIn = () => ({type: ON_LOG_IN})
export const onLogOut = () => ({type: ON_LOG_OUT})


export default authorizeReducer