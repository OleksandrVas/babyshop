import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import Preloader from "./Component/Preloader/Preloader";
import {onLogIn, onLogOut} from "./Redux/authorizeReducer";
import {fetchActionCreator} from "./asyncAction/fetchActionCreator";
import {commentsAPI, productsAPI, usersAPI} from "./API/API";
import {getAllProductsAction} from "./Redux/allProductsReducers";
import {setPosts, setUsers} from "./Redux/blogReducer";
import App from "./App";


const AppContainer = ({isLoading, onLogIn, onLogOut }) => {
    const [isLogin, setIsLogin] = useState(false)
    const checkIsLogin = localStorage.getItem("auth")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActionCreator(productsAPI, getAllProductsAction))
        dispatch(fetchActionCreator(commentsAPI, setPosts))
        dispatch(fetchActionCreator(usersAPI, setUsers))
    } , [])


    useEffect(() => {
        if (checkIsLogin) {
            return setIsLogin(true)
        }
        return setIsLogin(false)

    }, [checkIsLogin])


    if (isLoading) {
        return <Preloader/>
    }
    return (
        <App isLogin={isLogin}
             onLogOut={onLogOut}
             isLoading={isLoading}
             onLogIn={onLogIn}/>
    )

}

const mapStateToProps = (state) => ({
    isLoading: state.allProducts.isLoading,
    userAuth: state.authReduce

})


export default connect(mapStateToProps, {onLogIn, onLogOut })(AppContainer);
