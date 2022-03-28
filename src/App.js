import React, {useEffect, useState} from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import {connect, useDispatch} from "react-redux";
import {fetchProducts} from "./asyncAction/getAllProducts";
import Preloader from "./Component/Preloader/Preloader";
import {onLogIn, onLogOut} from "./Redux/authorizeReducer";

const App = ({isLoading,  onLogIn, onLogOut , }) => {
    const [isLogin, setIsLogin] = useState(false)

    const dispatch = useDispatch()
    const checkIsLogin = localStorage.getItem("auth")


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        if (checkIsLogin) {
            return setIsLogin(true)
        }
       return  setIsLogin(false)

    }, [checkIsLogin])


    if (isLoading) {
        return <Preloader/>
    }
    return (
        <>
            <Header isLogin={isLogin} onLogIn={onLogIn} onLogOut={onLogOut} />
            <Main isLogin={isLogin}/>
            <Footer/>
        </>
    )

}

const mapStateToProps = (state) => ({
    isLoading: state.allProducts.isLoading,
    userAuth: state.authReduce
})


export default connect(mapStateToProps, {onLogIn, onLogOut})(App);
