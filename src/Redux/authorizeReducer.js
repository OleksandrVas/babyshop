const ON_LOG_IN = "ON_LOG_IN"
const ON_LOG_OUT = "ON_LOG_OUT"
const ON_LOG_IN_ADMIN = "ON_LOG_IN_ADMIN"
const ON_LOG_OUT_ADMIN = "ON_LOG_OUT_ADMIN"


const defaultStatus = {
    isAuth: false,
    isAdmin: false,
    userAdmin: {
        name: "admin",
        password: "admin"
    },

}


const authorizeReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case ON_LOG_IN  : {
            return {
                ...state,
                isAuth: true,
                // user: action.payload
            }
        }
        case ON_LOG_OUT : {
            return {
                ...state,
                isAuth: false,
                // user : {}
            }
        }
        case ON_LOG_IN_ADMIN : {
            return {
                ...state,
                isAdmin: true
            }
        }
        case ON_LOG_OUT_ADMIN : {
            return {
                ...state,
                isAdmin: false
            }
        }
        default :
            return state
    }
}

export const onLogIn = () => ({type: ON_LOG_IN})
export const onLogOut = () => ({type: ON_LOG_OUT})
export const onLogInAdmin = () => ({type: ON_LOG_IN_ADMIN})
export const onLogOutAdmin = () => ({type: ON_LOG_OUT_ADMIN})


export default authorizeReducer