import React, {useEffect, useState} from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import {connect, useDispatch} from "react-redux";
import {fetchProducts} from "./asyncAction/products";
import Preloader from "./Component/Preloader/Preloader";

const App = ({ isLoading}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (isLoading) {
        return <Preloader/>
    }
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )

}

const mapStateToProps = (state) => ({
    isLoading: state.allProducts.isLoading,
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(App);
