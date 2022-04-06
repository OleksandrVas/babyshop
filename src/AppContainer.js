import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import Preloader from "./Component/Preloader/Preloader";
import {fetchActionCreator} from "./asyncAction/fetchActionCreator";
import {commentsAPI, productsAPI, usersAPI} from "./API/API";
import {getAllProductsAction} from "./Redux/allProductsReducers";
import {setPosts, setUsers} from "./Redux/blogReducer";
import App from "./App";
import {onLogInAdmin, onLogOutAdmin} from "./Redux/authorizeReducer";


const AppContainer = ({isLoading, onLogInAdmin, isAdmin, onLogOutAdmin}) => {
    const [isLogin, setIsLogin] = useState(false)
    const checkIsLogin = localStorage.getItem("auth")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActionCreator(productsAPI, getAllProductsAction))
        dispatch(fetchActionCreator(commentsAPI, setPosts))
        dispatch(fetchActionCreator(usersAPI, setUsers))
    }, [])


    useEffect(() => {
        if (checkIsLogin) {
            return setIsLogin(true)

        }
        return setIsLogin(false)

    }, [checkIsLogin])


    useEffect(() => {
        const isAdminLogin = () => {
            if (isAdmin === true) {
               return  localStorage.removeItem("auth")
            }
        }
        return () => isAdminLogin()
    } )




    if (isLoading) {
        return <Preloader/>
    }
    return (
        <App isLogin={isLogin}
             isLoading={isLoading}
        />
    )

}

const mapStateToProps = (state) => ({
    isLoading: state.allProducts.isLoading,
    userAuth: state.authReduce,
    isAdmin: state.authReduce.isAdmin
})


export default connect(mapStateToProps, {onLogInAdmin, onLogOutAdmin})(AppContainer);
